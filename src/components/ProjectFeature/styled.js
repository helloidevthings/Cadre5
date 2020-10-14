import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 3rem;
  padding-bottom: 3rem;
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
    display: block;
    position: relative;
    overflow: hidden;
    width: 560px;
    padding-top: 56.25%;
    max-width: 80vw;

    & > iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }

  &.lightTheme {
    background-color: white;
  }
  &.darkTheme {
    background-color: ${(props) => props.theme.color.grayDark};
    color: white;
  }
  &.mediumTheme {
    background-color: ${(props) => props.theme.color.light};
  }
`;
