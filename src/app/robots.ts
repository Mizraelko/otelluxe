import { MetadataRoute } from 'next';

const allowIndex = process.env.NEXT_PUBLIC_ALLOW_INDEX !== 'false';

export default function robots(): MetadataRoute.Robots {
  if (!allowIndex) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: 'https://hotelluxbg.ru/sitemap.xml',
    host: 'https://hotelluxbg.ru',
  };
}


