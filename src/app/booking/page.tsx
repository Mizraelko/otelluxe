'use client';

import { Container, Box, Typography, Card, CardContent } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';

export default function BookingPage() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          Бронирование номера
        </Typography>
        
        <Card 
          elevation={3}
          sx={{ 
            mt: 4, 
            background: 'linear-gradient(135deg, rgba(197, 151, 100, 0.1) 0%, rgba(197, 151, 100, 0.05) 100%)',
            border: '2px solid',
            borderColor: 'secondary.main',
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 6 }, textAlign: 'center' }}>
            <Box sx={{ mb: 4 }}>
              <PhoneInTalkIcon 
                sx={{ 
                  fontSize: 80, 
                  color: 'secondary.main',
                  animation: 'pulse 2s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.7 },
                  }
                }} 
              />
            </Box>

            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Для бронирования номера
            </Typography>

            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4, 
                color: 'text.secondary',
                lineHeight: 1.7,
                fontSize: { xs: '1.1rem', md: '1.3rem' }
              }}
            >
              позвоните на номер круглосуточной стойки администрации:
            </Typography>

            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                mb: 3,
                flexWrap: 'wrap'
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 32, color: 'secondary.main' }} />
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'error.main',
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', md: '1.3rem' }
                }}
              >
                Круглосуточно
              </Typography>
            </Box>

            <Box 
              component="a" 
              href="tel:+79877578323"
              sx={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
                textDecoration: 'none',
                bgcolor: 'secondary.main',
                color: 'white',
                px: { xs: 3, md: 5 },
                py: { xs: 2, md: 3 },
                borderRadius: 3,
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 700,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(197, 151, 100, 0.3)',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 30px rgba(197, 151, 100, 0.5)',
                  bgcolor: 'secondary.dark',
                }
              }}
            >
              <PhoneIcon sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} />
              +7 (987) 757-83-23
            </Box>

            <Typography 
              variant="body1" 
              sx={{ 
                mt: 4, 
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Наши администраторы помогут вам подобрать подходящий номер и ответят на все вопросы
            </Typography>
          </CardContent>
        </Card>

        <Box 
          sx={{ 
            mt: 5, 
            p: { xs: 2, md: 3 }, 
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 1
          }}
        >
          <Typography 
            variant="h6" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: 'primary.main',
              mb: 2
            }}
          >
            ℹ️ Информация о бронировании
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 1.5 }}>
            • Регистрация гостей с 14:00, выезд до 12:00
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 1.5 }}>
            • Завтрак включен в стоимость всех номеров
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 1.5 }}>
            • Отмена бронирования без штрафа возможна за 24 часа до заезда
          </Typography>
          <Typography variant="body1">
            • При раннем заезде или позднем выезде возможна доплата
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


