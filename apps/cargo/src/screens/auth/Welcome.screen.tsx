/* eslint-disable react/style-prop-object */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Container } from '@shared-ui';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { AuthStackParamList } from '../../navigation/auth.stack';

type WelcomeScreenProp = StackNavigationProp<AuthStackParamList>

const Welcome = () => {
  const navigation = useNavigation<WelcomeScreenProp>();
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        source={require('../../../assets/images/welcome.png')}
        style={{ flex: 1 }}
      >
        <Container row center middle className="absolute bottom-0 left-0 w-screen h-44 pt-10">
          <Button
            onPress={() => navigation.navigate('login')}
            className="bg-primary rounded-md py-2.5 w-28 z-10 mr-4"
          >
            <Text className="text-black text-center text-base">Sign up</Text>
          </Button>

          <Button
            onPress={() => navigation.navigate('login')}
            className="border border-white rounded-md py-2.5 w-28 z-10"
          >
            <Text className="text-white text-center text-base">Login</Text>
          </Button>
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0,.9)', 'rgba(0, 0, 0,1)']}
            style={StyleSheet.absoluteFillObject}
            className="z-0"
          />
        </Container>
      </ImageBackground>
    </>

  );
};

export default Welcome;
