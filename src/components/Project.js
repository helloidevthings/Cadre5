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
}) => (
  <Fragment>
    {" "}
    {<WaveHr wave={wave} bg={bg} />}
    <article className="ProjectHero">
      <div className="text-wrapper">
        <h2 className="Project_title">{title}</h2>
        <IntroText subheader={subheader} leadin={leadin} descLg={descLg} />
        {<Button theme="dark" btnstyle="primary" />}
      </div>
      <Image src={imgsrc} alt={imgalt} base="ProjectHero" />
    </article>
  </Fragment>
);

export default Project;
