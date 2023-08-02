import PropTypes from "prop-types";
import { CardBtn } from "./CardButton.styled";

export const CardButton = ({ onClick, isFollowing }) => {
  const btnBgColor = isFollowing ? "#5CD3A8" : "#EBD8FF";

  return (
    <CardBtn
      onClick={onClick}
      isFollowing={isFollowing}
      btnBgColor={btnBgColor}
    >
      {isFollowing ? <p>FOLLOWING</p> : <p>FOLLOW</p>}
    </CardBtn>
  );
};

CardButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool,
};
