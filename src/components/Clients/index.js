import React from "react";
import Button from "../Parts/Button";
import LogoGridItem from "../Parts/LogoGridItem";
import Styles from "./styled";
import { useInView } from "react-intersection-observer";
import Title from "../Parts/Title";

export default ({ title, img = "" }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles ref={ref} className={inView ? "active" : ""}>
      <Title className="title" title="Our Clients" />
      <article className="blog">
        <p>All the logos in the world</p>
        <Button
          href="/About"
          text="View All Logos"
          themeColor="lightTheme"
          btnStyle="secondary"
          arrow={true}
        />
      </article>
      <div className="logos">
        <LogoGridItem
          type="government"
          name="oak_ridge_white"
          alt="Oak Ridge"
        />
        <LogoGridItem type="government" name="nnsa_white" alt="NNSA" />
        <LogoGridItem type="consumer" name="verizon_white" alt="Verizon Logo" />
        <LogoGridItem type="consumer" name="coca_cola_white" alt="Coca Cola" />
        <LogoGridItem type="transportation" name="delta_white" alt="Delta" />
        <LogoGridItem type="transportation" name="denso_white" alt="Denso" />
        <LogoGridItem type="banking" name="citi_bank_white" alt="Citi Bank" />
        <LogoGridItem type="government" name="us_army_white" alt="US Army" />
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
    </Styles>
  );
};
