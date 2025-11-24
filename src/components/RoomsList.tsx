'use client';

import { useState } from 'react';
import { Grid } from '@mui/material';
import RoomCard from './RoomCard';
import RoomFilters from './RoomFilters';
import { Room } from '@/types';

interface RoomsListProps {
  rooms: readonly Room[];
}

export default function RoomsList({ rooms }: RoomsListProps) {
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([...rooms]);

  return (
    <>
      <RoomFilters rooms={rooms} onFilteredRoomsChange={setFilteredRooms} />
      
      <Grid container spacing={4}>
        {filteredRooms.map((room) => (
          <Grid item xs={12} md={6} key={room.id}>
            <RoomCard room={room} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

