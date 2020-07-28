import styled from "@emotion/styled";

export default styled.section`
  color: white;
  background: ${(props) => props.theme.gradients.blackToDark};
  padding: 3em 1em;

  & .title,
  & .logos {
    opacity: 0;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.4s;

    .active& {
      opacity: 1;
      transform: none;
    }
  }

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

    & > * {
      max-width: 7em;
      max-height: 3.75em;
      margin: 1.3em;
      filter: grayscale(100%);

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
