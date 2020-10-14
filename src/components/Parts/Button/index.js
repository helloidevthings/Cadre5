import React from "react";
import Arrow from "../../Svgs/Arrow.js";
import Styles from "./styled";

export default ({
  href,
  btnStyle,
  themeColor,
  text,
  arrow = false,
  target = false,
}) => (
  <Styles
    href={href}
    target={target === true ? "_blank" : "_self"}
    rel={target === "_blank" ? "noopener noreferrer" : ""}
    className={`${btnStyle} ${themeColor}`}
  >
    {text}
    {arrow === true ? <Arrow /> : ""}
  </Styles>
);
