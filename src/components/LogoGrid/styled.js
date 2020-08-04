import styled from "@emotion/styled";

export default styled.section`
  max-width: 1200px;
  margin: 0.8em auto 5em;

  .heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    color: ${(props) => props.theme.color.primary};
    margin: 4em auto 0.8em;
    padding: 1em 1.57em;
    box-shadow: 3px 5px 10px 0px #6f6e6e45;
    & > * {
      flex: 0 0 auto;
    }
  }

  h3 {
    margin-bottom: 0;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    & > * {
      max-width: 7em;
      max-height: 3.75em;
      margin: 1.3em;
      filter: grayscale(100%);
      opacity: 0.8;
    }

    img {
      transition: all 0.3s cubic-bezier(0.79, -0.01, 0.23, 1.04);

      &:hover {
        filter: grayscale(0%) saturate(100%);
        transform: scale(1.3);
        opacity: 1;
      }
    }
  }
`;
