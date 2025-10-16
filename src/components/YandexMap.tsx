'use client';

import { Box } from '@mui/material';
import { Suspense, useState, useEffect, useMemo } from 'react';
import { CONTACTS, SITE_CONFIG } from '@/config/contacts';

function MapComponent() {
  const [mounted, setMounted] = useState(false);
  // Используем координаты из конфигурации
  const coordinates: [number, number] = useMemo(() => [
    CONTACTS.coordinates.latitude, 
    CONTACTS.coordinates.longitude
  ], []);

  useEffect(() => {
    setMounted(true);
    
    // Динамически загружаем Яндекс.Карты для избежания SSR проблем
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${SITE_CONFIG.yandexMapsApiKey}&lang=ru_RU&load=package.full`;
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
          
          // Ставим метку точно на координаты дома 223Б
          // @ts-ignore
          const placemark = new window.ymaps.Placemark(coordinates, {
            hintContent: SITE_CONFIG.name,
            balloonContent: `
              <div style="padding: 15px; font-family: Arial, sans-serif; max-width: 300px;">
                <div style="text-align: center; margin-bottom: 15px;">
                  <h3 style="margin: 0; color: #1976d2; font-size: 18px;">${SITE_CONFIG.name}</h3>
                  <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">Гостевой дом</p>
                </div>
                
                <div style="border-top: 1px solid #eee; padding-top: 10px;">
                  <div style="margin-bottom: 8px;">
                    <span style="color: #666; font-size: 12px;">📍</span>
                    <span style="margin-left: 5px; font-size: 14px;">${CONTACTS.address.full}</span>
                  </div>
                  <div style="margin-bottom: 8px;">
                    <span style="color: #666; font-size: 12px;">📞</span>
                    <a href="tel:${CONTACTS.phone.link.replace('tel:', '')}" style="margin-left: 5px; color: #1976d2; text-decoration: none; font-size: 14px;">${CONTACTS.phone.display}</a>
                  </div>
                  <div style="margin-bottom: 8px;">
                    <span style="color: #666; font-size: 12px;">✉️</span>
                    <a href="mailto:${CONTACTS.email.link.replace('mailto:', '')}" style="margin-left: 5px; color: #1976d2; text-decoration: none; font-size: 14px;">${CONTACTS.email.display}</a>
                  </div>
                  <div style="margin-bottom: 15px;">
                    <span style="color: #666; font-size: 12px;">🕐</span>
                    <span style="margin-left: 5px; color: #4caf50; font-size: 14px; font-weight: bold;">Круглосуточно</span>
                  </div>
                </div>
                
                <div style="text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
                  <a href="tel:${CONTACTS.phone.link.replace('tel:', '')}" style="background: #1976d2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold; font-size: 14px; transition: background 0.3s;" onmouseover="this.style.background='#1565c0'" onmouseout="this.style.background='#1976d2'">Позвонить</a>
                </div>
              </div>
            `
          }, {
            preset: 'islands#redIcon', // Стандартная красная метка Яндекса
            iconColor: '#ff0000'
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

