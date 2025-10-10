import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Отель "Люкс" - Богородск',
    short_name: 'Отель Люкс',
    description: 'Современный отель в центре Богородска с комфортабельными номерами',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait',
    icons: [],
    categories: ['travel', 'business', 'lifestyle'],
    lang: 'ru',
    dir: 'ltr',
    scope: '/',
    prefer_related_applications: false
  };
}
