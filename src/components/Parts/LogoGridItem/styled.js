import styled from "@emotion/styled";

export default styled.img`
  max-width: 7em;
  max-height: 3.75em;
  margin: 1.3em;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: all 0.3s cubic-bezier(0.79, -0.01, 0.23, 1.04);

  &:hover {
    filter: grayscale(0%) saturate(100%);
    transform: scale(1.3);
    opacity: 1;
  }
`;
