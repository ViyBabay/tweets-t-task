import PropTypes from "prop-types";
i;
import { LoadMoreBtn } from "./LoadMoreButton.styled";

export const LoadMoreButton = ({ onClick, children }) => {
  return <LoadMoreBtn onClick={onClick}>{children}</LoadMoreBtn>;
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};
