'use client';

import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000000',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Отель "Люкс"
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Современная гостиница в центре Богородска. Комфорт и качественный сервис для наших гостей.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Навигация
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} href="/" color="inherit" underline="hover">
                Главная
              </MuiLink>
              <MuiLink component={Link} href="/rooms" color="inherit" underline="hover">
                Номера
              </MuiLink>
              <MuiLink component={Link} href="/services" color="inherit" underline="hover">
                Услуги
              </MuiLink>
              <MuiLink component={Link} href="/contacts" color="inherit" underline="hover">
                Контакты
              </MuiLink>
              <MuiLink component={Link} href="/booking" color="inherit" underline="hover">
                Бронирование
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Контакты
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+7 (831) 123-45-67</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">info@otel-luxe.ru</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">г. Богородск, ул. Центральная, 1</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Отель "Люкс" Богородск. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


