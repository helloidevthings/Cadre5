import React from "react";
import Page from "../Page";
import HeroBasic from "../HeroBasic";

export default () => {
  // let el =
  //   document && document.getElementById("career");

  // if (document && !el) {
  //   el.id = "career";
  // }
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
      <section className="Careers" />
    </Page>
  );
};
