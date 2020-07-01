import React from "react";

const LogoGridItem = ({ type, name, alt }) => (
  <img src={`/images/logos/${type}/${name}.png`} alt={`${alt} Logo`} />
);

export default LogoGridItem;
