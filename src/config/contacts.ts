/**
 * Конфигурация контактных данных
 * Централизованное хранение всех контактов для удобства обновления
 */

export const CONTACTS = {
  // Телефоны
  phone: {
    display: '+7 (987) 757-83-23',
    link: 'tel:+79877578323'
  },
  
  // Email
  email: {
    display: 'luxgostevoidom@yandex.ru',
    link: 'mailto:luxgostevoidom@yandex.ru'
  },
  
  // Социальные сети
  social: {
    vk: {
      url: 'https://vk.com/id412614778',
      name: 'ВКонтакте'
    },
    telegram: {
      url: 'https://t.me/otelluxbg',
      name: 'Telegram'
    }
  },
  
  // Адрес
  address: {
    full: 'г. Богородск, ул. Ленина, д. 50',
    city: 'Богородск',
    street: 'ул. Ленина',
    building: 'д. 50',
    postalCode: '607600',
    region: 'Нижегородская область',
    country: 'Россия'
  },
  
  // Координаты для карты
  coordinates: {
    latitude: 56.1039,
    longitude: 43.5122
  }
} as const;

export const SITE_CONFIG = {
  // Основной URL
  url: 'https://hotelluxbg.ru',
  
  // Название отеля
  name: 'Отель "Люкс"',
  shortName: 'Люкс',
  
  // Описание
  description: 'Современная гостиница в центре города Богородск',
  
  // Яндекс.Карты API ключ
  yandexMapsApiKey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY || 'b2ff1b7a-7797-4395-96e5-3d415dfa9e76'
} as const;

