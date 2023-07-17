import { PaymentStack } from './../../../../../apps/cargo/src/navigation/payment.stack';
/**
 * type for the App stack navigator
 */
export type AppNavigatorParamList = {
    auth_stack: undefined;
    main_stack: undefined;
  }


 /**
  * type for drawer navigator
  */ 
export type DrawerNavigatorParamList={
  Screens: undefined;
}

export type DrawerStackParamList={
  home_stack: undefined;
  trips_stack: undefined;
  payment_stack: undefined;
  Profile_stack: undefined;
}


/**
 * type for auth stack navigator stack
 */  
export type AuthStackParamList = {
  welcome: undefined;
  login: undefined;
  register:{ dial_code?:string};
  select_country:undefined;
  reset_password: undefined;
  verify: undefined;
  enable_location: undefined
}

/***
 * type for payment stack navigator
 */

export type PaymentStackParamList={
  payment:undefined;
  add_card:undefined
}