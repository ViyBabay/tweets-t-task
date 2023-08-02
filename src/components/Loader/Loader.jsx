import { LoaderWrapper, StyledLoader } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <StyledLoader
        height="200"
        width="200"
        color="#EBD8FF"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoaderWrapper>
  );
};
