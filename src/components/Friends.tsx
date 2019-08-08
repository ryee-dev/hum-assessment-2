import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
// import Button from './Button';

interface FriendProps {
  friends: string[];
  setFriends: Function;
  setData: Function;
  friendName: string;
}

const Friends: React.FC<FriendProps> = (props: FriendProps) => {
  const { friends, setFriends } = props;

  const handleRemoveFriend = (name: string) => {
    setFriends(friends.filter(friend => friend !== name));
  };

  useEffect(() => {
    console.log(friends);
  }, []);

  return (
    <FriendsContainer>
      {friends && (
        <ul>
          {friends.map((name, i) => (
            <div key={i}>
              <li>{name}</li>
              <button onClick={() => handleRemoveFriend(name)} type="button">
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
