import React from "react";
import Arrow from "../../Svgs/Arrow.js";
import Styles from "./styled";

export default ({ href, btnStyle, themeColor, text, arrow = false }) => (
  <Styles href={href} target="" className={`${btnStyle} ${themeColor}`}>
    {text}
    {arrow && <Arrow />}
  </Styles>
);
