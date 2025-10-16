'use client';

import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  IconButton, 
  Menu, 
  MenuItem,
  useMediaQuery,
  useTheme as useMuiTheme
} from '@mui/material';
import Link from 'next/link';
import HotelIcon from '@mui/icons-material/Hotel';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import VKIcon from './VKIcon';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const navigationItems = [
    { label: 'Главная', href: '/' },
    { label: 'Номера', href: '/rooms' },
    { label: 'Услуги', href: '/services' },
    { label: 'Контакты', href: '/contacts' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: scrolled 
          ? (isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)')
          : 'primary.main',
        color: scrolled 
          ? (isDarkMode ? 'white' : 'primary.main')
          : 'primary.contrastText',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        boxShadow: scrolled ? (isDarkMode ? '0 2px 20px rgba(0, 0, 0, 0.5)' : '0 2px 20px rgba(0, 0, 0, 0.1)') : 'none',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
            <HotelIcon sx={{ 
              mr: 1, 
              fontSize: 36, 
              color: scrolled 
                ? (isDarkMode ? 'white' : 'primary.main')
                : 'inherit'
            }} />
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                fontWeight: 700,
                fontSize: '1.6rem',
                textDecoration: 'none',
                color: scrolled 
                  ? (isDarkMode ? 'white' : 'primary.main')
                  : 'inherit',
                flexGrow: { xs: 1, md: 0 },
                '&:hover': {
                  color: scrolled 
                    ? (isDarkMode ? '#ffeb3b' : 'primary.dark')
                    : 'inherit',
                }
              }}
            >
              Отель &quot;Люкс&quot;
            </Typography>
          </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navigationItems.map((item) => (
              <Button 
                key={item.href}
                component={Link} 
                href={item.href} 
                sx={{ 
                  color: scrolled 
                    ? (isDarkMode ? 'white' : 'primary.main')
                    : 'inherit',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: scrolled 
                      ? (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(25, 118, 210, 0.1)')
                      : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: 'none',
                  },
                  '&:focus': {
                    boxShadow: 'none',
                    outline: 'none',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 0.5, sm: 1, md: 0.5, lg: 1 },
            flexWrap: 'nowrap'
          }}>
            {/* VK Link */}
            <IconButton
              component={Link}
              href="https://vk.com/id412614778"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#0077FF', // Синий цвет VK
                size: { xs: 'small', sm: 'medium', md: 'small', lg: 'medium' },
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 119, 255, 0.1)', // Светло-синий фон при hover
                  color: '#0056CC', // Темнее синий при hover
                  boxShadow: 'none',
                },
                '&:focus': {
                  boxShadow: 'none',
                  outline: 'none',
                },
                '& svg': {
                  fill: '#0077FF', // Синий цвет для VK иконки
                  color: '#0077FF',
                },
                '&:hover svg': {
                  fill: '#0056CC', // Темнее синий при hover
                  color: '#0056CC',
                },
              }}
              aria-label="Мы в ВКонтакте"
            >
              <VKIcon />
            </IconButton>
            
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
            
            {/* Mobile Menu Button */}
            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMobileMenuOpen}
                  sx={{ ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={mobileMenuAnchor}
                  open={Boolean(mobileMenuAnchor)}
                  onClose={handleMobileMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  PaperProps={{
                    sx: {
                      bgcolor: 'background.paper',
                      minWidth: 200,
                      mt: 1,
                    }
                  }}
                >
                  {navigationItems.map((item) => (
                    <MenuItem 
                      key={item.href}
                      component={Link}
                      href={item.href}
                      onClick={handleMobileMenuClose}
                      sx={{
                        color: 'text.primary',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                        }
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                  <MenuItem 
                    component={Link}
                    href="/booking"
                    onClick={handleMobileMenuClose}
                    sx={{
                      color: 'primary.main',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                      }
                    }}
                  >
                    Забронировать
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                href="/booking"
                sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.8rem', lg: '0.9rem' },
                  px: { xs: 2, sm: 3, md: 2, lg: 3 },
                  py: 1,
                  minWidth: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' },
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: 'none',
                  },
                  '&:focus': {
                    boxShadow: 'none',
                    outline: 'none',
                  },
                }}
              >
                Забронировать
              </Button>
            )}
          </Box>
          
        </Toolbar>
      </Container>
      
      {/* 24/7 Reception Phone - Responsive */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: 4,
          right: { xs: 8, sm: 16 },
          display: { xs: 'none', md: 'none', xl: 'flex' }, // Показываем только на очень больших экранах
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
          px: 1,
          py: 0.5,
          maxWidth: { xs: '120px', lg: '150px' },
        }}
      >
        <Typography 
          variant="caption" 
          sx={{ 
            fontSize: { xs: '0.6rem', lg: '0.65rem' },
            lineHeight: 1.1,
            color: scrolled 
              ? (isDarkMode ? 'white' : 'primary.main')
              : 'primary.contrastText',
            textAlign: 'center',
            wordBreak: 'break-word',
            transition: 'color 0.3s ease-in-out',
          }}
        >
          <Box component="span" sx={{ color: '#ff4444', fontWeight: 600 }}>
            Круглосуточно
          </Box>
          {' '}стойка администрации
        </Typography>
        <Box
          component="a"
          href="tel:+79877578323"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.3,
            fontSize: { xs: '0.7rem', lg: '0.8rem' },
            fontWeight: 700,
            color: scrolled 
              ? (isDarkMode ? 'white' : 'primary.main')
              : 'primary.contrastText',
            textDecoration: 'none',
            transition: 'color 0.3s ease-in-out',
            mt: 1,
            '&:hover': {
              color: 'secondary.light',
            }
          }}
        >
          <PhoneIcon sx={{ fontSize: { xs: '0.6rem', lg: '0.7rem' } }} />
          +7 (987) 757-83-23
        </Box>
      </Box>
    </AppBar>
  );
}


