import { CardDetails, Header, PageWrapper } from '@cargo/components';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Container } from '@shared-ui';
import { HEADER_HEIGHT, PaymentScreenProps } from '@utils/cargo';
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Animated, Platform, Text } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ifIphoneX } from 'react-native-iphone-x-helper';


const HEIGHT = Platform.OS === 'ios' ? HEADER_HEIGHT + hp(2) : HEADER_HEIGHT

const AddCard = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<PaymentScreenProps>()

  const renderHeaderContent = (
    <Container column space='space-between' className='w-full h-full px-4 pb-2'>
      <Container row center space='space-between'>
        <Button onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#313131" />
        </Button>
        <Text className='text-xl font-bold font-nunito text-dark'>Add Credit Card</Text>
        <Container className='w-12' />
      </Container>
    </Container>
  )


  return (
    <Container flex={1}>
      <StatusBar style='dark' />
      <PageWrapper scrollY={scrollY}>
        <Header
          headerHeight={HEIGHT}
          scrollY={scrollY}
          bgColor="#fff" >
          {renderHeaderContent}
        </Header>
        <CardDetails />
      </PageWrapper >
      <Container
        column
        className='absolute w-full px-5'
        customStyles={{ ...ifIphoneX({ bottom: 10 }, { bottom: 40 }) }}
      >
        <Text
          className='text-sm font-medium font-nunito text-gray-500 mb-1'>
          Debit cards are accepted at some location
        </Text>
        <Button onPress={() => console.log('')} className='bg-primary rounded-md'>
          <Text className='text-white text-base font-semibold'>
            Save
          </Text>
        </Button>
      </Container>
    </Container>
  );
};

export default AddCard;