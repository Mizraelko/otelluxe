'use client';

import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import { ThemeMode } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  isDarkMode: boolean;
  themeMode: ThemeMode;
  onToggle: () => void;
}

const TOOLTIPS: Record<ThemeMode, string> = {
  auto: 'Тема: авто (по солнцу). Нажмите для светлой',
  light: 'Тема: светлая. Нажмите для тёмной',
  dark: 'Тема: тёмная. Нажмите для авто',
};

export default function ThemeToggle({ isDarkMode, themeMode, onToggle }: ThemeToggleProps) {
  return (
    <Tooltip title={TOOLTIPS[themeMode]}>
      <IconButton
        onClick={onToggle}
        aria-label={TOOLTIPS[themeMode]}
        sx={{
          color: 'inherit',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: (theme) => theme.palette.header.hoverBackground,
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
            outline: 'none',
          },
        }}
      >
        {themeMode === 'auto' ? (
          <BrightnessAutoIcon sx={{ fontSize: 24 }} />
        ) : isDarkMode ? (
          <Brightness7Icon sx={{ fontSize: 24 }} />
        ) : (
          <Brightness4Icon sx={{ fontSize: 24 }} />
        )}
      </IconButton>
    </Tooltip>
  );
}
