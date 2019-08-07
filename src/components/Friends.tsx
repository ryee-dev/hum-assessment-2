import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
// import Button from './Button';

interface FriendProps {
  name: string;
  age: number;
  friends: string[];
  setFriends: Function;
  friendName: string;
}

const Friends: React.FC<FriendProps> = (props: FriendProps) => {
  const { friends } = props;

  // console.log(name, age, friends);

  return (
    <FriendsContainer>
      {friends && (
        <ul>
          {friends.map(name => (
            <li>{name}</li>
          ))}
        </ul>
      )}
    </FriendsContainer>
  );
};

export default Friends;

const FriendsContainer = styled(Flex)`
  //width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
`;
