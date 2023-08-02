import PropTypes from "prop-types";
import { useState } from "react";
import { fetchFollowing } from "../../services/api";
import { getLocalStorage } from "../../services/helper";
import {
  Avatar,
  AvatarWrapper,
  BgImg,
  CardItem,
  ImgWrapper,
  SmallLogo,
  TextFollow,
  TextTweet,
  TextWrapper,
} from "./Card.styled";
import { CardButton } from "../CardButton/CardButton";
import Logo1 from "../../assets/Logo1.svg";
import Logo2 from "../../assets/Logo2.png";

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
      <ImgWrapper>
        <SmallLogo src={Logo1} alt="LogoGoIt" />
        <BgImg src={Logo2} alt="Logo2" />
      </ImgWrapper>
      <AvatarWrapper>
        <Avatar src={avatar} alt={user} />
      </AvatarWrapper>
      <TextWrapper>
        <TextTweet>{tweets.toLocaleString("en-US")} TWEETS</TextTweet>
        <TextFollow>
          {totalFollowers.toLocaleString("en-US")} FOLLOWERS
        </TextFollow>
      </TextWrapper>
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
