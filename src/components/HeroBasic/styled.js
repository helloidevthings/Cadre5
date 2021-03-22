import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 43vh;
  position: relative;
  overflow: hidden;
  color: white;

  picture {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      object-position: 50% 50%;
      height: inherit;
      width: inherit;
      @media (max-width: calc(${(props) => props.theme.breakpoints.desktop} - 1px )) {
        object-position: top;
      }
      /* @media (min-width: calc(${(props) => props.theme.breakpoints.desktopLg} - 1px )) {
        object-position: top;
      } */
    }
  }

  &:after {
    content: "";
    background: linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 35%));
    height: inherit;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }
  & .background_svg {
    svg {
      max-width: 90%;
      position: absolute;
      bottom: -13%;
      right: -7%;
      opacity: 0.7;
    }
  }
`;
