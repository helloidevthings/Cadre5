import React from "react";
import Styles from "./styled";

export default ({ url, poster }) => (
  <Styles width="100%" controls height="100%" poster={poster}>
    <source src={url} type="video/mp4" />
  </Styles>
);
