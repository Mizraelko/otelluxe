import { Container, Box, Typography, Grid, Card, CardContent, Link, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// VK Icon Component
const VKIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.6-1.496c.612-.19 1.398.948 2.23 1.368.612.312 1.073.243 1.073.243l2.23-.032s1.168-.073.614-1.001c-.045-.073-.324-.681-1.668-1.927-1.408-1.308-1.22-.109.478-3.351.326-.635.456-1.069.416-1.242-.056-.237-.4-.178-.4-.178l-2.44.015s-.181-.025-.315.056c-.131.078-.212.262-.212.262s-.382 1.019-.889 1.886c-1.07 1.812-1.498 1.908-1.673 1.797-.408-.257-.307-1.03-.307-1.581 0-1.719.26-2.432-.51-2.617-.256-.062-.445-.103-1.1-.11-.841-.008-1.551.003-1.953.167-.267.109-.473.351-.347.365.158.018.516.095.705.347.24.32.231 1.04.231 1.04s.137 2.032-.319 2.281c-.314.169-.746-.175-1.675-1.797-.474-.792-.833-1.667-.833-1.667s-.069-.17-.192-.262c-.149-.109-.357-.073-.357-.073l-2.32.015s-.348.01-.477.164c-.115.133-.009.407-.009.407s1.785 4.166 3.8 6.266c1.853 1.951 3.957 1.822 3.957 1.822h.942z"/>
  </svg>
);
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
                От автовокзала автобусы №5, №12 до остановки "Центр". 
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


