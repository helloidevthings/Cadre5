import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 3em;

  .item {
    margin: 2em;
    max-width: 18em;
    text-align: center;

    h4 {
      font-size: 1.5em;
      margin-bottom: 0.3em;
    }
  }
  & figure {
    max-width: 5rem;
    margin: auto;
  }
`;
