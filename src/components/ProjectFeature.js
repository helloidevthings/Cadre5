import React from "react";
import Image from "./Parts/Image";
import IntroTextIcon from "./Parts/IntroTextIcon";

const ProjectFeature = ({ img = "", introText = "", theme, row }) => (
  <section className="ProjectFeature" theme={theme} row={row}>
    <IntroTextIcon
      icon={introText.svg}
      title={introText.title}
      desc={introText.desc}
      descLg={introText.descLg}
    />
    <Image src={img.src} alt={img.alt} base="ProjectFeature" />
  </section>
);

export default ProjectFeature;
