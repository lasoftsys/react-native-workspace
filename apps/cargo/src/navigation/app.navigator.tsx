import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack } from './auth.stack';
import { DrawerNavigator } from './drawer.navigator';
import { AppNavigatorParamList } from '@utils/cargo';


const Stack = createStackNavigator<AppNavigatorParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#F8F8F8'
        },
      }}
    >
      <Stack.Screen name="auth_stack" component={AuthStack} />
      <Stack.Screen name="main_stack" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
