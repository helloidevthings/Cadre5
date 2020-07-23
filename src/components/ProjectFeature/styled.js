import styled from "@emotion/styled";

export default styled.section`
  $light-theme: "[theme= " lightTheme " ]";
  $medium-theme: "[theme= " mediumTheme " ]";
  $dark-theme: "[theme= " darkTheme " ]";
  $reverse: "[row= " reverse " ]";

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 3em;
  padding-bottom: 3em;
  justify-content: center;
  align-items: center;

  figure {
    max-width: 38em;
    img {
      width: 100%;
    }
  }

  #{$light-theme} {
    background-color: white;
  }
  #{$dark-theme} {
    background-color: #1f1f1f;
  }
  #{$medium-theme} {
    background-color: #efefef;
  }
  &#{$reverse} {
    flex-direction: row-reverse;
  }
`;
