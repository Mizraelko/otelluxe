'use client';

import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  const theme = useTheme();

  return (
    <Tooltip title={isDarkMode ? 'Переключить на светлую тему' : 'Переключить на темную тему'}>
      <IconButton
        onClick={onToggle}
        sx={{
          color: 'inherit',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
            outline: 'none',
          },
        }}
      >
        {isDarkMode ? (
          <Brightness7Icon sx={{ fontSize: 24 }} />
        ) : (
          <Brightness4Icon sx={{ fontSize: 24 }} />
        )}
      </IconButton>
    </Tooltip>
  );
}
