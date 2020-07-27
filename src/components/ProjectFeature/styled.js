import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 3em;
  padding-bottom: 3em;
  justify-content: center;
  align-items: center;
  &[data-row="reverse"] {
    flex-direction: row-reverse;
  }

  figure {
    max-width: 38em;
    img {
      width: 100%;
    }
  }

  &.lightTheme {
    background-color: white;
  }
  &.darkTheme {
    background-color: ${(props) => props.theme.color.dark};
  }
  &.mediumTheme {
    background-color: ${(props) => props.theme.color.light};
  }
`;
