import React, { Fragment } from "react";
import Button from "./Parts/Button";
import WaveHr from "./Parts/WaveHR";
import IntroText from "./Parts/IntroText";
import Image from "./Parts/Image";
import { useInView } from "react-intersection-observer";

const Project = ({
  title,
  subheader,
  leadin,
  descLg,
  desc,
  wave = "",
  img = "",
  logo = "",
  link = "",
}) => {
  const [ref, inView] = useInView({ triggeronce: true, threshold: 0.18 });

  return (
    <Fragment>
      {wave && <WaveHr color={wave.color} bg={wave.bg} />}
      <article className="ProjectHero">
        <div className="text-wrapper">
          <h2 className="Project_title">{title}</h2>
          <IntroText
            subheader={subheader}
            leadin={leadin}
            descLg={descLg}
            desc={desc}
          />
          {link && (
            <Button
              theme={link.theme}
              style={link.style}
              href={link.href}
              text={link.text}
            />
          )}
          {logo && <Image src={logo.src} />}
        </div>
        <div
          className={`fade_in ${inView ? "fade_1" : ""} ProjectHero_media`}
          ref={ref}
        >
          <Image src={img.src} alt={img.alt} />
        </div>
      </article>
    </Fragment>
  );
};

export default Project;
