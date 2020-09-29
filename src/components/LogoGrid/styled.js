import styled from "@emotion/styled";

export default styled.section`
  max-width: 1200px;
  margin: 0.8rem auto 5rem;

  .heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    color: ${(props) => props.theme.color.primary};
    margin: 4em auto 0.8em;
    padding: 1em 1.57em;
    box-shadow: 3px 5px 10px 0px #6f6e6e45;
    & > * {
      flex: 0 0 auto;
    }
  }

  h3 {
    margin-bottom: 0;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img {
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.68, 0.01, 0.68, 1);
    }
  }
  &.active {
    .grid {
      img {
        opacity: 1;
      }
    }
  }
`;
