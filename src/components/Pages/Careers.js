import React from "react";
import Page from "../Page";
import HeroBasic from "../HeroBasic";
import CareersiFrame from "../Parts/CareersiFrame";

export default () => {
  return (
    <Page>
      <HeroBasic
        title="Careers"
        img={{
          src: "/images/kensoffice2.png",
          alt: "People working in an office",
        }}
        svg="WavesWhite"
      />
      <section className="Careers">
        {/* <CareersiFrame /> */}
        {/* <div id="careers-iframe"></div> */}
      </section>
    </Page>
  );
};
