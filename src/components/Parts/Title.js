import React from "react";

const Title = ({ title, base }) => (
  <h2 className={`Title ${base}_title`}>{title}</h2>
);

export default Title;
