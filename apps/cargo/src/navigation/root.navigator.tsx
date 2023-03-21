import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './app.navigator';

const RootNavigator = () => {
  return (
    <NavigationContainer
      //  headerMode="none"
      independent={true}
    >
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
