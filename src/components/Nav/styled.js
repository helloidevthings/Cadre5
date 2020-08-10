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

      a, .active {
        color: white;
        text-decoration: none;
        padding-bottom: 0.18em;
        position: relative; 
        
        &:after {
        content: '';
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
