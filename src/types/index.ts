export interface Room {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  images: readonly string[];
  amenities: readonly string[];
  area: number;
  capacity: number;
  rooms: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface HowToData {
  name: string;
  description: string;
  steps: HowToStep[];
}

export interface StructuredDataProps {
  type: 'hotel' | 'room' | 'breadcrumb' | 'faq' | 'localBusiness' | 'howTo';
  data?: Room | BreadcrumbItem[] | FAQItem[] | HowToData | Record<string, unknown>;
}

