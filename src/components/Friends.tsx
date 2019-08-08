import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
// import Button from './Button';

interface FriendProps {
  friends: string[];
  setFriends: Function;
  friendName: string;
  setData: Function;
  // handleRemoveFriend: Function;
}

const Friends: React.FC<FriendProps> = (props: FriendProps) => {
  const { friends, friendName, setData } = props;
  // console.log(name, age, friends);
  const [updatedFriends, setUpdatedFriends] = useState([]);

  const handleRemoveFriend = () => {
    // const newFriends

    setUpdatedFriends(
      // @ts-ignore
      friends.splice(friends.findIndex(i => friends[i] === friendName), 1)
    );
    // setFriends(updatedFriends);
    setData({
      friends: updatedFriends,
    });
    // console.log(friends);
  };

  useEffect(() => {
    // console.log(friends.length);
  }, [friends, updatedFriends]);

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
