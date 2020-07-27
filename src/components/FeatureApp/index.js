import React from "react";
import Image from "../Parts/Image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";
import ToolTip from "../Parts/ToolTip";

export default ({ img = "", themeColor }) => {
  const [ref, inView] = useInView({ triggeronce: true, threshold: 0.15 });

  return (
    <Styles themeColor={themeColor}>
      <div className={`zoom_move ${inView ? "zoom_1" : ""}`} ref={ref}>
        <Image src={img.src} alt={img.alt} />
        <ToolTip />
      </div>
    </Styles>
  );
};
