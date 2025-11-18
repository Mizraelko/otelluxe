import type { Metadata } from 'next';

export const SEO_CONFIG = {
  site: {
    name: 'Отель "Люкс"',
    url: 'https://hotelluxbg.ru',
    description:
      'Современный отель в центре Богородска с комфортабельными номерами и высоким уровнем сервиса',
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
      'гостиница Богородск',
    ],
    locale: 'ru_RU',
    type: 'website',
  },

  hotel: {
    name: 'Отель "Люкс"',
    address: {
      street: 'ул. Ленина, 223Б',
      city: 'Богородск',
      region: 'Нижегородская область',
      postalCode: '607600',
      country: 'RU',
    },
    coordinates: {
      latitude: 56.106022,
      longitude: 43.520823,
    },
    contact: {
      phone: '+7 (987) 757-83-23',
      email: 'luxgostevoidom@yandex.ru',
    },
    rating: {
      value: 4,
      max: 5,
    },
    amenities: [
      'Wi-Fi',
      'Ресторан',
      'Парковка',
      'Кондиционер',
      'Сейф',
      'Мини-холодильник',
      'Фен',
      'Банные принадлежности',
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
    telegram: 'https://t.me/otelluxbg',
  },

  images: {
    logo: '/favicon.svg',
    hero: '/images/hero/hero-main.jpg',
    favicon: '/favicon.ico',
    gallery: [
      '/images/rooms/photo-1598928506311-c55ded91a20c.jpg',
      '/images/rooms/photo-1611892440504-42a792e24d32.jpg',
      '/images/rooms/photo-1590490360182-c33d57733427.jpg',
    ],
  },

  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    yandexMetrika: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID,
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
};

export type PageKey = 'home' | 'rooms' | 'services' | 'contacts' | 'booking';

type PageMetadata = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
};

export const PAGE_METADATA: Record<PageKey, PageMetadata> = {
  home: {
    path: '/',
    title: 'Отель "Люкс" - Богородск | Комфортабельная гостиница в центре города',
    description:
      'Современный отель "Люкс" в Богородске предлагает комфортабельные номера, высокий сервис и удобное расположение в центре города. Бронирование онлайн по выгодным ценам.',
    keywords: [
      'отель Богородск центр',
      'гостиница Люкс Богородск',
      'бронирование отеля Богородск онлайн',
      'отель в центре Богородска',
      'гостиница Богородск цены',
    ],
  },
  rooms: {
    path: '/rooms',
    title: 'Номера - Отель "Люкс" Богородск | Выбор номеров для бронирования',
    description:
      'Выбор номеров в отеле "Люкс" Богородск: Стандарт, Comfort, Double, TWIN, апартаменты. Современные номера с комфортом и удобствами. Бронирование онлайн по выгодным ценам.',
    keywords: [
      'номера отеля Богородск',
      'номера гостиницы Люкс',
      'бронирование номеров Богородск',
      'отель номера цены',
      'гостиница номера Богородск',
      'стандарт номер Богородск',
      'апартаменты Богородск',
    ],
  },
  services: {
    path: '/services',
    title: 'Услуги - Отель "Люкс" Богородск | Ресторан, парковка, Wi-Fi',
    description:
      'Услуги отеля "Люкс" в Богородске: ресторан, бесплатная парковка, Wi-Fi, трансфер, круглосуточная стойка администратора. Полный спектр услуг для комфортного пребывания.',
    keywords: [
      'услуги отеля Богородск',
      'ресторан отеля Богородск',
      'парковка отеля Богородск',
      'Wi-Fi отель Богородск',
      'трансфер отель Богородск',
      'услуги гостиницы Люкс',
    ],
  },
  contacts: {
    path: '/contacts',
    title: 'Контакты - Отель "Люкс" Богородск | Адрес, телефон, как добраться',
    description:
      'Контактная информация отеля "Люкс" в Богородске. Адрес: ул. Ленина, 223Б. Телефон: +7 (987) 757-83-23. Как добраться до отеля. Круглосуточная стойка администратора.',
    keywords: [
      'контакты отеля Богородск',
      'адрес отеля Люкс Богородск',
      'телефон отеля Богородск',
      'отель Богородск ул Ленина',
      'как добраться до отеля Богородск',
      'отель Богородск карта',
    ],
  },
  booking: {
    path: '/booking',
    title: 'Бронирование - Отель "Люкс" Богородск | Онлайн бронирование номеров',
    description:
      'Онлайн бронирование номеров в отеле "Люкс" Богородск. Быстрое и удобное бронирование по выгодным ценам. Звоните +7 (987) 757-83-23 для бронирования.',
    keywords: [
      'бронирование отеля Богородск',
      'онлайн бронирование номеров',
      'забронировать номер Богородск',
      'бронирование гостиницы Люкс',
      'отель Богородск бронирование онлайн',
      'забронировать отель Богородск',
    ],
  },
};

export const buildPageMetadata = (page: PageKey): Metadata => {
  const pageConfig = PAGE_METADATA[page];
  const canonicalUrl = new URL(pageConfig.path, SEO_CONFIG.site.url).toString();

  // Объединяем общие ключевые слова + специфичные для страницы
  // Убираем дубликаты и ограничиваем общее количество для оптимального SEO
  const baseKeywords = SEO_CONFIG.site.keywords.slice(0, 8); // Берем первые 8 самых важных
  const combinedKeywords = [
    ...new Set([...baseKeywords, ...pageConfig.keywords]) // Убираем дубликаты
  ];

  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: combinedKeywords,
    authors: [{ name: SEO_CONFIG.site.name }],
    creator: SEO_CONFIG.site.name,
    publisher: SEO_CONFIG.site.name,
    metadataBase: new URL(SEO_CONFIG.site.url),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'ru-RU': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      url: canonicalUrl,
      siteName: SEO_CONFIG.site.name,
      locale: SEO_CONFIG.site.locale,
      type: SEO_CONFIG.site.type as 'website',
      images: [
        {
          url: `${SEO_CONFIG.site.url}${SEO_CONFIG.images.hero}`,
          width: 1200,
          height: 630,
          alt: pageConfig.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageConfig.title,
      description: pageConfig.description,
      images: [`${SEO_CONFIG.site.url}${SEO_CONFIG.images.hero}`],
      creator: SEO_CONFIG.site.name,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: SEO_CONFIG.verification,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};
