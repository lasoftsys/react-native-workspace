import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components/native';

/* eslint-disable-next-line */
type ContainerProps = {
  flex?: number;
  bgColor?: string;
  row?: boolean;
  column?: boolean;
  space?: boolean;
  center?: boolean;
  middle?: boolean;
  no_wrap?: boolean;
  // children?: ReactNode;
  customStyles?: React.CSSProperties;
};

export const Container = styled.View<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};

  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `};
  ${({ row }) =>
    row &&
    css`
      flex-direction: row;
    `};
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};
  ${({ space }) =>
    space &&
    css`
      justify-content: ${space};
    `};
  ${({ center }) =>
    center &&
    css`
      align-items: center;
    `};
  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `};
  ${({ no_wrap }) =>
    no_wrap &&
    css`
      flex-wrap: no-wrap;
    `};
  ${({ middle }) =>
    middle &&
    css`
      justify-content: center;
    `};

  ${(props) => props.customStyles};
`;

export default Container;
