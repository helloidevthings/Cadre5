import React, { Fragment } from "react";
import Button from "../Parts/Button";
import WaveHr from "../Parts/WaveHR";
import IntroText from "../Parts/IntroText";
import Image from "../Parts/Image";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";

export default ({
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
    <Styles>
      <div className="text-wrapper">
        <h2>{title}</h2>
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
      <Image src={img.src} alt={img.alt} />
    </Styles>
  );
};
