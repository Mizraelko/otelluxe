import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги - Отель "Люкс" Богородск',
  description: 'Услуги отеля "Люкс": ресторан, парковка, конференц-залы, прачечная, фитнес-центр. Высокий уровень обслуживания для наших гостей.',
};

const services = [
  {
    icon: <RestaurantIcon sx={{ fontSize: 48 }} />,
    title: 'Ресторан',
    description: 'Ресторан европейской и русской кухни. Завтрак включен в стоимость проживания. Обслуживание с 7:00 до 23:00.',
  },
  {
    icon: <LocalParkingIcon sx={{ fontSize: 48 }} />,
    title: 'Парковка',
    description: 'Бесплатная охраняемая парковка для гостей отеля. Видеонаблюдение 24/7. Вместимость до 50 автомобилей.',
  },
  {
    icon: <MeetingRoomIcon sx={{ fontSize: 48 }} />,
    title: 'Конференц-залы',
    description: 'Два конференц-зала вместимостью до 50 и 100 человек. Современное оборудование для деловых мероприятий.',
  },
  {
    icon: <LocalLaundryServiceIcon sx={{ fontSize: 48 }} />,
    title: 'Прачечная',
    description: 'Услуги прачечной и химчистки. Быстрое выполнение заказов. Глажка и упаковка одежды.',
  },
  {
    icon: <FitnessCenterIcon sx={{ fontSize: 48 }} />,
    title: 'Фитнес-центр',
    description: 'Современный тренажерный зал с кардио и силовыми тренажерами. Работает круглосуточно для гостей отеля.',
  },
  {
    icon: <RoomServiceIcon sx={{ fontSize: 48 }} />,
    title: 'Room Service',
    description: 'Обслуживание в номерах 24/7. Доставка еды и напитков из ресторана прямо в ваш номер.',
  },
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 48 }} />,
    title: 'Бизнес-центр',
    description: 'Услуги печати, копирования, сканирования. Рабочие места с компьютерами и быстрым интернетом.',
  },
  {
    icon: <AirportShuttleIcon sx={{ fontSize: 48 }} />,
    title: 'Трансфер',
    description: 'Трансфер до/от вокзала и аэропорта. Услуга предоставляется по предварительной договоренности.',
  },
];

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Главная', url: 'https://otel-luxe.ru' },
    { name: 'Услуги', url: 'https://otel-luxe.ru/services' }
  ];

  const breadcrumbItems = [
    { label: 'Услуги', current: true }
  ];

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbs} />
      <Box sx={{ py: 6, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={breadcrumbItems} />
        <Typography variant="h2" align="center" gutterBottom color="text.primary">
          Наши услуги
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}>
          Мы предлагаем широкий спектр услуг для комфортного проживания наших гостей
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 2, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {service.icon}
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h4" align="center" gutterBottom color="text.primary">
            Особые предложения
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  Корпоративные тарифы
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Специальные условия для организаций. Скидки от 10% при бронировании от 5 номеров.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  Длительное проживание
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Выгодные условия при проживании от 7 дней. Скидка до 15% на все номера.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  Раннее бронирование
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Бронируйте заранее и получайте скидку 10% при бронировании за 30 дней.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    </>
  );
}


