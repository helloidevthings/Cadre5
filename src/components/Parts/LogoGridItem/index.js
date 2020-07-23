import React from "react";
import Styles from "./styled";

export default ({ type, name, alt }) => (
  <Styles src={`/images/logos/${type}/${name}.png`} alt={`${alt} Logo`} />
);
