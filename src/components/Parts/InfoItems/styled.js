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
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    & li:before {
      content: none;
    }
  }
  .Info_item {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    margin: 0.4em 1.3em 0.4em 0;
    letter-spacing: 0.024em;
    font-weight: 200;

    svg {
      margin-right: 0.5em;
      width: 23px;
      max-height: 23px;
    }
  }
`;
