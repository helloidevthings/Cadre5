import React from "react";
import Image from "../Parts/Image";
import Video from "../Parts/Video";
import IntroTextIcon from "../Parts/IntroTextIcon";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";

export default ({
  img = "",
  introText = "",
  themeColor = "",
  row = "",
  video = "",
  iframe = [],
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });
  return (
    <Styles className={themeColor ? themeColor : ""} data-row={row}>
      <IntroTextIcon
        icon={introText.svg}
        title={introText.title}
        desc={introText.desc}
        descLg={introText.descLg}
      />
      <div className={`fade_in ${inView ? "fade_1" : ""}`} ref={ref}>
        {img && <Image src={img.src} alt={img.alt} />}
        {video && <Video url={video.url} poster={video.poster} />}
        {iframe && <div className="iframeContainer">{iframe}</div>}
      </div>
    </Styles>
  );
};
