/* eslint-disable react/style-prop-object */
import { useNavigation } from '@react-navigation/native';
import { Button, Container, Input } from '@shared-ui';
import { AuthScreensProps } from '@utils/cargo';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const ResetPassword = () => {
  const navigation = useNavigation<AuthScreensProps>()
  return (
    <Container
      flex={1}
    >
      <Container className='absolute top-2 w-12 h-1.5 self-center bg-gray-700 rounded-md mt-1 z-10' />
      <Container flex={0.2} column className='justify-end px-5 pb-3 '>
        <Text className='text-xl font-bold font-nunito text-dark mb-1.5'>Forgot your password!</Text>
        <Text className='text-sm font-medium font-nunito text-gray-500'>Please enter the email address below to receive</Text>
        <Text className='text-sm font-medium font-nunito text-gray-500'>your password reset instructions</Text>
      </Container>
      <KeyboardAvoidingView
        style={{ flex: 0.2 }}
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
        </Container>
      </KeyboardAvoidingView>
      <Container flex={0.35} column space='space-between'
        className='px-5 pt-2'
        customStyles={{ ...ifIphoneX({ paddingBottom: 20 }, { paddingBottom: 5 }) }}>
        <Button
          onPress={() => navigation.navigate('main_stack' as never)}
          className='bg-primary rounded-md'>
          <Text className='text-white text-base font-semibold'>
            Sent
          </Text>
        </Button>

        <Container flex={0.9} row center middle>
          <Button onPress={() => {
            navigation.goBack();

          }}
            className='w-auto'
            customStyles={{ padding: 0 }}>
            <Text className='text-primary font-medium text-sm font-nunito text-center'>
              Back to Sign In
            </Text>
          </Button>

        </Container>
      </Container>
    </Container>
  );
};

export default ResetPassword;
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
