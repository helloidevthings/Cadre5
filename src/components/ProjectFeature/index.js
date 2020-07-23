import React from "react";
import Image from "../Parts/Image";
import IntroTextIcon from "../Parts/IntroTextIcon";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";

export default ({ img = "", introText = "", themeColor, row }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });
  return (
    <Styles themeColor={themeColor} row={row}>
      <IntroTextIcon
        icon={introText.svg}
        title={introText.title}
        desc={introText.desc}
        descLg={introText.descLg}
      />
      <div className={`fade_in ${inView ? "fade_1" : ""}`} ref={ref}></div>
      <Image src={img.src} alt={img.alt} />
    </Styles>
  );
};
