import React from "react";
import Styles from "./styled";
import Launch from "../../Svgs/Launch";

export default ({ src, alt, classes, figCap }) => {
  return (
    <Styles className={`media ${classes}`}>
      <img
        alt={alt}
        // srcset={`images/_medium${src} 800w`}
        // sizes="(min-width: 600px) 800px, 600px"
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
