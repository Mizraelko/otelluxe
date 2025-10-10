// Типы для Yandex Maps
interface YandexMapState {
  center: [number, number];
  zoom: number;
  controls?: string[];
}

interface YandexPlacemarkProperties {
  balloonContent?: string;
  hintContent?: string;
  iconContent?: string;
}

interface YandexPlacemarkOptions {
  preset?: string;
  iconColor?: string;
  iconImageHref?: string;
}

declare global {
  interface Window {
    ymaps: {
      ready: (callback: () => void) => void;
      Map: new (element: string, state: YandexMapState) => {
        geoObjects: {
          add: (placemark: unknown) => void;
        };
        setCenter: (center: [number, number], zoom?: number) => void;
        destroy: () => void;
      };
      Placemark: new (
        coordinates: [number, number], 
        properties: YandexPlacemarkProperties, 
        options: YandexPlacemarkOptions
      ) => {
        properties: {
          set: (key: string, value: unknown) => void;
        };
      };
    };
  }
}

export {};
