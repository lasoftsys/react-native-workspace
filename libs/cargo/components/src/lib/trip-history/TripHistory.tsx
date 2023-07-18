import { Container } from '@shared-ui';
import React from 'react';
import TripCard from '../trip-card/TripCard';

/* eslint-disable-next-line */
export interface TripHistoryProps {
}

const TRIPS = [
  {
    id: '1',
    pick_loc: 'Kigali Height',
    drop_loc: 'Biryogo Market',
    pick_time: '7:59 PM',
    drop_time: "9:30 PM",
    arrival_time: '45:05',
    cost: 'US$ 35.00'
  },
  {
    id: '2',
    pick_loc: 'Kigali Height',
    drop_loc: 'Biryogo Market',
    pick_time: '7:59 PM',
    drop_time: "9:30 PM",
    arrival_time: '45:05',
    cost: 'US$ 35.00'
  },
]
export function TripHistory(props: TripHistoryProps) {
  return (
    <Container className='px-5 pt-14'>
      {TRIPS.map((trip) => <TripCard key={trip.id} />)}
    </Container>
  );
};

export default TripHistory;
