/* eslint-disable react/style-prop-object */
import { FontAwesome } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Button, Container, Input } from '@shared-ui';
import { AuthScreensProps, AuthStackParamList } from '@utils/cargo';
import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

type CodeProps = {
  code?: string;
  setCode?: () => void
}

const CountryCode = ({ code, setCode }: CodeProps) => {
  const navigation = useNavigation<AuthScreensProps>()
  return (
    <Button onPress={() => navigation.navigate('select_country')}
      className='flex-row justify-center pt-0 pb-0' >
      <Text className='text-dark font-medium text-sm mx-1'>{code}</Text>
      <FontAwesome name="angle-down" size={15} color="black" />
    </Button>
  )
}

const Register = () => {
  const navigation = useNavigation<AuthScreensProps>()
  const { params } = useRoute<RouteProp<AuthStackParamList>>()
  const [countryCode, setCountryCode] = useState(params?.dial_code)

  useEffect(() => {
    if (params?.dial_code) {
      setCountryCode(params.dial_code)
    }
  }, [params?.dial_code])
  
  console.log(params)
  return (
    <Container
      flex={1}
    >
      <Container className='absolute top-2 w-12 h-1.5 self-center bg-gray-700 rounded-md mt-1 z-10' />

      <Container flex={0.2} column className='justify-end px-5 pb-3 '>
        <Text className='text-xl font-bold font-nunito text-dark mb-1.5'>Create your account</Text>
        <Container row center>
          <Text className='text-sm font-normal font-nunito text-gray-500'>Already have an account ? </Text>
          <Button onPress={() => {
            navigation.goBack();
            navigation.navigate('login');

          }}
            className='w-auto self-end'
            customStyles={{ padding: 0 }}>
            <Text className='text-primary font-medium text-sm font-nunito text-center'>
              Sign in
            </Text>
          </Button>
        </Container>
      </Container>
      <KeyboardAvoidingView
        style={{ flex: 0.45 }}
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
        enabled>
        <Container flex={1} column middle className='px-5'>
          <Input
            placeholder='Enter your email'
            inputWrapperStyles={styles.inputWrapperStyles}
            inputStyles={styles.inputStyles}
            wrapperStyles={{ ...styles.wrapperStyles, marginBottom: 20 }}

          />
          <Input
            placeholder='Mobile number'
            inputWrapperStyles={{ ...styles.inputWrapperStyles }}
            inputStyles={styles.inputStyles}
            wrapperStyles={{ ...styles.wrapperStyles, marginBottom: 20 }}
            phone
            icon={<CountryCode code={countryCode} />}
          />
          <Input
            placeholder='Enter your password'
            inputWrapperStyles={styles.inputWrapperStyles}
            inputStyles={styles.inputStyles}
            wrapperStyles={{ ...styles.wrapperStyles }}
            secure
          />

        </Container>
      </KeyboardAvoidingView>
      <Container flex={0.35} column space='space-between'
        className='px-5 pt-2'
        customStyles={{ ...ifIphoneX({ paddingBottom: 20 }, { paddingBottom: 5 }) }}>
        <Button
          onPress={() => navigation.navigate('main_stack' as never)}
          className='bg-primary rounded-md'>
          <Text className='text-white text-base font-semibold'>
            Sign up
          </Text>
        </Button>

        <Container flex={0.9} column center space='space-around'>
          <Text className='text-sm font-normal font-nunito text-gray-500'>Or sign up with social account</Text>
          <Container row center middle>
            <Button
              onPress={() => navigation.navigate('login')}
              className="bg-grey rounded-md py-3 w-32 z-10 mr-4"
            >
              <Image source={require('../../../assets/icons/google.png')} style={{ height: 18, width: 18 }} />
              <Text className="text-dark text-center text-sm font-medium ml-2">Google</Text>
            </Button>

            <Button
              onPress={() => navigation.navigate('login')}
              className="bg-grey rounded-md py-3 w-32 z-10"
            >
              <Image source={require('../../../assets/icons/apple.png')} style={{ height: 20, width: 20 }} />
              <Text className="text-dark text-center text-sm font-medium ml-2">Apple</Text>
            </Button>
          </Container>
          <Container row center middle className="flex-wrap py-5">
            <Text className="text-dark text-center text-sm text-medium mr-1">
              By clicking "Sign Up" you agree to our
            </Text>
            <Button onPress={() => console.log("")}
              className='w-auto self-end'
              customStyles={{ padding: 0 }}>
              <Text className="text-primary text-center text-sm text-medium mr-1 underline-offset-1">
                terms and conditions
              </Text>
            </Button>
            <Text className="text-dark text-center text-sm text-medium mr-1">
              as well as our
            </Text>
            <Button onPress={() => console.log("")}
              className='w-auto self-end'
              customStyles={{ padding: 0 }}>
              <Text className="text-primary text-center text-sm text-medium mr-1 underline-offset-1">
                privacy policy
              </Text>
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};


export default Register;
const styles = StyleSheet.create({
  wrapperStyles: {
    padding: 0,
  },
  inputWrapperStyles: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#E3E8F2',
    borderRadius: 5,
    paddingHorizontal: 5,
    height: 50
  },
  inputStyles: {
    color: '#222B45',
    fontSize: 15,
    fontWeight: "500"
  }
})
