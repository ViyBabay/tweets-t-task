import { BackBtn } from "./BackButton.styled";

export const BackButton = ({ onClick, children }) => {
  return <BackBtn onClick={onClick}>{children}</BackBtn>;
};
