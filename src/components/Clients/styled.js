import styled from "@emotion/styled";

export default styled.section`
  color: white;
  background: ${(props) => props.theme.gradients.blackToDark};
  padding: 3em 1em;

  & .title {
    text-align: center;
  }

  & .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    max-height: 20em;
    overflow: hidden;

    & > * {
      max-width: 7em;
      max-height: 3.75em;
      margin: 1.3em;
      filter: grayscale(100%);
      opacity: 0;
      transition: opacity 1s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  &.active {
    .logo {
      opacity: 1;
    }
  }
`;
