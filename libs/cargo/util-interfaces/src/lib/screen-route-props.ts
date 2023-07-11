import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, DrawerStackParamList } from './navigator-param-list';

/**
 * type for all auth stack screens
 */
export type AuthScreensProps = StackNavigationProp<AuthStackParamList>
export type DrawerScreenProps = StackNavigationProp<DrawerStackParamList>