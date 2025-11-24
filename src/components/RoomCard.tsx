'use client';

import { useState, useEffect, useRef, type TouchEvent, type MouseEvent as ReactMouseEvent } from 'react';
import { Card, CardContent, Typography, Button, Box, Chip, Grid, Tooltip } from '@mui/material';
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
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BedIcon from '@mui/icons-material/Bed';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import WcIcon from '@mui/icons-material/Wc';
import ShowerIcon from '@mui/icons-material/Shower';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AirIcon from '@mui/icons-material/Air';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import IronIcon from '@mui/icons-material/Iron';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
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
    case 'телевидение':
    case 'телевизор':
      return <TvIcon {...iconProps} />;
    case 'телевизор по запросу':
      return <LiveTvIcon {...iconProps} />;
    case 'кондиционер':
      return <AcUnitIcon {...iconProps} />;
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
    case 'частная кухня':
      return <RestaurantMenuIcon {...iconProps} />;
    case 'кухонные принадлежности':
      return <SoupKitchenIcon {...iconProps} />;
    case 'кухня':
      return <KitchenIcon {...iconProps} />;
    case 'электроплита':
      return <ElectricBoltIcon {...iconProps} />;
    case 'утюг и гладильная доска':
      return <IronIcon {...iconProps} />;
    case 'стиральная машина':
      return <LocalLaundryServiceIcon {...iconProps} />;
    case 'микроволновая печь':
      return <MicrowaveIcon {...iconProps} />;
    case 'две односпальные кровати':
    case 'три односпальные кровати':
    case 'дополнительная односпальная кровать':
      return <SingleBedIcon {...iconProps} />;
    case 'одна двуспальная кровать':
      return <BedIcon {...iconProps} />;
    case 'постельные принадлежности':
      return <BedIcon {...iconProps} />;
    case 'чайный набор':
      return <EmojiFoodBeverageIcon {...iconProps} />;
    case 'раздельный санузел':
    case 'санузел':
      return <WcIcon {...iconProps} />;
    case 'душевая кабина':
    case 'душевая':
      return <ShowerIcon {...iconProps} />;
    case 'фен':
      return <AirIcon {...iconProps} />;
    case 'тапочки':
      return <FavoriteIcon {...iconProps} />;
    case 'банные принадлежности':
      return <BathtubIcon {...iconProps} />;
    case 'бутилированная вода':
      return <LocalDrinkIcon {...iconProps} />;
    case 'кулер с водой':
      return <WaterDropIcon {...iconProps} />;
    case 'холодильник':
      return <KitchenIcon {...iconProps} />;
    default:
      return <WifiIcon {...iconProps} />;
  }
};

const getAmenityTooltip = (amenity: string): string | null => {
  const lowerAmenity = amenity.toLowerCase();
  
  if (lowerAmenity === 'чайный набор') {
    return 'Чайник, чай, кофе, сахар, чайные принадлежности';
  }
  
  if (lowerAmenity === 'бутилированная вода') {
    return 'На этаже имеются кулеры с водой, в номерах стаканы, вода газированная и не газированная 0.5л';
  }
  
  return null;
};

export default function RoomCard({ room }: RoomCardProps) {
  const imageList = room.images && room.images.length > 0 ? room.images : [room.image];
  const totalImages = imageList.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const hoverMetricsRef = useRef({ width: 0 });

  useEffect(() => {
    setCurrentIndex(0);
  }, [totalImages]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const element = imageContainerRef.current;
    if (!element) return;
    const win: Window & typeof globalThis = window;

    const updateMetrics = () => {
      hoverMetricsRef.current.width = element.clientWidth;
    };

    updateMetrics();

    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(updateMetrics);
      resizeObserver.observe(element);
      return () => resizeObserver.disconnect();
    }

    win.addEventListener('resize', updateMetrics);
    return () => win.removeEventListener('resize', updateMetrics);
  }, [totalImages]);

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(pointer: fine)').matches || totalImages <= 1) return;

    const storedWidth = hoverMetricsRef.current.width;
    const width = storedWidth || event.currentTarget.clientWidth;
    if (!width) {
      return;
    }

    const relativeX = event.nativeEvent.offsetX;
    const sectorWidth = width / totalImages;
    const hoveredIndex = Math.min(totalImages - 1, Math.max(0, Math.floor(relativeX / sectorWidth)));

    if (hoveredIndex !== currentIndex) {
      setCurrentIndex(hoveredIndex);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0].clientX;
    const delta = touchEndX - touchStartX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setTouchStartX(null);
  };

  return (
    <Card
      id={`room-${room.id}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: (theme) => theme.palette.card.shadow,
        transition: 'box-shadow 0.2s ease',
        '&:hover': {
          boxShadow: (theme) => theme.palette.card.shadowHover,
        },
      }}
    >
      <Box
        ref={imageContainerRef}
        sx={{ 
          position: 'relative', 
          width: '100%',
          aspectRatio: '4/3',
          overflow: 'hidden', 
          borderTopLeftRadius: 4, 
          borderTopRightRadius: 4
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          if (totalImages > 1) {
            setCurrentIndex(0);
          }
        }}
      >
        {imageList.map((src, index) => (
          <Box
            key={src}
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          >
            <Image
              src={src}
              alt={`${room.title} фото ${index + 1}`}
              fill
              quality={65}
              loading={room.id <= 2 && index === 0 ? undefined : 'lazy'}
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 600px) calc(100vw - 32px), (max-width: 900px) calc(50vw - 24px), (max-width: 1200px) calc(50vw - 32px), 600px"
              priority={room.id <= 2 && index === 0}
            />
          </Box>
        ))}

        {totalImages > 1 && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              left: 16,
              right: 16,
              display: 'flex',
              gap: 1,
            }}
          >
            {imageList.map((_, index) => (
              <Box
                key={index}
                onMouseEnter={() => {
                  if (window.matchMedia('(pointer: fine)').matches) {
                    setCurrentIndex(index);
                  }
                }}
                onFocus={() => setCurrentIndex(index)}
                tabIndex={-1}
                sx={{
                  flex: 1,
                  height: 6,
                  borderRadius: 999,
                  backgroundColor: index === currentIndex ? 'primary.main' : 'rgba(255,255,255,0.5)',
                  opacity: index === currentIndex ? 1 : 0.4,
                  transition: 'opacity 0.2s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </Box>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ minHeight: { xs: 'auto', sm: '72px' }, mb: 1 }}>
          <Typography component="h3" variant="h5" gutterBottom align="center">
            {room.title}
          </Typography>
        </Box>
        
        {/* Площадь, количество человек и комнаты */}
        <Box sx={{ minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          {(room.area || room.capacity || room.rooms) && (
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 3, sm: 4, md: 6 }, flexWrap: 'wrap' }}>
              {room.area && (
                <Tooltip title={`Квадратных метров (${room.area})`} arrow>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'help' }}>
                    <SquareFootIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary" fontWeight={700}>
                      {room.area} м²
                    </Typography>
                  </Box>
                </Tooltip>
              )}
              {room.capacity && (
                <Tooltip title={`Количество человек (${room.capacity})`} arrow>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'help' }}>
                    <PeopleIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary" fontWeight={700}>
                      × {room.capacity}
                    </Typography>
                  </Box>
                </Tooltip>
              )}
              {room.rooms && (
                <Tooltip title={`Количество комнат (${room.rooms})`} arrow>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'help' }}>
                    <HomeIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary" fontWeight={700}>
                      {room.rooms} комн.
                    </Typography>
                  </Box>
                </Tooltip>
              )}
            </Box>
          )}
        </Box>

        {/* Description */}
        {room.description && (
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontWeight: 600,
                lineHeight: 1.5,
                textAlign: 'center',
                px: 1
              }}
            >
              {room.description}
            </Typography>
          </Box>
        )}

        {/* Amenities */}
        {room.amenities && room.amenities.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom fontWeight={700}>
              Удобства:
            </Typography>
            <Grid container spacing={2}>
              {room.amenities.map((amenity, index) => {
                const tooltipText = getAmenityTooltip(amenity);
                const hasTooltip = tooltipText !== null;
                
                const chip = (
                  <Chip
                    icon={getAmenityIcon(amenity)}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <span>{amenity}</span>
                        {hasTooltip && (
                          <HelpOutlineIcon 
                            className="help-icon"
                            sx={{ 
                              fontSize: '14px', 
                              opacity: 0.7,
                              ml: 0.5,
                              transition: 'all 0.2s ease-in-out',
                            }} 
                          />
                        )}
                      </Box>
                    }
                    size="small"
                    variant="outlined"
                    sx={{ 
                      fontSize: '0.75rem',
                      height: '32px',
                      padding: '6px 12px',
                      position: 'relative',
                      cursor: hasTooltip ? 'help' : 'default',
                      '& .MuiChip-icon': {
                        fontSize: '16px',
                        marginLeft: '8px'
                      },
                      '& .MuiChip-label': {
                        paddingLeft: '8px',
                        paddingRight: '8px'
                      },
                      '&:hover .help-icon': {
                        opacity: 1,
                        color: 'primary.main',
                        transform: 'scale(1.15)',
                      }
                    }}
                  />
                );
                
                return (
                  <Grid item key={index}>
                    {hasTooltip ? (
                      <Tooltip title={tooltipText} arrow placement="top">
                        <Box component="span" sx={{ display: 'inline-block' }}>
                          {chip}
                        </Box>
                      </Tooltip>
                    ) : (
                      chip
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}
        
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography 
            component="div"
            variant="body1" 
            color="primary.main" 
            fontWeight="bold"
            sx={{ fontSize: '1.25rem' }}
          >
            от {room.price} ₽/сутки
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


