import React from "react";
import { Image } from "cloudinary-react";
import Styles from "./styled";

export default ({ src, alt }) => {
  return (
    <Styles className="media">
      <Image
        cloudName="cadre5images"
        publicId={src}
      ></Image>
    </Styles>
  );
};
