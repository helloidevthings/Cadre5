import styled from "@emotion/styled";

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  left: 0px;
  position: sticky;
  box-sizing: border-box;

  ul {
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
      }
    }
    &.SubNav {
      color: white;
      text-align: left;
    }
  }
`;
