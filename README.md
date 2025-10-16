# Отель "Люкс" - Богородск

Современный веб-сайт для отеля "Люкс" в городе Богородск, Нижегородская область. Проект разработан с использованием Next.js 14, Material UI и React Yandex Maps.

🌐 **Сайт:** [hotelluxbg.ru](https://hotelluxbg.ru)  
📞 **Телефон:** +7 (987) 757-83-23  
📧 **Email:** luxgostevoidom@yandex.ru  
👥 **VK:** [vk.com/id412614778](https://vk.com/id412614778)

## 🚀 Технологии

- **Next.js 14** - React фреймворк с App Router
- **TypeScript** - Типизированный JavaScript
- **Material UI** - Библиотека компонентов (с поддержкой Next.js App Router)
- **@pbe/react-yandex-maps** - Интеграция Яндекс.Карт (совместимая с React 18)
- **next-sitemap** - Генерация sitemap для SEO

## 📋 Возможности

- ✅ Адаптивный дизайн для всех устройств
- ✅ SEO-оптимизация (метаданные, sitemap, robots.txt)
- ✅ Страницы: Главная, Номера, Услуги, Контакты, Бронирование
- ✅ Интерактивная карта Яндекс для поиска отеля
- ✅ Современный UI с Material Design
- ✅ TypeScript для надежности кода

## 🛠️ Установка

1. Клонируйте репозиторий:
\`\`\`bash
git clone <repository-url>
cd otelluxe
\`\`\`

2. Установите зависимости:
\`\`\`bash
npm install
\`\`\`

3. (Опционально) Получите API ключ для Яндекс.Карт:
   - Перейдите на [developer.tech.yandex.ru](https://developer.tech.yandex.ru/)
   - Зарегистрируйтесь и получите API ключ
   - Замените `'ВАШ_API_KEY_ЯНДЕКС_КАРТ'` в файле `src/components/YandexMap.tsx`

4. Запустите проект в режиме разработки:
\`\`\`bash
npm run dev
\`\`\`

5. Откройте [http://localhost:3000](http://localhost:3000) в браузере

## 📦 Доступные команды

\`\`\`bash
npm run dev      # Запуск в режиме разработки
npm run build    # Сборка для production
npm run start    # Запуск production сервера
npm run lint     # Проверка кода
\`\`\`

## 📁 Структура проекта

\`\`\`
otelluxe/
├── src/
│   ├── app/                 # Страницы приложения (App Router)
│   │   ├── booking/         # Страница бронирования
│   │   ├── contacts/        # Страница контактов
│   │   ├── rooms/           # Страница номеров
│   │   ├── services/        # Страница услуг
│   │   ├── layout.tsx       # Главный layout
│   │   ├── page.tsx         # Главная страница
│   │   ├── robots.ts        # Генерация robots.txt
│   │   └── sitemap.ts       # Генерация sitemap.xml
│   ├── components/          # React компоненты
│   │   ├── Header.tsx       # Шапка сайта
│   │   ├── Footer.tsx       # Подвал сайта
│   │   ├── Hero.tsx         # Главный баннер
│   │   ├── RoomCard.tsx     # Карточка номера
│   │   └── YandexMap.tsx    # Компонент карты
│   └── styles/
│       └── theme.ts         # MUI тема
├── public/                  # Статические файлы
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
\`\`\`

## 🎨 Кастомизация

### Изменение цветовой схемы

Откройте `src/styles/theme.ts` и измените цвета:

\`\`\`typescript
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Основной цвет
    },
    secondary: {
      main: '#ffd700', // Дополнительный цвет
    },
  },
});
\`\`\`

### Настройка контактов

Измените контактную информацию в:
- `src/components/Footer.tsx`
- `src/app/contacts/page.tsx`

### Настройка координат на карте

В файле `src/components/YandexMap.tsx` измените координаты:

\`\`\`typescript
const coordinates = [56.1039, 43.5122]; // [широта, долгота]
\`\`\`

## 🌐 SEO

Проект оптимизирован для поисковых систем:

- **Метаданные** на каждой странице
- **Sitemap.xml** генерируется автоматически
- **robots.txt** для индексации
- **Семантическая разметка** HTML
- **Open Graph** для социальных сетей

## 📱 Адаптивность

Сайт полностью адаптирован для:
- 📱 Мобильных устройств (320px+)
- 📱 Планшетов (768px+)
- 💻 Ноутбуков (1024px+)
- 🖥️ Десктопов (1920px+)

## 🚀 Деплой

### Docker (рекомендуется для production)

Проект полностью готов для деплоя с использованием Docker на Ubuntu 22.04.

Полное руководство см. в файле [DEPLOYMENT.md](./DEPLOYMENT.md)

Быстрый старт:
```bash
# Клонировать репозиторий
git clone https://github.com/Mizraelko/otelluxe.git
cd otelluxe

# Создать .env.production файл
cp .env.production.example .env.production
nano .env.production

# Запустить с Docker
docker compose up -d --build
```

### Vercel

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Импортируйте проект из Git
3. Настройте переменные окружения
4. Vercel автоматически выполнит деплой

### Другие платформы

Проект можно развернуть на любой платформе, поддерживающей Node.js:
- Netlify
- Railway
- DigitalOcean
- AWS
- Heroku

## 📝 TODO

- [ ] Добавить реальную систему бронирования
- [ ] Интеграция с платежными системами
- [ ] Админ-панель для управления номерами
- [ ] Мультиязычность (EN, DE)
- [ ] Интеграция с системой управления отелем (PMS)
- [ ] Добавить галерею фотографий номеров
- [ ] Реализовать систему отзывов

## 📄 Лицензия

MIT

## 👨‍💻 Автор

Создано для отеля "Люкс", г. Богородск

---

**Приятного использования! 🎉**

