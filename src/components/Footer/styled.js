import styled from "@emotion/styled";

export default styled.footer`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.color.dark};
  color: white;
  font-size: 0.9em;
  padding: 0.4rem 1.8rem;

  & > p {
    font-weight: 300;
    margin: 1rem 0;
    font-family: aktiv-grotesk-extended,
      sans-serif;
    font-size: 0.79em;
  }
`;
