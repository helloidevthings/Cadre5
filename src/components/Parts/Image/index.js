import React from "react";
import { Image } from "cloudinary-react";
import Styles from "./styled";
import Launch from "../../Svgs/Launch";

export default ({
  src,
  alt,
  classes,
  figCap,
}) => {
  return (
    <Styles className={`media ${classes}`}>
      <Image
        cloudName="cadre5images"
        publicId={src}
      ></Image>
      {figCap && (
        <figcaption>
          {figCap} <Launch />
        </figcaption>
      )}
    </Styles>
  );
};
