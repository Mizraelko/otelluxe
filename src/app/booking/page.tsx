'use client';

import { Container, Box, Typography, TextField, Button, Grid, MenuItem, Card, CardContent } from '@mui/material';
import { useState } from 'react';

const roomTypes = [
  { value: 'standard-single', label: 'Стандарт одноместный - от 2800₽' },
  { value: 'standard-double', label: 'Стандарт двухместный - от 3500₽' },
  { value: 'semi-lux', label: 'Полулюкс - от 5500₽' },
  { value: 'lux', label: 'Люкс - от 8500₽' },
  { value: 'family', label: 'Семейный номер - от 7000₽' },
  { value: 'apartments', label: 'Апартаменты - от 9500₽' },
];

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: '1',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за бронирование! Мы свяжемся с вами в ближайшее время.');
    console.log('Booking data:', formData);
  };

  return (
    <Box sx={{ py: 6, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Бронирование номера
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Заполните форму, и мы свяжемся с вами для подтверждения бронирования
        </Typography>

        <Card>
          <CardContent sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Ваше имя"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Телефон"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Дата заезда"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Дата выезда"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={8}>
                  <TextField
                    fullWidth
                    select
                    label="Тип номера"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  >
                    {roomTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    select
                    label="Количество гостей"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    variant="outlined"
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <MenuItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'гость' : 'гостя'}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Комментарии"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    placeholder="Особые пожелания, дополнительные услуги..."
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5, fontSize: '1.1rem' }}
                  >
                    Отправить заявку на бронирование
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>

        <Box sx={{ mt: 4, p: 3, bgcolor: 'info.light', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            ℹ️ Информация о бронировании
          </Typography>
          <Typography variant="body2" paragraph>
            • Регистрация гостей с 14:00, выезд до 12:00
          </Typography>
          <Typography variant="body2" paragraph>
            • Завтрак включен в стоимость всех номеров
          </Typography>
          <Typography variant="body2" paragraph>
            • Отмена бронирования без штрафа возможна за 24 часа до заезда
          </Typography>
          <Typography variant="body2">
            • При раннем заезде или позднем выезде возможна доплата
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


