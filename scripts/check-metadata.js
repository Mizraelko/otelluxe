#!/usr/bin/env node

/**
 * Скрипт для проверки наличия метаданных (title и description) на всех страницах
 */

const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/app');
const pages = [];

// Функция для поиска всех page.tsx файлов
function findPages(dir, basePath = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      findPages(fullPath, relativePath);
    } else if (entry.name === 'page.tsx') {
      pages.push({
        path: relativePath.replace(/\\/g, '/'),
        fullPath,
      });
    }
  }
}

// Находим все страницы
findPages(pagesDir);

console.log('🔍 Проверка метаданных на страницах...\n');

let hasErrors = false;
const results = [];

for (const page of pages) {
  const content = fs.readFileSync(page.fullPath, 'utf-8');
  const route = '/' + page.path.replace('/page.tsx', '').replace('src/app', '').replace(/^\//, '') || '/';

  // Проверяем наличие экспорта metadata
  const hasMetadataExport = /export\s+(const|)\s+metadata\s*[:=]/.test(content);
  
  // Проверяем наличие title в metadata
  const hasTitle = /title\s*:/.test(content) || /buildPageMetadata/.test(content);
  
  // Проверяем наличие description в metadata
  const hasDescription = /description\s*:/.test(content) || /buildPageMetadata/.test(content);

  const status = hasMetadataExport && hasTitle && hasDescription ? '✅' : '❌';
  const issues = [];

  if (!hasMetadataExport) {
    issues.push('нет экспорта metadata');
    hasErrors = true;
  }
  if (!hasTitle) {
    issues.push('нет title');
    hasErrors = true;
  }
  if (!hasDescription) {
    issues.push('нет description');
    hasErrors = true;
  }

  results.push({
    route,
    status,
    issues: issues.length > 0 ? issues.join(', ') : 'OK',
    file: page.path,
  });
}

// Выводим результаты
results.forEach(({ route, status, issues, file }) => {
  console.log(`${status} ${route.padEnd(20)} ${issues}`);
});

console.log('\n' + '='.repeat(60));
if (hasErrors) {
  console.log('❌ Обнаружены проблемы с метаданными!');
  process.exit(1);
} else {
  console.log('✅ Все страницы имеют правильные метаданные (title и description)');
  process.exit(0);
}

