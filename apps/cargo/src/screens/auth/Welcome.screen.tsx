import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const Welcome = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/welcome.png')}
      style={{ flex: 1 }}
    >
      <View className="flex-1 items-center justify-center">
        <Text>Welcome</Text>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
