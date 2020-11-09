import styled from "@emotion/styled";

export default styled.section`
  & a {
    color: black;
    text-decoration: none;
    background: #fff;
    flex: 1 1 auto;
    margin: 0.5em;
    max-width: 20em;
    border: 3px solid #efefef;
    border-radius: 0.4em;
    opacity: 0;
    transform: scale(1.1);
    transition: opacity 0.3s ease-in, transform 0.4s ease-in;

    &:hover {
      border: none;
      border: 3px solid #fff;
      box-shadow: -1px 0px 11px 4px #d0e5ff;

      /* color: #fff; */
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
    padding: 1.3em 1.5em 1.4em;
  }
/* 
  p {
    color: ${(props) => props.theme.color.primary};
    font-weight: 600; 
  } */

  & figure {
    position: relative;
    max-height: 250px;
    overflow: hidden;
    border-radius: 0 0 0.4em 0.4em;

    img {
      height: 100%;
      background: white;
    }
  }

  & .tags {
    display: flex;
    flex-wrap: wrap;
 
    & li {
      list-style: none;
      font-size: 0.7em;
      font-weight: 500;
    }
  }
  &.mediumTheme a {
    color: black;
    background: ${(props) => props.theme.color.light};
    &:hover {
      color: ${(props) => props.theme.color.primary};
    }
    h3 {
      font-size: 1.2em;
    }
    p {
      font-size: 0.89em;
    }
  }
`;
