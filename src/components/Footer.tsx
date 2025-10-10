'use client';

import { Box, Container, Grid, Typography, Link as MuiLink, IconButton } from '@mui/material';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// VK Icon Component
const VKIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.6-1.496c.612-.19 1.398.948 2.23 1.368.612.312 1.073.243 1.073.243l2.23-.032s1.168-.073.614-1.001c-.045-.073-.324-.681-1.668-1.927-1.408-1.308-1.22-.109.478-3.351.326-.635.456-1.069.416-1.242-.056-.237-.4-.178-.4-.178l-2.44.015s-.181-.025-.315.056c-.131.078-.212.262-.212.262s-.382 1.019-.889 1.886c-1.07 1.812-1.498 1.908-1.673 1.797-.408-.257-.307-1.03-.307-1.581 0-1.719.26-2.432-.51-2.617-.256-.062-.445-.103-1.1-.11-.841-.008-1.551.003-1.953.167-.267.109-.473.351-.347.365.158.018.516.095.705.347.24.32.231 1.04.231 1.04s.137 2.032-.319 2.281c-.314.169-.746-.175-1.675-1.797-.474-.792-.833-1.667-.833-1.667s-.069-.17-.192-.262c-.149-.109-.357-.073-.357-.073l-2.32.015s-.348.01-.477.164c-.115.133-.009.407-.009.407s1.785 4.166 3.8 6.266c1.853 1.951 3.957 1.822 3.957 1.822h.942z"/>
  </svg>
);

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
                <MuiLink 
                  href="tel:+78311234567" 
                  color="inherit" 
                  underline="hover"
                  sx={{ textDecoration: 'none' }}
                >
                  <Typography variant="body2">+7 (831) 123-45-67</Typography>
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <MuiLink 
                  href="mailto:info@otel-luxe.ru" 
                  color="inherit" 
                  underline="hover"
                  sx={{ textDecoration: 'none' }}
                >
                  <Typography variant="body2">info@otel-luxe.ru</Typography>
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">г. Богородск, ул. Центральная, 1</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                <Typography variant="body2">Мы в соцсетях:</Typography>
                <IconButton
                  component={Link}
                  href="https://vk.com/otel_luxe_bogorodsk"
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
            © {new Date().getFullYear()} Отель "Люкс" Богородск. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


