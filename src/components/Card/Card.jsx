import PropTypes from "prop-types";
import { useState } from "react";
import { fetchFollowing } from "../../services/api";
import { getLocalStorage } from "../../services/helper";
import { Avatar, CardItem, Text } from "./Card.styled";
import { CardButton } from "../CardButton/CardButton";

export const Card = ({ id, user, avatar, followers, tweets }) => {
  const [isFollowing, setIsFollowing] = useState(
    getLocalStorage(`key${id}`, false)
  );

  const [totalFollowers, setTotalFollowers] = useState(followers);

  const handleClick = async () => {
    if (!isFollowing) {
      const updateFollowersPlus = await fetchFollowing(id, {
        followers: totalFollowers + 1,
      });
      setTotalFollowers(updateFollowersPlus.followers);
      setIsFollowing(true);
      localStorage.setItem(`key${id}`, JSON.stringify(true));
    } else {
      const updateFollowersMinus = await fetchFollowing(id, {
        followers: totalFollowers - 1,
      });
      setTotalFollowers(updateFollowersMinus.followers);
      setIsFollowing(false);
      localStorage.removeItem(`key${id}`);
    }
  };

  return (
    <CardItem key={id}>
      <img src="Logo" alt="" />
      <Avatar src={avatar} alt={user} />
      <Text>{tweets} TWEETS</Text>
      <Text>{totalFollowers} FOLLOWERS</Text>
      <CardButton onClick={handleClick} isFollowing={isFollowing} />
    </CardItem>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
