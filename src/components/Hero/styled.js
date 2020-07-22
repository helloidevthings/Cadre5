import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  position: relative;
  color: white;
  background: ${(props) => props.theme.gradients.blackToRed};
  background-repeat: no-repeat;

  &_para {
    max-width: 33em;
    margin: 1.3em;
  }

  &_tagline {
    font-size: 1.6em;
    font-weight: 300;
    line-height: 1.45;
  }
`;
