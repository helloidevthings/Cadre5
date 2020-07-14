import React, { Fragment } from "react";
import Image from "./Parts/Image";

const HeroBasic = ({ title, img = "" }) => (
  <section className="HeroBasic">
    <Image src={img.src} alt={img.alt} base="HeroBasic" />
    <div className="text-wrapper">
      <h1 className="HeroBasic_header">{title}</h1>
    </div>
  </section>
);

export default HeroBasic;
