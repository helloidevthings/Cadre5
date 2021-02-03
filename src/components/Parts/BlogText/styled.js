import styled from "@emotion/styled";

export default styled.article`
  background-color: #fff;
  padding: 2rem 1.2rem;

  & .wrapper {
    max-width: 40em;
    margin: 0 auto;
    padding-top: 1.3em;
    padding-bottom: 1.3em;
  }

  /* Changing The Theme */
  &.lightTheme {
    background-color: #fff;
  }
  &.darkTheme {
    background-color: ${(props) =>
      props.theme.color.grayDark};
    color: #fff;
  }
  &.mediumTheme {
    background-color: ${(props) =>
      props.theme.color.light};
  }

  /* Changing The Alignment */
  .wrapper.center {
    text-align: center;
  }
  .wrapper.right {
    text-align: center;
  }
`;
