import React from 'react';
// import styled from 'styled-components';
import { Flex } from 'rebass';

interface SlideCProps {
  age: number;
  name: string;
  isSubmitted: boolean;
  friends: string[];
  setSlide: Function;
}

const SlideC: React.FC<SlideCProps> = (props: SlideCProps) => {
  const { age, name, isSubmitted, friends, setSlide } = props;
  return (
    <>
      {name && age && isSubmitted && (
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <p>name: {name}</p>
          <p>age: {age}</p>
          {friends.map((friend, i) => (
            <div key={i} className="row">
              <p>{friend}</p>
            </div>
          ))}
        </Flex>
      )}
      <button onClick={() => setSlide(1)}>Start Over</button>
    </>
  );
};

export default SlideC;
