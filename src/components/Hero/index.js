import React from "react";
import Styles from "./styled";
import Button from "../Parts/Button";
import Image from "../Parts/Image";
import { useInView } from "react-intersection-observer";
import WaveLines from "../Svgs/WaveLines";
import AbstractPointGraph from "../Svgs/AbstractPointGraph";
import CircleRed from "../Svgs/CircleRed";
import ScrollArrow from "../Svgs/ScrollArrow";
import ImageRandom from "../ImageRandom";

export default ({ title, tagline, ctaText }) => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <Styles>
      <article
        ref={ref}
        style={{ transitionDelay: `.2s` }}
        className={`fadeUp ${inView ? "active" : ""}`}
      >
        <CircleRed />
        <ImageRandom classes="itemTo bounce2" />

        <h2
          ref={ref}
          style={{ transitionDelay: `.6s` }}
          className={`fadeUp ${inView ? "active" : ""}`}
        >
          Welcome
        </h2>
        <h3
          style={{ transitionDelay: `.7s` }}
          ref={ref}
          className={`fadeUp ${inView ? "active" : ""}`}
        >
          We design and develop software for global leaders. <a href="./Projects">View Projects</a>
        </h3>
        {/* <Button
          themeColor="lightTheme"
          btnStyle="primary"
          text={`${ctaText}`}
          href="/Projects"
        /> */}
      </article>
      <ScrollArrow classes={`fadeUp scrollArrow ${inView ? "active" : ""}`} />
      <div className="svg-wrapper wave-lines">
        <WaveLines />
      </div>
      <div className="svg-wrapper abstract-graph">
        <AbstractPointGraph />
      </div>
    </Styles>
  );
};
