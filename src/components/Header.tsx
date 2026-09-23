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
import { ICON_COLORS } from '@/config/iconColors';

const HEADER_STYLES = {
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
} as const;

export default function Header() {
  const { isDarkMode, themeMode, mounted, toggleTheme } = useTheme();
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
      <Container maxWidth="xl" sx={{ px: { xs: 1.5, sm: 2, lg: 3 } }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            height: 64,
            gap: { xs: 0.75, sm: 1, lg: 2 },
            flexWrap: 'nowrap',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <HotelIcon sx={{ 
              mr: { xs: 0.5, sm: 1 }, 
              fontSize: { xs: 22, sm: 28, lg: 36 }, 
              color: ICON_COLORS.hotel,
              flexShrink: 0,
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
                  fontWeight: 700,
                  fontSize: { xs: '0.82rem', sm: '1.15rem', md: '1.25rem', lg: '1.5rem' },
                  color: 'primary.main',
                  whiteSpace: 'nowrap',
                }}
              >
                {SITE_CONFIG.name}
              </Typography>
            </Link>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }, gap: { lg: 1, xl: 2 }, minWidth: 0 }}>
            {navigationItems.map((item) => (
              <Button 
                key={item.href}
                component={Link} 
                href={item.href} 
                sx={{ 
                  color: (theme) => theme.palette.header.text,
                  ...HEADER_STYLES.navigationButton,
                  px: { lg: 1, xl: 2 },
                  minWidth: 0,
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

          <Box sx={{ flexGrow: { xs: 1, lg: 0 } }} />

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 0.25, sm: 0.75, lg: 1 },
            flexWrap: 'nowrap',
            flexShrink: 0,
            minWidth: 0,
          }}>
            <Box
              component="a"
              href={CONTACTS.phone.link}
              aria-label={`Круглосуточная стойка администрации ${CONTACTS.phone.display}`}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', xl: 'column' },
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 0.5, xl: 0.25 },
                textDecoration: 'none',
                color: 'inherit',
                flexShrink: 0,
                px: { xs: 0.5, sm: 1 },
                py: 0.25,
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.header.hoverBackground,
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: { xs: 'none', sm: 'inline' },
                  color: '#ff4444',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  fontSize: { sm: '0.65rem', lg: '0.7rem' },
                }}
              >
                <Box component="span" sx={{ display: { xs: 'none', sm: 'inline', xl: 'none' } }}>
                  24/7
                </Box>
                <Box component="span" sx={{ display: { xs: 'none', xl: 'inline' } }}>
                  Круглосуточно
                </Box>
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.4,
                  fontWeight: 700,
                  fontSize: { xs: '0.72rem', sm: '0.78rem', lg: '0.85rem' },
                  color: (theme) => theme.palette.header.text,
                  whiteSpace: 'nowrap',
                  lineHeight: 1.2,
                }}
              >
                <PhoneIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: ICON_COLORS.phone }} />
                {CONTACTS.phone.display}
              </Box>
            </Box>

            <IconButton
              component={Link}
              href={CONTACTS.social.vk.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ...HEADER_STYLES.vkButton,
                display: { xs: 'none', sm: 'inline-flex' },
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
            
            {mounted ? (
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
                  display: { xs: 'none', lg: 'block' },
                  flexShrink: 0,
                }}
                loading="lazy"
                title="Рейтинг отеля на Яндексе"
              />
            ) : (
              <Box
                sx={{
                  width: 150,
                  height: 50,
                  display: { xs: 'none', lg: 'block' },
                  flexShrink: 0,
                }}
              />
            )}
            
            <ThemeToggle isDarkMode={isDarkMode} themeMode={themeMode} onToggle={toggleTheme} />
            
            <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
                sx={{ 
                  width: { xs: 40, sm: 48 }, 
                  height: { xs: 40, sm: 48 }, 
                  minWidth: { xs: 40, sm: 48 },
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
                  href={CONTACTS.social.vk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileMenuClose}
                  sx={{ display: { xs: 'flex', sm: 'none' } }}
                >
                  {CONTACTS.social.vk.name}
                </MenuItem>
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
            
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              href="/booking"
              sx={{
                display: { xs: 'none', lg: 'inline-flex' },
                fontSize: { lg: '0.85rem', xl: '0.9rem' },
                px: { lg: 2, xl: 3 },
                py: 1,
                whiteSpace: 'nowrap',
                flexShrink: 0,
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
    </AppBar>
  );
}
