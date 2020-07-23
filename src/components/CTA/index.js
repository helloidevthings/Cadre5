import React from "react";
import IntroText from "../Parts/IntroText";
import Image from "../Parts/Image";
import Button from "../Parts/Button";
import Styles from "./styled";

export default ({
  subheader,
  leadin,
  descLg,
  desc,
  img = "",
  type,
  link = "",
}) => (
  <Styles>
    <div className="text text-wrapper">
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
  </Styles>
);
