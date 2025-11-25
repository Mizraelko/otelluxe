'use client';

import React, { useState } from 'react';
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
} from '@mui/material';
import Link from 'next/link';
import HotelIcon from '@mui/icons-material/Hotel';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import VKIcon from './VKIcon';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { CONTACTS, SITE_CONFIG, VK_COLORS } from '@/config/contacts';

const HEADER_STYLES = {
  logo: {
    fontWeight: 700,
    fontSize: '1.6rem',
    flexGrow: { xs: 1, md: 0 },
  },
  navigationButton: {
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
  },
  vkButton: {
    color: VK_COLORS.primary,
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
  },
  phoneInfo: {
    fontSize: { xs: '0.6rem', lg: '0.65rem' },
    lineHeight: 1.1,
    textAlign: 'center' as const,
    wordBreak: 'break-word' as const,
    transition: 'color 0.3s ease-in-out',
  },
} as const;

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

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
        bgcolor: (theme) => theme.palette.header.background,
        color: (theme) => theme.palette.header.text,
        backdropFilter: 'blur(20px)',
        boxShadow: (theme) => theme.palette.header.shadow,
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
            <HotelIcon sx={{ 
              mr: 1, 
              fontSize: 36, 
              color: 'primary.main'
            }} />
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Typography
                component="div"
                variant="h6"
                sx={{
                  ...HEADER_STYLES.logo,
                  color: 'primary.main',
                }}
              >
                {SITE_CONFIG.name}
              </Typography>
            </Link>
          </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navigationItems.map((item) => (
              <Button 
                key={item.href}
                component={Link} 
                href={item.href} 
                sx={{ 
                  color: (theme) => theme.palette.header.text,
                  ...HEADER_STYLES.navigationButton,
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.header.hoverBackground,
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
              href={CONTACTS.social.vk.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ...HEADER_STYLES.vkButton,
                size: { xs: 'small', sm: 'medium', md: 'small', lg: 'medium' },
                '&:hover': {
                  backgroundColor: VK_COLORS.hoverBackground,
                  color: VK_COLORS.hover,
                  boxShadow: 'none',
                },
                '&:focus': {
                  boxShadow: 'none',
                  outline: 'none',
                },
                '& svg': {
                  fill: VK_COLORS.primary,
                  color: VK_COLORS.primary,
                },
                '&:hover svg': {
                  fill: VK_COLORS.hover,
                  color: VK_COLORS.hover,
                },
              }}
              aria-label={`Мы в ${CONTACTS.social.vk.name}`}
            >
              <VKIcon />
            </IconButton>
            
            {/* Yandex Rating Badge */}
            <Box
              component="iframe"
              src={
                isDarkMode
                  ? 'https://yandex.ru/sprav/widget/rating-badge/1742070480?type=rating&theme=dark'
                  : 'https://yandex.ru/sprav/widget/rating-badge/1742070480?type=rating'
              }
              width={150}
              height={50}
              sx={{
                border: 0,
                display: { xs: 'none', sm: 'block' },
              }}
              loading="lazy"
              title="Рейтинг отеля на Яндексе"
            />
            
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
            
            {/* Mobile Menu Button - показываем только на мобильных */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
                sx={{ 
                  ml: 1, 
                  width: 48, 
                  height: 48, 
                  minWidth: 48,
                }}
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
            </Box>
            
            {/* Desktop Booking Button - показываем только на десктопе */}
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              href="/booking"
              sx={{
                display: { xs: 'none', md: 'block' },
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.8rem', lg: '0.9rem' },
                px: { xs: 2, sm: 3, md: 2, lg: 3 },
                py: 1,
                minWidth: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' },
                ...HEADER_STYLES.navigationButton,
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
          </Box>
          
        </Toolbar>
      </Container>

      {/* 24/7 Reception Phone - Responsive */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: 4,
          right: { xs: 8, sm: 16 },
          display: { xs: 'none', md: 'none', xl: 'flex' },
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
            ...HEADER_STYLES.phoneInfo,
            color: (theme) => theme.palette.header.text,
          }}
        >
          <Box component="span" sx={{ color: '#ff4444', fontWeight: 600 }}>
            Круглосуточно
          </Box>
          {' '}стойка администрации
        </Typography>
        <Box
          component="a"
          href={CONTACTS.phone.link}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.3,
            fontSize: { xs: '0.7rem', lg: '0.8rem' },
            fontWeight: 700,
            color: (theme) => theme.palette.header.text,
            textDecoration: 'none',
            transition: 'color 0.3s ease-in-out',
            mt: 1,
            '&:hover': {
              color: 'secondary.light',
            }
          }}
        >
          <PhoneIcon sx={{ fontSize: { xs: '0.6rem', lg: '0.7rem' } }} />
          {CONTACTS.phone.display}
        </Box>
      </Box>
    </AppBar>
  );
}


