import styled from "@emotion/styled";

export default styled.footer`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.dark};
  color: white;
  padding: 1.1em 1.8em;
  font-size: 0.9em;

  p {
    font-weight: 200;
  }
`;
