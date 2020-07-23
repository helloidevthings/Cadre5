import styled from "@emotion/styled";

export default styled.section`
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.dark};
  display: flex;
  flex-wrap: wrap;
  padding-top: 3em;

  .text {
    max-width: 600px;
  }

  & .InfoItems {
    margin-top: 2em;
  }

  .form {
    display: flex;
    flex-direction: column;
    padding: 2em;
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
    overflow: hidden;
    background: ${(props) => props.theme.gradients.redToBlack};
    max-width: 100vw;
    max-height: 800px;
    margin-top: 3em;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
