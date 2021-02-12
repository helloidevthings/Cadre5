import styled from "@emotion/styled";

const url =
  "https://res.cloudinary.com/cadre5images/image/upload/v1612201595/images/";

export default styled.figure`
  max-width: 20em;
  max-height: 20em;
  overflow: hidden;
  position: relative;
  z-index: 1;
  /* transform: translate3d(0, 0, 0);
  backface-visibility: hidden; */

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    background-image: url("${url}/building-circle1.png");
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 10;
    animation: randomImage 8s ease-in-out infinite
      alternate;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    transition: background-image 1s ease-in-out;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }

  @keyframes randomImage {
    0% {
      background-image: url("${url}/building-circle1.png");
    }
    25% {
      background-image: url("${url}/meeting3-circle.png");
    }
    75% {
      background-image: url("${url}/kensoffice-circle.png");
    }
    100% {
      background-image: url("${url}/building-circle2.png");
    }
    /* 80% {
      background-image: url("${url}/megan-working-circle.png");
    } */
    /* 100% {
        background-image: url("${url}/building-circle1.png");
    } */
  }
`;
