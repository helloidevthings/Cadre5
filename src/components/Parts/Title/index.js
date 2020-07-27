import React from "react";
import Styles from "./styled";

export default ({ base, title }) => (
  <Styles className={`Title ${base}_title`}>{title}</Styles>
);
