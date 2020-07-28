import React from "react";
import Styles from "./styled";
import Button from "../Parts/Button";
import { useInView } from "react-intersection-observer";
import WaveLines from "../Svgs/WaveLines";
import AbstractPointGraph from "../Svgs/AbstractPointGraph";

export default ({ title, tagline, ctaText }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles>
      <article ref={ref} className={inView ? "active" : ""}>
        <h1>{title}</h1>
        <h2>{tagline}</h2>
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
};
