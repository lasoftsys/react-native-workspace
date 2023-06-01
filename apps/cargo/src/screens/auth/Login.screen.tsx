import { Button, Container } from '@shared-ui';
import React from 'react';
import { View, Text } from 'react-native';

const Login = () => {
  return (
    <Container
      flex={1}
      row
      center
      middle
      bgColor="red"
      customStyles={
        {
          // flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent: 'center',
        }
      }
    >
      <Text>hey</Text>
      <Text>hey</Text>
      <Button bgColor="blue" br={5}>
        <Text>Button</Text>
      </Button>
    </Container>
  );
};

export default Login;
