import React from 'react';
import Friends from '../components/Friends';
import styled from 'styled-components';
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

  return (
    <>
      <label>Friend Name:</label>
      <div className="row">
        <input
          name="friend-A"
          type="string"
          placeholder="friend"
          // @ts-ignore
          onChange={handleFriendName}
          value={friendName}
        />
        <button
          // @ts-ignore
          onClick={handleAddFriend}
          disabled={!friendName}
        >
          +
        </button>
      </div>
      <div className="row">
        <FormContainer>
          <hr />
          <Friends
            friends={friends}
            setFriends={setFriends}
            friendName={friendName}
            setData={setData}
          />
          <button
            type="submit"
            // @ts-ignore
            onClick={handleSubmitForm}
          >
            submit
          </button>
        </FormContainer>
      </div>
    </>
  );
};

export default SlideB;

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

  input {
    margin: 0.4rem 0;
    padding: 0.4rem;
  }
`;
