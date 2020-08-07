import styled from "@emotion/styled";

export default styled.div`
  ul {

    /* position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(${(props) => (props.isOpen ? "0%" : "-100%")}); */

    li {
      list-style: none;
      text-align: center;
      font-size: 0.72em;
      margin-bottom: 1.2em;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      line-height: 1.12;
      color: white;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          color: ${(props) => props.theme.color.primary};
        }
        &.active {
          border-bottom: 2px ${(props) => props.theme.color.primary} solid;
          padding-bottom: 0.18em;
        }
      }
    }
    &.SubNav {
      color: white;
      text-align: left;
    }
  }
`;
