import React, { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";

export default ({ logos = [] }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Fragment>
      {logos.map(({ type, name, alt }, i) => (
        <Styles
          src={`/images/logos/${type}/${name}.png`}
          className={inView ? "active" : ""}
          alt={`${alt} Logo`}
          ref={ref}
          key={i}
        />
      ))}
    </Fragment>
  );
};
