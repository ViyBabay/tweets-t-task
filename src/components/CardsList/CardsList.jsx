import PropTypes from "prop-types";
import { CardList } from "./CardsList.styled";
import { Card } from "../Card/Card";
import { BackButton } from "../BackButton/BackButton";
import { useNavigate } from "react-router";

export const CardsList = ({ data }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <>
      <BackButton onClick={handleGoBack}>Go Back</BackButton>
      <CardList>
        {data.map(({ id, user, avatar, followers, tweets }) => (
          <Card
            key={id}
            id={id}
            name={user}
            avatar={avatar}
            tweets={tweets}
            followers={followers}
          />
        ))}
      </CardList>
    </>
  );
};

CardsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
};
