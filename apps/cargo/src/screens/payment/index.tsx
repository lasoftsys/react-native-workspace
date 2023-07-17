/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { DrawerButton, Header, PageWrapper, PaymentMethods } from '@cargo/components';
import { HEADER_HEIGHT, PaymentScreenProps } from '@utils/cargo';
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Animated, Platform, Text } from "react-native";
import { Container, Button } from '@shared-ui';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HEIGHT = Platform.OS === 'ios' ? HEADER_HEIGHT + hp(8) : HEADER_HEIGHT + hp(6)

const Payment = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<PaymentScreenProps>()

  const renderHeaderContent = (
    <Container column space='space-between' className='w-full h-full px-5 pb-3'>
      <Container row center space='space-between'>
        <DrawerButton />
        <Text className='text-xl font-bold font-nunito text-dark'>Payments</Text>
        <Button onPress={() => navigation.navigate('add_card')}
          className='w-auto'
          customStyles={{ padding: 0 }}>
          <Ionicons name="add" size={24} color='#41D5FB' />
          <Text className='text-lg font-semibold font-nunito text-primary'>Add</Text>
        </Button>
      </Container>
      <Text className='text-sm font-medium font-nunito text-gray-500'>
        Choose a desired vehicle type. We offer cars suitable for most everyday needs
      </Text>
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
        <PaymentMethods />
      </PageWrapper >
    </>
  );
};

export default Payment;