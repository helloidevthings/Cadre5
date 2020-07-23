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
    background-color: ${(props) => props.theme.color.dark};
  }
  #{$medium-theme} {
    background-color: ${(props) => props.theme.color.light};
  }
  &#{$reverse} {
    flex-direction: row-reverse;
  }
`;
