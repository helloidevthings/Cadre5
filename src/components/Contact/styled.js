import styled from "@emotion/styled";

export default styled.section`
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.dark};
  padding-top: 3em;
  /* min-height: 100vh; */

  & .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .text {
    max-width: 600px;
  }

  h3 {
    font-size: 1.4em;
  }

  & .InfoItems {
    margin-top: 2em;
  }

  .form {
    display: flex;
    flex-direction: column;
    padding: 2em;
    max-width: 600px;
  }

  input {
    margin-bottom: 1em;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.color.white};
  }

  textarea {
    margin-bottom: 1em;
  }

  & [type="submit"] {
    background-color: ${(props) => props.theme.color.primary};
    outline: none;
    border: none;
    border-radius: 2em;
    display: inline-block;
  }

  .map {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: ${(props) => props.theme.gradients.redToBlack};
    max-width: 100vw;
    max-height: 36em;
    margin-top: 3em;

    svg {
      margin-top: -7em;
      width: 100%;
      height: 100%;
    }
  }
`;
