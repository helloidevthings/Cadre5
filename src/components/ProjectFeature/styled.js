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
    max-width: 30em;
    img {
      width: 100%;
    }
  }

  .iframeContainer {
    /* position: relative;
    overflow: hidden;
    display: flex; */
  }
  & iframe {
    max-width: 300px;
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      max-width: 500px;
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
