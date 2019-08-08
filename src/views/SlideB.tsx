import React from 'react';
import Friends from '../components/Friends';
import styled from 'styled-components';
import { Button as BaseBtn } from 'rebass';
// import Button from '../components/Button';
import { useSpring, animated as a } from 'react-spring';
// import styled from 'styled-components';
// import { Flex } from 'rebass';

interface SlideBProps {
  handleFriendName: Function;
  handleAddFriend: Function;
  friendName: string;
  friends: string[];
  setFriends: Function;
  setData: Function;
  handleSubmitForm: Function;
  // transition: Function;
}

const SlideB: React.FC<SlideBProps> = (props: SlideBProps) => {
  const {
    handleFriendName,
    friendName,
    handleAddFriend,
    friends,
    setFriends,
    setData,
    handleSubmitForm,
  } = props;

  const SpringBProps = useSpring({
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

  return (
    <Wrapper
      // @ts-ignore
      style={SpringBProps}
    >
      <label>Friend Name:</label>
      <div className="row">
        <InlineInput
          name="friend-A"
          type="string"
          placeholder="friend"
          // @ts-ignore
          onChange={handleFriendName}
          value={friendName}
        />
        <InlineButton
          type="button"
          // @ts-ignore
          onClick={handleAddFriend}
          disabled={!friendName}
        >
          +
        </InlineButton>
      </div>
      <div className="row">
        <FormContainer>
          {friends.length > 0 && (
            <Friends
              friends={friends}
              setFriends={setFriends}
              friendName={friendName}
              setData={setData}
            />
          )}
          <InlineButton
            type="submit"
            // @ts-ignore
            onClick={handleSubmitForm}
          >
            SUBMIT
          </InlineButton>
        </FormContainer>
      </div>
    </Wrapper>
  );
};

export default SlideB;

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

const FormContainer = styled.div`
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

const InlineInput = styled.input`
  height: 100%;
  padding: 0.4rem;
  border: none;
  box-sizing: border-box;
  overflow: hidden;
  margin-right: -1px;
`;
