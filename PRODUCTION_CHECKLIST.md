# ✅ Production Checklist - Отель "Люкс"

## 📋 Проверено и настроено

### 1. ✅ Контактная информация обновлена

- [x] **Телефон:** +7 (987) 757-83-23
  - Обновлено в: Header, Footer, Contacts, Booking, SEO config
  - Формат ссылки: `tel:+79877578323`
  
- [x] **Email:** luxgostevoidom@yandex.ru
  - Обновлено в: Header, Footer, Contacts, SEO config, Structured Data
  - Формат ссылки: `mailto:luxgostevoidom@yandex.ru`
  
- [x] **VK:** https://vk.com/id412614778
  - Обновлено в: Header, Footer, Contacts, SEO config
  
- [x] **Адрес:** г. Богородск, Нижегородская область, ул. Ленина, 50
  - Обновлено в: Footer, SEO config, Structured Data
  - Индекс: 607600

### 2. ✅ Географические данные

- [x] **Координаты:** 56.1039, 43.5122
  - YandexMap.tsx
  - SEO config
  - Structured Data
  - Layout meta tags
  
- [x] **Регион:** RU-NIZ (Нижегородская область)
  - Layout meta tags

### 3. ✅ Домен и URL

- [x] **Основной домен:** hotelluxbg.ru
  - Layout.tsx metadataBase
  - sitemap.ts
  - robots.ts
  - next-sitemap.config.js
  - SEO config
  - All Open Graph URLs
  - All canonical URLs

### 4. ✅ Яндекс.Карты API

- [x] **API Key:** b2ff1b7a-7797-4395-96e5-3d415dfa9e76
  - YandexMap.tsx (с fallback)
  - .env.production.example
  - SITE_CONFIG в contacts.ts

### 5. ✅ SEO Оптимизация

- [x] **Метаданные**
  - Все страницы имеют уникальные title и description
  - Open Graph теги для всех страниц
  - Twitter Card metadata
  - Canonical URLs
  
- [x] **Structured Data (JSON-LD)**
  - LodgingBusiness schema
  - LocalBusiness schema
  - BreadcrumbList
  - Реальные контакты во всех схемах
  
- [x] **Sitemap.xml**
  - Генерируется автоматически
  - Включает все страницы
  - Правильные URLs (hotelluxbg.ru)
  - Приоритеты и частота обновления настроены
  
- [x] **Robots.txt**
  - Настроен для Googlebot и Yandexbot
  - Ссылка на sitemap.xml
  - Host указан
  
- [x] **Географические мета-теги**
  - geo.region, geo.placename, geo.position
  - ICBM координаты

### 6. ✅ Docker Deployment

- [x] **Dockerfile**
  - Multi-stage build для оптимизации
  - Standalone output Next.js
  - Непривилегированный пользователь
  - Порт 3000
  
- [x] **docker-compose.yml**
  - Сервис web
  - Health check
  - Environment variables
  - Logging configuration
  - Network setup
  
- [x] **.dockerignore**
  - Исключены node_modules, .next, .git
  - Оптимизированная сборка
  
- [x] **next.config.js**
  - output: 'standalone' для Docker
  - Все security headers
  - Compression enabled

### 7. ✅ Документация

- [x] **DEPLOYMENT.md**
  - Полное руководство по Ubuntu 22.04
  - Docker setup
  - Nginx configuration
  - SSL setup (Let's Encrypt)
  - Автоматизация деплоя
  - Мониторинг и troubleshooting
  
- [x] **README.md**
  - Обновлены контакты
  - Ссылка на DEPLOYMENT.md
  - Docker quick start
  
- [x] **.env.production.example**
  - Все необходимые переменные
  - Реальные значения как примеры

### 8. ✅ Конфигурационные файлы

- [x] **src/config/contacts.ts**
  - Централизованное хранение контактов
  - TypeScript типизация
  - Константы для переиспользования
  
- [x] **src/config/seo.ts**
  - Обновлен URL сайта
  - Реальные контакты
  - Правильный адрес и координаты
  - Актуальные соцсети

### 9. ✅ Компоненты обновлены

- [x] **Header.tsx**
  - Телефон кликабельный
  - VK ссылка обновлена
  
- [x] **Footer.tsx**
  - Все контакты кликабельные
  - Правильный адрес
  - VK ссылка обновлена
  
- [x] **YandexMap.tsx**
  - Правильные координаты
  - API ключ с fallback
  - useMemo для оптимизации
  
- [x] **StructuredData.tsx**
  - Реальные контакты
  - Правильный URL сайта
  - Актуальный адрес

### 10. ✅ Страницы обновлены

- [x] **/contacts**
  - Кликабельный телефон
  - Кликабельный email
  - VK ссылка
  - Карта с правильными координатами
  
- [x] **/booking**
  - Кликабельный телефон
  
- [x] **/rooms**
  - URL в metadata
  - Breadcrumbs URLs
  
- [x] **/services**
  - Breadcrumbs URLs

---

## 🚀 Готовность к деплою

### Проверка сборки

```bash
✅ npm run build - успешно
✅ Никаких ESLint ошибок
✅ Никаких TypeScript ошибок
✅ Sitemap сгенерирован
✅ Robots.txt сгенерирован
```

### Что нужно сделать перед деплоем

#### На сервере (Ubuntu 22.04)

1. **Установить Docker и Docker Compose**
   ```bash
   # См. DEPLOYMENT.md раздел 2
   ```

2. **Клонировать репозиторий**
   ```bash
   cd /opt
   sudo git clone https://github.com/Mizraelko/otelluxe.git
   cd otelluxe
   ```

3. **Создать .env.production**
   ```bash
   sudo nano .env.production
   ```
   
   Минимальный набор (все остальное уже в коде):
   ```env
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://hotelluxbg.ru
   NEXT_PUBLIC_YANDEX_MAPS_API_KEY=b2ff1b7a-7797-4395-96e5-3d415dfa9e76
   ```

4. **Запустить Docker**
   ```bash
   sudo docker compose up -d --build
   ```

5. **Настроить Nginx** (см. DEPLOYMENT.md раздел 5)

6. **Получить SSL сертификат** (см. DEPLOYMENT.md раздел 6)

#### Настройка домена (у регистратора)

Нужно настроить DNS записи для `hotelluxbg.ru`:

```
A    @         IP_АДРЕС_СЕРВЕРА
A    www       IP_АДРЕС_СЕРВЕРА
```

Где `IP_АДРЕС_СЕРВЕРА` - это IP вашего Ubuntu сервера.

---

## 🔍 Post-Deployment Checklist

После деплоя проверьте:

- [ ] Сайт открывается по https://hotelluxbg.ru
- [ ] SSL сертификат валидный (зеленый замок)
- [ ] Все страницы загружаются (/rooms, /services, /contacts, /booking)
- [ ] Телефон кликабельный и открывает звонилку
- [ ] Email кликабельный и открывает почтовый клиент
- [ ] VK ссылка работает и ведет на правильную страницу
- [ ] Яндекс.Карта загружается и показывает правильное место
- [ ] Sitemap доступен: https://hotelluxbg.ru/sitemap.xml
- [ ] Robots.txt доступен: https://hotelluxbg.ru/robots.txt
- [ ] Темная/светлая тема переключается корректно
- [ ] Сайт адаптивный на мобильных устройствах
- [ ] Нет ошибок в консоли браузера

---

## 📊 SEO Post-Deployment

### Регистрация в поисковых системах

1. **Google Search Console**
   - Зарегистрируйте сайт: https://search.google.com/search-console
   - Добавьте sitemap.xml
   - Дождитесь индексации (обычно 1-2 недели)

2. **Яндекс.Вебмастер**
   - Зарегистрируйте сайт: https://webmaster.yandex.ru/
   - Добавьте sitemap.xml
   - Настройте регион: Нижегородская область, Богородск

### Добавление аналитики (опционально)

1. **Google Analytics 4**
   - Создайте свойство: https://analytics.google.com/
   - Получите Measurement ID (G-XXXXXXXXXX)
   - Добавьте в .env.production:
     ```
     NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
     ```
   - Пересоберите и перезапустите Docker

2. **Яндекс.Метрика**
   - Создайте счетчик: https://metrica.yandex.ru/
   - Получите ID счетчика
   - Добавьте в .env.production:
     ```
     NEXT_PUBLIC_YANDEX_METRIKA_ID=XXXXXXXX
     ```
   - Пересоберите и перезапустите Docker

---

## 🎯 Дополнительные рекомендации

### Добавьте изображения

Создайте папку `public/images/` и добавьте:
- `hotel-exterior.jpg` (1200x630) - фасад отеля
- `logo.png` - логотип отеля
- Фотографии номеров для карточек

### Настройте регулярное резервное копирование

```bash
# Добавьте в crontab
0 3 * * * tar -czf /backup/otelluxe-$(date +\%Y\%m\%d).tar.gz /opt/otelluxe
```

### Мониторинг

Рассмотрите установку:
- **Uptime Robot** - мониторинг доступности сайта
- **Sentry** - отслеживание ошибок
- **Grafana + Prometheus** - метрики сервера

---

## 📞 Поддержка

Если возникнут вопросы или проблемы:

1. Проверьте логи Docker: `docker compose logs -f`
2. Проверьте логи Nginx: `sudo tail -f /var/log/nginx/error.log`
3. См. раздел Troubleshooting в DEPLOYMENT.md
4. Проверьте, что все переменные окружения настроены

---

## ✨ Что дальше?

После успешного деплоя можно добавить:

1. **Систему бронирования**
   - Интеграция с booking.com
   - Или собственная форма с отправкой на email

2. **Галерею фотографий**
   - Добавьте качественные фото номеров и отеля

3. **Отзывы гостей**
   - Интеграция с TripAdvisor
   - Или собственная система отзывов

4. **Блог**
   - Новости отеля
   - Достопримечательности Богородска

5. **Мультиязычность**
   - Английский язык для иностранных гостей

---

**Последнее обновление:** $(date)
**Версия:** 1.0.0
**Статус:** ✅ Готово к production

