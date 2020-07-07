import React, { Fragment } from "react";
import Button from "./Parts/Button";
import WaveHr from "./Parts/WaveHR";
import IntroText from "./Parts/IntroText";
import Image from "./Parts/Image";
const Project = ({
  title,
  subheader,
  leadin,
  descLg,
  desc,
  wave = "",
  img = "",
  link = "",
}) => (
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
      </div>
      <Image src={img.src} alt={img.alt} base="ProjectHero" />
    </article>
  </Fragment>
);

export default Project;
