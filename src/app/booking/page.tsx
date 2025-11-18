import StructuredData from '@/components/StructuredData';
import BookingContent from '@/components/BookingContent';
import { buildPageMetadata } from '@/config/seo';

export const metadata = buildPageMetadata('booking');

export default function BookingPage() {
  return (
    <>
      <StructuredData type="localBusiness" />
      <BookingContent />
    </>
  );
}


