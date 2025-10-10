'use client';

import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

interface Room {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="240"
        image={room.image}
        alt={room.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" gutterBottom>
          {room.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {room.description}
        </Typography>
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" color="primary.main" fontWeight="bold">
            от {room.price} ₽/ночь
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            href="/booking"
          >
            Забронировать
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}


