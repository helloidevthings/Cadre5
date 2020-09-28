import styled from "@emotion/styled";

export default styled.header`
  flex: 1 1 auto;
  background-color: black;
  z-index: 1000;
  position: sticky;
  height: ${(props) => (props.isOpen ? "100" : "")};

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 1rem;
  }

  .menuButton {
    color: white;
    text-transform: uppercase;
    font-weight: 300;
    border: none;
    position: absolute;
    right: 5px;

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      display: none;
    }
    svg {
      fill: ${(props) => props.theme.color.primary};
    }
  }

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
      padding: 1rem;
    }
  }

  .Logo {
    margin: 1em 0.8em 5em;
    height: 300px;
    display: none;
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      transform: rotate(0deg);
      opacity: 1;
      display: block;
    }

    svg {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      vertical-align: middle;
    }
  }

  .LogoMobile {
    padding: 1rem;
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      display: none;
    }
  }
`;
