import React from "react";
import Image from "../Parts/Image";
import Styles from "./styled";
import { useInView } from "react-intersection-observer";

import AbstractPointGraphWhite from "../Svgs/AbstractPointGraphWhite";

export default ({ title, img = "" }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles>
      <Image src={img.src} alt={img.alt} base="HeroBasic" />
      <div
        className={inView ? "text-wrapper active" : "text-wrapper"}
        ref={ref}
      >
        <h1 className="header">{title}</h1>
      </div>
      <AbstractPointGraphWhite />
    </Styles>
  );
};
