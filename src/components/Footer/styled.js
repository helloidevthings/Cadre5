import styled from "@emotion/styled";

export default styled.footer`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.dark};
  color: white;
  padding: 1.3em;
  font-size: 0.9em;
`;
