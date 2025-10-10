import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { AppThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Отель "Люкс" - Богородск | Комфортабельная гостиница в центре города',
  description: 'Современный отель "Люкс" в Богородске. Уютные номера, высокий сервис, удобное расположение. Бронирование онлайн по выгодным ценам.',
  keywords: 'отель Богородск, гостиница Люкс, бронирование отеля Богородск, гостиница в центре Богородска, номера в Богородске',
  openGraph: {
    title: 'Отель "Люкс" - Богородск',
    description: 'Комфортабельная гостиница в центре Богородска',
    type: 'website',
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
        <AppRouterCacheProvider>
          <AppThemeProvider>
            <Header />
            <main style={{ minHeight: '70vh' }}>
              {children}
            </main>
            <Footer />
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}


