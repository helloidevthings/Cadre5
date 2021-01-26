/* eslint-disable react/display-name */
import React from "react";
import InfoItems from "../Parts/InfoItems";

import Styles from "./styled";

export default () => (
  <Styles>
    <InfoItems />
    <p>
      © 1999 to {new Date().getFullYear()} Cadre5,
      LLC.
    </p>
  </Styles>
);
