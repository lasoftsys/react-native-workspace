import React from 'react';
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
  wrap?: boolean;
  no_wrap?: boolean;
  // children?: ReactNode;
  customStyles?: React.CSSProperties;
};

export const Container = styled.View<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ bgColor }: ContainerProps) =>
    bgColor ? bgColor : 'transparent'};

  ${({ flex }: ContainerProps) =>
    flex &&
    css`
      flex: ${flex};
    `};
  ${({ row }: ContainerProps) =>
    row &&
    css`
      flex-direction: row;
    `};
  ${({ column }: ContainerProps) =>
    column &&
    css`
      flex-direction: column;
    `};
  ${({ space }: ContainerProps) =>
    space &&
    css`
      justify-content: ${space};
    `};
  ${({ center }: ContainerProps) =>
    center &&
    css`
      align-items: center;
    `};
  ${({ wrap }: ContainerProps) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `};
  ${({ no_wrap }: ContainerProps) =>
    no_wrap &&
    css`
      flex-wrap: no-wrap;
    `};
  ${({ middle }: ContainerProps) =>
    middle &&
    css`
      justify-content: center;
    `};

  ${(props: ContainerProps) => props.customStyles};
`;

export default Container;
