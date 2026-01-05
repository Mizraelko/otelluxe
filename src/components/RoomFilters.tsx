'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Paper,
  useTheme,
  Chip,
  Menu,
  MenuItem,
  Checkbox,
} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import BedIcon from '@mui/icons-material/Bed';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { Room } from '@/types';
import { RoomCategory, SortOption, filterRoomsByCategory, filterRoomsByBedTypes, filterRoomsByGroupAccommodation, sortRooms } from '@/utils/roomUtils';

interface RoomFiltersProps {
  rooms: readonly Room[];
  onFilteredRoomsChange: (filteredRooms: Room[]) => void;
}

// Типы кроватей для фильтрации
const BED_TYPES = [
  { label: 'Одна двуспальная кровать', key: 'Одна двуспальная кровать', icon: BedIcon },
  { label: 'Две односпальные кровати', key: 'Две односпальные кровати', icon: SingleBedIcon },
  { label: 'Три односпальные кровати', key: 'Три односпальные кровати', icon: SingleBedIcon },
  { label: 'Дополнительная односпальная кровать', key: 'Дополнительная односпальная кровать', icon: SingleBedIcon },
] as const;

// Опции сортировки
const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'default', label: 'По умолчанию' },
  { value: 'price-asc', label: 'Цена: по возрастанию' },
  { value: 'price-desc', label: 'Цена: по убыванию' },
  { value: 'area-asc', label: 'Площадь: по возрастанию' },
  { value: 'area-desc', label: 'Площадь: по убыванию' },
  { value: 'capacity-asc', label: 'Вместимость: по возрастанию' },
  { value: 'capacity-desc', label: 'Вместимость: по убыванию' },
];

// Категории номеров
const CATEGORIES: { value: RoomCategory; label: string }[] = [
  { value: 'Все', label: 'Все' },
  { value: 'Стандарт', label: 'Стандарт' },
  { value: 'Комфорт', label: 'Комфорт' },
  { value: 'Люкс', label: 'Люкс' },
  { value: 'Апартаменты', label: 'Апартаменты' },
];

export default function RoomFilters({ rooms, onFilteredRoomsChange }: RoomFiltersProps) {
  const theme = useTheme();
  const [category, setCategory] = useState<RoomCategory>('Все');
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [selectedBedTypes, setSelectedBedTypes] = useState<string[]>([]);
  const [includeGroupRooms, setIncludeGroupRooms] = useState<boolean>(false);

  // Меню для выпадающих списков
  const [sortMenuAnchor, setSortMenuAnchor] = useState<null | HTMLElement>(null);
  const [categoryMenuAnchor, setCategoryMenuAnchor] = useState<null | HTMLElement>(null);
  const [bedTypeMenuAnchor, setBedTypeMenuAnchor] = useState<null | HTMLElement>(null);
  
  // Ref для сохранения anchor элемента типа кровати
  const bedTypeButtonRef = useRef<HTMLDivElement>(null);

  const filteredAndSortedRooms = useMemo(() => {
    let filtered = filterRoomsByCategory(rooms, category);
    filtered = filterRoomsByBedTypes(filtered, selectedBedTypes);
    filtered = filterRoomsByGroupAccommodation(filtered, includeGroupRooms);
    filtered = sortRooms(filtered, sortOption);
    return filtered;
  }, [rooms, category, selectedBedTypes, includeGroupRooms, sortOption]);

  useEffect(() => {
    onFilteredRoomsChange(filteredAndSortedRooms);
  }, [filteredAndSortedRooms, onFilteredRoomsChange]);

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setSortMenuAnchor(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortMenuAnchor(null);
  };

  const handleSortSelect = (option: SortOption) => {
    setSortOption(option);
    handleSortClose();
  };

  const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
    setCategoryMenuAnchor(event.currentTarget);
  };

  const handleCategoryClose = () => {
    setCategoryMenuAnchor(null);
  };

  const handleCategorySelect = (cat: RoomCategory) => {
    setCategory(cat);
    handleCategoryClose();
  };

  const handleBedTypeClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = bedTypeButtonRef.current || event.currentTarget;
    setBedTypeMenuAnchor(target);
  };

  const handleBedTypeClose = () => {
    setBedTypeMenuAnchor(null);
  };

  const handleBedTypeSelect = (bedTypeKey: string) => {
    setSelectedBedTypes(prev => 
      prev.includes(bedTypeKey)
        ? prev.filter(type => type !== bedTypeKey)
        : [...prev, bedTypeKey]
    );
    // Не закрываем меню при множественном выборе
    // Обновляем anchor элемент, чтобы он оставался валидным
    if (bedTypeButtonRef.current) {
      setBedTypeMenuAnchor(bedTypeButtonRef.current);
    }
  };

  const handleGroupRoomsToggle = () => {
    setIncludeGroupRooms(!includeGroupRooms);
  };

  const handleGroupRoomsRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIncludeGroupRooms(false);
  };

  const getSortLabel = () => {
    return SORT_OPTIONS.find(opt => opt.value === sortOption)?.label || 'Сортировка';
  };

  const chipStyle = {
    height: '36px',
    borderRadius: '18px',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    bgcolor: 'transparent',
    fontSize: '0.875rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    padding: '0 15px',
    '&:hover': {
      bgcolor: `${theme.palette.primary.main}10`,
    },
  };

  const selectedChipStyle = {
    ...chipStyle,
    bgcolor: `${theme.palette.primary.main}15`,
    border: `1px solid ${theme.palette.primary.main}`,
  };

  return (
    <Paper
      elevation={0}
      sx={{
        px: 4,
        py: 2.5,
        mb: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 1.5,
          alignItems: { xs: 'stretch', sm: 'center' },
          flexWrap: 'wrap',
        }}
      >
        {/* Сортировка - слева */}
        <Chip
          icon={<SortIcon sx={{ fontSize: 18 }} />}
          label={getSortLabel()}
          deleteIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
          onDelete={handleSortClick}
          onClick={handleSortClick}
          variant="outlined"
          sx={chipStyle}
        />

        {/* Фильтры - справа */}
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', flex: 1, justifyContent: { xs: 'flex-start', sm: 'flex-end' } }}>
          {/* Категория */}
          {category !== 'Все' ? (
            <Chip
              icon={<CategoryIcon sx={{ fontSize: 18 }} />}
              label={`Категория: ${category}`}
              deleteIcon={<CloseIcon sx={{ fontSize: 16 }} />}
              onDelete={(e) => {
                e.stopPropagation();
                setCategory('Все');
              }}
              onClick={handleCategoryClick}
              variant="outlined"
              sx={selectedChipStyle}
            />
          ) : (
            <Chip
              icon={<CategoryIcon sx={{ fontSize: 18 }} />}
              label="Категория"
              deleteIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
              onDelete={handleCategoryClick}
              onClick={handleCategoryClick}
              variant="outlined"
              sx={chipStyle}
            />
          )}

          {/* Тип кровати - одна плашка с выпадающим списком */}
          <Box ref={bedTypeButtonRef} sx={{ display: 'inline-flex' }}>
            <Chip
              icon={<BedIcon sx={{ fontSize: 18 }} />}
              label={
                (() => {
                  if (selectedBedTypes.length === 0) {
                    return 'Тип кровати';
                  } else if (selectedBedTypes.length === 1) {
                    const selectedBedType = BED_TYPES.find(bt => bt.key === selectedBedTypes[0]);
                    return `Тип кровати: ${selectedBedType?.label || selectedBedTypes[0]}`;
                  } else {
                    return `Тип кровати (${selectedBedTypes.length})`;
                  }
                })()
              }
              deleteIcon={
                selectedBedTypes.length > 0 ? (
                  <CloseIcon sx={{ fontSize: 16 }} />
                ) : (
                  <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
                )
              }
              onDelete={
                selectedBedTypes.length > 0
                  ? (e) => {
                      e.stopPropagation();
                      setSelectedBedTypes([]);
                    }
                  : handleBedTypeClick
              }
              onClick={handleBedTypeClick}
              variant="outlined"
              sx={selectedBedTypes.length > 0 ? selectedChipStyle : chipStyle}
            />
          </Box>

          {/* Групповые размещения */}
          {includeGroupRooms ? (
            <Chip
              icon={<GroupIcon sx={{ fontSize: 18 }} />}
              label="Комнаты групповых размещений"
              deleteIcon={<CloseIcon sx={{ fontSize: 16 }} />}
              onDelete={handleGroupRoomsRemove}
              onClick={handleGroupRoomsToggle}
              variant="outlined"
              sx={selectedChipStyle}
            />
          ) : (
            <Chip
              icon={<GroupIcon sx={{ fontSize: 18 }} />}
              label="Комнаты групповых размещений"
              onClick={handleGroupRoomsToggle}
              variant="outlined"
              sx={chipStyle}
            />
          )}
        </Box>
      </Box>

      {/* Меню сортировки */}
      <Menu
        anchorEl={sortMenuAnchor}
        open={Boolean(sortMenuAnchor)}
        onClose={handleSortClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        disableAutoFocusItem
        slotProps={{
          paper: {
            sx: {
              mt: 0.5,
            },
          },
        }}
      >
        {SORT_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleSortSelect(option.value)}
            selected={sortOption === option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Меню категорий */}
      <Menu
        anchorEl={categoryMenuAnchor}
        open={Boolean(categoryMenuAnchor)}
        onClose={handleCategoryClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        disableAutoFocusItem
        slotProps={{
          paper: {
            sx: {
              mt: 0.5,
            },
          },
        }}
      >
        {CATEGORIES.map((cat) => (
          <MenuItem
            key={cat.value}
            onClick={() => handleCategorySelect(cat.value)}
            selected={category === cat.value}
          >
            {cat.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Меню типов кроватей - множественный выбор */}
      <Menu
        anchorEl={bedTypeMenuAnchor && bedTypeButtonRef.current ? bedTypeButtonRef.current : bedTypeMenuAnchor}
        open={Boolean(bedTypeMenuAnchor)}
        onClose={handleBedTypeClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        disableAutoFocusItem
        keepMounted={false}
        MenuListProps={{
          'aria-labelledby': 'bed-type-menu',
          disablePadding: false,
          dense: false,
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 0.5,
              minWidth: 320,
              maxHeight: 400,
            },
          },
        }}
      >
        {BED_TYPES.map((bedType) => {
          const IconComponent = bedType.icon;
          const isSelected = selectedBedTypes.includes(bedType.key);
          return (
            <MenuItem
              key={bedType.key}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleBedTypeSelect(bedType.key);
              }}
              selected={false}
              disableRipple
              sx={{
                py: 1,
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
            >
              <Checkbox 
                checked={isSelected} 
                size="small" 
                sx={{ mr: 1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleBedTypeSelect(bedType.key);
                }}
              />
              <IconComponent sx={{ fontSize: 18, mr: 1.5, color: isSelected ? 'primary.main' : 'text.secondary' }} />
              <Typography 
                flex={1}
                sx={{ 
                  color: isSelected ? 'primary.main' : 'text.primary',
                  fontWeight: isSelected ? 600 : 400,
                }}
              >
                {bedType.label}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Paper>
  );
}
