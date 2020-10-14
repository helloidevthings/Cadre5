import styled from "@emotion/styled";

export default styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,700&display=swap");

  /* wrapper around everything */
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  justify-content: space-between;

  /* wrapper around main content */
  .Content {
    flex-grow: 9999;
    width: 90%;
    /* flex-grow: 9999;
    @supports (max-width: max-content) {
      min-width: 100px;
      max-width: max-content;
      flex-basis: 200px;
      flex-grow: 99999;
    } */
  }

  .blog {
    max-width: 40em;
    margin: 3em auto 1em;
    padding: 1em;
    p {
      margin-top: 1.3em;
      margin-bottom: 1.3em;
    }
  }

  .center {
    text-align: center;
  }

  .red {
    color: ${(props) => props.theme.color.primary};
  }

  .text-wrapper {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 2rem;
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      padding-left: 4rem;
      padding-right: 3rem;
      margin-bottom: 2rem;
    }
  }

  .Title {
    margin: 3em auto 1em;
    text-align: center;
  }

  a {
    color: ${(props) => props.theme.color.primary};
  }
  h1,
  h2,
  h3 {
    font-weight: 700;
    line-height: 1.45;
  }

  h1 {
    font-size: 4em;
    font-weight: 700;
  }

  h2 {
    font-size: 2.8em;
    font-weight: 700;
  }

  h3 {
    font-size: 1.8em;
    line-height: 1.45;
    margin-bottom: 0.2em;
  }
  h4 {
    font-size: 1.1em;
    margin-bottom: 1em;
    font-weight: 300;
  }

  h4,
  h5,
  h6 {
    line-height: 1.45;
  }

  p {
    line-height: 1.55;
    margin-top: 1em;
  }

  p.large {
    font-size: 1.15em;
    margin-bottom: 1.1em;
  }

  ul {
    padding-left: 1em;
    margin-top: 1.5em;
    list-style: none;
    li {
      margin-top: 1em;
      position: relative;
      font-size: 1.28em;
      font-weight: 200;

      &:before {
        content: "";
        color: red;
        display: block;
        position: absolute;
        width: 0.3em;
        height: 0.3em;
        border-radius: 0.3em;
        background-color: ${(props) => props.theme.color.primary};
        left: -0.8em;
        top: 0.6em;
      }
    }
  }
  .darkTheme {
    ul li:before {
      background-color: ${(props) => props.theme.color.ltRed};
    }
  }
  .mediumTheme {
    ul li:before {
      background-color: ${(props) => props.theme.color.red};
    }
  }

  hr {
    margin: 1rem 0;
  }

  .fancyAND {
    color: ${(props) => props.theme.color.primary};
    display: block;
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 800;
    position: relative;
    padding-top: 0;
    padding-bottom: 0.1rem;
    margin: 0.6rem 0.6rem 0;

    &:before {
      content: "";
      display: block;
      position: absolute;
      background-color: ${(props) => props.theme.color.primary};
      height: 3px;
      width: 100%;
    }
    &:before {
      top: 0;
      left: 0;
    }
  }

  blockquote {
    $quoteMark: 1.2em;
    display: block;
    max-width: 20em;
    margin: 3em auto;
    padding-left: 4.4em;
    position: relative;
    color: ${(props) => props.theme.color.grayMed};
    font-size: 1em;
    font-weight: 500;
    font-style: italic;
    line-height: 1.5;

    &:before {
      content: "";
      color: ${(props) => props.theme.color.grayLt};
      font-size: 3em;
      position: absolute;
      background: url(/images/svgs/quote.svg);
      background-repeat: no-repeat;
      width: 1.2em;
      height: 1.2em;
      left: 0;
      top: 0.1em;
    }
  }

  /* In-View Triggered Animations */
  .fadeUp {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s cubic-bezier(0.42, 0, 0.45, 0.99);

    &.active {
      transform: none;
      opacity: 1;
    }
  }

  .fade_in {
    opacity: 0.4;
    transform: translateY(1.8em);
    transition: all 0.4s ease-in-out;
  }

  .fade_1 {
    opacity: 1;
    transform: translateY(0em);
  }

  .zoom_move {
    transform: scale(0.95) translateY(2em);
    transition: all 0.4s ease-in;
  }

  .zoom_1 {
    transform: scale(1) translateY(0em);
  }

  /* SVG Animations */

  /* Main Graphics Draw In Animation */
  .drawIn {
    stroke-dasharray: 2300;
    stroke-dashoffset: 2300;
    animation: draw 13s ease-in-out infinite;
  }

  @keyframes draw {
    0% {
      stroke-dashoffset: 2000;
    }
    60% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 2000;
    }
  }

  /* Draw In for Small Objects */
  .drawIn2 {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw2 12s ease-in-out infinite;
  }

  @keyframes draw2 {
    0% {
      stroke-dashoffset: 1000;
    }
    60% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 1000;
    }
  }

  /* Draw In Slowly */
  .drawIn3 {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw3 15s ease-in-out 0.5s infinite;
  }

  @keyframes draw3 {
    0% {
      stroke-dashoffset: 2000;
    }
    60% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 2000;
    }
  }

  /* Draw In 1x and Stop */
  .drawIn1x {
    stroke-dasharray: 2300;
    stroke-dashoffset: 2300;
    animation: drawIn1x 3s ease-in-out;
  }

  @keyframes drawIn1x {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: 2000;
    }
  }

  /* Draw In for Small Circles on Homepage in Abstract Point Graph */
  .drawInCircle {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: drawCircle 3s ease-in-out alternate infinite;
  }

  @keyframes drawCircle {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 300;
    }
  }

  .fadeInCircle {
    opacity: 0;
    animation: fadeInCircle 5s ease-in-out alternate infinite;
  }

  @keyframes fadeInCircle {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.9;
    }
  }

  .itemTo {
    animation-duration: 15s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }

  .bounce1 {
    animation-name: bounce-1;
    animation-timing-function: ease;
  }

  @keyframes bounce-1 {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(0);
    }
  }
  .bounce2 {
    animation-name: bounce-2;
    animation-timing-function: ease;
  }

  @keyframes bounce-2 {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
