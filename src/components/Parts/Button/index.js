import React from "react";
import Arrow from "../../Svgs/Arrow.js";
import Styles from "./styled";

export default ({ href, style, theme, text, arrow = false }) => (
  <Styles href={href} target="" btnstyle={style} theme={theme}>
    {text}
    {arrow && <Arrow />}
  </Styles>
);
