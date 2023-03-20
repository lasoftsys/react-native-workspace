import { StatusBar } from 'expo-status-bar';
import React,{useCallback } from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context'



SplashScreen.preventAutoHideAsync();

const StyledView= styled(View)
const StyledText= styled(Text,'text-xl')

export const App = () => {
  const [fontsLoaded] = useFonts({
    "Nunito-Black": require('../../assets/fonts/nunito/Nunito-Black.ttf'),
    "Nunito-Bold": require('../../assets/fonts/nunito/Nunito-Bold.ttf'),
    "Nunito-ExtraBold": require('../../assets/fonts/nunito/Nunito-ExtraBold.ttf'),
    "Nunito-ExtraLight": require('../../assets/fonts/nunito/Nunito-ExtraLight.ttf'),
    "Nunito-Light": require('../../assets/fonts/nunito/Nunito-Light.ttf'),
    "Nunito-Medium": require('../../assets/fonts/nunito/Nunito-Medium.ttf'),
    "Nunito-Regular": require('../../assets/fonts/nunito/Nunito-Regular.ttf'),
    "Nunito-SemiBold": require('../../assets/fonts/nunito/Nunito-SemiBold.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <StyledView className="h-screen items-center justify-center bg-secondary">
      <StyledText>
        Hey
      </StyledText>
      </StyledView>
    </SafeAreaProvider>
  
  );
};
export default App;
