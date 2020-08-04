import React from "react";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";

export default ({ title, themeColor }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });
  return (
    <Styles className={themeColor}>
      <h2 className={`fadeUp ${inView ? "active" : ""}`} ref={ref}>
        {title}
      </h2>
    </Styles>
  );
};
