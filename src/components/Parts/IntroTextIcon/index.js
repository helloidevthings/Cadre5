import React from "react";
import Styles from "./styled";

export default ({
  icon,
  title,
  descLg,
  desc
}) => ( <
  Styles className = "text-wrapper" >
  <
  div className = "text" > {
    icon && ( <
      div className = "icon"
      style = {
        {}
      } >
      <
      figure style = {
        {
          background: `url(./../images/svgs/${icon}.svg) no-repeat center center`,
        }
      } >
      < /figure> <
      /div>
    )
  } {
    /* <div className={`${base}_icon`}>{<`${icon}`/>}</div> */ } <
  h2 > {
    title
  } < /h2> <
  /div> <
  p className = "descLg" > {
    descLg
  } < /p> <
  p className = "desc" > {
    desc
  } < /p> <
  /Styles>
);