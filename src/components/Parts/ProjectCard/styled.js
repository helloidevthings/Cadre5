import styled from "@emotion/styled";

export default styled.a`
  text-decoration: none;

  .ProjectCard {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.dark};
    flex: 1 1 auto;
    margin: 0.5em;
    max-width: 20em;
    border-radius: 0.7em;
    box-shadow: ${(props) => props.theme.boxShadow.main};
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.02);
      background-color: ${(props) => props.theme.color.black};
    }

    &_link {
      text-decoration: none;
    }

    &_text {
      padding: 1.3em;
    }

    &_media {
      position: relative;
      max-height: 280px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &_tags {
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
  }
`;
