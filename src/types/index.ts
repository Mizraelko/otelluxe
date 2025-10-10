// Основные типы для приложения

export interface HotelData {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Room {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  amenities: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface StructuredDataItem {
  name: string;
  url?: string;
  description?: string;
}

// Типы для Yandex Maps
export interface YandexMapState {
  center: [number, number];
  zoom: number;
  controls?: string[];
}

export interface YandexPlacemarkProperties {
  balloonContent?: string;
  hintContent?: string;
  iconContent?: string;
}

export interface YandexPlacemarkOptions {
  preset?: string;
  iconColor?: string;
  iconImageHref?: string;
}

// Типы для компонентов
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export interface StructuredDataProps {
  type: 'hotel' | 'room' | 'breadcrumb' | 'faq' | 'localBusiness';
  data: HotelData | Room | BreadcrumbItem[] | FAQItem[] | Record<string, unknown>;
}

// Типы для форм
export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: string;
  comments: string;
}

// Типы для навигации
export interface NavigationItem {
  label: string;
  href: string;
}

// Типы для тем
export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}
