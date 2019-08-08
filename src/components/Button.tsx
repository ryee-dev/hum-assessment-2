import React from 'react';
import styled from 'styled-components';
import { Button as BtnBase } from 'rebass';

interface BtnProps {
  color: string;
  text: string;
  size: number;
  type: string;
  onClick?: Function;
  disabled?: boolean;
  slide?: number;
  setSlide?: Function;
  handleNextSlide?: Function;
  handleReset?: Function;
}

const Button: React.FC<BtnProps> = (props: BtnProps) => {
  const { color, text, size, slide, handleNextSlide, handleReset } = props;

  return (
    <Btn
      style={{
        backgroundColor: color === 'primary' ? '#e12b98' : '#999999',
        padding: `${size / 2}rem ${size / 1.5}rem`,
        borderRadius: 0,
      }}
      // @ts-ignore
      onClick={slide < 3 ? handleNextSlide : handleReset}
    >
      {text}
    </Btn>
  );
};

export default Button;

const Btn = styled(BtnBase)`
  color: white;
  border: none;
  outline: none;
  transition: background-color 0.1s ease-out, color 0.1s ease-out;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8rem;
  width: 100%;

  &:disabled {
    background-color: #999999;
    color: white;
  }

  &:hover {
    background-color: white !important;
    //border: -1px solid #e10197;
    //border-spacing: ;
    color: #e12b98;
    cursor: pointer;
  }
`;
