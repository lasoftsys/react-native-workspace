import { DrawerButton, Header, PageWrapper, TripHistory } from '@cargo/components';
import { Container, Button } from '@shared-ui';
import { HEADER_HEIGHT } from '@utils/cargo';
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import {
  Animated,
  Platform,
  Text
} from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fontisto } from '@expo/vector-icons';


const HEIGHT = Platform.OS === 'ios' ? HEADER_HEIGHT + hp(4) : HEADER_HEIGHT + hp(2)
const Trip = () => {
  const scrollY = useRef(new Animated.Value(0)).current;


  const renderHeaderContent = (
    <Container column space='space-between' className='w-full h-full px-5 pb-3'>
      <Container row center space='space-between'>
        <DrawerButton />
        <Text className='text-xl font-bold font-nunito text-dark'>My Rides</Text>
        <Button
          className='w-auto'
          bgColor='#FB4A46'
          customStyles={{ padding: 0 }} >
          <Fontisto name="date" size={28} color="black" />
        </Button>
      </Container>
    </Container>
  )


  return (
    <>
      <StatusBar style='dark' />
      <PageWrapper scrollY={scrollY}>
        <Header
          headerHeight={HEIGHT}
          scrollY={scrollY}
          bgColor="#fff" >
          {renderHeaderContent}
        </Header>
        <TripHistory />
      </PageWrapper>
    </>
  );
};

export default Trip;
