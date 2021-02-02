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
  background: ${(props) =>
    props.theme.gradients.redToBlack};
  /* background: url("./../images/office-wideangle4.png"),
    ${(props) =>
    props.theme.gradients.redToBlack}; */
  /* background: url("./../images/wide-angle-duo-red.png"),
    ${(props) =>
    props.theme.gradients.redToBlack}; */
  background-repeat: no-repeat;
  background-size: cover;
  /* z-index: 3; */
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    height: 100vh;
    /* background: linear-gradient(
      180deg,
      #100000a6 0%,
      #000000cf 95%,
      #000000 100%
    ); */
    /* background: linear-gradient(
      #020202,
      #01071599,
      #000000de
    ); */
    width: 100%;
  }

  & article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    max-width: 28em;
    padding: 1.8em;
    @media (min-width: ${(props) =>
        props.theme.breakpoints.desktop}) {
      padding: 1.3em;
    }
  }

  .redCircle {
    position: absolute;
    width: 230px;
    height: 230px;
    top: 2%;
    right: 4%;
    overflow: visible;
  }

  & h2 {
    font-size: 3.7em;
    margin-top: 1.6rem;
  }

  & h3 {
    /* margin-top: 2em; */
    font-size: 1.2em;
    font-weight: 300;
    line-height: 1.45;
    a {
      color: #fff;
      position: relative;
      text-transform: uppercase;
      font-size: 0.85em;
      letter-spacing: 0.04em;
      text-decoration: none;

      &:after {
        content: "";
        background-color: #fff;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all 0.8s ease-in-out;
      }

      &:hover,
      &:focus {
        &:after {
          width: 0%;
        }
      }
    }
  }

  & .svg-wrapper {
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
    bottom: 0;
    left: -10px;
    right: -10px;
    opacity: 1;
  }

  /* z-index */

  .svg-wrapper {
    z-index: 1;
  }
  article {
    z-index: 10;
  }
  .scrollArrow {
    z-index: 3;
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
