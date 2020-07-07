import React from "react";
import Arrow from "../Svgs/Arrow.js";

const Button = ({ href, style, theme, text, arrow = false }) => (
  <a href={href} className="Button" btnstyle={style} theme={theme}>
    {text}
    {arrow && <Arrow />}
  </a>
);

export default Button;
