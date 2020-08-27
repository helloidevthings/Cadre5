import React from "react";
import Button from "../Parts/Button";
import Image from "../Parts/Image";
import IntroText from "../Parts/IntroText";
import Styles from "./styled";
import { useInView } from "react-intersection-observer";

export default ({ row, title, leadin, desc = {}, link = "", img = "" }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles className={row}>
      <div
        className={`text-wrapper fadeUp ${inView ? "active" : ""}`}
        ref={ref}
      >
        <h2 className="title">{title}</h2>
        <h3 className="leadin">{leadin}</h3>
        <p className="description">{desc}</p>
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
      {img && <Image src={img.src} alt={img.alt} />}
    </Styles>
  );
};
