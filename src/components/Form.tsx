import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import Button from './Button';

const Form = () => {
  return (
    <FormContainer>
      <InputContainer>
        <div className="row">
          <div className="column" style={{ marginRight: '1rem' }}>
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="column">
            <label>Age</label>
            <input type="number" placeholder="Age" />
          </div>
        </div>
      </InputContainer>
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

const InputContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;

    &.row {
      align-items: flex-start;
      justify-content: center;
    }

    &.column {
      align-items: flex-start;
      justify-content: space-evenly;
      flex-direction: column;
      //margin: 0 0.4rem;
    }
  }

  input {
    margin: 0.4rem 0;
    padding: 0.4rem;
  }
`;
