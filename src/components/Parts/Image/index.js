import React from "react";
import { Image } from "cloudinary-react";
import Styles from "./styled";

export default ({ src, alt }) => {
  return (
    <Styles className="media">
      <img src={src} alt={alt} />
    </Styles>
  );
};
