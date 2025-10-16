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
        bgcolor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'primary.main',
        color: 'primary.contrastText',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
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
            Отель &quot;Люкс&quot;
          </Typography>
          
          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navigationItems.map((item) => (
              <Button 
                key={item.href}
                component={Link} 
                href={item.href} 
                sx={{ 
                  color: 'inherit',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* VK Link */}
            <IconButton
              component={Link}
              href="https://vk.com/id412614778"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'inherit',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
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
              >
                Забронировать
              </Button>
            )}
          </Box>
          
        </Toolbar>
      </Container>
      
      {/* 24/7 Reception Phone - Desktop Only - Right Corner */}
      {!isMobile && (
        <Box 
          sx={{ 
            position: 'absolute',
            top: 4,
            right: 16,
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
            px: 1,
            py: 0.5,
          }}
        >
          <Typography 
            variant="caption" 
            sx={{ 
              fontSize: '0.65rem',
              lineHeight: 1.1,
              color: 'primary.contrastText',
              textAlign: 'center',
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
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'primary.contrastText',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              mt: 1,
              '&:hover': {
                color: 'secondary.light',
              }
            }}
          >
            <PhoneIcon sx={{ fontSize: '0.7rem' }} />
            +7 (987) 757-83-23
          </Box>
        </Box>
      )}
    </AppBar>
  );
}


