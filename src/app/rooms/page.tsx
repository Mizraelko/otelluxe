import { Container, Box, Typography, Grid } from '@mui/material';
import RoomCard from '@/components/RoomCard';
import StructuredData from '@/components/StructuredData';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ROOMS } from '@/config/rooms';
import { Room } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Номера - Отель "Люкс" Богородск',
  description: 'Выбор номеров в отеле "Люкс" Богородск: Стандарт, Полулюкс, Люкс. Современные номера с комфортом и удобствами. Бронирование онлайн.',
  openGraph: {
    title: 'Номера отеля "Люкс" в Богородске',
    description: 'Комфортабельные номера различных категорий с современными удобствами',
    url: 'https://hotelluxbg.ru/rooms',
  },
  alternates: {
    canonical: '/rooms',
  },
};

export default function RoomsPage() {
  const breadcrumbs = [
    { name: 'Главная', url: 'https://hotelluxbg.ru' },
    { name: 'Номера', url: 'https://hotelluxbg.ru/rooms' }
  ];

  const breadcrumbItems = [
    { label: 'Номера', current: true }
  ];

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbs} />
      <Box sx={{ py: 6, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={breadcrumbItems} />
        <Typography variant="h2" align="center" gutterBottom>
          Наши номера
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}>
          В отеле &quot;Люкс&quot; представлены номера различных категорий. Все номера оборудованы современной 
          мебелью, кондиционером, телевизором и бесплатным Wi-Fi.
        </Typography>

        <Grid container spacing={4}>
          {ROOMS.map((room) => (
            <Grid item xs={12} md={6} key={room.id}>
              <StructuredData type="room" data={room as Room} />
              <RoomCard room={room} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            Что входит во все номера:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">✓ Бесплатный Wi-Fi</Typography>
              <Typography variant="body1">✓ Кондиционер</Typography>
              <Typography variant="body1">✓ LED телевизор</Typography>
              <Typography variant="body1">✓ Сейф</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">✓ Мини-холодильник</Typography>
              <Typography variant="body1">✓ Электрический чайник</Typography>
              <Typography variant="body1">✓ Фен</Typography>
              <Typography variant="body1">✓ Банные принадлежности</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    </>
  );
}


