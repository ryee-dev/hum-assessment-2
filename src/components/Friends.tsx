import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Flex, Button } from 'rebass';
// import Button from './Button';
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
  }, [friends]);

  return (
    <FriendsContainer>
      <ul>
        {friends.map((name, i) => (
          <Flex
            alignItems="flex-start"
            justifyContent="space-between"
            style={{ margin: '0.4rem 0' }}
            key={i}
          >
            <li style={{ marginRight: '1rem' }}>{name}</li>
            <Button onClick={() => handleRemoveFriend(name)} type="button">
              -
            </Button>
          </Flex>
        ))}
      </ul>
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

  button {
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
  }
`;
