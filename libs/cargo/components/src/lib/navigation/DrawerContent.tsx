import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Container, Button } from '@shared-ui';
import { Image } from 'react-native';
import React, { useState } from 'react';
import { ifIphoneX } from "react-native-iphone-x-helper";
import TabButton from './TabButton';
import { useNavigation } from '@react-navigation/native';
import { DrawerScreenProps } from '@utils/cargo';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export function DrawerContent() {
  const [currentTab, setCurrentTab] = useState<string>("home_stack");
  const navigation = useNavigation<DrawerScreenProps>()
  return (
    <Container className='h-screen'>
      <Container
        flex={0.2}
        row
        className="pt-12 w-full"
      >
        <Container row space='flex-end'
          className='pt-1'
          customStyles={{ width: "100%" }}
        >
          <Container
            customStyles={{
              height: 70,
              width: 70,
            }}
          >
            <Image
              source={require('../../assets/cargo-logo-black.png')}
              style={{
                flex: 1,
                width: '100%',
              }}
              resizeMode='contain' />
          </Container>
        </Container>
      </Container>

      <Container className='grow flex-col pt-12 pr-1 items-end'>
        <TabButton
          currentTab={currentTab}
          title='home_stack'
          icon={<AntDesign name="home" size={26} color={currentTab === 'home_stack' ? "#01303c" : "#313131"} />}
          onPress={() => {
            navigation.navigate('home_stack')
            setCurrentTab('home_stack')
          }}
        />
        <TabButton
          currentTab={currentTab}
          title='trips_stack'
          icon={<MaterialIcons size={28} name="history-toggle-off" color={currentTab === 'trips_stack' ? "#01303c" : "#313131"} />}
          onPress={() => {
            setCurrentTab('trips_stack')
            navigation.navigate('trips_stack')
          }}
        />
        <TabButton
          currentTab={currentTab}
          title='payment_stack'
          icon={<MaterialIcons size={26} name="payments" color={currentTab === 'payment_stack' ? "#01303c" : "#313131"} />}
          onPress={() => {
            setCurrentTab('payment_stack')
            navigation.navigate('payment_stack')
          }}
        />
      </Container>

      <Container row center
        space='flex-end'
        customStyles={{
          ...ifIphoneX({ marginBottom: 10 }, { marginBottom: 40 }),
        }}>
        <Button
          className="flex-row items-center justify-center p-0 h-14 w-14 rounded-xl mb-3"
          customStyles={{ backgroundColor: "rgba(3,109,137,.4)" }}
          onPress={() => {
            console.log('Profile_stack')
            navigation.navigate('Profile_stack')
          }}
        >
          <MaterialCommunityIcons name="face-man-profile" size={30} color="black" />
        </Button>
      </Container>

    </Container >
  );
};


export default DrawerContent;
