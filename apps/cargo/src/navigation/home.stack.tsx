import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import AddPlace from '../screens/home/AddPlace.screen';
import Favorites from '../screens/home/Favorites.screen';
import SearchLocation from '../screens/home/SearchLocation.screen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // backgroundColor: 'yellow',
          // borderRadius: 10
        },
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="favorites" component={Favorites} />
      <Stack.Screen name="search_location" component={SearchLocation} />
      <Stack.Screen name="add_place" component={AddPlace} />
    </Stack.Navigator>
  );
};
