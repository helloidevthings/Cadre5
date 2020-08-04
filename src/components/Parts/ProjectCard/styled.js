import styled from "@emotion/styled";

export default styled.section`
  & a {
    color: white;
    text-decoration: none;
    background: ${(props) => props.theme.gradients.darkToGrayMd};
    flex: 1 1 auto;
    margin: 0.5em;
    max-width: 20em;
    border-radius: 0.7em;
    box-shadow: ${(props) => props.theme.boxShadow.main};
    opacity: 0;
    transform: scale(1.1);
    transition: opacity 0.8s ease-in-out, transform 0.4s ease-in-out;
    transition-delay: 0.4s;

    &.active {
      opacity: 1;
      transform: none;
    }

    &:hover {
      background: ${(props) => props.theme.color.black};
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
    padding: 1.3em 1.5em 1.4em;
  }

  & figure {
    position: relative;
    max-height: 250px;
    overflow: hidden;
    border-radius: 0 0 0.7em 0.7em;
    
    img {
      height: 100%;
      background: white; 
    }
  }

  & .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 1.3em 0;

    li {
      list-style: none;
      font-size: .8em; 
      margin-right: 0.4em;
      border-radius: 1em;
      padding: 0.1em 0.8em;
      &:nth-child(even) {
        background-color: ${(props) => props.theme.color.grayMed};
      }
      &:nth-child(odd) {
        background-color: ${(props) => props.theme.color.primary};
      }
      /* &.Government {
        background-color: ${(props) => props.theme.color.grayMed};
      }
      &.User Experience {
        background-color: ${(props) => props.theme.color.grayMed};
      } */
    }
  }
`;
