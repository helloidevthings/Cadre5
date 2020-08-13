import styled from "@emotion/styled";

export default styled.div`
  a {
    color: white;
    text-decoration: none;
  }
  .InfoItems {
    display: flex;
    flex-wrap: wrap;
    color: white;
    font-size: 0.9em;
  }
  .Info_item {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    margin: 0.4em 1em 0.4em 0;
    letter-spacing: 0.024em;

    svg {
      margin-right: 0.4em;
    }
  }
`;
