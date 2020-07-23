import React from "react";
import Image from "../Parts/Image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";

export default ({ img = "", theme }) => {
  const [ref, inView] = useInView({ triggeronce: true, threshold: 0.15 });

  return (
    <Styles>
      <div className={`zoom_move ${inView ? "zoom_1" : ""}`} ref={ref}>
        <Image src={img.src} alt={img.alt} />
        <div className="ToolTip_wrapper">
          <AnimatePresence>
            <motion.div
              className="ToolTip_dropdown"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button className="ToolTip" style={{ top: `pink` }}>
                1
              </button>
              <p>description of what this is</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Styles>
  );
};
