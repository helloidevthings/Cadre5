import React from "react";
import Button from "../Button";
import C5MapPin from "../../Svgs/C5MapPin";
import C5Phone from "../../Svgs/C5Phone";
import C5Envelope from "../../Svgs/C5Envelope";
import Styles from "./styled";

export default () => (
  <Styles>
    <ul className="InfoItems">
      <li className="Info_item">
        <C5Envelope />
        <Button
                  themeColor="lightTheme"
                  btnStyle="secondary"
                  href="mailto:info@cadre5.com"
                  text="Info@Cadre5.com"
                />
      </li>
      <li className="Info_item number">
        <C5Phone />
        <Button
                  themeColor="lightTheme"
                  btnStyle="secondary"
                  href="tel:1-865-694-5600"
                  rel="nofollow"
                  text="865.694.5600"
                />
      </li>
      <li className="Info_item">
        <C5MapPin />
        <Button
                  themeColor="lightTheme"
                  btnStyle="secondary"
                  href="https://goo.gl/maps/ipTngEpBKrhsJgd18"
                  text="804 Innovation Drive, Knoxville • TN 37932"
                />
      </li>
    </ul>
  </Styles>
);
