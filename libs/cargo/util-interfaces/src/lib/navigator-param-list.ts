/**
 * type for the App stack navigator
 */
export type AppNavigatorParamList = {
    auth_stack: undefined;
    main_stack: undefined;
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
