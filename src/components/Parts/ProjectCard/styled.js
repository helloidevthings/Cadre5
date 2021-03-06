import styled from "@emotion/styled";

export default styled.section`
  background-color: ${(props) =>
    props.theme.color.light};
  padding-top: 2rem;
  padding-bottom: 4rem;

  .title {
    text-align: center;
    margin-bottom: 1.1rem;
  }

  & a {
    color: black;
    text-decoration: none;
    background: #fff;
    flex: 1 1 auto;
    margin: 0.8em;
    max-width: 24em;
    border: 3px solid #efefef;
    border-radius: 0.4em;
    opacity: 0;
    transform: scale(1.1);
    transition: opacity 0.3s ease-in,
      transform 0.4s ease-in;

    &:hover {
      border: 3px solid #d0e5ff;
      box-shadow: -1px 0px 11px 4px #d0e5ff;
    }
  }

  & .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &.active {
      a {
        opacity: 1;
        transform: none;
      }
    }
  }

  & .text {
    padding: 1.3em 1.5em 1.6em;
  }

  p {
    margin-top: 0;
  }

  & figure {
    position: relative;
    max-height: 350px;
    overflow: hidden;
    border-radius: 0.4em 0.4em 0 0;

    img {
      height: 100%;
      background: white;
    }
  }

  & .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.3em;

    & li {
      list-style: none;
      font-size: 0.9em;
      font-weight: 500;
    }
  }

  &.mediumTheme a {
    color: black;
    background: ${(props) =>
      props.theme.color.light};
    &:hover {
      color: ${(props) =>
        props.theme.color.primary};
    }
    h3 {
      font-size: 1.2em;
    }
    p {
      font-size: 0.89em;
    }
  }
`;
