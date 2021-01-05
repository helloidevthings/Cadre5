import styled from "@emotion/styled";

export default styled.ul`
  transition: all 0.5s ease-in-out;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  position: relative;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: calc(${(props) =>
      props.theme.breakpoints.desktop} -1px)) {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 3em;
    text-align: center;
    width: ${(props) =>
      props.isOpen ? "0%" : "100%"};
    height: ${(props) =>
      props.isOpen ? "0" : "100vh"};
    background-color: ${(props) =>
      props.isOpen ? "none" : "#000"};
    transform-origin: center;
    transform: translateX(
      ${(props) =>
        props.isOpen ? "-100%" : "0%"}
    );
    transition: transform 0.6s
        cubic-bezier(0.59, 0, 0.11, 0.97),
      background-color 0.7s ease-in-out;
  }

  .navItem {
    list-style: none;
    text-align: center;
    font-size: 0.72em;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    line-height: 1.12;
    color: white;
    @media (max-width: calc(${(props) =>
        props.theme.breakpoints.desktop} -1px)) {
      transform-origin: center;
      transform: scale(
        ${(props) => (props.isOpen ? "0" : "1")}
      );
    }

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
        transition: transform 0.5s
          cubic-bezier(0.6, -0.01, 0.11, 0.99);
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
`;
