import styled from "@emotion/styled";

export default styled.section`
  color: white;
  background: linear-gradient(#000000, #2b0000);
  padding: 3rem 1rem;
  /* padding-bottom: 0; */
  text-align: center;
  display: flex;
  /* background: url("./../images/cadre5office-duo-blue.png"); */
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: flex 1s ease-in-out;
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    height: 100vh;
    /* background: linear-gradient(
      #020202,
      #130101c4,
      #330707d9
    ); */
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  & .title {
    text-align: center;
    z-index: 2;
  }
  & article {
    z-index: 2;
  }
  & .logoWrapper {
    max-height: 1500px;
    max-width: 1200px;
    overflow: hidden;
    height: auto;
    transition: all 0.6s
      cubic-bezier(0.68, 0.01, 0.68, 1);
    z-index: 2;
  }

  & .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    height: auto;
    margin: 0 auto;
    z-index: 2;
  }

  & .logo {
    max-width: 8.3em;
    max-height: 3em;
    margin: 1.2em 0.7em;
    opacity: 0;
    transition: opacity 1s ease-in-out;
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
    z-index: 2;
  }
  /* Logo Fade In */
  &.active {
    .logo,
    button {
      opacity: 1;
    }
  }
`;
