import styled from "@emotion/styled";

export default styled.img`
  max-width: 7em;
  max-height: 3.75em;
  margin: 1.3em;
  filter: grayscale(100%);
  opacity: 0.8;
  /* transition: all 0.1ms ease-in-out; */

  &:hover {
    filter: grayscale(0%) saturate(100%);
    /* transform: scale(1.3); */
    opacity: 1;
  }
`;
