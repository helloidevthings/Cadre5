import React from "react";
// import Button from "../Parts/Button";
import Styles from "./styled";

export default ({ title, tagline, ctaText }) => (
  <Styles>
    <article className="para">
      <h1 className="title">{title}</h1>
      <h2 className="tagline">{tagline}</h2>
      {/* <Button theme="light" style="primary" text={`${ctaText}`} /> */}
    </article>
  </Styles>
);
