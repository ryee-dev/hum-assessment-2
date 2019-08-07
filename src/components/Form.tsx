import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import Button from './Button';

const Form = () => {
  return (
    <FormContainer>
      <label>Name</label>
      <input type="text" placeholder="Name" />
      <Button color="primary" size={1} text="Submit" />
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled(Flex)`
  max-width: 800px;
  max-height: 600px;
  //width: 100%;
  padding: 1rem;
  border: 1px solid black;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
`;
