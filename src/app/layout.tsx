import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { AppThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
  title: {
    default: 'Отель Люкс Богородск',
    template: '%s | Отель Люкс Богородск'
  },
  description: 'Современный отель "Люкс" в Богородске предлагает комфортабельные номера, высокий сервис и удобное расположение в центре города. Бронирование онлайн по выгодным ценам. Wi-Fi, ресторан, парковка.',
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
    'отель Богородск адрес'
  ],
  authors: [{ name: 'Отель "Люкс"' }],
  creator: 'Отель "Люкс"',
  publisher: 'Отель "Люкс"',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hotelluxbg.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Отель "Люкс" - Богородск | Комфортабельная гостиница',
    description: 'Современный отель в центре Богородска. Уютные номера, высокий сервис, удобное расположение. Бронирование онлайн.',
    url: 'https://hotelluxbg.ru',
    siteName: 'Отель "Люкс"',
    images: [
      {
        url: '/images/hotel-exterior.jpg',
        width: 1200,
        height: 630,
        alt: 'Отель "Люкс" в Богородске - современная гостиница',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Отель "Люкс" - Богородск',
    description: 'Комфортабельная гостиница в центре Богородска',
    images: ['/images/hotel-exterior.jpg'],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Отель Люкс" />
        <meta name="application-name" content="Отель Люкс" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="RU-NIZ" />
        <meta name="geo.placename" content="Богородск" />
        <meta name="geo.position" content="56.106329;43.520411" />
        <meta name="ICBM" content="56.106329, 43.520411" />
        <link rel="canonical" href="https://hotelluxbg.ru" />
        <link rel="alternate" hrefLang="ru" href="https://hotelluxbg.ru" />
        <link rel="alternate" hrefLang="x-default" href="https://hotelluxbg.ru" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Скрываем предупреждения от расширений браузера */
            [data-cz-shortcut-listen] {
              display: none !important;
            }
          `
        }} />
      </head>
      <body suppressHydrationWarning={true}>
        <Analytics 
          googleAnalyticsId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
          yandexMetrikaId={process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID}
        />
        <AppRouterCacheProvider>
          <AppThemeProvider>
            <Header />
            <main style={{ minHeight: '70vh', paddingTop: '64px' }}>
              {children}
            </main>
            <Footer />
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}


