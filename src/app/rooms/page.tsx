import { Container, Box, Typography, Grid } from '@mui/material';
import RoomCard from '@/components/RoomCard';
import StructuredData from '@/components/StructuredData';
import Breadcrumbs from '@/components/Breadcrumbs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Номера - Отель "Люкс" Богородск',
  description: 'Выбор номеров в отеле "Люкс" Богородск: Стандарт, Полулюкс, Люкс. Современные номера с комфортом и удобствами. Бронирование онлайн.',
  openGraph: {
    title: 'Номера отеля "Люкс" в Богородске',
    description: 'Комфортабельные номера различных категорий с современными удобствами',
    url: 'https://otel-luxe.ru/rooms',
  },
  alternates: {
    canonical: '/rooms',
  },
};

const rooms = [
  {
    id: 1,
    title: 'Стандарт Одноместный',
    description: 'Уютный одноместный номер с односпальной кроватью, рабочим столом, телевизором',
    price: '2800',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф'],
  },
  {
    id: 2,
    title: 'Стандарт Двухместный',
    description: 'Комфортный номер с двуспальной кроватью, современным дизайном',
    price: '3500',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф', 'Мини-холодильник'],
  },
  {
    id: 3,
    title: 'Полулюкс',
    description: 'Просторный номер с улучшенными удобствами, мини-баром, зоной отдыха',
    price: '5500',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф', 'Мини-бар', 'Джакузи'],
  },
  {
    id: 4,
    title: 'Люкс',
    description: 'Номер премиум-класса с панорамным видом на город, джакузи',
    price: '8500',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф', 'Мини-бар', 'Джакузи', 'Курить можно'],
  },
  {
    id: 5,
    title: 'Семейный номер',
    description: 'Просторный номер для семьи с двумя спальнями и гостиной',
    price: '7000',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф', 'Мини-холодильник', 'Детская кроватка'],
  },
  {
    id: 6,
    title: 'Апартаменты',
    description: 'Двухкомнатные апартаменты с кухней, идеально для длительного проживания',
    price: '9500',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф', 'Кухня', 'Стиральная машина'],
  },
];

export default function RoomsPage() {
  const breadcrumbs = [
    { name: 'Главная', url: 'https://otel-luxe.ru' },
    { name: 'Номера', url: 'https://otel-luxe.ru/rooms' }
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
          {rooms.map((room) => (
            <Grid item xs={12} md={6} key={room.id}>
              <StructuredData type="room" data={room} />
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


