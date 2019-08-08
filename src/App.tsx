import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import './App.css';
// import Form from './components/Form';
// import Friends from './components/Friends';
import SlideA from './views/SlideA';
import SlideB from './views/SlideB';
import SlideC from './views/SlideC';
// import Button from './components/Button';

const App = () => {
  const [slide, setSlide] = useState(1);
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
    setFriendName('');
    // console.log('friends:', friends);
  };

  const handleSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTimeout(() => {
      setSlide(slide + 1);
      setIsSubmitted(true);
      // setFriends(friends);
      setData({
        name: name,
        age: age,
        friends,
      });
    }, 1000);
    // setIsSubmitted(true);
  };

  useEffect(() => {
    // setFriends([...friends]);

    setData({
      name: name,
      age: age,
      friends,
    });

    console.log('data.friends:', data.friends);
  }, []);

  return (
    <AppShell className="App">
      <SlideWrapper>
        {slide === 1 && (
          <SlideA
            setAge={setAge}
            setName={setName}
            setSlide={setSlide}
            slide={slide}
            name={name}
            age={age}
          />
        )}

        {slide === 2 && (
          <SlideB
            friendName={friendName}
            handleAddFriend={handleAddFriend}
            handleFriendName={handleFriendName}
            handleSubmitForm={handleSubmitForm}
            friends={friends}
            setFriends={setFriends}
            setData={setData}
          />
        )}

        {slide === 3 && (
          <SlideC
            name={name}
            friends={friends}
            age={age}
            isSubmitted={isSubmitted}
            setSlide={setSlide}
          />
        )}
      </SlideWrapper>
    </AppShell>
  );
};

export default App;

const AppShell = styled(Flex)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  //max-width: 500px;

  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
`;

const SlideWrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
