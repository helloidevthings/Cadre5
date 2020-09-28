import styled from "@emotion/styled";

export default styled.div`
  .nav {
    transition: all 0.5s ease-in-out;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    position: relative;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      position: absolute;
      margin-top: 1.6em;
      padding-top: 4em;
      font-size: 3em;
      width: ${(props) => (props.isOpen ? "0" : "100%")};
      height: ${(props) => (props.isOpen ? "0" : "100vh")};
      background-color: ${(props) => (props.isOpen ? "none" : "#000")};
      transform: translateX(${(props) => (props.isOpen ? "0%" : "100%")});
    }

    & li {
      list-style: none;
      text-align: center;
      font-size: 0.72em;
      margin-bottom: 1.2em;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      line-height: 1.12;
      color: white;
      transform: scale(${(props) => (props.isOpen ? "0" : "1")});
      transition: all 0.5s ease-in-out;

      &:before {
        content: none;
      }

      & > a,
      &.active {
        color: white;
        text-decoration: none;
        padding-bottom: 0.18em;
        position: relative;

        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: 0;
          right: 0;
          background-color: black;
          transform-origin: bottom right;
          transform: scaleX(1);
          transition: transform 0.5s cubic-bezier(0.6, -0.01, 0.11, 0.99);
        }
        &:hover {
          &:after {
            transform: scaleX(0);
            background-color: #c10230;
          }
        }

        &.active {
          &:after {
            transform: scaleX(1);
            background-color: #c10230;
          }
        }
      }
    }
    &.SubNav {
      color: white;
      text-align: left;
    }
  }
`;
