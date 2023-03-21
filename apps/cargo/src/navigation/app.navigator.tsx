import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack } from './auth.stack';
import { DrawerNavigator } from './drawer.navigator';

const Stack = createStackNavigator();

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
