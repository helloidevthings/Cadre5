import styled from "@emotion/styled";

const url =
  "https://res.cloudinary.com/cadre5images/image/upload/v1612201595/images/";

export default styled.figure`
  max-width: 20rem;
  max-height: 20rem;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    background-image: url("${url}/building-circle1.png");
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 4;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);

    /* animation: fadeImage 8s ease-in-out infinite; */
  }

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    opacity: 0;
    background-image: url("${url}/building-circle1.png");
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 10;
    /* animation: randomImage 8s ease-in-out infinite
      alternate; */
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    transition: all 1s ease-in-out;
    -webkit-backface-visibility: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }

  @keyframes randomImage {
    0% {
      opacity: 1;
      background-image: url("${url}/building-circle1.png");
    }
    25% {
      opacity: 1;
      background-image: url("${url}/meeting3-circle.png");
    }
    75% {
      opacity: 1;
      background-image: url("${url}/kensoffice-circle.png");
    }
    100% {
      opacity: 1;
      background-image: url("${url}/building-circle2.png");
    }
    /* 80% {
      background-image: url("${url}/megan-working-circle.png");
    } */
    /* 100% {
        background-image: url("${url}/building-circle1.png");
    } */
  }
  @keyframes fadeImage {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
