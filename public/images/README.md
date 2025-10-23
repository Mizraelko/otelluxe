# Изображения для сайта отеля "Люкс"

## Структура папок

```
public/images/
├── hero/
│   └── hotel-main.svg          # Главное изображение отеля (1200x600px) - SVG placeholder
└── rooms/
    ├── standard-single.svg     # Стандарт одноместный (800x600px) - SVG placeholder
    ├── standard-double.svg     # Стандарт двухместный (800x600px) - SVG placeholder
    ├── junior-suite.svg        # Полулюкс (800x600px) - SVG placeholder
    ├── luxury-suite.svg        # Люкс (800x600px) - SVG placeholder
    ├── family-room.svg         # Семейный номер (800x600px) - SVG placeholder
    └── apartment.svg           # Апартаменты (800x600px) - SVG placeholder
```

## Замена placeholder изображений

Сейчас в папках находятся placeholder файлы. Для замены на реальные изображения:

### 1. Скачайте изображения с Unsplash:

**Главное изображение отеля:**
- URL: https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200
- Файл: `public/images/hero/hotel-main.svg` (замените на .jpg)

**Изображения номеров:**
- Стандарт одноместный: https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800 → `standard-single.svg`
- Стандарт двухместный: https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800 → `standard-double.svg`
- Полулюкс: https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800 → `junior-suite.svg`
- Люкс: https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800 → `luxury-suite.svg`
- Семейный номер: https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800 → `family-room.svg`
- Апартаменты: https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800 → `apartment.svg`

### 2. Рекомендуемые размеры:

- **Hero изображение**: 1200x600px (соотношение 2:1)
- **Изображения номеров**: 800x600px (соотношение 4:3)

### 3. Форматы:

- **JPEG** для фотографий
- **WebP** для лучшего сжатия (опционально)
- **AVIF** для максимальной оптимизации (опционально)

### 4. Оптимизация:

- Сжимайте изображения для веба (качество 80-85%)
- Используйте инструменты типа TinyPNG или ImageOptim
- Next.js автоматически оптимизирует изображения в WebP/AVIF

## Автоматическая замена

Можно использовать скрипт для автоматической загрузки:

```bash
# Windows PowerShell
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200" -OutFile "public\images\hero\hotel-main.jpg"

# Linux/Mac
curl -L "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200" -o "public/images/hero/hotel-main.jpg"
```

## Проверка

После замены изображений:
1. Запустите `npm run dev`
2. Проверьте загрузку изображений в браузере
3. Убедитесь, что изображения отображаются корректно
4. Проверьте производительность в DevTools

## Примечания

- Все изображения оптимизированы Next.js Image компонентом
- Автоматическое кэширование на 1 год
- Поддержка WebP и AVIF форматов
- Адаптивная загрузка по размеру экрана
