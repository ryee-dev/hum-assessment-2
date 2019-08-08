import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
// import Button from './Button';

interface FriendProps {
  friends: string[];
  handleRemoveFriend: Function;
}

const Friends: React.FC<FriendProps> = (props: FriendProps) => {
  const { friends, handleRemoveFriend } = props;
  // console.log(name, age, friends);

  useEffect(() => {}, [friends]);

  return (
    <FriendsContainer>
      {friends && (
        <ul>
          {friends.map(name => (
            <div>
              <li>{name}</li>
              <button
                // @ts-ignore
                onClick={() => handleRemoveFriend()}
                type="button"
              >
                -
              </button>
            </div>
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
