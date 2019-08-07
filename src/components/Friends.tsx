import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

interface FriendProps {
  name: string;
  age: number;
  friends: string[];
}

const Friends: React.FC<FriendProps> = (props: FriendProps) => {
  const { name, age, friends } = props;

  console.log(name, age, friends);

  return (
    <FriendsContainer>
      {friends && (
        <ul>
          <li>{name}</li>
          <li>{age}</li>
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
