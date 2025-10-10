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
// VK Icon Component
const VKIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.6-1.496c.612-.19 1.398.948 2.23 1.368.612.312 1.073.243 1.073.243l2.23-.032s1.168-.073.614-1.001c-.045-.073-.324-.681-1.668-1.927-1.408-1.308-1.22-.109.478-3.351.326-.635.456-1.069.416-1.242-.056-.237-.4-.178-.4-.178l-2.44.015s-.181-.025-.315.056c-.131.078-.212.262-.212.262s-.382 1.019-.889 1.886c-1.07 1.812-1.498 1.908-1.673 1.797-.408-.257-.307-1.03-.307-1.581 0-1.719.26-2.432-.51-2.617-.256-.062-.445-.103-1.1-.11-.841-.008-1.551.003-1.953.167-.267.109-.473.351-.347.365.158.018.516.095.705.347.24.32.231 1.04.231 1.04s.137 2.032-.319 2.281c-.314.169-.746-.175-1.675-1.797-.474-.792-.833-1.667-.833-1.667s-.069-.17-.192-.262c-.149-.109-.357-.073-.357-.073l-2.32.015s-.348.01-.477.164c-.115.133-.009.407-.009.407s1.785 4.166 3.8 6.266c1.853 1.951 3.957 1.822 3.957 1.822h.942z"/>
  </svg>
);
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
            Отель "Люкс"
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
              href="https://vk.com/otel_luxe_bogorodsk"
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
    </AppBar>
  );
}


