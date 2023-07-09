/* eslint-disable react/style-prop-object */
import { useNavigation } from '@react-navigation/native';
import { Button, Container } from '@shared-ui';
import { AuthScreensProps } from '@utils/cargo';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Welcome = () => {
  const navigation = useNavigation<AuthScreensProps>();
  return (
    <>
      <StatusBar style="light" />
      <Image style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
      }}
        source={require('../../../assets/images/welcome.png')}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000} />
      <Container row center middle className="absolute bottom-0 left-0 w-screen h-44 pt-10">
        <Button
          onPress={() => navigation.navigate('register')}
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
    </>

  );
};

export default Welcome;
