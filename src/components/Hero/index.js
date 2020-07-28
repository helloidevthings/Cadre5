import React from "react";
import Button from "../Parts/Button";
import Styles from "./styled";
import WaveLines from "../Svgs/WaveLines";
import AbstractPointGraph from "../Svgs/AbstractPointGraph";

export default ({ title, tagline, ctaText }) => (
  <Styles>
    <article className="para">
      <h1 className="title">{title}</h1>
      <h2 className="tagline">{tagline}</h2>
      <Button themeColor="lightTheme" style="primary" text={`${ctaText}`} />
    </article>
    <div className="svg-wrapper wave-lines">
      <WaveLines />
    </div>
    <div className="svg-wrapper abstract-graph">
      <AbstractPointGraph />
    </div>
  </Styles>
);
