import { createStackNavigator } from '@react-navigation/stack';
import LocationServices from '../screens/auth/Locations.screen';
import Login from '../screens/auth/Login.screen';
import Register from '../screens/auth/Register.screen';
import ResetPassword from '../screens/auth/Reset.screen';
import SelectCountry from '../screens/auth/SelectCountry.screen';
import VerifyOTP from '../screens/auth/Verify.screen';
import Welcome from '../screens/auth/Welcome.screen';

export type AuthStackParamList = {
  welcome: undefined;
  login: undefined;
  register: undefined;
  select_country: undefined;
  reset_password: undefined;
  verify: undefined;
  enable_location: undefined
}


const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {},
      }}
    >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="select_country" component={SelectCountry} />
      <Stack.Screen name="reset_password" component={ResetPassword} />
      <Stack.Screen name="verify" component={VerifyOTP} />
      <Stack.Screen name="enable_location" component={LocationServices} />
    </Stack.Navigator>
  );
};
