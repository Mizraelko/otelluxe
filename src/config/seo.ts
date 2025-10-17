export const SEO_CONFIG = {
  site: {
    name: 'Отель &quot;Люкс&quot;',
    url: 'https://hotelluxbg.ru',
    description: 'Современный отель в центре Богородска с комфортабельными номерами и высоким уровнем сервиса',
    keywords: [
      'отель Богородск',
      'гостиница Люкс',
      'бронирование отеля Богородск',
      'гостиница в центре Богородска',
      'номера в Богородске',
      'отель Богородск цены',
      'гостиница Богородск бронирование',
      'отель Богородск номера',
      'гостиница Богородск услуги',
      'отель Богородск отзывы',
      'бронирование гостиницы Богородск',
      'отель Богородск адрес',
      'гостиница'
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  
  hotel: {
    name: 'Отель &quot;Люкс&quot;',
    address: {
      street: 'ул. Ленина, 223Б',
      city: 'Богородск',
      region: 'Нижегородская область',
      postalCode: '607600',
      country: 'RU'
    },
    coordinates: {
      latitude: 56.106022,
      longitude: 43.520823
    },
    contact: {
      phone: '+7 (987) 757-83-23',
      email: 'luxgostevoidom@yandex.ru'
    },
    rating: {
      value: 4,
      max: 5
    },
    amenities: [
      'Wi-Fi',
      'Ресторан',
      'Парковка',
      'Кондиционер',
      'Сейф',
      'Мини-холодильник',
      'Фен',
      'Банные принадлежности'
    ],
    checkinTime: '14:00',
    checkoutTime: '12:00',
    currenciesAccepted: 'RUB',
    paymentAccepted: 'Cash, Credit Card',
    priceRange: '$$',
    petsAllowed: false,
    smokingAllowed: false,
  },

  social: {
    vk: 'https://vk.com/id412614778',
    telegram: 'https://t.me/otelluxbg'
  },

  images: {
    logo: '/images/logo.png',
    hero: '/images/hotel-exterior.jpg',
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png'
  },

  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    yandexMetrika: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
  }
};

export const ROOM_CATEGORIES = {
  standard: {
    name: 'Стандарт',
    description: 'Комфортные номера с современными удобствами',
    basePrice: 3500
  },
  semiLux: {
    name: 'Полулюкс',
    description: 'Просторные номера с дополнительными удобствами',
    basePrice: 5500
  },
  lux: {
    name: 'Люкс',
    description: 'Номера премиум-класса с панорамным видом',
    basePrice: 8500
  }
};

export const PAGE_METADATA = {
  home: {
    title: 'Отель "Люкс" - Богородск | Комфортабельная гостиница в центре города',
    description: 'Современный отель "Люкс" в Богородске предлагает комфортабельные номера, высокий сервис и удобное расположение в центре города. Бронирование онлайн по выгодным ценам.',
    keywords: ['отель Богородск', 'гостиница Люкс', 'бронирование отеля Богородск']
  },
  rooms: {
    title: 'Номера - Отель "Люкс" Богородск',
    description: 'Выбор номеров в отеле "Люкс" Богородск: Стандарт, Полулюкс, Люкс. Современные номера с комфортом и удобствами. Бронирование онлайн.',
    keywords: ['номера Богородск', 'отель номера', 'бронирование номеров']
  },
  services: {
    title: 'Услуги - Отель "Люкс" Богородск',
    description: 'Услуги отеля "Люкс" в Богородске: ресторан, парковка, Wi-Fi, трансфер. Полный спектр услуг для комфортного пребывания.',
    keywords: ['услуги отеля', 'ресторан Богородск', 'парковка отеля']
  },
  contacts: {
    title: 'Контакты - Отель "Люкс" Богородск',
    description: 'Контактная информация отеля "Люкс" в Богородске. Адрес, телефон, email. Как добраться до отеля.',
    keywords: ['контакты отеля', 'адрес отеля Богородск', 'телефон отеля']
  },
  booking: {
    title: 'Бронирование - Отель "Люкс" Богородск',
    description: 'Онлайн бронирование номеров в отеле "Люкс" Богородск. Быстрое и удобное бронирование по выгодным ценам.',
    keywords: ['бронирование отеля', 'онлайн бронирование', 'забронировать номер']
  }
};
