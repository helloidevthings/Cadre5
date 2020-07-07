import React from "react";
import Image from "./Parts/Image";
import IntroTextIcon from "./Parts/IntroTextIcon";

const ProjectFeature = ({ image = "", introText = "" }) => (
  <section className="ProjectFeature">
    <IntroTextIcon
      icon={introText.svg}
      title={introText.title}
      desc={introText.desc}
      descLg={introText.descLg}
    />
    <Image src={image.src} alt={image.alt} base={image.base} />
  </section>
);

export default ProjectFeature;
