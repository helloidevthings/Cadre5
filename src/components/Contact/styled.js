import styled from "@emotion/styled";
const url =
  "https://res.cloudinary.com/cadre5images/image/upload/v1612201595/images/";
export default styled.section`
  color: ${(props) => props.theme.color.white};
  background: ${(props) =>
    props.theme.color.dark};
  padding-top: 3rem;
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
    margin-top: 2rem;
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
    border-bottom: 1px solid
      ${(props) => props.theme.color.white};
  }

  textarea {
    margin-bottom: 1em;
  }

  & [type="submit"] {
    background-color: ${(props) =>
      props.theme.color.primary};
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
    background: ${(props) =>
      props.theme.gradients.redToBlack};
    max-width: 100vw;
    max-height: 38em;
    margin-top: 3rem;

    svg {
      margin-top: -7rem;
      width: 100%;
      height: 100%;

      @media (min-width: 320px) and (max-width: 1100px) {
        width: 0;
        height: 0;
      }
    }

    @media (min-width: 500px) and (max-width: 1100px) {
      background: url("${url}/cadre5map.png");
      background-size: cover;
      background-position: 5% 90%;
      height: 500px;
      background-size: 130%;
      background-repeat: no-repeat;
    }

    @media (min-width: 320px) and (max-width: 500px) {
      background-size: 200%;
    }
  }
`;
