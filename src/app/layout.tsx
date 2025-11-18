import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { AppThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import { CONTACTS } from '@/config/contacts';
import { SEO_CONFIG } from '@/config/seo';
import React from "react";

export const metadata: Metadata = {
  title: {
    default: 'Отель "Люкс" Богородск',
    template: '%s | Отель "Люкс" Богородск',
  },
  description: SEO_CONFIG.site.description,
  keywords: [...SEO_CONFIG.site.keywords],
  authors: [{ name: SEO_CONFIG.site.name }],
  creator: SEO_CONFIG.site.name,
  publisher: SEO_CONFIG.site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SEO_CONFIG.site.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SEO_CONFIG.site.name,
    description: SEO_CONFIG.site.description,
    url: SEO_CONFIG.site.url,
    siteName: SEO_CONFIG.site.name,
    images: [
      {
        url: `${SEO_CONFIG.site.url}${SEO_CONFIG.images.hero}`,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.site.name,
      },
    ],
    locale: SEO_CONFIG.site.locale,
    type: SEO_CONFIG.site.type as 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.site.name,
    description: SEO_CONFIG.site.description,
    images: [`${SEO_CONFIG.site.url}${SEO_CONFIG.images.hero}`],
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
    google: SEO_CONFIG.verification.google,
    yandex: SEO_CONFIG.verification.yandex,
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
        <meta name="geo.position" content={`${CONTACTS.coordinates.latitude};${CONTACTS.coordinates.longitude}`} />
        <meta name="ICBM" content={`${CONTACTS.coordinates.latitude}, ${CONTACTS.coordinates.longitude}`} />
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


