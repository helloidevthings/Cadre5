import React from "react";
import IntroText from "./Parts/IntroText";
import Image from "./Parts/Image";
import Button from "./Parts/Button";

const CTA = ({
  subheader,
  leadin,
  descLg,
  desc,
  img = "",
  type,
  link = "",
}) => (
  <section className={`CTA CTA--${type}`}>
    <div className="CTA_text text-wrapper">
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
    <Image src={img.src} alt={img.alt} base="CTA" />
  </section>
);

export default CTA;
