import React from "react";
import Image from "../Parts/Image";

import Styles from "./styled";
export default ({ title, img = "" }) => (
  <Styles>
    <Image src={img.src} alt={img.alt} base="HeroBasic" />
    <div className="text-wrapper">
      <h1 className="header">{title}</h1>
    </div>
  </Styles>
);
