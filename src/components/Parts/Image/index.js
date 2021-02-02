import React from "react";
import { Image } from "cloudinary-react";
import Styles from "./styled";

export default ({ src, alt, classes }) => {
  return (
    <Styles className={`media ${classes}`}>
      <Image
        cloudName="cadre5images"
        publicId={src}
      ></Image>
    </Styles>
  );
};
