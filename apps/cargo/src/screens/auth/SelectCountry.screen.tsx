/* eslint-disable react/style-prop-object */
import { useNavigation } from '@react-navigation/native';
import { Container } from '@shared-ui';
import { AuthScreensProps } from '@utils/cargo';
import React from 'react';
import { StyleSheet, Text } from 'react-native';


const SelectCountry = () => {
  const navigation = useNavigation<AuthScreensProps>()
  // console.log(CountryList.getAll())
  return (
    <Container
      flex={1}
    >
      <Container className='absolute top-2 w-12 h-1.5 self-center bg-gray-700 rounded-md mt-1 z-10' />

      <Container flex={0.15} column className='justify-end px-5 pb-3 '>
        <Text className='text-xl font-bold font-nunito text-dark mb-1.5'>Select a country</Text>

      </Container>

    </Container>
  );
};

export default SelectCountry;
const styles = StyleSheet.create({})
