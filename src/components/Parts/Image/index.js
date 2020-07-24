import React from "react";
import Styles from "./styled";

export default ({ src, alt, ref }) => (
  <Styles className="media">
    <img src={src} alt={alt} />
  </Styles>
);
