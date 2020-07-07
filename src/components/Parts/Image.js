import React from "react";

const Image = ({ src, alt, base }) => (
  <figure className={`${base}_media`}>
    <img src={src} alt={alt} />
  </figure>
);

export default Image;
