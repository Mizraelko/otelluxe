export interface Room {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  images: readonly string[];
  amenities?: readonly string[];
  area?: number;
  capacity?: number;
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

export interface StructuredDataProps {
  type: 'hotel' | 'room' | 'breadcrumb' | 'faq' | 'localBusiness';
  data?: Room | BreadcrumbItem[] | FAQItem[] | Record<string, unknown>;
}

