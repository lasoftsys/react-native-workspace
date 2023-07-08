import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack } from './auth.stack';
import { DrawerNavigator } from './drawer.navigator';


/**
 * Type for the App stack navigator
 */
export type AppNavigatorParamList = {
  auth_stack: undefined;
  main_stack: undefined;
}

const Stack = createStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {},
      }}
    >
      <Stack.Screen name="auth_stack" component={AuthStack} />
      <Stack.Screen name="main_stack" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
