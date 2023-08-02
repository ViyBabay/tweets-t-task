import { styled } from "styled-components";

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;

  height: 460px;
  width: 380px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  /* background-image: url("../assets/Logo2.png"); */
  border-radius: 20px;

  align-items: center;
`;

export const Svglogo = styled.svg`
  position: relative;
  left: 20px;
  top: 20px;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 62px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #ebd8ff;
`;
