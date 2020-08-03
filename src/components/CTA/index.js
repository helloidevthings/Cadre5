import React from "react";
import { useInView } from "react-intersection-observer";
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
}) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles className={inView ? `active ${type}` : `${type}`} ref={ref}>
      <div className="text text-wrapper">
        <IntroText
          subheader={subheader}
          leadin={leadin}
          descLg={descLg}
          desc={desc}
        />
        {link && (
          <Button
            themeColor={link.theme}
            style={link.style}
            href={link.href}
            text={link.text}
          />
        )}
      </div>
      <Image src={img.src} alt={img.alt} base="CTA" />
    </Styles>
  );
};
