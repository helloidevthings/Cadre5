import styled from "@emotion/styled";

export default styled.section`
  $min-width-photo: 20em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 3em 0;

  & .text-wrapper {
    max-width: 30em;
    flex-grow: 9999;
    padding-right: 3em;
  }

  & .IntroText_leadin {
    color: ${(props) => props.theme.color.primary};
  }

  &_media {
    flex: 1 1 auto;
    max-width: 1200px;
    @supports (max-width: max-content) {
      min-width: $min-width-photo;
      max-width: max-content;
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
