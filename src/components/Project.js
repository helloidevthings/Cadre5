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
  wave,
  bg,
  imgsrc,
  imgalt,
  link,
}) => (
  <Fragment>
    {wave && <WaveHr wave={wave} bg={bg} />}
    <article className="ProjectHero">
      <div className="text-wrapper">
        <h2 className="Project_title">{title}</h2>
        <IntroText subheader={subheader} leadin={leadin} descLg={descLg} />
        {link && <Button theme="dark" style="primary" href="" text="" />}
      </div>
      <Image src={imgsrc} alt={imgalt} base="ProjectHero" />
    </article>
  </Fragment>
);

export default Project;
