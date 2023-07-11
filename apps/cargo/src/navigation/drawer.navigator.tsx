/* eslint-disable react-hooks/exhaustive-deps */
import { DrawerContent } from '@cargo/components';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { Container } from '@shared-ui';
import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, View } from 'react-native';
import { HomeStack } from './home.stack';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({ navigation, progress, style }) => {
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
        backgroundColor: "rgba(242,242,242,255)",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 16,
        // Transforming View...
        transform: [{ scale: scaleValue }, { translateX: offsetValue }],
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {},
        }}
      >
        <Stack.Screen
          name='home_stack'
          component={HomeStack}
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
            flex: 1
          },
          sceneContainerStyle: {
            backgroundColor: "transparent"
          },
          drawerActiveBackgroundColor: "transparent",
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "white",
          drawerStyle: {
            backgroundColor: 'transparent',
            //  '#c6cbef',
            width: wp(20),
          },
        }}
        drawerContent={(props) => {
          //   setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen
          name="Screens"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Screens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>

  );
};

{/* <Drawer.Screen name="Profile_stack" component={ProfileStack} />
<Drawer.Screen name="home_stack" component={HomeStack} />
<Drawer.Screen name="trips_stack" component={TripStack} />
<Drawer.Screen name="payment_stack" component={PaymentStack} /> */}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E8F2",
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
