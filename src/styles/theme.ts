'use client';

import { createTheme } from '@mui/material/styles';

// Расширение типов для кастомных цветов
declare module '@mui/material/styles' {
  interface Palette {
    header: {
      background: string;
      text: string;
      shadow: string;
      hoverBackground: string;
    };
    footer: {
      background: string;
      text: string;
      shadow: string;
      border: string;
    };
    card: {
      gradient: string;
      border: string;
      shadow: string;
      shadowHover: string;
      overlay: string;
      overlayHover: string;
    };
    hero: {
      textShadow: string;
      textShadowSmall: string;
      buttonBorder: string;
      buttonBackground: string;
      buttonBackgroundHover: string;
    };
    booking: {
      gradient: string;
      shadow: string;
      shadowHover: string;
    };
  }

  interface PaletteOptions {
    header?: {
      background?: string;
      text?: string;
      shadow?: string;
      hoverBackground?: string;
    };
    footer?: {
      background?: string;
      text?: string;
      shadow?: string;
      border?: string;
    };
    card?: {
      gradient?: string;
      border?: string;
      shadow?: string;
      shadowHover?: string;
      overlay?: string;
      overlayHover?: string;
    };
    hero?: {
      textShadow?: string;
      textShadowSmall?: string;
      buttonBorder?: string;
      buttonBackground?: string;
      buttonBackgroundHover?: string;
    };
    booking?: {
      gradient?: string;
      shadow?: string;
      shadowHover?: string;
    };
  }
}

// Светлая тема - Черно-белая
export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#666666',
      light: '#999999',
      dark: '#333333',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    info: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    success: {
      main: '#666666',
      light: '#999999',
      dark: '#333333',
    },
    header: {
      background: 'rgba(255, 255, 255, 0.9)',
      text: 'primary.main',
      shadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
      hoverBackground: 'rgba(25, 118, 210, 0.1)',
    },
    footer: {
      background: 'rgba(255, 255, 255, 0.9)',
      text: 'primary.main',
      shadow: '0 -2px 20px rgba(0, 0, 0, 0.1)',
      border: 'rgba(0,0,0,0.1)',
    },
    card: {
      gradient: 'linear-gradient(135deg, rgba(197, 151, 100, 0.1) 0%, rgba(197, 151, 100, 0.05) 100%)',
      border: 'secondary.main',
      shadow: '0 2px 8px rgba(0,0,0,0.12)',
      shadowHover: '0 4px 16px rgba(0,0,0,0.18)',
      overlay: 'rgba(0,0,0,0.4)',
      overlayHover: 'rgba(0,0,0,0.6)',
    },
    hero: {
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      textShadowSmall: '1px 1px 2px rgba(0,0,0,0.3)',
      buttonBorder: 'rgba(255, 255, 255, 0.8)',
      buttonBackground: 'rgba(255, 255, 255, 0.1)',
      buttonBackgroundHover: 'rgba(255, 255, 255, 0.2)',
    },
    booking: {
      gradient: 'linear-gradient(135deg, rgba(197, 151, 100, 0.1) 0%, rgba(197, 151, 100, 0.05) 100%)',
      shadow: '0 4px 20px rgba(197, 151, 100, 0.3)',
      shadowHover: '0 6px 30px rgba(197, 151, 100, 0.5)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          fontWeight: 500,
          padding: '12px 24px',
          fontSize: '1rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 4,
          boxShadow: theme.palette.card.shadow,
          border: `1px solid ${theme.palette.card.border}`,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.palette.card.shadowHover,
          },
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          bgcolor: theme.palette.header.background,
          color: theme.palette.header.text,
          backdropFilter: 'blur(20px)',
          boxShadow: theme.palette.header.shadow,
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            backgroundColor: '#FFFFFF',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#000000',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#000000',
              borderWidth: '2px',
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
});

// Темная тема - Черно-белая
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#E0E0E0',
      contrastText: '#000000',
    },
    secondary: {
      main: '#BDBDBD',
      light: '#E0E0E0',
      dark: '#9E9E9E',
      contrastText: '#000000',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#BDBDBD',
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    info: {
      main: '#38BDF8',
      light: '#7DD3FC',
      dark: '#0EA5E9',
    },
    success: {
      main: '#34D399',
      light: '#6EE7B7',
      dark: '#10B981',
    },
    header: {
      background: 'rgba(0, 0, 0, 0.8)',
      text: 'white',
      shadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
      hoverBackground: 'rgba(255, 255, 255, 0.1)',
    },
    footer: {
      background: 'rgba(0, 0, 0, 0.8)',
      text: 'white',
      shadow: '0 -2px 20px rgba(0, 0, 0, 0.5)',
      border: 'rgba(255,255,255,0.2)',
    },
    card: {
      gradient: 'linear-gradient(135deg, rgba(197, 151, 100, 0.15) 0%, rgba(197, 151, 100, 0.08) 100%)',
      border: 'rgba(255, 255, 255, 0.1)',
      shadow: '0 2px 8px rgba(0,0,0,0.12)',
      shadowHover: '0 4px 16px rgba(0,0,0,0.18)',
      overlay: 'rgba(0,0,0,0.4)',
      overlayHover: 'rgba(0,0,0,0.6)',
    },
    hero: {
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      textShadowSmall: '1px 1px 2px rgba(0,0,0,0.3)',
      buttonBorder: 'rgba(255, 255, 255, 0.8)',
      buttonBackground: 'rgba(255, 255, 255, 0.1)',
      buttonBackgroundHover: 'rgba(255, 255, 255, 0.2)',
    },
    booking: {
      gradient: 'linear-gradient(135deg, rgba(197, 151, 100, 0.15) 0%, rgba(197, 151, 100, 0.08) 100%)',
      shadow: '0 4px 20px rgba(197, 151, 100, 0.3)',
      shadowHover: '0 6px 30px rgba(197, 151, 100, 0.5)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
          fontWeight: 600,
          padding: '12px 24px',
          fontSize: '1rem',
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(156, 163, 175, 0.25)',
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 16px rgba(156, 163, 175, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 4,
          boxShadow: theme.palette.card.shadow,
          border: `1px solid ${theme.palette.card.border}`,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: theme.palette.card.shadowHover,
          },
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          bgcolor: theme.palette.header.background,
          color: theme.palette.header.text,
          backdropFilter: 'blur(20px)',
          boxShadow: theme.palette.header.shadow,
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            backgroundColor: '#374151',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#6B7280',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#9CA3AF',
              borderWidth: '2px',
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export const theme = lightTheme;

