'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/contacts';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 480, md: 600 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Image
        src="/images/hero/hero-main.webp"
        alt={`Фасад ${SITE_CONFIG.name} в Богородске`}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        style={{
          objectFit: 'cover',
          filter: 'brightness(0.55)',
        }}
      />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ maxWidth: 700, color: 'white' }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 600,
              mb: 2,
              textShadow: (theme) => theme.palette.hero.textShadow,
            }}
          >
            Добро пожаловать в {SITE_CONFIG.name}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.95,
              textShadow: (theme) => theme.palette.hero.textShadowSmall,
            }}
          >
            Комфорт и уют в сердце Богородска
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'stretch', sm: 'flex-start' },
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              href="/booking"
              sx={{
                px: { xs: 3, sm: 4 },
                py: 1.5,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                minWidth: { xs: 'auto', sm: 200 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              Забронировать номер
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/rooms"
              sx={{
                px: { xs: 3, sm: 4 },
                py: 1.5,
                borderColor: (theme) => theme.palette.hero.buttonBorder,
                color: 'white',
                backgroundColor: (theme) => theme.palette.hero.buttonBackground,
                backdropFilter: 'blur(10px)',
                fontWeight: 600,
                minWidth: { xs: 'auto', sm: 200 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: (theme) => theme.palette.hero.buttonBackgroundHover,
                  backdropFilter: 'blur(15px)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Посмотреть номера
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}