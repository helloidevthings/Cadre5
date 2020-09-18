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

    /* @supports (max-width: max-content) {
      min-width: 10em;
      max-width: max-content;
      flex-basis: 10em;
      flex-grow: 99999;
    } */

    /* &:after {
      content: "";
      background: linear-gradient(white 38%, #efefef 38%);
      position: absolute;
      width: 90%;
      height: 100%;
      top: 0;
      right: 0;
      z-index: -1;
    } */

    img {
      max-width: 90%;
      max-height: 90%;
      padding: 2em;
      padding: 3em 2em;
      vertical-align: middle;
    }
  }

  &.border {
    figure {
      &:after {
        content: "";
        background: ${(props) => props.theme.color.primary};
        position: absolute;
        width: 73%;
        height: 73%;
        top: 21%;
        left: 20%;
        z-index: -1;
      }
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
