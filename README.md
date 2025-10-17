# 🏨 Отель "Люкс" - Богородск

Современный веб-сайт для гостевого дома "Люкс" в городе Богородск, Нижегородская область. Полностью адаптивный сайт с SEO-оптимизацией, интерактивной картой и современным дизайном.

🌐 **Сайт:** [hotelluxbg.ru](https://hotelluxbg.ru)  
📞 **Телефон:** +7 (987) 757-83-23  
📧 **Email:** luxgostevoidom@yandex.ru  
👥 **VK:** [vk.com/id412614778](https://vk.com/id412614778)  
📍 **Адрес:** Нижегородская область, г. Богородск, ул. Ленина, 223Б

## 🚀 Технологический стек

### Frontend
- **Next.js 14** - React фреймворк с App Router и Server-Side Rendering
- **React 18** - Библиотека для создания пользовательских интерфейсов
- **TypeScript** - Статическая типизация для надежности кода
- **Material UI 5** - Современная библиотека компонентов с Material Design
- **Emotion** - CSS-in-JS библиотека для стилизации

### Maps & SEO
- **Yandex Maps API** - Интерактивные карты для поиска отеля
- **next-sitemap** - Автоматическая генерация sitemap.xml
- **Structured Data** - JSON-LD разметка для поисковых систем

### Development & Deployment
- **Docker** - Контейнеризация для production деплоя
- **Docker Compose** - Оркестрация контейнеров
- **Nginx** - Reverse proxy и статические файлы
- **Let's Encrypt** - Бесплатные SSL сертификаты

## 📋 Основные возможности

- ✅ **Полностью адаптивный дизайн** для всех устройств
- ✅ **SEO-оптимизация** с метаданными, sitemap и robots.txt
- ✅ **Структурированные данные** для лучшей индексации
- ✅ **Интерактивная карта** с точным местоположением отеля
- ✅ **Темная/светлая тема** с автоматическим переключением
- ✅ **Оптимизированные изображения** с Next.js Image
- ✅ **Быстрая загрузка** благодаря SSR и статической генерации
- ✅ **Мобильная оптимизация** и PWA готовность

## 📄 Структура страниц

- **🏠 Главная** - Обзор отеля, преимущества, популярные номера
- **🛏️ Номера** - Подробная информация о всех типах номеров
- **🛠️ Услуги** - Полный список услуг отеля
- **📞 Контакты** - Контактная информация и карта
- **📋 Бронирование** - Форма бронирования (телефон)

## 🛠️ Быстрый старт

### 1. Клонирование репозитория
```bash
git clone https://github.com/Mizraelko/otelluxe.git
cd otelluxe
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Настройка переменных окружения
```bash
# Скопируйте шаблон
cp env.example .env.local

# Отредактируйте файл
nano .env.local
```

**Обязательные переменные:**
```env
NEXT_PUBLIC_SITE_URL=https://hotelluxbg.ru
NEXT_PUBLIC_YANDEX_MAPS_API_KEY=your_yandex_maps_api_key
```

### 4. Запуск в режиме разработки
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📦 Команды разработки

```bash
npm run dev          # Запуск в режиме разработки
npm run build        # Сборка для production
npm run start        # Запуск production сервера
npm run lint         # Проверка кода ESLint
npm run dev:clean    # Очистка кэша и запуск dev сервера
```

## 🏗️ Архитектура проекта

```
otelluxe/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── booking/            # Страница бронирования
│   │   ├── contacts/           # Страница контактов
│   │   ├── rooms/              # Страница номеров
│   │   ├── services/           # Страница услуг
│   │   ├── layout.tsx          # Главный layout
│   │   ├── page.tsx            # Главная страница
│   │   ├── robots.ts           # Генерация robots.txt
│   │   └── sitemap.ts          # Генерация sitemap.xml
│   ├── components/             # React компоненты
│   │   ├── Header.tsx          # Шапка сайта с навигацией
│   │   ├── Footer.tsx          # Подвал сайта
│   │   ├── Hero.tsx            # Главный баннер
│   │   ├── RoomCard.tsx        # Карточка номера
│   │   ├── YandexMap.tsx       # Компонент Яндекс.Карт
│   │   ├── StructuredData.tsx  # SEO разметка
│   │   └── VKIcon.tsx          # Иконка ВКонтакте
│   ├── config/                 # Конфигурационные файлы
│   │   ├── contacts.ts         # Контактные данные
│   │   ├── rooms.ts            # Данные номеров
│   │   └── seo.ts              # SEO настройки
│   ├── contexts/               # React контексты
│   │   └── ThemeContext.tsx    # Контекст темы
│   ├── styles/                 # Стили
│   │   └── theme.ts            # MUI тема
│   └── types/                  # TypeScript типы
│       └── index.ts            # Общие типы
├── public/                     # Статические файлы
│   ├── favicon.ico             # Иконка сайта
│   ├── favicon.svg             # SVG иконка
│   ├── robots.txt              # Файл для поисковых роботов
│   └── sitemap.xml             # Карта сайта
├── docker-compose.yml          # Docker Compose конфигурация
├── Dockerfile                  # Docker образ
├── next.config.js              # Next.js конфигурация
└── package.json                # Зависимости проекта
```

## 🚀 Деплой в production

### Docker деплой (рекомендуется)

Проект полностью готов для деплоя с Docker на Ubuntu 22.04+.

#### 1. Подготовка сервера
```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Установка Docker Compose
sudo apt install docker-compose -y

# Установка Nginx и Certbot
sudo apt install nginx certbot python3-certbot-nginx -y
```

#### 2. Настройка проекта
```bash
# Клонирование проекта
cd /opt
sudo git clone https://github.com/Mizraelko/otelluxe.git
cd otelluxe
sudo chown -R $USER:$USER /opt/otelluxe

# Создание файла переменных окружения
cat > .env.production << 'EOF'
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://hotelluxbg.ru
NEXT_PUBLIC_YANDEX_MAPS_API_KEY=your_yandex_maps_api_key
NEXT_PUBLIC_PHONE=+79877578323
NEXT_PUBLIC_EMAIL=luxgostevoidom@yandex.ru
NEXT_PUBLIC_VK_ID=412614778
EOF
```

#### 3. Запуск приложения
```bash
# Сборка и запуск контейнера
docker compose up -d --build

# Проверка статуса
docker compose ps
docker compose logs -f web
```

#### 4. Настройка Nginx
```bash
# Создание конфигурации Nginx
sudo tee /etc/nginx/sites-available/hotelluxbg.ru << 'EOF'
server {
    listen 80;
    server_name hotelluxbg.ru www.hotelluxbg.ru;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

# Активация конфигурации
sudo ln -s /etc/nginx/sites-available/hotelluxbg.ru /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 5. SSL сертификат
```bash
# Установка SSL сертификата
sudo certbot --nginx -d hotelluxbg.ru -d www.hotelluxbg.ru
```

### Обновление сайта
```bash
cd /opt/otelluxe
git pull origin main
docker compose up -d --build
```

### Мониторинг
```bash
# Просмотр логов
docker compose logs -f web

# Статус контейнеров
docker compose ps

# Использование ресурсов
docker stats
```

## 🎨 Кастомизация

### Изменение контактных данных
Все контактные данные централизованы в `src/config/contacts.ts`:
```typescript
export const CONTACTS = {
  phone: { display: '+7 (987) 757-83-23', link: 'tel:+79877578323' },
  email: { display: 'luxgostevoidom@yandex.ru', link: 'mailto:luxgostevoidom@yandex.ru' },
  address: { full: 'Нижегородская область, г. Богородск, ул. Ленина, 223Б' },
  coordinates: { latitude: 56.106022, longitude: 43.520823 }
};
```

### Настройка номеров
Данные номеров в `src/config/rooms.ts`:
```typescript
export const ROOMS = [
  {
    id: 1,
    title: 'Стандарт Одноместный',
    price: '2800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф']
  }
  // ... остальные номера
];
```

### Изменение темы
Настройки темы в `src/styles/theme.ts`:
```typescript
export const lightTheme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#c59764' }
  }
});
```

## 🔍 SEO оптимизация

Проект полностью оптимизирован для поисковых систем:

- **Метаданные** на каждой странице с Open Graph и Twitter Cards
- **Структурированные данные** JSON-LD для отеля и номеров
- **Sitemap.xml** автоматически генерируется
- **robots.txt** для управления индексацией
- **Canonical URLs** и hreflang для мультиязычности
- **Core Web Vitals** оптимизация

## 📱 Адаптивность

Сайт адаптирован для всех устройств:
- 📱 **Мобильные** (320px+)
- 📱 **Планшеты** (768px+)  
- 💻 **Ноутбуки** (1024px+)
- 🖥️ **Десктопы** (1920px+)

## 🛡️ Безопасность

- **Security Headers** в Next.js конфигурации
- **Content Security Policy** для защиты от XSS
- **HTTPS** принудительное перенаправление
- **Input Validation** для всех форм

## 📊 Производительность

- **Server-Side Rendering** для быстрой загрузки
- **Image Optimization** с Next.js Image
- **Code Splitting** автоматическое разделение кода
- **Static Generation** для статических страниц
- **Compression** gzip сжатие

## 🔧 Разработка

### Структура компонентов
Все компоненты следуют принципам:
- **Single Responsibility** - один компонент = одна задача
- **Reusability** - переиспользуемые компоненты
- **Type Safety** - полная типизация TypeScript
- **Performance** - оптимизированные рендеры

### Конфигурация
- **Централизованные данные** в `src/config/`
- **Единые типы** в `src/types/`
- **Контексты** для глобального состояния
- **Темизация** с Material UI

## 📈 Мониторинг и аналитика

Поддержка интеграции с:
- **Google Analytics** - веб-аналитика
- **Yandex Metrika** - российская аналитика
- **Google Search Console** - мониторинг SEO
- **Yandex Webmaster** - вебмастер

## 🚀 Планы развития

- [ ] **Система бронирования** с онлайн оплатой
- [ ] **Админ-панель** для управления номерами
- [ ] **Мультиязычность** (EN, DE)
- [ ] **PWA** для мобильных приложений
- [ ] **Интеграция с PMS** системами отелей
- [ ] **Система отзывов** и рейтингов
- [ ] **Чат-бот** для поддержки клиентов

## 📄 Лицензия

MIT License - свободное использование и модификация.

## 👨‍💻 Автор

Создано для гостевого дома "Люкс", г. Богородск, Нижегородская область.

---

**Приятного использования! 🎉**

*Для вопросов и поддержки обращайтесь по контактам выше.*