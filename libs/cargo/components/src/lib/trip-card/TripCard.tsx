import { Button } from '@shared-ui';
import React from 'react';
import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface TripCardProps {
}


export function TripCard(props: TripCardProps) {
  return (
    <Button onPress={() => console.log('red')}
      bgColor='#fff'
      className='flex-col items-start justify-start px-5 py-4 mb-3 border-[#E3E8F2] border rounded-md'>

    </Button>
  );
};


export default TripCard;
