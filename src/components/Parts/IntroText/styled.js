import styled from "@emotion/styled";

export default styled.div`
  .date-wrap {
    display: flex; 
    justify-content: center; 
    align-items: center;

    div {
      flex: 1 1 auto; 
      flex-basis: auto; 
      width: 100%;
      height: 2px; 
      background-color: #c4c3c3; 
    }
  }

  .date {
    flex: 1 0 auto; 
    color: ${(props) => props.theme.color.grayLt};
    font-family: aktiv-grotesk-extended, sans-serif;
    font-size: 0.9em;
    font-weight: 400;
    letter-spacing: 0.01em;
    margin: 1em 0;
    padding-right: 10px;
    z-index: 1;
  }

  .description {
    &--lg {
      font-size: 1.1em;
      /* margin-bottom: 0.8em; */
    }
  }
`;
