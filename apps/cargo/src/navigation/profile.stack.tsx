import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/profile';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {},
      }}
    >
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};
