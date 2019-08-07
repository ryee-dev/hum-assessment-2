import React from 'react';
import styled from 'styled-components';
import { Button as BtnBase } from 'rebass';

interface BtnProps {
  color: string;
  text: string;
  size: number;
  type: string;
  onClick?: Function;
}

const Button: React.FC<BtnProps> = (props: BtnProps) => {
  const { color, text, size } = props;
  return (
    <Btn
      m={2}
      style={{
        backgroundColor: color === 'primary' ? '#e10197' : '#999999',
        padding: `${size / 4}rem ${size/2}rem`,
      }}
    >
      {text}
    </Btn>
  );
};

export default Button;

const Btn = styled(BtnBase)`
  transition: background-color 0.1s ease-out, color 0.1s ease-out;

  &:hover {
    background-color: white !important;
    //border: -1px solid #e10197;
    //border-spacing: ;
    color: #e10197;
    cursor: pointer;
  }
`;
