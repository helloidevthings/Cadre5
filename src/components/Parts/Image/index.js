import React from "react";
import Styles from "./styled";
import Launch from "../../Svgs/Launch";

export default ({ src, alt, classes, figCap }) => {
  return (
    <Styles className={`media ${classes}`}>
      <img
        alt={alt}
        // srcset={`images/${src}?nf_resize=fit&w=300 300w`}
        // sizes="(min-width: 300px) 300px"
        src={`${src}?nf_resize=fit&w=300`}
      />

      {figCap && (
        <figcaption>
          {figCap} <Launch />
        </figcaption>
      )}
    </Styles>
  );
};
