'use client';

import { useMemo, useState } from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RoomCard from '@/components/RoomCard';
import { Room } from '@/types';

interface RoomsCarouselProps {
  rooms: Room[];
}

export default function RoomsCarousel({ rooms }: RoomsCarouselProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  const cardsPerView = useMemo(() => {
    if (isSmall) return 1;
    if (isMedium) return 2;
    return 3;
  }, [isSmall, isMedium]);

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, rooms.length - cardsPerView);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <Box position="relative">
      <Box sx={{ overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            transition: 'transform 0.4s ease',
            transform: `translateX(-${(index * 100) / cardsPerView}%)`,
          }}
        >
          {rooms.map((room) => (
            <Box
              key={room.id}
              sx={{
                flex: `0 0 calc(${100 / cardsPerView}% - ${theme.spacing(3)})`,
                minWidth: 0,
              }}
            >
              <RoomCard room={room} />
            </Box>
          ))}
        </Box>
      </Box>

      {rooms.length > cardsPerView && (
        <>
          <IconButton
            onClick={handlePrev}
            aria-label="Назад"
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 8, md: -24 },
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': { bgcolor: 'background.default' },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            aria-label="Вперёд"
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: 8, md: -24 },
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': { bgcolor: 'background.default' },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
}

