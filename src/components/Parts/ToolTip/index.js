import React from "react";
import Styles from "./styled";

export default () => (
  <Styles>
    {" "}
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
  </Styles>
);
