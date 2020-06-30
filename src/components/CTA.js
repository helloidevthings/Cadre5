import React from "react";
import IntroText from "./Parts/IntroText";
import Image from "./Parts/Image";
import Button from "./Parts/Button";

const CTA = ({
  subheader,
  leadin,
  descLg,
  desc,
  imgsrc,
  imgalt,
  type,
  link,
}) => (
  <section className={`CTA CTA--${type}`}>
    <div className="CTA_text text-wrapper">
      <IntroText
        subheader={subheader}
        leadin={leadin}
        descLg={descLg}
        desc={desc}
      />
      {link && <Button theme="dark" btnstyle="primary" />}
    </div>
    <Image src={imgsrc} alt={imgalt} base="CTA" />
  </section>
);

export default CTA;
