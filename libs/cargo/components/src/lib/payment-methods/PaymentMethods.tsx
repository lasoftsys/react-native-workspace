import { Button, Container } from '@shared-ui';
import { Card } from '@utils/cargo';
import React from 'react';
import { Text } from 'react-native';
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons';


/* eslint-disable-next-line */
export interface PaymentMethodsProps {
}

const CARDS = [
  { image: require('../../assets/visa.png'), name: 'Visa', number: '423 565 4534 634', expiry: '12/23', cvv: 876, },
  { image: require('../../assets/card.png'), name: 'Mastercard', number: '523 345 2346 998', expiry: '12/25', cvv: 327 },
  { image: require('../../assets/paypal.png'), name: 'Paypal', email: "renela79@gmail.com" },
]

const Item = ({ item }) => {
  return (
    <Button
      onPress={() => console.log('red')}
      bgColor='#fff'
      className='flex-row items-center justify-between px-5 py-4 mb-3 border-[#E3E8F2] border rounded-md' >
      <Container flex={0.15} row middle center>
        <Image source={item.image}
          contentFit="contain"
          transition={100}
          style={{ flex: 1, height: 50, width: '100%' }} />
      </Container>
      <Container flex={0.7}
        column
        space='space-between'
        className='px-4'>

        <Text
          className='text-base font-semibold font-nunito text-dark'
          numberOfLines={1}>
          {item?.number ? "*".repeat(10) + item?.number.substring(12) : item.email ? item.email : item.name}
        </Text>
        <Text className='text-sm font-medium font-nunito text-gray-500'>
          {item.expiry ? `Expires ${item.expiry}` : item.description ? item.description : ''}
        </Text>
      </Container>
      <Container flex={0.15} row center
        className='justify-end'
      >
        {item.checked && <Ionicons name="checkbox" size={28} color="#41D5FB" />}
      </Container>
    </Button>
  )
}


export function PaymentMethods(props: PaymentMethodsProps) {
  return (
    <Container flex={1} column className='px-5 pt-8' >

      <Item
        item={{
          image: require('../../assets/dollar.png'),
          name: 'Cash', description: "Default Method",
          checked: true
        }}
      />
      {CARDS.map((card) => <Item key={card.name} item={card} />)}
    </Container >
  );
};

export default PaymentMethods;
