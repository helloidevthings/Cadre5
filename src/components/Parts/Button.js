import React from "react";
import Arrow from "../Svgs/Arrow.js";

const Button = ({ style, theme, href, text }) => (
  <a
    href={`${href}`}
    className="Button"
    btnstyle={`${style}`}
    theme={`${theme}`}
  >
    {`${text}`}
    {/* <Arrow /> */}
  </a>
);

export default Button;
