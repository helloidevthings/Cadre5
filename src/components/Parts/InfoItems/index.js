import React from "react";
import C5MapPin from "../../Svgs/C5MapPin";
import C5Phone from "../../Svgs/C5Phone";
import C5Envelope from "../../Svgs/C5Envelope";
import Styles from "./styled";

export default () => (
  <Styles>
    <ul className="InfoItems">
      <li className="Info_item">
        <C5Envelope />
        <a href="mailto:info@cadre5.com" target="blank">
          Info@Cadre5.com
        </a>
      </li>
      <li className="Info_item">
        <C5Phone />
        <a href="tel:1-865-694-5600" rel="nofollow">
          865.694.5600
        </a>
      </li>
      <li className="Info_item">
        <C5MapPin />
        <a href="https://goo.gl/maps/ipTngEpBKrhsJgd18" target="blank">
          804 Innovation Drive, Knoxville • TN 37932
        </a>
      </li>
    </ul>
  </Styles>
);
