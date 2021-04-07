import React, { Fragment } from "react";
import Styles from "./styled";
import { Image } from "cloudinary-react";

export default ({ logos = [] }) => {
  return (
    <Fragment>
      {logos.map(({ type, name, alt, link, delay = false }, i) => (
        <a href={link} target="_blank">
          <Styles>
            <img
              alt={`${alt} Logo`}
              srcSet={`images/logos/${type}/${name}.png 250w, images/_medium/images/logos/${type}/${name}.png 600w`}
              sizes="(max-width: 600px) 250px,
        600px"
              src={`${name}.png`}
              key={i}
              className="logo"
              style={{ transitionDelay: `${delay === true ? 0.1 * i : "0"}s ` }}
            />
          </Styles>
        </a>
      ))}
    </Fragment>
  );
};
