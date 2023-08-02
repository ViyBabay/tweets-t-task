import { styled } from "styled-components";

export const CardBtn = styled.button`
  width: 196px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  color: #373737;

  border-radius: 10px;
  border: none;
  background: ${(props) => props.btnBgColor};
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${(props) => (props.isFollowing ? "#EBD8FF" : "#5CD3A8")};
  }
`;
