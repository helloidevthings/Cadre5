import styled from "@emotion/styled";

export default styled.section`
  background: ${(props) => props.theme.color.dark};
  color: ${(props) => props.theme.color.white};
  padding: 3em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &.row {
    flex-direction: row;
  }

  &.reverse {
    flex-direction: row-reverse;
  }
  .text-wrapper {
    max-width: 35em;
  }

  .leadin {
    margin-bottom: 0.3em;
  }

  figure {
    background: ${(props) => props.theme.color.dark};
    flex: 1 1 auto;
    max-width: 700px;
    position: relative;
    display: flex;
    justify-content: center;

    /* @supports (max-width: max-content) {
      min-width: 20em;
      max-width: max-content;
      flex-basis: 20em;
    } */

    &:after {
      content: "";
      background: ${(props) => props.theme.color.primary};
      position: absolute;
      width: 73%;
      height: 73%;
      top: 20%;
      left: 20%;
    }

    img {
      max-width: 90%;
      max-height: 90%;
      padding: 2em;
      padding: 3em 2em;
      vertical-align: middle;
      z-index: 1;
    }
  }
`;
