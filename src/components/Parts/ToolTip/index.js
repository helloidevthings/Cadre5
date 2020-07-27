import React from "react";
import Styles from "./styled";
import { motion, AnimatePresence } from "framer-motion";

export default () => (
  <Styles className="wrapper">
    <motion.div
      className="description"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="ToolTip" style={{ top: `pink` }}>
        1
      </button>
      <p>description of what this is</p>
    </motion.div>
  </Styles>
);
