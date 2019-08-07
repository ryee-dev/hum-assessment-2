import React from 'react';
// import styled from 'styled-components';
import { Button as Btn } from 'rebass';

interface BtnProps {
  color: string;
  text: string;
  size: number;
}

const Button: React.FC<BtnProps> = (props: BtnProps) => {
  const { color, text, size } = props;
  return (
    <Btn
      my={2}
      style={{
        backgroundColor: color === 'primary' ? '#e10197' : '#999999',
        padding: `${size / 2}rem ${size}rem`,
      }}
    >
      {text}
    </Btn>
  );
};

export default Button;
