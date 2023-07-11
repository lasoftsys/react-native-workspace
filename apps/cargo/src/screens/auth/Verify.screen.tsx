/* eslint-disable react/style-prop-object */
import { useNavigation } from '@react-navigation/native';
import { Button, Container, Input } from '@shared-ui';
import { AuthScreensProps } from '@utils/cargo';
import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 5;

const VerifyOTP = () => {
  const navigation = useNavigation<AuthScreensProps>()
  const [enableMask, setEnableMask] = useState(false);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({ index, symbol, isFocused }) => {
    let textChild = null;

    if (symbol) {
      textChild = enableMask ? '•' : symbol;
    } else if (isFocused) {
      textChild = null;
    }

    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };

  return (
    <Container
      flex={1}
    >
      <Container className='absolute top-2 w-12 h-1.5 self-center bg-gray-700 rounded-md mt-1 z-10' />
      <Container flex={0.2} column className='justify-end px-5 pb-3 '>
        <Text className='text-xl font-bold font-nunito text-dark mb-1.5'>Verify phone number</Text>
        <Text className='text-sm font-normal font-nunito text-gray-500'>Check your SMS messages, we've sent you PIN at </Text>
        <Text className='text-sm font-normal font-nunito text-gray-500'> +250 780189335 </Text>
      </Container>

      <KeyboardAvoidingView
        style={{ flex: 0.45 }}
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
        enabled>
        <Container flex={1} column center space='space-evenly' className='px-5 pt-4'>

          <CodeField
            ref={ref}
            autoFocus
            caretHidden
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />

          <Button
            onPress={() => navigation.navigate('main_stack' as never)}
            className='bg-primary rounded-md w-1/2 '>
            <Text className='text-white text-base font-semibold'>
              Verify
            </Text>
          </Button>

          <Container row center middle>
            <Text className="text-dark text-center text-sm text-semibold mr-1">Didn't receive SMS ?</Text>
            <Button onPress={() => { console.log('red') }}
              className='w-auto self-end'
              customStyles={{ padding: 0 }}>
              <Text className='text-primary font-medium text-sm font-nunito text-center'>
                Resend Code
              </Text>
            </Button>
          </Container>
        </Container>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default VerifyOTP;
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
  },
  root: { padding: 20, minHeight: 300 },
  title: { textAlign: 'center', fontSize: 30 },
  fieldRow: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 8,
  },
  cell: {
    width: 55,
    height: 55,
    lineHeight: 55,
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  toggle: {
    width: 55,
    height: 55,
    lineHeight: 55,
    fontSize: 24,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#41D5FB',
  },
})
