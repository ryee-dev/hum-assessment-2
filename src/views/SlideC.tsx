import React from 'react';
// import styled from 'styled-components';
import { Button as BaseBtn, Flex } from 'rebass';
import styled from 'styled-components';
import { animated as a, useSpring } from 'react-spring';

interface SlideCProps {
  age: number;
  name: string;
  isSubmitted: boolean;
  friends: string[];
  setSlide: Function;
  setFriends: Function;
  setName: Function;
  setAge: Function;
}

const SlideC: React.FC<SlideCProps> = (props: SlideCProps) => {
  const { age, name, isSubmitted, friends, setSlide, setFriends, setAge, setName } = props;

  const SpringCProps = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0%, 0, 0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%, 0, 0)',
    },
  });

  const handleResetData = () => {
    setName('');
    setAge(0);
    setFriends([]);
    setSlide(1);
  };

  return (
    <Wrapper
      // @ts-ignore
      style={SpringCProps}
    >
      {name && age && isSubmitted && (
        <Flex
          alignItems="flex-start"
          justifyContent="space-apart"
          flexDirection="column"
        >
          <p>name: {name}</p>
          <p>age: {age}</p>
          <p style={{ fontWeight: 'bold' }}>Friends:</p>
          {friends.map((friend, i) => (
            <div key={i} className="row">
              <p>
                Friend #{i}. {friend}
              </p>
            </div>
          ))}
        </Flex>
      )}
      <InlineButton onClick={handleResetData}>Start Over</InlineButton>
    </Wrapper>
  );
};

export default SlideC;

const Wrapper = styled(a.div)`
  background-color: #fed7d9;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem 1rem;
  //border: 1px solid black;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.3);
  //height: 100%;
  //width: 100%;
  max-width: 600px;
  max-height: 600px;
`;

const InlineButton = styled(BaseBtn)`
  background-color: #e12b98;
  color: white;
  border-radius: 0 !important;
  height: 100%;
  font-weight: bold;
  transition: background-color 0.1s ease-out, color 0.1s ease-in;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: #e12b98;
  }
`;
