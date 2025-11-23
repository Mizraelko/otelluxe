/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    // Убираем внешние домены, используем только локальные изображения
    formats: ['image/webp', 'image/avif'],
    // Оптимизированные размеры для уменьшения размера бандла
    // Максимальный размер 828px достаточен для большинства экранов
    deviceSizes: [384, 640, 750, 828], // Убрали 1080 и 1200 - слишком большие для карточек
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Оптимизация для локальных изображений
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 дней кэш
    dangerouslyAllowSVG: false, // Отключаем SVG, используем только JPG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: false,
  // Оптимизация транспиляции для современных браузеров
  // Убираем полифиллы для ES2021/ES2022 функций (Array.at, Object.hasOwn и т.д.)
  compiler: {
    // SWC минификация уже включена по умолчанию в Next.js 14
    // Настройки браузеров через .browserslistrc
  },
  // Экспериментальные функции для оптимизации
  experimental: {
    // Используем современный JavaScript без транспиляции для современных браузеров
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig


