/* eslint-disable react-hooks/exhaustive-deps */
import { DrawerContent } from '@cargo/components';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { HomeStack } from './home.stack';
import { TripStack } from './trip.stack';
import { PaymentStack } from './payment.stack';
import { ProfileStack } from './profile.stack';
import { DrawerNavigatorParamList, DrawerStackParamList } from '@utils/cargo';

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();
const Stack = createStackNavigator<DrawerStackParamList>();

const Screens = () => {
  // Animated Properties...
  const isDrawerOpen = useDrawerStatus() === "open";
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    handleDrawer();
  }, [isDrawerOpen]);

  const handleDrawer = () => {
    Animated.timing(scaleValue, {
      toValue: !isDrawerOpen ? 1 : 0.88,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(offsetValue, {
      // Your Random Value...
      toValue: isDrawerOpen ? 0 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        flexGrow: 1,
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 10,
        // Transforming View...
        transform: [{ scale: scaleValue }, { translateX: offsetValue }],
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name='home_stack'
          component={HomeStack}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name='trips_stack'
          component={TripStack}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name='payment_stack'
          component={PaymentStack}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name='Profile_stack'
          component={ProfileStack}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </Animated.View>
  );
};

export const DrawerNavigator = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: "slide",
          overlayColor: "transparent",
          drawerContentContainerStyle: {
            flex: 1,
          },
          sceneContainerStyle: {
            backgroundColor: "transparent",
            borderRadius: 10
          },
          drawerActiveBackgroundColor: "transparent",
          // drawerInactiveTintColor: "white",
          // drawerActiveTintColor: "white",
          drawerStyle: {
            backgroundColor: 'transparent',
            //  '#c6cbef',
            width: wp(20),

          },
        }}
        drawerContent={(props) => {
          //   setProgress(props.progress);
          return <DrawerContent />;
        }}
      >
        <Drawer.Screen
          name="Screens"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Screens />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#41D5FB",
  },
  stack: {
    flex: 1,
    borderRadius: 10,
  },
  drawerItem: { alignItems: "flex-start", marginVertical: 0 },
  drawerLabel: { color: "white", marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: "white",
    borderWidth: StyleSheet.hairlineWidth,
  },
});
