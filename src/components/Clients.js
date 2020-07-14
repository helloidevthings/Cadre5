import React from "react";
import LogoGridItem from "./Parts/LogoGridItem";

const Clients = () => (
  <section className="Clients">
    <h2 className="Clients_title">Our Clients</h2>
    <div className="Clients_logos">
      <LogoGridItem type="government" name="oak_ridge_white" alt="Oak Ridge" />
      <LogoGridItem type="government" name="y12_white" alt="Y12" />
      <LogoGridItem type="government" name="nnsa_white" alt="NNSA" />
      <LogoGridItem type="consumer" name="verizon_white" alt="Verizon Logo" />
      <LogoGridItem type="consumer" name="coca_cola_white" alt="Coca Cola" />
      <LogoGridItem type="transportation" name="delta_white" alt="Delta" />
      <LogoGridItem type="transportation" name="denso_white" alt="Denso" />
      <LogoGridItem type="banking" name="citi_bank_white" alt="Citi Bank" />
      <LogoGridItem type="government" name="us_army_white" alt="US Army" />
      <LogoGridItem
        type="government"
        name="Department_of_Energy_white"
        alt="Department of Energy"
      />
      <LogoGridItem
        type="government"
        name="department_of_defense_white"
        alt="Department of Defense"
      />
    </div>
  </section>
);

export default Clients;
