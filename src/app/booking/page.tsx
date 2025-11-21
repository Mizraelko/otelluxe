import StructuredData from '@/components/StructuredData';
import BookingContent from '@/components/BookingContent';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Container } from '@mui/material';
import { buildPageMetadata } from '@/config/seo';

export const metadata = buildPageMetadata('booking');

export default function BookingPage() {
  const breadcrumbs = [
    { name: 'Главная', url: 'https://hotelluxbg.ru' },
    { name: 'Бронирование', url: 'https://hotelluxbg.ru/booking' }
  ];

  const breadcrumbItems = [
    { label: 'Бронирование', current: true }
  ];

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbs} />
      <StructuredData type="localBusiness" />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Breadcrumbs items={breadcrumbItems} />
      </Container>
      <BookingContent />
    </>
  );
}


