import { Container, Box, Typography, Grid, Card, CardContent, Link, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VKIcon from '@/components/VKIcon';
import YandexMap from '@/components/YandexMap';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты - Отель "Люкс" Богородск',
  description: 'Контактная информация отеля "Люкс" в Богородске: адрес, телефон, email. Как нас найти на карте.',
};

export default function ContactsPage() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Контакты
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}>
          Мы всегда рады ответить на ваши вопросы и помочь с бронированием
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <PhoneIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Телефон
                </Typography>
                <Link 
                  href="tel:+78311234567" 
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  <Typography variant="body1" color="primary.main" fontWeight="bold">
                    +7 (831) 123-45-67
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Звонки принимаются круглосуточно
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <EmailIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Email
                </Typography>
                <Link 
                  href="mailto:info@otel-luxe.ru" 
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  <Typography variant="body1" color="primary.main" fontWeight="bold">
                    info@otel-luxe.ru
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Ответим в течение 24 часов
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <LocationOnIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Адрес
                </Typography>
                <Typography variant="body1" color="primary.main" fontWeight="bold">
                  г. Богородск
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  ул. Центральная, 1
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <AccessTimeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Режим работы
                </Typography>
                <Typography variant="body1" color="primary.main" fontWeight="bold">
                  Круглосуточно
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Регистрация с 14:00, выезд до 12:00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Мы в социальных сетях
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <IconButton
              component={Link}
              href="https://vk.com/otel_luxe_bogorodsk"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
                width: 64,
                height: 64,
              }}
              aria-label="Мы в ВКонтакте"
            >
              <VKIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Как нас найти
          </Typography>
          <YandexMap />
        </Box>

        <Box sx={{ p: 4, bgcolor: 'background.default', borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            Как добраться
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom color="primary.main">
                🚗 На автомобиле
              </Typography>
              <Typography variant="body1">
                От трассы М7 поверните на Богородск, следуйте по главной улице до центра города. 
                Отель находится в самом центре, рядом с площадью.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom color="primary.main">
                🚌 Общественным транспортом
              </Typography>
              <Typography variant="body1">
                От автовокзала автобусы №5, №12 до остановки &quot;Центр&quot;. 
                От остановки 2 минуты пешком до отеля.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom color="primary.main">
                🚂 От ж/д вокзала
              </Typography>
              <Typography variant="body1">
                Расстояние от вокзала 3 км. Доехать можно на такси за 10 минут. 
                Также доступен наш трансфер (по предварительной договоренности).
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom color="primary.main">
                ✈️ От аэропорта Нижний Новгород
              </Typography>
              <Typography variant="body1">
                Расстояние 45 км. На такси - около 40 минут. 
                Предоставляем трансфер от аэропорта по предварительному заказу.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}


