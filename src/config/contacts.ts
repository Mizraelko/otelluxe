export const CONTACTS = {
  phone: {
    display: '+7 (987) 757-83-23',
    link: 'tel:+79877578323'
  },
  email: {
    display: 'luxgostevoidom@yandex.ru',
    link: 'mailto:luxgostevoidom@yandex.ru'
  },
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
  address: {
    full: 'Нижегородская область, г. Богородск, ул. Ленина, 223Б',
    city: 'Богородск',
    street: 'ул. Ленина',
    building: '223Б',
    postalCode: '607600',
    region: 'Нижегородская область',
    country: 'Россия'
  },

  coordinates: {
    latitude: 56.106022,
    longitude: 43.520823
  }
};

export const SITE_CONFIG = {
  url: 'https://hotelluxbg.ru',
  name: 'Отель "Люкс"',
  shortName: 'Люкс',
  description: 'Современная гостиница в центре города Богородск',
  yandexMapsApiKey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY || ''
};

export const VK_COLORS = {
  primary: '#0077FF',
  hover: '#0056CC',
  hoverBackground: 'rgba(0, 119, 255, 0.1)',
};

