import styled from "@emotion/styled";

export default styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  .text-wrapper {
    max-width: 30em;
    flex-grow: 9999;
    padding-right: 3em;
    opacity: 0;
    transform: translateY(20%);
    transition: all 1s ease-in-out;

    &.active {
      opacity: 1;
      transform: none;
    }
  }

  .image-wrapper {
    opacity: 0;
    transform: translateX(15%);
    transition: all 1s ease-in-out;
    transition-delay: 0.2s;

    &.active {
      opacity: 1;
      transform: none;
    }
  }

  .leadin {
    color: ${(props) => props.theme.color.primary};
  }

  .media {
    $min-width-photo: 15em;
    flex: 1 1 auto;
    max-width: 700px;
    @supports (max-width: max-content) {
      min-width: $min-width-photo;
      /* max-width: max-content; */
      flex-basis: $min-width-photo;
      flex-grow: 99999;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      vertical-align: middle;
    }
  }
`;
