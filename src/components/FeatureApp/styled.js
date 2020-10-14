import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 3rem;

  figure {
    max-width: 1200px;

    img {
      width: 100%;
      border-radius: 10px;
      margin: auto;
      border: 1em white solid;
      box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.16);
      @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
        border: 0.8em white solid;
      }
    }
  }

  &.circles {
    position: relative;
    max-width: 100%;

    &:before {
      content: "";
      position: relative;
    }
  }

  &.darkTheme {
    background: ${(props) => props.theme.color.grayDark};
    figure {
      img {
        border-color: black;
      }
    }
  }

  &.mediumTheme {
    background: ${(props) => props.theme.color.light};
  }

  &.lightTheme {
    background: white;
  }
`;
