import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
  padding-bottom: 2em;

  &.row {
    flex-direction: row;
  }

  &.reverse {
    flex-direction: row-reverse;
  }
  &.active {
    transform: none;
    opacity: 1;

    & > .text,
    & > figure {
      transform: none;
      opacity: 1;
    }
  }

  .text {
    max-width: 36em;
    flex-grow: 9999;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-in-out;
  }

  figure {
    flex: 1 1 auto;
    max-width: 700px;
    position: relative;
    display: flex;
    justify-content: center;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 1s ease-in-out;

    @supports (max-width: max-content) {
      min-width: 25em;
      max-width: max-content;
      flex-basis: 25em;
      flex-grow: 99999;
    }

    /* &:after {
      content: "";
      background: linear-gradient(white 38%, #efefef 38%);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      z-index: -1;
    } */

    img {
      max-width: 90%;
      max-height: 90%;
      width: auto;
      height: auto;
      padding: 2em;
      padding: 3em 2em;
      vertical-align: middle;
    }
  }
  &.lightTheme {
    background-color: white;
  }
  &.darkTheme {
    background-color: ${(props) => props.theme.color.dark};
    color: white;
  }
  &.mediumTheme {
    background: ${(props) => props.theme.gradients.lightToTransparent};
  }
`;
