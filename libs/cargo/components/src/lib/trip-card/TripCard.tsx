import { Button, Container } from '@shared-ui';
import React from 'react';
import { Text } from 'react-native';
import Dash from 'react-native-dash';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'expo-image';

/* eslint-disable-next-line */
export interface TripCardProps {

}

export function TripCard(props: TripCardProps) {
  return (
    <Button onPress={() => console.log('red')}
      bgColor='#fff'
      className='flex-col items-start justify-start pt-4 mb-3 h-40 border-[#E3E8F2] border rounded-md'>
      <Container flex={0.65} row space='space-between' className='w-full px-2 border-b border-b-[#E3E8F2] pb-3' >
        <Container row className='h-full' >
          <Container column
            center space='space-between'
            className='h-full'>
            <Container className='bg-primary w-3.5 h-3.5 rounded-full' />
            <Dash dashThickness={1} dashColor='#313131' style={{ width: 1, height: 20, flexDirection: 'column' }} />
            <Container className='bg-secondary w-3.5 h-3.5 rounded-sm' />
          </Container>
          <Container column space='space-between' className='px-3'>
            <Text
              className='text-sm font-semibold font-nunito text-dark'
              numberOfLines={1}>
              Kigali Heights
            </Text>
            <Text
              className='text-sm font-semibold font-nunito text-dark'
              numberOfLines={1}>
              Kigali Heights
            </Text>
          </Container>
        </Container>
        <Container column space='space-between'>
          <Text
            className='text-xs font-normal font-nunito text-gray-500'
            numberOfLines={1}>
            7:59 PM
          </Text>
          <Text
            className='text-xs font-normal font-nunito text-gray-500'
            numberOfLines={1}>
            10:20 PM
          </Text>
        </Container>
      </Container>
      <Container flex={0.35} row space='space-between' className='w-full px-2 pt-3 items-end' >
        <Container flex={0.55} row>
          <Container className='h-9 w-9 rounded' >
            <Image
              source={require('../../assets/profile.png')}
              style={{ height: "100%", width: '100%', flex: 1, borderRadius: 5 }} />
          </Container>
          <Container column space='space-between' className='px-3'>
            <Text
              className='text-sm font-medium font-nunito text-dark mb-1'
              numberOfLines={1}>
              Evan Guzman
            </Text>
            <Container row center >
              <AntDesign name="star" size={15} color="#DC7633" />
              <Text
                className='text-xs font-medium font-nunito text-dark ml-1'
                numberOfLines={1}>
                4.8
              </Text>
            </Container>
          </Container>
        </Container>
        <Container flex={0.45} row space='space-between'>
          <Container column space='space-between' >
            <Text
              className='text-xs font-normal font-nunito text-gray-500'
              numberOfLines={1}>
              Final Cost
            </Text>
            <Text
              className='text-sm font-semibold font-nunito text-dark'
              numberOfLines={1}>
              $30
            </Text>
          </Container>
          <Container column space='space-between' >
            <Text
              className='text-xs font-normal font-nunito text-gray-500'
              numberOfLines={1}>
              Arrival time
            </Text>
            <Text
              className='text-sm font-semibold font-nunito text-dark'
              numberOfLines={1}>
              45:50
            </Text>
          </Container>
        </Container>
      </Container>
    </Button>
  );
};


export default TripCard;
