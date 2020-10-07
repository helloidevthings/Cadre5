import styled from "@emotion/styled";

export default styled.img`
  max-width: 150px;
  max-height: 50px;
  margin: 1.3em;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: filter 0.1ms ease-in-out, opacity 0.1ms ease-in-out;

  &:hover {
    filter: grayscale(0%) saturate(100%);
    opacity: 1;
  }
`;
