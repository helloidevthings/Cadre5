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
  row = "",
  themeColor = "",
  border = "",
  link = "",
}) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles
      className={
        inView
          ? `active ${row} ${themeColor} ${border}`
          : `${row} ${themeColor} ${border}`
      }
      ref={ref}
    >
      <div className="text text-wrapper">
        <IntroText
          subheader={subheader}
          leadin={leadin}
          descLg={descLg}
          desc={desc}
        />
        {link && (
          <Button
            themeColor={link.themeColor}
            btnStyle={link.btnStyle}
            href={link.href}
            text={link.text}
            arrow={true}
            target={link.target}
          />
        )}
      </div>
      <Image src={img.src} alt={img.alt} base="CTA" />
    </Styles>
  );
};
