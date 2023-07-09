import { Container } from '../container/Container';
import React, { ReactNode, forwardRef } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

/* eslint-disable-next-line */
type InputProps = {
  secure?: boolean;
  borderColor?: string;
  bgColor?: string;
  borderRadius?: number;
  icon?: ReactNode;
  rightBtn?: ReactNode;
  inputStyles?: React.CSSProperties;
  wrapperStyles?: React.CSSProperties;
  inputWrapperStyles?: React.CSSProperties;
  number?: boolean;
  email?: boolean;
  phone?: boolean;
  placeholder?: string
};

const Wrapper = styled.View<InputProps>`
  display: flex;
  padding-bottom: 5px;
  padding-top: 5px;
  ${(props: InputProps) => props.wrapperStyles};
`;
const InputWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  height: 45px;
  background-color: ${({ bgColor }: InputProps) =>
    bgColor ? bgColor : '#fff'};
  ${(props: InputProps) => props.inputWrapperStyles};
`;

const InputText = styled(TextInput)`
  display: flex;
  flex: 1;
  font-size: 18px;
  padding: 8px;
  color: #f5f5f5;
  ::placeholder {
    color: red;
    font-weight: 400;
    font-size: 10px;
  }
  ${(props: InputProps) => props.inputStyles};
`;

const LeftIcon = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
const RightButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Input(
  props: InputProps
  //  ref?: React.Ref<TextInput>
) {
  const [toggleSecure, setToggleSecure] = React.useState(false);

  const {
    secure,
    borderColor,
    bgColor,
    borderRadius,
    icon,
    rightBtn,
    inputStyles,
    wrapperStyles,
    inputWrapperStyles,
    number,
    email,
    phone,
    ...inputProps
  } = props;
  const isSecure = toggleSecure ? false : secure;

  const inputType = email
    ? 'email-address'
    : number
      ? 'numeric'
      : phone
        ? 'phone-pad'
        : 'default';

  return (
    <Wrapper wrapperStyles={wrapperStyles}>
      <InputWrapper
        radius={borderRadius}
        bgColor={bgColor}
        inputWrapperStyles={inputWrapperStyles}
      >
        {icon && <LeftIcon>{icon}</LeftIcon>}
        <InputText
          // ref={ref}
          secureTextEntry={isSecure}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          inputStyles={inputStyles}
          {...inputProps}
        />
        {rightBtn && <RightButton {...inputProps}>{rightBtn}</RightButton>}
      </InputWrapper>
    </Wrapper>
  );
}

export default forwardRef(Input);
