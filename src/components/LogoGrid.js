import React from "react";
import Title from "./Parts/Title";
import LogoGridItem from "./Parts/LogoGridItem";

const LogoGrid = () => (
  <section className="LogoGrid">
    <Title title="Our Clients" base="LogoGrid" />

    <div className="LogoGrid_heading">
      <h3>Government</h3>
    </div>
    <div className="LogoGrid_grid">
      <LogoGridItem name="oak_ridge" type="government" alt="Oak Ridge" />
      <LogoGridItem name="oak_ridge" type="government" alt="Oak Ridge" />
      <LogoGridItem name="oak_ridge" type="government" alt="Oak Ridge" />
    </div>
    <div className="LogoGrid_heading">
      <h3>
        Media <span className="fancyAND">and</span> Entertainment
      </h3>
    </div>
    <div className="LogoGrid_grid">
      <LogoGridItem name="food_network" type="media" alt="Food Network" />
      <LogoGridItem
        name="knox_news_sentinel"
        type="media"
        alt="Knox News Sentinel"
      />
      <LogoGridItem name="people_magazine" type="media" alt="People Magazine" />
      <LogoGridItem name="regal" type="media" alt="Regal" />
      <LogoGridItem name="scripps" type="media" alt="Scripps" />
      <LogoGridItem
        name="time_warner_cable"
        type="media"
        alt="Time Warner Cable"
      />
    </div>
    <div className="LogoGrid_heading">
      <h3>
        Transportation <span className="fancyAND">and</span> Automotive
      </h3>
    </div>
    <div className="LogoGrid_grid">
      <LogoGridItem name="auto_zone" type="transportation" alt="Auto Zone" />
      <LogoGridItem name="delta" type="transportation" alt="Delta" />
      <LogoGridItem name="brunswick" type="transportation" alt="Brunswick" />
      <LogoGridItem name="denso" type="transportation" alt="Denso" />
      <LogoGridItem name="idle_air" type="transportation" alt="Idle Air" />
    </div>
    <div className="LogoGrid_heading">
      <h3>
        Consumer <span className="fancyAND">and</span> Retail
      </h3>
    </div>
    <div className="LogoGrid_grid">
      <LogoGridItem name="verizon" type="consumer" alt="Verizon" />
      <LogoGridItem name="coca_cola" type="consumer" alt="Coca Cola" />
      <LogoGridItem name="CVS_pharmacy" type="consumer" alt="CVS Pharmacy" />
      <LogoGridItem
        name="general_insurance"
        type="consumer"
        alt="General Insurance"
      />
      <LogoGridItem name="JTV" type="consumer" alt="JTV" />
      <LogoGridItem name="keurig" type="consumer" alt="Keurig" />
    </div>
    <div className="LogoGrid_heading">
      <h3>
        Banking <span className="fancyAND">and</span> Financial
      </h3>
    </div>
    <div className="LogoGrid_grid">
      <LogoGridItem
        name="first_tennessee"
        type="banking"
        alt="First Tennessee"
      />
      <LogoGridItem name="chase" type="banking" alt="JP Morgan Chase" />
      <LogoGridItem
        name="mortgage_investors_group"
        type="banking"
        alt="Mortgage Investors Group"
      />
      <LogoGridItem name="citi_bank" type="banking" alt="City Bank" />
      <LogoGridItem name="ed_financial" type="banking" alt="Ed Financial" />
    </div>
    <div className="LogoGrid_heading">
      <h3>
        Banking <span className="fancyAND">and</span> Financial
      </h3>
    </div>
    <div className="LogoGrid_grid">
      <LogoGridItem name="ut" type="other" alt="Unniversity of Tennessee" />
      <LogoGridItem name="3m" type="other" alt="3m" />
      <LogoGridItem name="akal_security" type="other" alt="Akal Security" />
      <LogoGridItem name="ams" type="other" alt="ams" />
      <LogoGridItem name="rhondes_college" type="other" alt="Rhondes College" />
      <LogoGridItem name="shelton_group" type="other" alt="Shelton Group" />
      <LogoGridItem name="first_horizon" type="other" alt="First Horizon" />
      <LogoGridItem
        name="general_automics"
        type="other"
        alt="General Automics"
      />
      <LogoGridItem
        name="nashville_international_airport"
        type="other"
        alt="Nashville Airport"
      />
      <LogoGridItem name="osborne_coincom" type="other" alt="Osborne Coincom" />
    </div>
  </section>
);

export default LogoGrid;
