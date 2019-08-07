import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import './App.css';
import Form from './components/Form';
import Friends from './components/Friends';

const App = () => {
  const [data, setData] = useState({
    name: '',
    age: 0,
    friends: [{}],
  });

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [friendName, setFriendName] = useState('');
  const [friends, setFriends] = useState([]);

  // @ts-ignore
  const { myName, myAge, myFriends } = data;

  useEffect(() => {
    console.log(data);
    setData({
      name: name,
      age: age,
      friends: [
        {
          ...friends,
        },
      ],
    });
  });

  return (
    <AppShell className="App">
      <h1>test</h1>
      <Form
        setName={setName}
        setAge={setAge}
        setFriends={setFriends}
        setFriendName={setFriendName}
        friendName={friendName}
        friends={friends}
      />
      <hr />
      <Friends name={myName} age={myAge} friends={myFriends} />
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
