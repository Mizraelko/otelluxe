'use client';

import { Box, Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import NextLink from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Box sx={{ py: 2 }}>
      <MuiBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ 
          '& .MuiBreadcrumbs-separator': {
            color: 'text.secondary',
          }
        }}
      >
        <Link
          component={NextLink}
          href="/"
          underline="hover"
          color="inherit"
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 0.75,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            }
          }}
        >
          <HomeIcon sx={{ mr: 0.5, fontSize: 16 }} />
          Главная
        </Link>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          if (isLast || item.current) {
            return (
              <Typography
                key={index}
                color="text.primary"
                sx={{ fontWeight: 500 }}
              >
                {item.label}
              </Typography>
            );
          }
          
          return (
            <Link
              key={index}
              component={NextLink}
              href={item.href || '#'}
              underline="hover"
              color="inherit"
              sx={{ 
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                }
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
}
