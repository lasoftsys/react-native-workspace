import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/profile';
import Trip from '../screens/trip';

const Stack = createStackNavigator();

export const TripStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: '#E3E8F2' },
      }}
    >
      <Stack.Screen name="trip" component={Trip} />
    </Stack.Navigator>
  );
};
