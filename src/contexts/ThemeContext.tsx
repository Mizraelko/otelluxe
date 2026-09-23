'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/styles/theme';
import { isNightInBogorodsk, getMsUntilNextSunEvent } from '@/utils/sunTheme';

export type ThemeMode = 'auto' | 'light' | 'dark';

interface ThemeContextType {
  isDarkMode: boolean;
  themeMode: ThemeMode;
  mounted: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = 'themeMode';

function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'auto' || value === 'light' || value === 'dark';
}

function resolveDark(mode: ThemeMode): boolean {
  if (mode === 'dark') return true;
  if (mode === 'light') return false;
  return isNightInBogorodsk();
}

export function AppThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    const mode: ThemeMode = isThemeMode(saved) ? saved : 'auto';
    setThemeMode(mode);
    setIsDarkMode(resolveDark(mode));
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem(STORAGE_KEY, themeMode);

    if (themeMode !== 'auto') {
      setIsDarkMode(themeMode === 'dark');
      return;
    }

    const apply = () => setIsDarkMode(isNightInBogorodsk());
    apply();

    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timer = setTimeout(() => {
        apply();
        schedule();
      }, getMsUntilNextSunEvent());
    };
    schedule();

    const onVisible = () => {
      if (document.visibilityState === 'visible') {
        apply();
      }
    };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [themeMode, mounted]);

  const toggleTheme = useCallback(() => {
    setThemeMode((prev) => {
      if (prev === 'auto') return 'light';
      if (prev === 'light') return 'dark';
      return 'auto';
    });
  }, []);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, themeMode, mounted, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
