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

  .text-wrapper {
    padding-left: 4em;
    padding-right: 3em;
    margin-bottom: 2em;
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
    margin-bottom: 0.3em;
  }

  h4,
  h5,
  h6 {
    line-height: 1.45;
  }

  p {
    line-height: 1.55;
  }

  p.large {
    font-size: 1.15em;
    margin-bottom: 1.1em;
  }

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }

  hr {
    margin: 1.5em 0;
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
    transition: all 0.6s cubic-bezier(0.42, 0, 0.45, 0.99);

    &.active {
      transform: none;
      opacity: 1;
    }
  }

  .fade_in {
    opacity: 0.5;
    transform: translateY(1.8em);
    transition: all 0.5s ease-in-out;
  }
  .fade_1 {
    opacity: 1;
    transform: translateY(0em);
  }

  .zoom_move {
    transform: scale(0.95) translateY(2em);
    transition: all 0.5s ease-in;
  }

  .zoom_1 {
    transform: scale(1) translateY(0em);
  }

  /* SVG Animations */

  .drawIn {
    stroke-dasharray: 2300;
    stroke-dashoffset: 2300;
    animation: draw 8s ease-in-out infinite;
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

  .drawInCircle {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: drawCircle 2s ease-in-out alternate infinite;
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
    animation: fadeInCircle 3s ease-in-out alternate infinite;
    animation-delay: 2s;
  }

  @keyframes fadeInCircle {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .itemTo {
    animation-duration: 10s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }

  .bounce1 {
    animation-name: bounce-1;
    animation-timing-function: ease;
  }

  @keyframes bounce-1 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
