import React from "react";
import Styles from "./styled";

export default ({ children, themeColor = "", textAlign = "" }) => {
  const text = textAlign;
  return (
    <Styles className={themeColor ? themeColor : ""}>
      <div className={`${text} wrapper`}>{children}</div>
    </Styles>
  );
};
