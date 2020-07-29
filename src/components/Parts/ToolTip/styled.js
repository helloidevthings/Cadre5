import styled from "@emotion/styled";

export default styled.div`
  button {
    $unit: 2.5em;
    width: 2.5em;
    height: 2.5em;
    position: absolute;
    background-color: ${(props) => props.theme.color.primary};
    border: 0.2rem solid white;
    border-radius: 2.5em;
    text-decoration: none;
    font-size: 1em;
    font-weight: 700;
    color: white;
    box-shadow: ${(props) => props.theme.boxShadow.main};
    z-index: 3;
    outline: none;
  }

  .ToolTipButton {
    top: -1.3em;
    left: -1.5em;
  }

  .Close {
    position: absolute;
    margin: 0;
    line-height: 0;
    top: -1em;
    right: -0.8em;
    font-size: 0.7em;
    border: none;
    background-color: ${(props) => props.theme.color.grayMed};
  }

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .description {
    display: flex;
    background-color: white;
    max-width: 20em;
    padding: 1em 1em 1em 1.3em;
    border-radius: 0.8rem;
    box-shadow: ${(props) => props.theme.boxShadow.main};
    position: relative;
    font-size: 0.8rem;
    & .active {
      z-index: 200;
    }
  }
`;
