import styled from "@emotion/styled";

export default styled.section`
  color: white;
  background: ${(props) => props.theme.gradients.blackToDark};
  padding: 3rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: flex 1s ease-in-out;

  & .title {
    text-align: center;
  }

  & .logoWrapper {
    max-height: 800px;
    max-width: 1200px;
    overflow: hidden;
    height: auto;
    transition: all 0.5s cubic-bezier(0.68, 0.01, 0.68, 1);
  }

  & .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    height: auto;
    margin: 0 auto;

    & > * {
      max-width: 7em;
      max-height: 3.75em;
      margin: 1.3rem;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }
  }

  /* Logo Wrapper Slide Up */
  &.visible {
    .logoWrapper {
      max-height: 0;
    }
  }
  & button {
    border: none;
    border-top: 1px solid white;
    width: 90%;
    max-width: 1200px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.14em;
    padding: 1rem;
    margin-top: 1rem;
    opacity: 0;
    transition-delay: 5s;
    transition: opacity 2s ease-in;
  }
  /* Logo Fade In */
  &.active {
    .logo,
    button {
      opacity: 1;
    }
  }
`;
