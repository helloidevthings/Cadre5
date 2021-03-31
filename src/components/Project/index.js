import React from "react";
import Button from "../Parts/Button";
import IntroText from "../Parts/IntroText";
import Image from "../Parts/Image";
import Styles from "./styled";
import { useInView } from "react-intersection-observer";

export default ({ details = [], themeColor }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <React.Fragment>
      {details.map(({ subheader, title, leadin, descLg, desc, img = "", link = "" }, i) => (
        <Styles key={i} className={`${themeColor ? themeColor : ""} ${inView ? "active" : ""}`}>
          <div className="text-wrapper" ref={ref}>
            <h2>{title}</h2>
            <IntroText subheader={subheader} leadin={leadin} descLg={descLg} desc={desc} />
            {link && (
              <Button
                themeColor={link.themeColor}
                btnStyle={link.btnStyle}
                href={link.href}
                text={link.text}
                arrow={link.arrow}
              />
            )}
          </div>
          <div className={`image-wrapper ${inView ? "active" : ""}`} ref={ref}>
            <Image src={img.src} alt={img.alt} />
          </div>
        </Styles>
      ))}
    </React.Fragment>
  );
};
