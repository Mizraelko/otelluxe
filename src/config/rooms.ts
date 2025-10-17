/**
 * Centralized room data configuration
 * Single source of truth for all room information
 */

export const ROOMS = [
  {
    id: 1,
    title: 'Стандарт Одноместный',
    description: 'Уютный одноместный номер с односпальной кроватью, рабочим столом, телевизором',
    price: '2800',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф'],
  },
  {
    id: 2,
    title: 'Стандарт Двухместный',
    description: 'Комфортный номер с двуспальной кроватью, современным дизайном',
    price: '3500',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф', 'Мини-холодильник'],
  },
  {
    id: 3,
    title: 'Полулюкс',
    description: 'Просторный номер с улучшенными удобствами, мини-баром, зоной отдыха',
    price: '5500',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф', 'Мини-бар', 'Джакузи'],
  },
  {
    id: 4,
    title: 'Люкс',
    description: 'Номер премиум-класса с панорамным видом на город, джакузи',
    price: '8500',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф', 'Мини-бар', 'Джакузи', 'Курить можно'],
  },
  {
    id: 5,
    title: 'Семейный номер',
    description: 'Просторный номер для семьи с двумя спальнями и гостиной',
    price: '7000',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф', 'Мини-холодильник', 'Детская кроватка'],
  },
  {
    id: 6,
    title: 'Апартаменты',
    description: 'Двухкомнатные апартаменты с кухней, идеально для длительного проживания',
    price: '9500',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
    amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Сейф', 'Кухня', 'Стиральная машина'],
  },
] as const;
