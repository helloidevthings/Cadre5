import React, { Fragment } from "react";
import Image from "./Parts/Image";

const HeroBasic = () => (
  <Fragment>
    <section className="HeroBasic">
      <Image
        src="/images/cadre5office.jpg"
        alt="Image of the Cadre5 office at Night"
        base="HeroBasic"
      />
      <div className="text-wrapper">
        <h1 className="HeroBasic_header">About Us</h1>
      </div>
    </section>
  </Fragment>
);

export default HeroBasic;
