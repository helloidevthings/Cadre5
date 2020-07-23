import React from "react";
import Arrow from "../../Svgs/Arrow.js";
import Styles from "./styled";

export default ({ href, style, themeColor, text, arrow = false }) => (
  <Styles href={href} target="" btnstyle={style} themeColor={themeColor}>
    {text}
    {arrow && <Arrow />}
  </Styles>
);
