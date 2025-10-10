'use client';

import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Link from 'next/link';
import HotelIcon from '@mui/icons-material/Hotel';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <HotelIcon sx={{ mr: 1, fontSize: 32, color: 'inherit' }} />
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              mr: 4,
              fontWeight: 700,
              fontSize: '1.5rem',
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            Отель "Люкс"
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button component={Link} href="/" sx={{ color: 'inherit' }}>
              Главная
            </Button>
            <Button component={Link} href="/rooms" sx={{ color: 'inherit' }}>
              Номера
            </Button>
            <Button component={Link} href="/services" sx={{ color: 'inherit' }}>
              Услуги
            </Button>
            <Button component={Link} href="/contacts" sx={{ color: 'inherit' }}>
              Контакты
            </Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              href="/booking"
            >
              Забронировать
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


