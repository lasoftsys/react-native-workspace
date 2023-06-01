import { Children, ReactNode } from 'react';
import TouchableScale from 'react-native-touchable-scale';
import styled from 'styled-components/native';

/* eslint-disable-next-line */
type ButtonProps = {
  bgColor?: string;
  br?: number;
  children: ReactNode;
  customStyles?: React.CSSProperties;
};

export const StyledButton = styled(TouchableScale)<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
  min-height: 25px;
  border-radius: ${({ br }) => (br ? `${br}px` : `0px`)};

  ${(props) => props.customStyles};
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton
      {...props}
      activeScale={0.95}
      tension={50}
      friction={7}
      useNativeDriver
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;
