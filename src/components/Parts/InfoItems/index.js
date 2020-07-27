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
        <div>info@cadre5.com</div>
      </li>
      <li className="Info_item">
        <Phone />
        <div>865.694.5600</div>
      </li>
      <li className="Info_item">
        <MapPin />
        <div>804 Innovation Drive, Knoxville • TN 37932</div>
      </li>
    </ul>
  </Styles>
);
