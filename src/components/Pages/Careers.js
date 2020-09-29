import React from "react";
import Page from "../Page";
import HeroBasic from "../HeroBasic";

export default () => {
  return (
    <Page>
      <HeroBasic
        title="Careers"
        img={{
          src: "/images/stock-of-working.png",
          alt: "People working in an office",
        }}
        svg="WavesWhite"
      />
      <section className="Careers"></section>
    </Page>
  );
};
