'use client';

import { Card, CardContent, Typography, Button, Box, Chip, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import SecurityIcon from '@mui/icons-material/Security';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import HotTubIcon from '@mui/icons-material/HotTub';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import { Room } from '@/types';

interface RoomCardProps {
  room: Room;
}

const getAmenityIcon = (amenity: string) => {
  const iconProps = { sx: { fontSize: 16 } };
  
  switch (amenity.toLowerCase()) {
    case 'wi-fi':
    case 'wifi':
      return <WifiIcon {...iconProps} />;
    case 'кондиционер':
      return <AcUnitIcon {...iconProps} />;
    case 'телевизор':
      return <TvIcon {...iconProps} />;
    case 'сейф':
      return <SecurityIcon {...iconProps} />;
    case 'мини-бар':
    case 'мини-холодильник':
      return <LocalBarIcon {...iconProps} />;
    case 'джакузи':
      return <HotTubIcon {...iconProps} />;
    case 'курить можно':
      return <SmokeFreeIcon {...iconProps} />;
    case 'детская кроватка':
      return <ChildCareIcon {...iconProps} />;
    case 'кухня':
      return <KitchenIcon {...iconProps} />;
    case 'стиральная машина':
      return <LocalLaundryServiceIcon {...iconProps} />;
    default:
      return <WifiIcon {...iconProps} />;
  }
};

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'relative', height: 240, overflow: 'hidden' }}>
        <Image
          src={room.image}
          alt={room.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={room.id <= 2} // Приоритет для первых двух изображений
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" gutterBottom>
          {room.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {room.description}
        </Typography>
        
        {/* Amenities */}
        {room.amenities && room.amenities.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Удобства:
            </Typography>
            <Grid container spacing={2}>
              {room.amenities.map((amenity, index) => (
                <Grid item key={index}>
                  <Chip
                    icon={getAmenityIcon(amenity)}
                    label={amenity}
                    size="small"
                    variant="outlined"
                    sx={{ 
                      fontSize: '0.75rem',
                      height: '32px',
                      padding: '6px 12px',
                      '& .MuiChip-icon': {
                        fontSize: '16px',
                        marginLeft: '8px'
                      },
                      '& .MuiChip-label': {
                        paddingLeft: '8px',
                        paddingRight: '8px'
                      }
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        
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


