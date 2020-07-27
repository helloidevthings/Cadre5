import styled from "@emotion/styled";

export default styled.section`
  max-width: 30em;

  & .text {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 2px solid ${(props) => props.theme.color.grayLt};
    margin-bottom: 1.2em;
    padding-bottom: 0.8em;

    h2 {
      font-size: 1.8em;
    }
  }
  & .descLg {
    font-size: 1.1em;
    margin-bottom: 1em;
  }

  & .icon {
    display: block;
    width: ${(props) => props.theme.circle.size};
    height: ${(props) => props.theme.circle.size};
    position: relative;
    margin-right: 1em;
    z-index: 1;

    & figure {
      z-index: 3;
      display: block;
      width: ${(props) => props.theme.circle.size};
      height: ${(props) => props.theme.circle.size};
    }

    &:after {
      content: "";
      position: absolute;
      background-color: ${(props) => props.theme.color.primary};
      width: ${(props) => props.theme.circle.size};
      height: ${(props) => props.theme.circle.size};
      border-radius: ${(props) => props.theme.circle.size};
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
`;
