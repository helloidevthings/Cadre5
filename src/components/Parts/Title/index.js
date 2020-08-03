import React from "react";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";

export default ({ title }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });
  return (
    <Styles className={`fadeUp ${inView ? "active" : ""}`} ref={ref}>
      {title}
    </Styles>
  );
};
