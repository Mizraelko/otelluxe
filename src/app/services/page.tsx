import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import { buildPageMetadata } from '@/config/seo';

export const metadata = buildPageMetadata('services');

const services = [
  {
    icon: <LocalParkingIcon sx={{ fontSize: 48 }} />,
    title: 'Парковка',
    description: 'Бесплатная охраняемая парковка для гостей отеля. Видеонаблюдение 24/7. Вместимость до 50 автомобилей.',
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
    { name: 'Главная', url: 'https://hotelluxbg.ru' },
    { name: 'Услуги', url: 'https://hotelluxbg.ru/services' }
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
        <Typography component="h1" variant="h2" align="center" gutterBottom color="text.primary">
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
      </Container>
    </Box>
    </>
  );
}


