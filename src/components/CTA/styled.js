import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;

  &--basic {
    flex-direction: row;
  }
  &--alt {
    flex-direction: row-reverse;
  }

  .text {
    max-width: 36em;
    flex-grow: 9999;
  }

  figure {
    flex: 1 1 auto;
    max-width: 700px;
    position: relative;
    display: flex;
    justify-content: center;

    @supports (max-width: max-content) {
      min-width: 25em;
      max-width: max-content;
      flex-basis: 25em;
      // flex-grow: 99999;
    }

    &:after {
      content: "";
      background: linear-gradient($white 38%, $light 38%);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      z-index: -1;
    }

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
`;
