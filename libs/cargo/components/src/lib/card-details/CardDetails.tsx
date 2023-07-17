/* eslint-disable react/jsx-no-undef */
import { Container, Input, Button } from '@shared-ui';
import React from 'react';
import { StyleSheet, Text } from 'react-native'

/* eslint-disable-next-line */
export interface CardDetailsProps {
}

export function CardDetails(props: CardDetailsProps) {
  return (
    <Container flex={1} column className='pt-20 px-5'>
      <Text
        className='text-sm font-semibold font-nunito text-gray-500 mb-1'>
        Name
      </Text>
      <Input
        placeholder='CardHolder Name'
        inputWrapperStyles={styles.inputWrapperStyles}
        inputStyles={styles.inputStyles}
        wrapperStyles={{ ...styles.wrapperStyles, marginBottom: 20 }}
      />
      <Text
        className='text-sm font-semibold font-nunito text-gray-500 mb-1'>
        Card Credit Number
      </Text>
      <Input
        placeholder='Enter your password'
        inputWrapperStyles={styles.inputWrapperStyles}
        inputStyles={styles.inputStyles}
        wrapperStyles={{ ...styles.wrapperStyles, marginBottom: 20 }}
      />
      <Container row center space='space-between'>
        <Container flex={0.49} column>
          <Text
            className='text-sm font-semibold font-nunito text-gray-500 mb-1'>
            Expires
          </Text>
          <Input
            placeholder=''
            inputWrapperStyles={styles.inputWrapperStyles}
            inputStyles={styles.inputStyles}
            wrapperStyles={{ ...styles.wrapperStyles, marginBottom: 10 }}
          />
        </Container>
        <Container flex={0.49} column>
          <Text
            className='text-sm font-semibold font-nunito text-gray-500 mb-1'>
            CVV
          </Text>
          <Input
            placeholder=''
            inputWrapperStyles={styles.inputWrapperStyles}
            inputStyles={styles.inputStyles}
            wrapperStyles={{ ...styles.wrapperStyles, marginBottom: 10 }}
          />
        </Container>
      </Container>
    </Container>
  );
};


export default CardDetails;
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
