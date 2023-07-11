/* eslint-disable react/style-prop-object */
import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '@shared-ui'
import { LocationFinder, Map, MapHeader } from '@cargo/components';
import { StatusBar } from 'expo-status-bar';


const Home = () => {
  return (
    <>
      <StatusBar style='dark' />
      <Container className='flex-col flex-1 h-screen'>
        <Map />
        <MapHeader />
        <LocationFinder />
      </Container>
    </>

  );
};

export default Home;
