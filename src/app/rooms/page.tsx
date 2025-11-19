import { Container, Box, Typography, Grid } from '@mui/material';
import RoomsList from '@/components/RoomsList';
import StructuredData from '@/components/StructuredData';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ROOMS } from '@/config/rooms';
import { buildPageMetadata } from '@/config/seo';

export const metadata = buildPageMetadata('rooms');

export default function RoomsPage() {
  const breadcrumbs = [
    { name: 'Главная', url: 'https://hotelluxbg.ru' },
    { name: 'Номера', url: 'https://hotelluxbg.ru/rooms' }
  ];

  const breadcrumbItems = [
    { label: 'Номера', current: true }
  ];

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbs} />
      <Box sx={{ py: 6, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Breadcrumbs items={breadcrumbItems} />
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Наши номера
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '700px', mx: 'auto' }}>
          В отеле &quot;Люкс&quot; представлены номера различных категорий. Все номера оборудованы современной 
          мебелью, кондиционером, телевизором и бесплатным Wi-Fi.
        </Typography>

        <RoomsList rooms={ROOMS} />

        <Box sx={{ mt: 6, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Наши удобства
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">✓ Круглосуточная (24/7) помощь администратора</Typography>
              <Typography variant="body1">✓ Бесплатный Wi-fi</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">✓ Бесплатная парковка</Typography>
              <Typography variant="body1">✓ Удобная локация. Мы находимся в центре города, рядом с центральной площадью.</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    </>
  );
}


