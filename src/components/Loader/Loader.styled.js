import { ThreeCircles } from "react-loader-spinner";
import { styled } from "styled-components";

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledLoader = styled(ThreeCircles)``;
