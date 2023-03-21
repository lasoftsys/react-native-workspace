import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './home.stack';
import { PaymentStack } from './payment.stack';
import { ProfileStack } from './profile.stack';
import { TripStack } from './trip.stack';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile_stack" component={ProfileStack} />
      <Drawer.Screen name="home_stack" component={HomeStack} />
      <Drawer.Screen name="trips_stack" component={TripStack} />
      <Drawer.Screen name="payment_stack" component={PaymentStack} />
    </Drawer.Navigator>
  );
};
