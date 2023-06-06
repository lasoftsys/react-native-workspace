import { FC, ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import styled from 'styled-components/native';

/* eslint-disable-next-line */
type ButtonProps = {
  bgColor?: string;
  br?: number;
  children: ReactNode;
  onPress(event: GestureResponderEvent): void;
  className?: string;
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
  background-color: ${({ bgColor }: ButtonProps) =>
    bgColor ? bgColor : 'transparent'};
  min-height: 25px;
  border-radius: ${({ br }: ButtonProps) => (br ? `${br}px` : `0px`)};

  ${(props: ButtonProps) => props.customStyles};
`;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton
      {...props}
      activeScale={0.95}
      tension={50}
      friction={7}
      useNativeDriver
    >
      {children}
    </StyledButton>
  );
};

export default Button;
