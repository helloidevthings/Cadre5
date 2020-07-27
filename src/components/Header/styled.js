import styled from "@emotion/styled";

export default styled.header`
  flex: 1 1 auto;
  background-color: black;
  z-index: 1000;
  padding: 1em;

  .Navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    top: 0px;
    left: 0px;
    position: sticky;
    box-sizing: border-box;
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      flex-direction: column;
    }
  }

  .Logo {
    margin: 1em 0.8em 5em;
    height: 300px;
    text-align: center;
    transform: rotate(90deg);
    opacity: 0;
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      transform: rotate(0deg);
      opacity: 1;
    }

    svg {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      vertical-align: middle;
    }
  }
`;
