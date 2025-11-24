import type { Metadata } from 'next';
import { Container, Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import StructuredData from '@/components/StructuredData';
import { ROOMS } from '@/config/rooms';
import { buildPageMetadata } from '@/config/seo';

// Отложенная загрузка RoomsList для уменьшения начального бандла
const RoomsList = dynamic(() => import('@/components/RoomsList'), {
  loading: () => (
    <Box sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="body1">Загрузка номеров...</Typography>
    </Box>
  ),
  ssr: true, // Оставляем SSR для SEO
});

export const metadata: Metadata = buildPageMetadata('home');

const rooms = ROOMS;

export default function Home() {
  return (
    <>
      <StructuredData type="hotel" />
      <Hero />

      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
          <Typography variant="h2" align="center" gutterBottom>
            Наши номера
          </Typography>
          {/* StructuredData для SEO - рендерится на сервере, не зависит от динамической загрузки RoomsList */}
          {rooms.map((room) => (
            <StructuredData key={room.id} type="room" data={room} />
          ))}
          <RoomsList rooms={rooms} />
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
          <Typography variant="h2" align="center" gutterBottom>
            Отель &quot;Люкс&quot; в Богородске
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 3, fontSize: '1.1rem' }}>
            Добро пожаловать в отель &quot;Люкс&quot; – современную гостиницу в самом центре города Богородск. 
            Мы предлагаем комфортабельные номера, высокий уровень сервиса и индивидуальный подход 
            к каждому гостю.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            Наш отель идеально подходит как для деловых поездок, так и для туристических визитов. 
            Удобное расположение в центре города обеспечивает легкий доступ ко всем основным 
            достопримечательностям и деловым объектам Богородска.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
