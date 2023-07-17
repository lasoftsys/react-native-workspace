import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Payment from '../screens/payment';
import AddCard from '../screens/payment/AddCard.screen';
import ScanCard from '../screens/payment/ScanCard.screen';
import { PaymentStackParamList } from '@utils/cargo';

const Stack = createStackNavigator<PaymentStackParamList>();

export const PaymentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {},
      }}
    >
      <Stack.Screen name="payment" component={Payment} />
      {/* <Stack.Screen name="scan_card" component={ScanCard} /> */}
      <Stack.Screen name="add_card" component={AddCard} options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }} />
    </Stack.Navigator>
  );
};
