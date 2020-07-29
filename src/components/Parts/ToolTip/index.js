import React, { useState, setState } from "react";
import Styles from "./styled";
import { motion, AnimatePresence } from "framer-motion";

export default ({ tips = [] }) => {
  return (
    <Styles>
      {tips.map(({ desc, i, top, left }) => {
        const [visible, toggleVisible] = useState(false);
        const handleButtonClick = (e) => {
          if (!visible) {
            toggleVisible(true);
          } else {
            toggleVisible(false);
          }
        };
        const closeButton = (e) => {
          toggleVisible(false);
        };

        return (
          <div
            className={visible ? "wrapper active" : "wrapper"}
            style={{ top: top, left: left }}
          >
            <button
              className="ToolTip ToolTipButton"
              onClick={handleButtonClick}
            >
              {i}
            </button>
            {visible ? (
              <motion.div
                className="description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={i}
              >
                <p>{desc}</p>
                <button className="Close" onClick={closeButton}>
                  X
                </button>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </Styles>
  );
};
