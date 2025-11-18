'use client';

import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
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
            backgroundColor: (theme) => theme.palette.header.hoverBackground,
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
