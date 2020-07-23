import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 40vh;
  position: relative;

  .header {
    color: white;
  }

  figure {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      object-position: 50% 50%;
      height: inherit;
      width: inherit;
    }
  }
  &:after {
    content: "";
    background: linear-gradient(rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.58));
    height: inherit;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }
`;
