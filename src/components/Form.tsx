import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
// import Button from './Button';

interface FormProps {
  setName: Function;
  setAge: Function;
  setFriends: Function;
  setFriendName: Function;
  friends: string[];
  friendName: string;
  // setData: Function;
  // data: {
  //   name: string,
  //   age: number,
  //   friends: string[],
  // };
}
const Form: React.FC<FormProps> = (props: FormProps) => {
  const { setName, setAge, setFriends, friends, friendName } = props;
  // const { name, age, friends } = data;

  const handleNameInput = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  const handleAgeInput = (e: { target: { value: number } }) => {
    setAge(e.target.value);
  };

  const handleSubmit = () => {
    setFriends(friends.push(friendName));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <div className="row">
          <div className="column" style={{ marginRight: '1rem' }}>
            <label>Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              onChange={handleNameInput}
            />
          </div>
          <div className="column">
            <label>Age:</label>
            <input
              name="age"
              type="number"
              placeholder="Age"
              // @ts-ignore
              onChange={handleAgeInput}
            />
          </div>
        </div>
      </InputContainer>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled(Flex)`
  display: flex;
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

  
`;
