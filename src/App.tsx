import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import './App.css';
import Form from './components/Form';
import Friends from './components/Friends';
import Button from './components/Button';

const App = () => {
  const [data, setData] = useState({
    name: '',
    age: 0,
    friends: [],
  });

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [friendName, setFriendName] = useState('');
  const [friends, setFriends] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // @ts-ignore
  // const { name, age, friends } = data;

  const handleFriendName = (e: { target: { value: string } }) => {
    setFriendName(e.target.value);
  };

  const handleAddFriend = () => {
    // @ts-ignore
    setFriends([...friends, friendName]);
  };

  const handleSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    console.log('data:', data);
    setTimeout(
      setData({
        name: name,
        age: age,
        friends,
      }),
      1000
    );
  }, [name, age, friends]);

  return (
    <AppShell className="App">
      <h1>test</h1>
      <FormContainer onSubmit={handleSubmitForm}>
        <Form
          setName={setName}
          setAge={setAge}
          setFriends={setFriends}
          setFriendName={setFriendName}
          friendName={friendName}
          friends={friends}
        />
        <hr />

        {/*<Button size={1} color="primary" text="Add Friend" type="button" onClick={handleAddFriend} />*/}
        <Button type="submit" color="primary" size={1} text="Submit" />
      </FormContainer>
      <div>
        <label>Friend Name:</label>
        <div className="row">
          <input
            name="friend-A"
            type="string"
            placeholder="friend"
            onChange={handleFriendName}
            value={friendName}
          />
          <button onClick={handleAddFriend}>+</button>
        </div>
      </div>

      {name && age && isSubmitted && (
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <p>name: {name}</p>
          <p>age: {age}</p>
          <Friends
            name={data.name}
            age={data.age}
            friends={data.friends}
            friendName={friendName}
            setFriends={setFriends}
          />
        </Flex>
      )}
    </AppShell>
  );
};

export default App;

const AppShell = styled(Flex)`
  width: 100%;
  //max-width: 500px;

  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    width: 100%;

    &.row {
      //width: 100%;
      margin-bottom: 0.6rem;
      align-items: center;
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
