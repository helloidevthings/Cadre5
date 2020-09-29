import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  position: relative;
  color: white;
  background: ${(props) => props.theme.gradients.redToBlack};
  background-repeat: no-repeat;
  z-index: 3;
  overflow: hidden;

  & article {
    max-width: 33em;
    padding: 1.8em;
    z-index: 4;
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      padding: 1.3em;
    }
  }

  & h1 {
    font-size: 3.7em;
  }

  & h2 {
    font-size: 1.5em;
    font-weight: 300;
    line-height: 1.45;
  }
  & .svg-wrapper {
    z-index: 1;
    position: absolute;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  & .wave-lines {
    width: 100%;
    top: -10px;
    left: -10px;
    opacity: 0.5;
  }

  & .abstract-graph {
    /* height: 800px; */
    bottom: 0;
    left: -10px;
    right: -10px;
    opacity: 1;
  }

  /* SVG STYLES */

  & .st000 {
    opacity: 0.5685;
  }
  & .st100,
  & .st2 {
    opacity: 0.4;
    fill: none;
    stroke: #ba0c2f;
    stroke-width: 1.8577;
  }
  & .st200 {
    stroke: 1.8492;
  }
  & .st40 {
    fill: none;
    stroke: #ba0c2f;
    stroke-width: 0.35;
    stroke-miterlimit: 10;
  }
  & .st4 {
    opacity: 0.7;
  }
  & .st5,
  & .st6 {
    fill: #ba0c2f;
  }
  & .st6 {
    opacity: 0.2;
  }
`;
