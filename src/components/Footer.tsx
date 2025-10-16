'use client';

import { Box, Container, Grid, Typography, Link as MuiLink, IconButton } from '@mui/material';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VKIcon from './VKIcon';

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
              Отель &quot;Люкс&quot;
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
                <MuiLink 
                  href="tel:+79877578323" 
                  color="inherit" 
                  underline="hover"
                  sx={{ textDecoration: 'none' }}
                >
                  <Typography variant="body2">+7 (987) 757-83-23</Typography>
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <MuiLink 
                  href="mailto:luxgostevoidom@yandex.ru" 
                  color="inherit" 
                  underline="hover"
                  sx={{ textDecoration: 'none' }}
                >
                  <Typography variant="body2">luxgostevoidom@yandex.ru</Typography>
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">г. Богородск, ул. Ленина, 50</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                <Typography variant="body2">Мы в соцсетях:</Typography>
                <IconButton
                  component={Link}
                  href="https://vk.com/id412614778"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                  aria-label="Мы в ВКонтакте"
                >
                  <VKIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Отель &quot;Люкс&quot; Богородск. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


