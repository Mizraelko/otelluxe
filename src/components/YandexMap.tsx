'use client';

import { Box } from '@mui/material';
import { Suspense, useState, useEffect, useMemo } from 'react';

function MapComponent() {
  const [mounted, setMounted] = useState(false);
  const coordinates: [number, number] = useMemo(() => [56.1039, 43.5122], []);

  useEffect(() => {
    setMounted(true);
    
    // Динамически загружаем Яндекс.Карты для избежания SSR проблем
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY || 'ВАШ_API_KEY_ЯНДЕКС_КАРТ'}&lang=ru_RU&load=package.full`;
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.ymaps) {
        // @ts-ignore
        window.ymaps.ready(() => {
          // @ts-ignore
          const map = new window.ymaps.Map('yandex-map', {
            center: coordinates,
            zoom: 15
          });
          
          // @ts-ignore
          const placemark = new window.ymaps.Placemark(coordinates, {
            hintContent: 'Отель "Люкс"',
            balloonContent: 'Отель "Люкс" - Богородск, ул. Центральная, 1'
          }, {
            preset: 'islands#redHotelIcon'
          });
          
          map.geoObjects.add(placemark);
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      // Очистка при размонтировании
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [coordinates]);

  if (!mounted) {
    return (
      <Box sx={{ width: '100%', height: '450px', bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2 }}>
        Загрузка карты...
      </Box>
    );
  }

  return (
    <Box 
      id="yandex-map" 
      sx={{ 
        width: '100%', 
        height: '450px', 
        borderRadius: 2, 
        overflow: 'hidden',
        bgcolor: 'grey.200'
      }} 
    />
  );
}

export default function YandexMap() {
  return (
    <Box sx={{ width: '100%', height: '450px', borderRadius: 2, overflow: 'hidden' }}>
      <Suspense fallback={
        <Box sx={{ 
          width: '100%', 
          height: '100%', 
          bgcolor: 'grey.200', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: 2
        }}>
          Загрузка карты...
        </Box>
      }>
        <MapComponent />
      </Suspense>
    </Box>
  );
}

