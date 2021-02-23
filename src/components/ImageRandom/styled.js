import styled from "@emotion/styled";

const url = "https://res.cloudinary.com/cadre5images/image/upload/v1612201595/images/";

export default styled.figure`
  max-width: 20rem;
  max-height: 20rem;
  overflow: hidden;
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fadeImgIn {
    opacity: 0;
    transition: opacity 3s ease-in-out;
  }
  .fadeImgFinal {
    opacity: 1;
    transition: opacity 3s ease-in-out;
  }

  .fadeImg {
    animation: fadeImg 4s ease-in-out infinite;
    animation-iteration-count: 6;
  }

  @keyframes fadeImg {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
