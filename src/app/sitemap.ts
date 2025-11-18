import { MetadataRoute } from 'next';
import { PAGE_METADATA, SEO_CONFIG } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return Object.values(PAGE_METADATA).map((page) => {
    const url =
      page.path === '/'
        ? SEO_CONFIG.site.url
        : `${SEO_CONFIG.site.url}${page.path}`;

    // Определяем приоритет и частоту обновления в зависимости от страницы
    let priority: number = 0.8;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';

    if (page.path === '/') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (page.path === '/rooms') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (page.path === '/booking') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else {
      priority = 0.8;
      changeFrequency = 'monthly';
    }

    return {
      url,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });
}


