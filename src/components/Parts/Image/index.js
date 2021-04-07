import React from "react";
import Styles from "./styled";
import Launch from "../../Svgs/Launch";

export default ({ src, alt, classes, figCap }) => {
  return (
    <Styles className={`media ${classes}`}>
      <img
        alt={alt}
        srcset={`${src}?nf_resize=fit&w=400 400w, ${src}?nf_resize=fit&w=600 600w`}
        sizes="(max-width: 400px) 400px,
        (max-width: 800px) 600px"
        src={`${src}`}
      />

      {figCap && (
        <figcaption>
          {figCap} <Launch />
        </figcaption>
      )}
    </Styles>
  );
};
