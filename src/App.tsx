import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { useSpring, animated as a } from 'react-spring';
import { Flex } from 'rebass';
import './App.css';
import SlideA from './views/SlideA';
import SlideB from './views/SlideB';
import SlideC from './views/SlideC';

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

  const handleFriendName = (e: { target: { value: string } }) => {
    setFriendName(e.target.value);
  };

  const handleAddFriend = () => {
    // @ts-ignore
    setFriends([...friends, friendName]);
    setFriendName('');
  };

  const handleSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTimeout(() => {
      setSlide(slide + 1);
      setIsSubmitted(true);
      setData({
        name: name,
        age: age,
        friends,
      });
    }, 1000);
    console.log(data, slide);
  };

  useEffect(() => {
    setData({
      name: name,
      age: age,
      friends,
    });
  }, [name, age, friends]);

  // const transitions = useTransition(slide, p => p, {
  //   from: { opacity: 0, transform: 'translate3d(100%, 0 ,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
  // });

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
            setFriends={setFriends}
            setName={setName}
            setAge={setAge}
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
  div {
    display: flex;

    &.row {
      align-items: center;
      justify-content: center;
      margin: 0.6rem 0;
    }

    &.column {
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
    }
  }

  input {
    padding: 0.6rem;
  }
`;
