'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '600px',
        backgroundImage: 'url(/images/hero/главная.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ maxWidth: '700px', color: 'white' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 600,
              mb: 2,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Добро пожаловать в Отель &quot;Люкс&quot;
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              opacity: 0.95,
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Комфорт и уют в сердце Богородска
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            flexWrap: 'wrap',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'stretch', sm: 'flex-start' }
          }}>
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
                minWidth: { xs: 'auto', sm: '200px' },
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
                borderColor: 'rgba(255, 255, 255, 0.8)',
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                fontWeight: 600,
                minWidth: { xs: 'auto', sm: '200px' },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
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