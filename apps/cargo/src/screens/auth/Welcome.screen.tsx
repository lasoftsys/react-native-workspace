import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../../assets/images/welcome.png')}
      style={{ flex: 1 }}
    >
      <View className="flex flex-row absolute bottom-0 left-0 w-screen h-44 items-center justify-center pt-10">
        <TouchableScale
          onPress={() => navigation.navigate('login')}
          className="bg-primary rounded-md py-2.5 w-24 z-10 mr-4"
        >
          <Text className="text-white text-center text-5">Sign up</Text>
        </TouchableScale>

        <TouchableScale
          onPress={() => navigation.navigate('login')}
          className="border border-white rounded-md py-2.5 w-24 z-10"
        >
          <Text className="text-white text-center text-5">Login</Text>
        </TouchableScale>
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0,.9)', 'rgba(0, 0, 0,1)']}
          style={StyleSheet.absoluteFillObject}
          className="z-0"
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome;
