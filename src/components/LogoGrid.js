import React from "react";
import Title from "./Parts/Title";

const LogoGrid = () => (
  <section className="LogoGrid text-wrapper">
    <Title title="Our Clients" base="LogoGrid" />
    <div className="LogoGrid_grid">
      <img
        src="/images/logos/2000px-US-SmallBusinessAdmin-Logo.svg.png"
        alt="US Small Business Logo"
      />
      <img src="/images/logos/diynetwork.jpg" alt="US Small Business Logo" />
      <img
        src="/images/logos/excellencedotgovaward.jpg"
        alt="US Small Business Logo"
      />
      <img src="/images/logos/foodnetwork.jpg" alt="US Small Business Logo" />
      <img src="/images/logos/Hgtv.png" alt="US Small Business Logo" />
      <img src="/images/logos/oakridgelogo.png" alt="US Small Business Logo" />
      <img src="/images/logos/Picture3.png" alt="US Small Business Logo" />
      <img src="/images/logos/RCollege.png" alt="US Small Business Logo" />
      <img src="/images/logos/UT.png" alt="US Small Business Logo" />
    </div>
  </section>
);

export default LogoGrid;
