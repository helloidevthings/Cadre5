import React from "react";
import Image from "../Parts/Image";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";
import ToolTip from "../Parts/ToolTip";

export default ({
  img = "",
  themeColor,
  tips,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  return (
    <Styles className={themeColor}>
      <div
        className={`zoom_move ${
          inView ? "zoom_1" : ""
        }`}
        ref={ref}
      >
        <Image src={img.src} alt={img.alt} />
        <ToolTip tips={tips} />
      </div>
    </Styles>
  );
};
