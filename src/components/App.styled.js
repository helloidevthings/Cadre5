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
    flex-grow: 9999;

    /* @supports (max-width: max-content) {
      min-width: 100px;
      max-width: max-content;
      flex-basis: 200px;
      flex-grow: 99999;
    } */
  }

  .blog {
    max-width: 40em;
    margin: 3rem auto 1rem;
    padding: 1rem;
    p {
      margin-top: 1.3em;
      margin-bottom: 1.3em;
    }
  }
  .blogImage {
    padding: 1.1rem;
    max-width: 75em;
    text-align: center;
    margin: 0.5rem auto;
  }

  figcaption {
    background-color: ${(props) =>
      props.theme.color.dark};
    padding: 0.5em 0.9em;
    text-align: center;
    display: inline-block;
    color: #ffffff;
    transition: background-color 0.3s ease-in-out;
  }

  a figcaption {
    &:hover {
      background-color: ${(props) =>
        props.theme.color.primary};
    }
  }

  .center {
    text-align: center;
  }

  .number {
    font-family: aktiv-grotesk-extended,
      sans-serif;
  }

  .red {
    color: ${(props) =>
      props.theme.color.primary};
  }
  .blue {
    color: ${(props) =>
      props.theme.color.secondary};
  }
  .grayLt {
    color: ${(props) => props.theme.color.grayLt};
  }

  .text-wrapper {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 2rem;
    @media (min-width: ${(props) =>
        props.theme.breakpoints.desktop}) {
      padding-left: 4rem;
      padding-right: 3rem;
      margin-bottom: 2rem;
    }
  }

  .Title {
    margin: 3em auto 1em;
    text-align: center;
  }

  p a {
    color: ${(props) =>
      props.theme.color.primary};
  }
  h1,
  h2,
  h3 {
    font-weight: 700;
    line-height: 1.28;
  }

  h1 {
    font-size: 3.75rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
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

  /* Main Bullets */
  ul {
    padding-left: 1em;
    margin-top: 1.3em;
    list-style: none;
    & li {
      margin-top: 0.8em;
      position: relative;
      font-size: 1.14em;
      font-weight: 200;

      &:before {
        content: "";
        color: red;
        display: block;
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 15px;
        background-color: ${(props) =>
          props.theme.color.primary};
        left: -0.7em;
        top: 0.6em;
      }
    }
    /* Nested Bullets */
    li ul {
      margin-top: 0.3em;
    }
    li li {
      font-size: 0.85em;
      margin-top: 0.13em;
      &:before {
        background-color: #797979;
      }
    }
    .darkTheme {
      ul li:before {
        background-color: ${(props) =>
          props.theme.color.ltRed};
      }
    }
    .mediumTheme {
      ul li {
        &:before {
          background-color: ${(props) =>
            props.theme.color.red};
        }
        ul li:before {
          background-color: ${(props) =>
            props.theme.color.grayMed};
        }
      }
    }
  }

  hr {
    margin: 1rem 0;
    border: 1px solid #c4c3c3;
  }

  .fancyAND {
    color: ${(props) =>
      props.theme.color.primary};
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
      background-color: ${(props) =>
        props.theme.color.primary};
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
    color: ${(props) =>
      props.theme.color.grayMed};
    font-size: 1em;
    font-weight: 500;
    font-style: italic;
    line-height: 1.5;

    &:before {
      content: "";
      color: ${(props) =>
        props.theme.color.grayLt};
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
    transition: all 0.4s
      cubic-bezier(0.42, 0, 0.45, 0.99);

    &.active {
      transform: none;
      opacity: 1;
    }
  }

  .fade_in {
    opacity: 0.4;
    transform: translateY(20px);
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
    animation: drawCircle 3s ease-in-out alternate
      infinite;
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
    animation: fadeInCircle 5s ease-in-out
      alternate infinite;
  }

  @keyframes fadeInCircle {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.9;
    }
  }

  .scrollArrow {
    margin-top: 1rem;
    opacity: 0;
    animation: scrollArrow 4s ease-in-out
      alternate infinite;
  }
  @keyframes scrollArrow {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    50% {
      opacity: 0.9;
      transform: translateY(10px);
    }
    100% {
      opacity: 0;
      transform: translateX(0);
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
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .bounce3 {
    animation-name: bounce-3;
    animation-timing-function: ease-in-out;
  }

  @keyframes bounce-3 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
