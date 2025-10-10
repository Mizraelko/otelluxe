import { Container, Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Hero from '@/components/Hero';
import RoomCard from '@/components/RoomCard';
import FAQ from '@/components/FAQ';
import StructuredData from '@/components/StructuredData';
import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';
import WifiIcon from '@mui/icons-material/Wifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

const features = [
  { icon: <WifiIcon sx={{ fontSize: 48 }} />, title: 'Бесплатный Wi-Fi', description: 'Высокоскоростной интернет во всех номерах' },
  { icon: <RestaurantIcon sx={{ fontSize: 48 }} />, title: 'Ресторан', description: 'Блюда европейской и русской кухни' },
  { icon: <LocalParkingIcon sx={{ fontSize: 48 }} />, title: 'Парковка', description: 'Бесплатная охраняемая парковка' },
  { icon: <StarIcon sx={{ fontSize: 48 }} />, title: 'Высокий сервис', description: 'Индивидуальный подход к каждому гостю' },
];

const popularRooms = [
  {
    id: 1,
    title: 'Стандарт',
    description: 'Уютный номер с современным дизайном',
    price: '3500',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
  },
  {
    id: 2,
    title: 'Полулюкс',
    description: 'Просторный номер с дополнительными удобствами',
    price: '5500',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
  },
  {
    id: 3,
    title: 'Люкс',
    description: 'Номер премиум-класса с панорамным видом',
    price: '8500',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
  },
];

export default function Home() {
  return (
    <>
      <StructuredData type="hotel" data={{}} />
      <Hero />
      
      {/* Преимущества */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Почему выбирают нас
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Популярные номера */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Наши номера
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {popularRooms.map((room) => (
              <Grid item xs={12} md={4} key={room.id}>
                <RoomCard room={room} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button 
                  component={Link} 
                  href="/rooms" 
                  variant="contained" 
                  size="large"
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                    '&:hover': {
                      bgcolor: 'secondary.dark',
                    },
                  }}
                >
                  Все номера
                </Button>
          </Box>
        </Container>
      </Box>

      {/* О нас */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom>
            Отель "Люкс" в Богородске
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 3, fontSize: '1.1rem' }}>
            Добро пожаловать в отель "Люкс" – современную гостиницу в самом центре города Богородск. 
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

      {/* FAQ */}
      <FAQ />
    </>
  );
}


