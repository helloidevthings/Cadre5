import React from "react";
import Button from "./Parts/Button";

const Hero = ({ title, tagline }) => (
  <section className="Hero">
    <article className="Hero_para">
      {" "}
      <h1 className="Hero_title">{title}</h1>
      <h2 className="Hero_tagline">{tagline}</h2>
      {<Button theme="light" btnstyle="primary" />}
    </article>
    {/* <AbstractPointGraph /> */}
  </section>
);

export default Hero;
