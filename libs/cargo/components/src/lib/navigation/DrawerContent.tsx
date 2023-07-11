import { Container } from '@shared-ui';
import React from 'react';
import { Image } from 'react-native';
import { ifIphoneX } from "react-native-iphone-x-helper";
// import Logo from 'asset/logos/icon.png'

/* eslint-disable-next-line */
export interface DrawerContentProps {
}


export function DrawerContent(props: DrawerContentProps) {
  // const [currentTab, setCurrentTab] = useState("Home");
  // const { user } = useSelector(({ User }) => User);
  // const insets = useSafeAreaInsets();
  // const dispatch = useDispatch();

  // const handle_logout = async () => {
  //   await SecureStore.deleteItemAsync(AUTH_KEY);
  //   dispatch(setCredentials({ user: null, token: null }));
  // };
  return (
    <Container className='h-screen'>
      <Container
        flex={0.2}
        row
        className="pt-12 w-full"
      >
        <Container row center customStyles={{ width: "100%" }} bgColor='red'>
          <Container
            customStyles={{
              height: 50,

              width: 50,
            }}
          >
            {/* <Image
              // source={''}
              style={{ flex: 1, height: '100%', width: "100%" }} /> */}
          </Container>
        </Container >
      </Container >

      <Container Container className='grow mt-12 px-4' >

        {/* {TabButton(
          currentTab,
          setCurrentTab,
          "Home",
          <AntDesign name="home" size={20} color="#838589" />,
          () => {
            props.navigation.navigate(AppRoutes.BOTTOM_NAV);
          }
        )}

        {TabButton(
          currentTab,
          setCurrentTab,
          "Profile",
          <AntDesign name="user" size={20} color="#838589" />,
          () => {
            // props.navigation.navigate("ACCOUNT STACK", {
            //   Screen: "PROFILE SCREEN",
            // });
          }
        )}
        {TabButton(
          currentTab,
          setCurrentTab,
          "LogOut",
          <AntDesign name="logout" size={18} color="#838589" />,
          () => {
            props.navigation.navigate(AppRoutes.SIGN_IN);
            handle_logout();
          }
        )} */}
      </Container >

      {/* <Container column className='justify-center px-5 pt-3'
        customStyles={{
          borderTopColor: "#838589",
          borderTopWidth: 0.3,
          ...ifIphoneX({ paddingBottom: 20 }, { paddingBottom: 10 }),
        }}>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            // lineHeight: 28,
            color: "#313131",
            fontFamily: "DMSans_700Bold",
            letterSpacing: 0.12,
            marginBottom: 5,
          }}
        >
          Cargo passenger
        </Text>
        <Text
          style={{
            fontSize: 14,
            // fontWeight: "400",
            color: "#838589",
            letterSpacing: 0.12,
          }}
        >
          App Version 1.0
        </Text>
      </Container> */}

    </Container >
  );
};


export default DrawerContent;
