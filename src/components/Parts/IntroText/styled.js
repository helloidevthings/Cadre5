import styled from "@emotion/styled";

export default styled.section`
  .date-wrap {
    margin: 1em 0;
    position: relative;

    &:after {
      content: "";
      background-color: ${(props) => props.theme.color.grayLt};
      position: absolute;
      height: 1px;
      width: 100%;
      top: 50%;
      left: 0;
      z-index: -1;
    }
  }

  .date {
    color: ${(props) => props.theme.color.grayLt};
    display: inline;
    background-color: white;
    font-size: 0.9em;
    font-weight: 400;
    letter-spacing: 0.01em;
    margin: 1em 0;
    padding-right: 10px;
    z-index: 1;
  }

  .description {
    &--lg {
      font-size: 1.1em;
      margin-bottom: 0.8em;
    }
  }
`;
