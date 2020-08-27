import React from "react";
import MapPin from "../../Svgs/MapPin";
import Phone from "../../Svgs/Phone";
import Envelope from "../../Svgs/Envelope";
import Styles from "./styled";

export default () => (
  <Styles>
    <ul className="InfoItems">
      <li className="Info_item">
        <Envelope />
        <a href="mailto:info@cadre5.com" target="blank">
          Info@Cadre5.com
        </a>
      </li>
      <li className="Info_item">
        <Phone />
        <a href="tel:1-865-694-5600" rel="nofollow">
          865.694.5600
        </a>
      </li>
      <li className="Info_item">
        <MapPin />
        <a href="https://goo.gl/maps/ipTngEpBKrhsJgd18" target="blank">
          804 Innovation Drive, Knoxville • TN 37932
        </a>
      </li>
    </ul>
  </Styles>
);
