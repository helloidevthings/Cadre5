import React from "react";
import Button from "../Parts/Button";
import LogoGridItem from "../Parts/LogoGridItem";
import Styles from "./styled";
import { useInView } from "react-intersection-observer";
import Title from "../Parts/Title";

export default ({ title, img = "" }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  const gov = [
    {
      name: "oak_ridge",
      type: "government",
      alt: "Oak Ridge",
    },
    {
      name: "nnsa",
      type: "government",
      alt: "National Nuclear Security Administration",
    },
    {
      name: "tennessee_state",
      type: "government",
      alt: "Tennessee State Gov",
    },
    {
      name: "pentagon",
      type: "government",
      alt: "Pentagon",
    },
    {
      name: "y12",
      type: "government",
      alt: "Y12",
    },
    {
      name: "us_army",
      type: "government",
      alt: "US Army",
    },
    {
      name: "department_of_defense",
      type: "government",
      alt: "Department of Defense",
    },
    {
      name: "Department_of_Energy",
      type: "government",
      alt: "Department of Energy",
    },
    {
      name: "department_of_Homeland_security",
      type: "government",
      alt: "Department of Homeland Security",
    },
    {
      name: "department_of_justice",
      type: "government",
      alt: "Department of Justice",
    },
    {
      name: "department_of_the_navy",
      type: "government",
      alt: "Department of the Navy",
    },
    {
      name: "department_of_transportation",
      type: "government",
      alt: "Department of Transportation",
    },
    {
      name: "force_protection_agency",
      type: "government",
      alt: "Force Protection Agency",
    },
    {
      name: "general_intellegence_agency",
      type: "government",
      alt: "General Intellegence Agency",
    },
    {
      name: "national_geospacial_intellegence_agency",
      type: "government",
      alt: "National Geospacial Intellegence Agency",
    },
  ];

  const media = [
    {
      name: "food_network",
      type: "media",
      alt: "Food Network",
    },
    {
      name: "knox_news_sentinel",
      type: "media",
      alt: "Knox News Sentinel",
    },
    {
      name: "people_magazine",
      type: "media",
      alt: "People Magazine",
    },
    {
      name: "regal",
      type: "media",
      alt: "Regal",
    },
    {
      name: "scripps",
      type: "media",
      alt: "Scripps",
    },
    {
      name: "time_warner_cable",
      type: "media",
      alt: "Time Warner Cable",
    },
  ];
  const transportation = [
    {
      name: "auto_zone",
      type: "transportation",
      alt: "Auto Zone",
    },
    {
      name: "delta",
      type: "transportation",
      alt: "Delta",
    },
    {
      name: "brunswick",
      type: "transportation",
      alt: "Brunswick",
    },
    {
      name: "denso",
      type: "transportation",
      alt: "Denso",
    },
    {
      name: "idle_air",
      type: "transportation",
      alt: "Idle Air",
    },
  ];
  const consumer = [
    {
      name: "verizon",
      type: "consumer",
      alt: "Verizon",
    },
    {
      name: "coca_cola",
      type: "consumer",
      alt: "Coca Cola",
    },
    {
      name: "CVS_pharmacy",
      type: "consumer",
      alt: "CVS Pharmacy",
    },
    {
      name: "general_insurance",
      type: "consumer",
      alt: "General Insurance",
    },
    {
      name: "JTV",
      type: "consumer",
      alt: "JTV",
    },
    {
      name: "keurig",
      type: "consumer",
      alt: "Keurig",
    },
  ];
  const banking = [
    {
      name: "first_tennessee",
      type: "banking",
      alt: "First Tennessee",
    },
    {
      name: "chase",
      type: "banking",
      alt: "JP Morgan Chase",
    },
    {
      name: "mortgage_investors_group",
      type: "banking",
      alt: "Mortgage Investors Group",
    },
    {
      name: "citi_bank",
      type: "banking",
      alt: "City Bank",
    },
    {
      name: "ed_financial",
      type: "banking",
      alt: "Ed Financial",
    },
  ];

  const other = [
    {
      name: "ut",
      type: "other",
      alt: "Unniversity of Tennessee",
    },
    {
      name: "3m",
      type: "other",
      alt: "3m",
    },
    {
      name: "akal_security",
      type: "other",
      alt: "Akal Security",
    },
    {
      name: "ams",
      type: "other",
      alt: "ams",
    },
    {
      name: "rhondes_college",
      type: "other",
      alt: "Rhondes College",
    },
    {
      name: "shelton_group",
      type: "other",
      alt: "Shelton Group",
    },
    {
      name: "first_horizon",
      type: "other",
      alt: "First Horizon",
    },
    {
      name: "general_automics",
      type: "other",
      alt: "General Automics",
    },
    {
      name: "nashville_international_airport",
      type: "other",
      alt: "Nashville Airport",
    },
    {
      name: "osborne_coincom",
      type: "other",
      alt: "Osborne Coincom",
    },
  ];
  return (
    <Styles ref={ref} className={inView ? "active" : ""}>
      {/* <Title className="title" title="Our Clients" /> */}
      <article className="blog">
        <h2>Our Clients</h2>
        <p>
          {`Over the years Cadre5 has had the opportunity to work with various
          different clients in many industries. Including, Government, Consumer,
          Media & Entertainment`}
        </p>
        <Button
          href="/About"
          text="View All Logos"
          themeColor="lightTheme"
          btnStyle="secondary"
          arrow={true}
        />
      </article>
      <div className="logos">
        <LogoGridItem logos={gov} />
        <LogoGridItem logos={media} />
        <LogoGridItem logos={transportation} />
        <LogoGridItem logos={banking} />
        <LogoGridItem logos={consumer} />
        <LogoGridItem logos={other} />
      </div>
    </Styles>
  );
};
