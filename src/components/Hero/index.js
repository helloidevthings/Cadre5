import React from "react";
// import Button from "../Parts/Button";
import Styles from "./styled";

export default ({ title, tagline, ctaText }) => (
  <Styles>
    <article className="Hero_para">
      <h1 className="Hero_title">{title}</h1>
      <h2 className="Hero_tagline">{tagline}</h2>
      {/* <Button theme="light" style="primary" text={`${ctaText}`} /> */}
    </article>
  </Styles>
);
