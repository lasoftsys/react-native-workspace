import {createStackNavigator} from '@react-navigation/stack'
import { AuthStack } from './auth.stack';

const Stack = createStackNavigator();

export const AppNavigator=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='auth_stack' component={AuthStack}/>
        </Stack.Navigator>
    )
}