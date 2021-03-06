import styled from "@emotion/styled";

export default styled.section`
  background-color: ${(props) =>
    props.theme.color.light};
  padding-top: 1rem;
  padding-bottom: 5rem;

  .title {
    text-align: center;
    margin-bottom: 1.1rem;
  }
`;
