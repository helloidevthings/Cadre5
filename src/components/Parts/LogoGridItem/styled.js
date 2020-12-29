import styled from "@emotion/styled";

export default styled.figure`
img {

  max-width: 8em;
  max-height: 4em;
  margin: 0.9em;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: transform 0.2s cubic-bezier(0.68, 0.01, 0.68, 1),
    filter 0.1ms ease-in-out;

  &:hover {
    filter: grayscale(0%) saturate(100%);
    opacity: 1;
    transform: scale(1.1);
  }
}
`;
