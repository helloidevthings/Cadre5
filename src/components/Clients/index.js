import React, { useState } from "react";
import Button from "../Parts/Button";
import LogoGridItem from "../Parts/LogoGridItem";
import Styles from "./styled";
import { useInView } from "react-intersection-observer";

export default () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const logos1 = [
    {
      name: "oak_ridge_white",
      type: "government",
      alt: "Oak Ridge",
    },
    {
      name: "nnsa_white",
      type: "government",
      alt: "National Nuclear Security Administration",
    },
    {
      name: "tennessee_state_white",
      type: "government",
      alt: "Tennessee State Gov",
    },
    {
      name: "pentagon_white",
      type: "government",
      alt: "Pentagon",
    },
    {
      name: "y12_white",
      type: "government",
      alt: "Y12",
    },
    {
      name: "us_army_white",
      type: "government",
      alt: "US Army",
    },
    {
      name: "department_of_defense_white",
      type: "government",
      alt: "Department of Defense",
    },
    {
      name: "Department_of_Energy_white",
      type: "government",
      alt: "Department of Energy",
    },
    {
      name: "department_of_Homeland_security_white",
      type: "government",
      alt: "Department of Homeland Security",
    },
    {
      name: "department_of_justice_white",
      type: "government",
      alt: "Department of Justice",
    },
    {
      name: "department_of_the_navy_white",
      type: "government",
      alt: "Department of the Navy",
    },
    {
      name: "department_of_transportation_white",
      type: "government",
      alt: "Department of Transportation",
    },
    {
      name: "force_protection_agency_white",
      type: "government",
      alt: "Force Protection Agency",
    },
    {
      name: "general_intellegence_agency_white",
      type: "government",
      alt: "General Intellegence Agency",
    },
    {
      name: "national_geospacial_intellegence_agency_white",
      type: "government",
      alt: "National Geospacial Intellegence Agency",
    },
    {
      name: "food_network_white",
      type: "media",
      alt: "Food Network",
    },
    {
      name: "knox_news_sentinel_white",
      type: "media",
      alt: "Knox News Sentinel",
    },
    {
      name: "people_magazine_white",
      type: "media",
      alt: "People Magazine",
    },
    {
      name: "regal_white",
      type: "media",
      alt: "Regal",
    },
    {
      name: "scripps_white",
      type: "media",
      alt: "Scripps",
    },
    {
      name: "time_warner_cable_white",
      type: "media",
      alt: "Time Warner Cable",
    },
    {
      name: "auto_zone_white",
      type: "transportation",
      alt: "Auto Zone",
    },
    {
      name: "delta_white",
      type: "transportation",
      alt: "Delta",
    },
  ];
  const logos2 = [
    {
      name: "brunswick_white",
      type: "transportation",
      alt: "Brunswick",
    },
    {
      name: "denso_white",
      type: "transportation",
      alt: "Denso",
    },
    {
      name: "idle_air_white",
      type: "transportation",
      alt: "Idle Air",
    },
    {
      name: "verizon_white",
      type: "consumer",
      alt: "Verizon",
    },
    {
      name: "coca_cola_white",
      type: "consumer",
      alt: "Coca Cola",
    },
    {
      name: "CVS_pharmacy_white",
      type: "consumer",
      alt: "CVS Pharmacy",
    },
    {
      name: "general_insurance_white",
      type: "consumer",
      alt: "General Insurance",
    },
    {
      name: "JTV_white",
      type: "consumer",
      alt: "JTV",
    },
    {
      name: "keurig_white",
      type: "consumer",
      alt: "Keurig",
    },
    {
      name: "first_tennessee_white",
      type: "banking",
      alt: "First Tennessee",
    },
    {
      name: "chase_white",
      type: "banking",
      alt: "JP Morgan Chase",
    },
    {
      name: "mortgage_investors_group_white",
      type: "banking",
      alt: "Mortgage Investors Group",
    },
    {
      name: "citi_bank_white",
      type: "banking",
      alt: "City Bank",
    },
    {
      name: "ed_financial_white",
      type: "banking",
      alt: "Ed Financial",
    },
    {
      name: "ut_white",
      type: "other",
      alt: "Unniversity of Tennessee",
    },
    {
      name: "3m_white",
      type: "other",
      alt: "3m",
    },
    {
      name: "akal_security_white",
      type: "other",
      alt: "Akal Security",
    },
    {
      name: "ams_white",
      type: "other",
      alt: "ams",
    },
    {
      name: "rhondes_college_white",
      type: "other",
      alt: "Rhondes College",
    },
    {
      name: "shelton_group_white",
      type: "other",
      alt: "Shelton Group",
    },
    {
      name: "first_horizon_white",
      type: "other",
      alt: "First Horizon",
    },
    {
      name: "general_automics_white",
      type: "other",
      alt: "General Automics",
    },
    {
      name: "nashville_international_airport_white",
      type: "other",
      alt: "Nashville Airport",
    },
    {
      name: "osborne_coincom_white",
      type: "other",
      alt: "Osborne Coincom",
    },
  ];
  const [visible, toggleVisible] = useState(true);
  const handleButtonClick = (e) => {
    if (!visible) {
      toggleVisible(true);
    } else {
      toggleVisible(false);
    }
  };

  const view = inView ? "active" : "";
  const expand = visible ? "visible" : "";

  return (
    <Styles className={`${view} ${expand}`} ref={ref}>
      {/* <Title className="title" title="Our Clients" /> */}
      <article className="blog center">
        <h2>Our Clients</h2>
        <p>
          {`Over the years Cadre5 has had the opportunity to work with various
          different clients in many industries. Including, Government, Consumer,
          Media & Entertainment`}
        </p>
      </article>
      <div className="logos">
        <LogoGridItem logos={logos1} />
      </div>
      <div className="logoWrapper">
        <LogoGridItem logos={logos2} />
      </div>
      <button className="ToolTip ToolTipButton" onClick={handleButtonClick}>
        View All Logos
      </button>
    </Styles>
  );
};
