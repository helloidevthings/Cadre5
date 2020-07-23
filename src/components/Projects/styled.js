import styled from "@emotion/styled";

export default styled.section`
  &_heading {
    background: ${(props) => props.theme.color.dark};
    color: white;
    padding-top: 3em;
    padding-left: 4em;
  }
`;