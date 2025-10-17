import Script from 'next/script';
import { SEO_CONFIG } from '@/config/seo';
import { StructuredDataProps, Room, BreadcrumbItem, FAQItem } from '@/types';

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'hotel':
        return {
          "@context": "https://schema.org",
          "@type": "Hotel",
          "name": SEO_CONFIG.hotel.name,
          "description": SEO_CONFIG.site.description,
          "url": SEO_CONFIG.site.url,
          "telephone": SEO_CONFIG.hotel.contact.phone,
          "email": SEO_CONFIG.hotel.contact.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": SEO_CONFIG.hotel.address.street,
            "addressLocality": SEO_CONFIG.hotel.address.city,
            "addressRegion": SEO_CONFIG.hotel.address.region,
            "postalCode": SEO_CONFIG.hotel.address.postalCode,
            "addressCountry": SEO_CONFIG.hotel.address.country
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": SEO_CONFIG.hotel.coordinates.latitude,
            "longitude": SEO_CONFIG.hotel.coordinates.longitude
          },
          "starRating": {
            "@type": "Rating",
            "ratingValue": SEO_CONFIG.hotel.rating.value.toString(),
            "bestRating": SEO_CONFIG.hotel.rating.max.toString()
          },
          "amenityFeature": SEO_CONFIG.hotel.amenities.map(amenity => ({
            "@type": "LocationFeatureSpecification",
            "name": amenity,
            "value": true
          })),
          "checkinTime": SEO_CONFIG.hotel.checkinTime,
          "checkoutTime": SEO_CONFIG.hotel.checkoutTime,
          "petsAllowed": SEO_CONFIG.hotel.petsAllowed,
          "smokingAllowed": SEO_CONFIG.hotel.smokingAllowed,
          "currenciesAccepted": SEO_CONFIG.hotel.currenciesAccepted,
          "paymentAccepted": SEO_CONFIG.hotel.paymentAccepted,
          "priceRange": SEO_CONFIG.hotel.priceRange,
          "image": [
            `${SEO_CONFIG.site.url}${SEO_CONFIG.images.hero}`,
            `${SEO_CONFIG.site.url}/images/hotel-lobby.jpg`,
            `${SEO_CONFIG.site.url}/images/hotel-room.jpg`
          ],
          "sameAs": [
            SEO_CONFIG.social.vk,
            SEO_CONFIG.social.telegram
          ]
        };

      case 'room':
        const roomData = data as Room;
        return {
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": roomData.title,
          "description": roomData.description,
          "url": `${SEO_CONFIG.site.url}/rooms#${roomData.id}`,
          "image": roomData.image,
          "offers": {
            "@type": "Offer",
            "price": roomData.price,
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString().split('T')[0]
          },
          "amenityFeature": roomData.amenities ? roomData.amenities.map((amenity) => ({
            "@type": "LocationFeatureSpecification",
            "name": amenity,
            "value": true
          })) : [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Wi-Fi",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Кондиционер",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Собственная ванная",
              "value": true
            }
          ]
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": (data as BreadcrumbItem[]).map((item: BreadcrumbItem, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": (data as FAQItem[]).map((faq: FAQItem) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": SEO_CONFIG.hotel.name,
          "image": `${SEO_CONFIG.site.url}${SEO_CONFIG.images.hero}`,
          "telephone": SEO_CONFIG.hotel.contact.phone,
          "email": SEO_CONFIG.hotel.contact.email,
          "url": SEO_CONFIG.site.url,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": SEO_CONFIG.hotel.address.street,
            "addressLocality": SEO_CONFIG.hotel.address.city,
            "addressRegion": SEO_CONFIG.hotel.address.region,
            "postalCode": SEO_CONFIG.hotel.address.postalCode,
            "addressCountry": SEO_CONFIG.hotel.address.country
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": SEO_CONFIG.hotel.coordinates.latitude.toString(),
            "longitude": SEO_CONFIG.hotel.coordinates.longitude.toString()
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "priceRange": "$$"
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
