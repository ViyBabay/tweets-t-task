import { styled } from "styled-components";

export const CardItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 460px;
  width: 380px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  border-radius: 20px;
`;

export const Svglogo = styled.svg`
  position: relative;
  left: 20px;
  top: 20px;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const TextTweet = styled.p`
  margin: 0;
  margin-top: 26px;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
`;

export const TextFollow = styled.p`
  margin: 0;
  margin-top: 16px;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -24px;
    transform: translateX(-50%);
    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
  }
`;

export const BgImg = styled.img`
  margin-top: 28px;
  margin-left: 36px;
`;

export const SmallLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 178px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 9px solid #ebd8ff;
  border-radius: 50%;
  box-shadow: box-shadow: 0px 4.391631126403809px 3.2937235832214355px 0px #FBF8FF inset, 0px -2.1958155632019043px 4.391631126403809px 0px #AE7BE3 inset;
filter: drop-shadow(0px 4.391631126403809px 4.391631126403809px rgba(0, 0, 0, 0.06));;


`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
  padding-top: 62px;
`;
