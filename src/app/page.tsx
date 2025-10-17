import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import Hero from '@/components/Hero';
import RoomCard from '@/components/RoomCard';
import StructuredData from '@/components/StructuredData';
import StarIcon from '@mui/icons-material/Star';
import WifiIcon from '@mui/icons-material/Wifi';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { ROOMS } from '@/config/rooms';

const features = [
  { icon: <WifiIcon sx={{ fontSize: 48 }} />, title: 'Бесплатный Wi-Fi', description: 'Высокоскоростной интернет во всех номерах' },
  { icon: <BusinessCenterIcon sx={{ fontSize: 48 }} />, title: 'Бизнес-центр', description: 'Конференц-зал и переговорные комнаты' },
  { icon: <LocalParkingIcon sx={{ fontSize: 48 }} />, title: 'Парковка', description: 'Бесплатная охраняемая парковка' },
  { icon: <StarIcon sx={{ fontSize: 48 }} />, title: 'Высокий сервис', description: 'Индивидуальный подход к каждому гостю' },
];

// Use all rooms for homepage display
const popularRooms = ROOMS;

export default function Home() {
  return (
    <>
      <StructuredData type="hotel" />
      <Hero />
      
      {/* Преимущества */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
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
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
          <Typography variant="h2" align="center" gutterBottom>
            Наши номера
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {popularRooms.map((room) => (
              <Grid item xs={12} md={6} key={room.id}>
                <RoomCard room={room} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* О нас */}
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


