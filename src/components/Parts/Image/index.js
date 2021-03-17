import React from "react";
import Styles from "./styled";
import Launch from "../../Svgs/Launch";

export default ({ src, alt, classes, figCap }) => {
  return (
    <Styles className={`media ${classes}`}>
      <img
        alt={alt}
        srcset={`images/small${src} 600w, images/large${src} 1600w,
        ${src}`}
        sizes="(max-width: 600px) 600px,
        (min-width: 1600px) 1600px"
        src={src}
      />

      {figCap && (
        <figcaption>
          {figCap} <Launch />
        </figcaption>
      )}
    </Styles>
  );
};
