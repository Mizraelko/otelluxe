import { Room } from '@/types';

export type RoomCategory = 'Все' | 'Стандарт' | 'Комфорт' | 'Люкс' | 'Апартаменты';

export type SortOption = 
  | 'price-asc' 
  | 'price-desc' 
  | 'area-asc' 
  | 'area-desc' 
  | 'capacity-asc' 
  | 'capacity-desc';

/**
 * Извлекает категорию номера из его названия
 */
export function getRoomCategory(title: string): RoomCategory {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('апартаменты')) {
    return 'Апартаменты';
  }
  if (lowerTitle.includes('люкс')) {
    return 'Люкс';
  }
  if (lowerTitle.includes('комфорт')) {
    return 'Комфорт';
  }
  if (lowerTitle.includes('стандарт')) {
    return 'Стандарт';
  }
  
  // По умолчанию считаем стандартом
  return 'Стандарт';
}

/**
 * Фильтрует номера по категории
 */
export function filterRoomsByCategory(rooms: readonly Room[], category: RoomCategory): Room[] {
  if (category === 'Все') {
    return [...rooms];
  }
  
  return rooms.filter(room => getRoomCategory(room.title) === category);
}

/**
 * Фильтрует номера по типу кроватей
 */
export function filterRoomsByBedTypes(rooms: Room[], selectedBedTypes: string[]): Room[] {
  if (selectedBedTypes.length === 0) {
    return [...rooms];
  }
  
  return rooms.filter(room => {
    if (!room.amenities) return false;
    
    // Проверяем, есть ли хотя бы один выбранный тип кровати в amenities
    // Используем точное сравнение с учетом регистра
    return selectedBedTypes.some(bedType => {
      const bedTypeLower = bedType.toLowerCase();
      return room.amenities.some(amenity => {
        const amenityLower = amenity.toLowerCase();
        // Для точного соответствия проверяем, что amenity содержит bedType
        // или наоборот (для гибкости)
        return amenityLower.includes(bedTypeLower) || bedTypeLower.includes(amenityLower);
      });
    });
  });
}

/**
 * Фильтрует номера по групповым размещениям
 */
export function filterRoomsByGroupAccommodation(rooms: Room[], includeGroup: boolean): Room[] {
  if (!includeGroup) {
    return [...rooms];
  }
  
  return rooms.filter(room => {
    const titleLower = room.title.toLowerCase();
    return titleLower.includes('групповой');
  });
}

/**
 * Сортирует номера по выбранному критерию
 */
export function sortRooms(rooms: Room[], sortOption: SortOption): Room[] {
  const sorted = [...rooms];
  
  switch (sortOption) {
    case 'price-asc':
      return sorted.sort((a, b) => Number(a.price) - Number(b.price));
    case 'price-desc':
      return sorted.sort((a, b) => Number(b.price) - Number(a.price));
    case 'area-asc':
      return sorted.sort((a, b) => (a.area || 0) - (b.area || 0));
    case 'area-desc':
      return sorted.sort((a, b) => (b.area || 0) - (a.area || 0));
    case 'capacity-asc':
      return sorted.sort((a, b) => (a.capacity || 0) - (b.capacity || 0));
    case 'capacity-desc':
      return sorted.sort((a, b) => (b.capacity || 0) - (a.capacity || 0));
    default:
      return sorted;
  }
}

