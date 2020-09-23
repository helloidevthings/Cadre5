import styled from "@emotion/styled";

export default styled.section`
  margin: 0 auto;
  h2 {
    text-align: center;
    padding: 1.4em 0.8em 0.5em;
  }

  &.darkTheme {
    background: ${(props) => props.theme.gradients.redToBlack};
    color: white;
  }

  &.mediumTheme {
    background: ${(props) => props.theme.color.light};
    color: black;
  }

  &.lightTheme {
    background: white;
    color: black;
  }
`;
