import React from "react";
import Styles from "./styled";
import HeroImage from "../HeroImage";
import Map from "../Svgs/Map";

export default () => {
  return (
    <Styles>
      <HeroImage
        title="Contact"
        leadin="Let's talk about your project"
        infoItems={true}
        row="reverse"
        img={{
          src: "/images/cadre-about-image.png",
          alt: "people working in an office",
        }}
      />
      <a href="https://goo.gl/maps/ipTngEpBKrhsJgd18" target="blank">
        <div className="map">
          <Map />
        </div>
      </a>
    </Styles>
  );
};
