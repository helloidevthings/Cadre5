import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 3em;

  figure {
    max-width: 900px;

    img {
      width: 100%;
      border-radius: 10px;
      margin: auto;
      border: 1.4rem white solid;
      box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.16);
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

  &--mediumTheme {
    background: linear-gradient($white, ${(props) => props.theme.color.light});
  }

  &--lightTheme {
    background: linear-gradient(${(props) => props.theme.color.light}, $white);
  }
`;
