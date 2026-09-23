'use client';

import { Box, Typography, Grid } from '@mui/material';
import { ICON_COLORS } from '@/config/iconColors';

const AMENITY_HIGHLIGHTS = [
  { text: 'Круглосуточная (24/7) помощь администратора', color: ICON_COLORS.time },
  { text: 'Бесплатный Wi-fi', color: ICON_COLORS.wifi },
  { text: 'Бесплатная парковка', color: ICON_COLORS.parking },
  { text: 'Удобная локация. Мы находимся в центре города, рядом с центральной площадью.', color: ICON_COLORS.location },
] as const;

function CheckMark({ color }: { color: string }) {
  return (
    <Box
      component="span"
      aria-hidden
      sx={{
        width: 22,
        height: 22,
        mt: '2px',
        flexShrink: 0,
        color,
        display: 'inline-flex',
      }}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    </Box>
  );
}

export default function AmenityHighlights() {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {AMENITY_HIGHLIGHTS.map((item) => (
        <Grid item xs={12} sm={6} key={item.text}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <CheckMark color={item.color} />
            <Typography variant="body1">{item.text}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
