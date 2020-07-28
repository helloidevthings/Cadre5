import styled from "@emotion/styled";

export default styled.a`
  text-decoration: none;
  border-radius: none;
  border: none;
  background-color: transparent;
  margin-top: 2em;
  display: inline-block;

  &.primary {
    margin: 2em 0em;
    padding: 0.1em 0em;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    color: black;
    font-weight: 400;
    letter-spacing: 0.12em;
    position: relative;
    transition: color 0.3s ease-in;

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      right: 0;
      background-color: black;
      transform-origin: bottom right;
      transform: scaleX(1);
      transition: transform 0.5s cubic-bezier(0.6, -0.01, 0.11, 0.99);
    }

    &:hover {
      &:after {
        transform: scaleX(0);
        background-color: #c10230;
      }
    }
  }

  &_secondary {
  }
  &.lightTheme {
    color: white;
    &.primary:after {
      background-color: white;
    }
  }
  &.darkTheme {
    color: black;

    &.primary:after {
      background-color: white;
    }
  }
`;
