import React from "react";
import Image from "./Parts/Image";
import IntroTextIcon from "./Parts/IntroTextIcon";
import { useInView } from "react-intersection-observer";

const ProjectFeature = ({ img = "", introText = "", theme, row }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section className="ProjectFeature" theme={theme} row={row}>
      <IntroTextIcon
        icon={introText.svg}
        title={introText.title}
        desc={introText.desc}
        descLg={introText.descLg}
      />
      <div className={`fade_in ${inView ? "fade_1" : ""}`} ref={ref}>
        <Image src={img.src} alt={img.alt} base="ProjectFeature" />
      </div>
    </section>
  );
};

export default ProjectFeature;
