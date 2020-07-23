import styled from "@emotion/styled";

export default styled.section`
  background-color: ${(props) => props.theme.color.light};
  padding-top: 2em;
  padding-bottom: 4em;

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .title {
    text-align: center;
    margin-bottom: 1em;
  }
`;