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
      delay: true,
    },
    {
      name: "nnsa_white",
      type: "government",
      alt: "National Nuclear Security Administration",
      delay: true,
    },
    {
      name: "tennessee_state_white",
      type: "government",
      alt: "Tennessee State Gov",
      delay: true,
    },
    {
      name: "pentagon_white",
      type: "government",
      alt: "Pentagon",
      delay: true,
    },
    {
      name: "y12_white",
      type: "government",
      alt: "Y12",
      delay: true,
    },
    {
      name: "us_army_white",
      type: "government",
      alt: "US Army",
      delay: true,
    },
    {
      name: "department_of_defense_white",
      type: "government",
      alt: "Department of Defense",
      delay: true,
    },
    {
      name: "Department_of_Energy_white",
      type: "government",
      alt: "Department of Energy",
      delay: true,
    },
    {
      name: "department_of_Homeland_security_white",
      type: "government",
      alt: "Department of Homeland Security",
      delay: true,
    },
    {
      name: "department_of_justice_white",
      type: "government",
      alt: "Department of Justice",
      delay: true,
    },
    {
      name: "department_of_the_navy_white",
      type: "government",
      alt: "Department of the Navy",
      delay: true,
    },
    {
      name: "department_of_transportation_white",
      type: "government",
      alt: "Department of Transportation",
      delay: true,
    },
    {
      name: "force_protection_agency_white",
      type: "government",
      alt: "Force Protection Agency",
      delay: true,
    },
    {
      name: "general_intellegence_agency_white",
      type: "government",
      alt: "General Intellegence Agency",
      delay: true,
    },
    {
      name: "national_geospacial_intellegence_agency_white",
      type: "government",
      alt: "National Geospacial Intellegence Agency",
      delay: true,
    },
    {
      name: "pantex_white",
      type: "government",
      alt: "Pantex",
      delay: true,
    },
    {
      name: "food_network_white",
      type: "media",
      alt: "Food Network",
      delay: true,
    },
    {
      name: "knox_news_sentinel_white",
      type: "media",
      alt: "Knox News Sentinel",
      delay: true,
    },
    {
      name: "people_magazine_white",
      type: "media",
      alt: "People Magazine",
      delay: true,
    },
    {
      name: "regal_white",
      type: "media",
      alt: "Regal",
      delay: true,
    },
    {
      name: "scripps_white",
      type: "media",
      alt: "Scripps",
      delay: true,
    },
    {
      name: "hgtv_white",
      type: "media",
      alt: "HGTV",
      delay: true,
    },
    {
      name: "time_warner_cable_white",
      type: "media",
      alt: "Time Warner Cable",
      delay: true,
    },
    {
      name: "auto_zone_white",
      type: "transportation",
      alt: "Auto Zone",
      delay: true,
    },
    {
      name: "delta_white",
      type: "transportation",
      alt: "Delta",
      delay: true,
    },
    {
      name: "brunswick_white",
      type: "transportation",
      alt: "Brunswick",
      delay: true,
    },
    {
      name: "denso_white",
      type: "transportation",
      alt: "Denso",
      delay: true,
    },
    {
      name: "idle_air_white",
      type: "transportation",
      alt: "Idle Air",
      delay: true,
    },
    {
      name: "verizon_white",
      type: "consumer",
      alt: "Verizon",
      delay: true,
    },
  ];
  const logos2 = [
    {
      name: "coca_cola_white",
      type: "consumer",
      alt: "Coca Cola",
      delay: true,
    },
    {
      name: "CVS_pharmacy_white",
      type: "consumer",
      alt: "CVS Pharmacy",
      delay: true,
    },
    {
      name: "radio_systems_white",
      type: "consumer",
      alt: "Radio Systems",
      delay: true,
    },
    {
      name: "general_insurance_white",
      type: "consumer",
      alt: "General Insurance",
      delay: true,
    },
    {
      name: "JTV_white",
      type: "consumer",
      alt: "JTV",
      delay: true,
    },
    {
      name: "keurig_white",
      type: "consumer",
      alt: "Keurig",
      delay: true,
    },
    {
      name: "first_tennessee_white",
      type: "banking",
      alt: "First Tennessee",
      delay: true,
    },
    {
      name: "chase_white",
      type: "banking",
      alt: "JP Morgan Chase",
      delay: true,
    },
    {
      name: "mortgage_investors_group_white",
      type: "banking",
      alt: "Mortgage Investors Group",
      delay: true,
    },
    {
      name: "citi_bank_white",
      type: "banking",
      alt: "City Bank",
      delay: true,
    },
    {
      name: "ed_financial_white",
      type: "banking",
      alt: "Ed Financial",
      delay: true,
    },
    {
      name: "ut_white",
      type: "other",
      alt: "Unniversity of Tennessee",
      delay: true,
    },
    {
      name: "3m_white",
      type: "other",
      alt: "3m",
      delay: true,
    },
    {
      name: "akal_security_white",
      type: "other",
      alt: "Akal Security",
      delay: true,
    },
    {
      name: "ams_white",
      type: "other",
      alt: "ams",
      delay: true,
    },

    {
      name: "rhondes_college_white",
      type: "other",
      alt: "Rhondes College",
      delay: true,
    },
    {
      name: "shelton_group_white",
      type: "other",
      alt: "Shelton Group",
      delay: true,
    },
    {
      name: "first_horizon_white",
      type: "other",
      alt: "First Horizon",
      delay: true,
    },
    {
      name: "general_automics_white",
      type: "other",
      alt: "General Automics",
      delay: true,
    },
    {
      name: "nashville_international_airport_white",
      type: "other",
      alt: "Nashville Airport",
      delay: true,
    },
    {
      name: "osborne_coincom_white",
      type: "other",
      alt: "Osborne Coincom",
      delay: true,
    },
    {
      name: "cca_white",
      type: "other",
      alt: "CCA",
      delay: true,
    },
    {
      name: "pronova_white",
      type: "other",
      alt: "ProNova",
      delay: true,
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
      <button onClick={handleButtonClick}>View All Logos</button>
    </Styles>
  );
};
