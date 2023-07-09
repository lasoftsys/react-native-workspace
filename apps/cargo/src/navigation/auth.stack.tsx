import { createStackNavigator } from '@react-navigation/stack';
import LocationServices from '../screens/auth/Locations.screen';
import Login from '../screens/auth/Login.screen';
import Register from '../screens/auth/Register.screen';
import ResetPassword from '../screens/auth/Reset.screen';
import SelectCountry from '../screens/auth/SelectCountry.screen';
import VerifyOTP from '../screens/auth/Verify.screen';
import Welcome from '../screens/auth/Welcome.screen';
import CountryList from 'country-list-with-dial-code-and-flag'
import { AuthStackParamList } from '@utils/cargo';



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
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} initialParams={{ dial_code: CountryList.getAll()[0].dial_code }} />
        <Stack.Screen name="select_country" component={SelectCountry} />
        <Stack.Screen name="reset_password" component={ResetPassword} />
        <Stack.Screen name="verify" component={VerifyOTP} />
      </Stack.Group>
      <Stack.Screen name="enable_location" component={LocationServices} />
    </Stack.Navigator>
  );
};
