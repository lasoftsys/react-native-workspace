import { DrawerButton, Header, PageWrapper } from '@cargo/components';
import { HEADER_HEIGHT } from '@utils/cargo';
import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import {
  Animated, Text, Platform
} from "react-native";
import { Container } from '@shared-ui';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HEIGHT = Platform.OS === 'ios' ? HEADER_HEIGHT + hp(5) : HEADER_HEIGHT + hp(3)


const Profile = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderHeaderContent = (
    <Container column space='space-between' className='w-full h-full px-5 pb-3'>
      <Container row center space='space-between'>
        <DrawerButton />
      </Container>
      <Text className='text-xl font-bold font-nunito text-dark'>Account</Text>
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
      </PageWrapper>
    </>
  );
};

export default Profile;