import React from "react";
import Image from "../Parts/Image";
import Styles from "./styled";
import { useInView } from "react-intersection-observer";
import AbstractPointGraphWhite from "../Svgs/AbstractPointGraphWhite";
import WaveLinesWhite from "../Svgs/WaveLinesWhite";
import CirclesWhite from "../Svgs/CirclesWhite";

export default ({ title, img = "", svg = "" }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles>
      <Image src={img.src} alt={img.alt} base="HeroBasic" />
      <div
        className={`text-wrapper fadeUp ${inView ? "active" : ""}`}
        ref={ref}
      >
        <h1 className="header">{title}</h1>
      </div>
      <div className="background_svg">
        {svg === "AbstractWhite" && <AbstractPointGraphWhite />}
        {svg === "WavesWhite" && <WaveLinesWhite />}
        {svg === "CirclesWhite" && <CirclesWhite />}
      </div>
    </Styles>
  );
};
