import styled from "@emotion/styled";

export default styled.section`
  & a {
    color: white;
    text-decoration: none;
    background-color: ${(props) => props.theme.color.dark};
    flex: 1 1 auto;
    margin: 0.5em;
    max-width: 20em;
    border-radius: 0.7em;
    box-shadow: ${(props) => props.theme.boxShadow.main};
    opacity: 0;
    transform: scale(1.1);
    transition: opacity 0.8s ease-in-out, transform 0.4s ease-in-out,
      background-color 1s ease-in-out;
    transition-delay: 0.4s;

    &.active {
      opacity: 1;
      transform: none;
    }

    &:hover {
      transform: scale(1.02);
      background-color: ${(props) => props.theme.color.black};
    }

    &:nth-child(2) {
      transition-delay: 0.5s;
    }

    &:nth-child(3) {
      transition-delay: 0.7s;
    }
  }

  & .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  & .text {
    padding: 1.3em;
  }

  & figure {
    position: relative;
    max-height: 280px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  & .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 1.3em 0;

    li {
      list-style: none;
      margin-right: 0.4em;
      border-radius: 1em;
      padding: 0.1em 0.8em;
      &:nth-child(even) {
        background-color: ${(props) => props.theme.color.grayMd};
      }
      &:nth-child(odd) {
        background-color: ${(props) => props.theme.color.primary};
      }
    }
  }
`;
