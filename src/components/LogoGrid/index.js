import React from "react";
import Title from "../Parts/Title";
import LogoGridItem from "../Parts/LogoGridItem";
import Styles from "./styled";
import { useInView } from "react-intersection-observer";

export default () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const gov = [
    {
      name: "oak_ridge",
      type: "government",
      alt: "Oak Ridge",
      link: "https://www.ornl.gov/",
      delay: false,
    },
    {
      name: "nnsa",
      type: "government",
      alt:
        "National Nuclear Security Administration",
      link:
        "https://www.energy.gov/nnsa/national-nuclear-security-administration",
      delay: false,
    },
    {
      name: "sandia",
      type: "government",
      alt: "Sandia",
      link: "https://www.sandia.gov/",
      delay: false,
    },
    {
      name: "tennessee_state",
      type: "government",
      alt: "Tennessee State Gov",
      link: "https://www.tn.gov/",
      delay: false,
    },
    {
      name: "pentagon",
      type: "government",
      alt: "Pentagon",
      link: "https://www.defense.gov/",
      delay: false,
    },
    {
      name: "y12",
      type: "government",
      alt: "Y12",
      link: "https://www.y12.doe.gov/",
      delay: false,
    },
    {
      name: "lanl",
      type: "government",
      alt: "Y12",
      link: "https://www.lanl.gov/",
      delay: false,
    },
    {
      name: "inl",
      type: "government",
      alt: "Idaho National Laboratory",
      link: "https://inl.gov/",
      delay: false,
    },
    {
      name: "us_army",
      type: "government",
      alt: "US Army",
      link: "https://www.goarmy.com/",
      delay: false,
    },
    {
      name: "department_of_defense",
      type: "government",
      alt: "Department of Defense",
      link: "https://dod.defense.gov/",
      delay: false,
    },
    {
      name: "Department_of_Energy",
      type: "government",
      alt: "Department of Energy",
      link: "https://www.energy.gov/",
      delay: false,
    },

    {
      name: "department_of_Homeland_security",
      type: "government",
      alt: "Department of Homeland Security",
      link: "https://www.dhs.gov/",
      delay: false,
    },
    {
      name: "department_of_justice",
      type: "government",
      alt: "Department of Justice",
      link: "https://www.dhs.gov/",
      delay: false,
    },
    {
      name: "department_of_the_navy",
      type: "government",
      alt: "Department of the Navy",
      link:
        "https://www.navy.com/start?activity=1228855",
      delay: false,
    },
    {
      name: "department_of_transportation",
      type: "government",
      alt: "Department of Transportation",
      link: "https://www.transportation.gov/",
      delay: false,
    },
    {
      name: "force_protection_agency",
      type: "government",
      alt: "Force Protection Agency",
      link: "https://www.transportation.gov/",
      delay: false,
    },
    {
      name: "general_intellegence_agency",
      type: "government",
      alt: "General Intelligence Agency",
      link: "https://www.secretservice.gov/",
      delay: false,
    },
    {
      name:
        "national_geospacial_intellegence_agency",
      type: "government",
      alt:
        "National Geospatial Intelligence Agency",
      link: "https://www.nga.mil/",
      delay: false,
    },
    {
      name: "cca",
      type: "government",
      alt: "CCA",
      link: "http://www.correctionscorp.com/",
      delay: false,
    },
    {
      name: "pantex",
      type: "government",
      alt: "Pantex",
      link: "https://pantex.energy.gov/",
      delay: false,
    },
    {
      name: "pro2serve",
      type: "government",
      alt: "Pro 2 Serve",
      link: "https://www.p2s.com/",
      delay: false,
    },
  ];

  const media = [
    {
      name: "food_network",
      type: "media",
      alt: "Food Network",
      link: "https://www.foodnetwork.com/",
      delay: false,
    },
    {
      name: "knox_news_sentinel",
      type: "media",
      alt: "Knox News Sentinel",
      link: "https://www.knoxnews.com/",
      delay: false,
    },
    {
      name: "people_magazine",
      type: "media",
      alt: "People Magazine",
      link: "https://people.com/",
      delay: false,
    },
    {
      name: "regal",
      type: "media",
      alt: "Regal",
      link: "https://www.regmovies.com/",
      delay: false,
    },
    {
      name: "HGTV",
      type: "media",
      alt: "HGTV",
      link: "https://www.hgtv.com/",
      delay: false,
    },
    {
      name: "scripps",
      type: "media",
      alt: "Scripps",
      link: "https://www.scripps.org/",
      delay: false,
    },
    {
      name: "time_warner_cable",
      type: "media",
      alt: "Time Warner Cable",
      link: "https://official.spectrum.com/",
      delay: false,
    },
    {
      name: "bandit",
      type: "media",
      alt: "Bandit",
      link: "https://www.banditlites.com/",
      delay: false,
    },
    {
      name: "vgt",
      type: "media",
      alt: "VGT",
      link:
        "https://www.aristocrat.com/business/vgt/",
      delay: false,
    },
  ];
  const transportation = [
    {
      name: "auto_zone",
      type: "transportation",
      alt: "Auto Zone",
      link: "https://www.autozone.com/",
      delay: false,
    },
    {
      name: "delta",
      type: "transportation",
      alt: "Delta",
      link: "https://www.delta.com/",
      delay: false,
    },
    {
      name: "brunswick",
      type: "transportation",
      alt: "Brunswick",
      link: "https://www.brunswick.com/",
      delay: false,
    },
    {
      name: "denso",
      type: "transportation",
      alt: "Denso",
      link: "https://www.denso.com/us-ca/en/",
      delay: false,
    },
    {
      name: "rogers",
      type: "transportation",
      alt: "Rogers",
      link: "https://rogersgroupincint.com/",
      delay: false,
    },
    {
      name: "idle_air",
      type: "transportation",
      alt: "Idle Air",
      link: "https://www.idleair.com/",
      delay: false,
    },
    {
      name: "gridsmart",
      type: "transportation",
      alt: "Gridsmart",
      link: "https://gridsmart.com/",
      delay: false,
    },
    {
      name: "perceptics",
      type: "transportation",
      alt: "Perceptics",
      link: "https://www.perceptics.com/",
      delay: false,
    },
  ];

  const consumer = [
    {
      name: "verizon",
      type: "consumer",
      alt: "Verizon",
      link: "https://www.verizon.com/",
      delay: false,
    },
    {
      name: "coca_cola",
      type: "consumer",
      alt: "Coca Cola",
      link: "https://us.coca-cola.com/",
      delay: false,
    },
    {
      name: "CVS_pharmacy",
      type: "consumer",
      alt: "CVS Pharmacy",
      link: "https://www.cvs.com/",
      delay: false,
    },
    {
      name: "general_insurance",
      type: "consumer",
      alt: "General Insurance",
      link: "https://www.thegeneral.com/",
      delay: false,
    },
    {
      name: "radio_systems",
      type: "consumer",
      alt: "Radio Systems",
      link:
        "https://www.radiosystemscorporation.com/",
      delay: false,
    },
    {
      name: "JTV",
      type: "consumer",
      alt: "JTV",
      link: "https://www.jtv.com/",
      delay: false,
    },
    {
      name: "keurig",
      type: "consumer",
      alt: "Keurig",
      link: "https://www.keurig.com/",
      delay: false,
    },
    {
      name: "Lifeway",
      type: "consumer",
      alt: "Lifeway",
      link: "https://www.lifeway.com/",
      delay: false,
    },
    {
      name: "american_book_company",
      type: "consumer",
      alt: "American Book Company",
      link: "https://americanbookco.com/",
      delay: false,
    },
  ];
  const banking = [
    {
      name: "first_tennessee",
      type: "banking",
      alt: "First Tennessee",
      link: "https://www.firsthorizon.com/",
      delay: false,
    },
    {
      name: "first_horizon",
      type: "banking",
      alt: "First Horizon",
      link: "https://www.firsthorizon.com/",
      delay: false,
    },
    {
      name: "chase",
      type: "banking",
      alt: "JP Morgan Chase",
      link: "https://www.jpmorganchase.com/",
      delay: false,
    },
    {
      name: "mortgage_investors_group",
      type: "banking",
      alt: "Mortgage Investors Group",
      link: "https://migonline.com/",
      delay: false,
    },
    {
      name: "citi_bank",
      type: "banking",
      alt: "City Bank",
      link: "https://online.citi.com/US/login.do",
      delay: false,
    },
    {
      name: "ed_financial",
      type: "banking",
      alt: "Ed Financial",
      link: "https://edfinancial.com/Welcome",
      delay: false,
    },
  ];

  const other = [
    {
      name: "ut",
      type: "other",
      alt: "Unniversity of Tennessee",
      link: "https://www.utk.edu/",
      delay: false,
    },
    {
      name: "3m",
      type: "other",
      alt: "3m",
      link: "https://www.3m.com/",
      delay: false,
    },
    {
      name: "akal_security",
      type: "other",
      alt: "Akal Security",
      link:
        "https://akalglobal.com/akal-security/",
      delay: false,
    },
    {
      name: "ams",
      type: "other",
      alt: "ams",
      link: "https://www.ams-corp.com/",
      delay: false,
    },
    {
      name: "rhondes_college",
      type: "other",
      alt: "Rhondes College",
      link: "https://www.rhodes.edu/",
      delay: false,
    },
    {
      name: "avertium",
      type: "other",
      alt: "avertium",
      link: "https://www.avertium.com/",
      delay: false,
    },
    {
      name: "shelton_group",
      type: "other",
      alt: "Shelton Group",
      link: "https://sheltongrp.com/",
      delay: false,
    },
    {
      name: "general_automics",
      type: "other",
      alt: "General Automics",
      link: "https://www.ga.com/",
      delay: false,
    },
    {
      name: "nucsafe",
      type: "other",
      alt: "Nucsafe",
      link: "https://www.nucsafe.com/",
      delay: false,
    },
    {
      name: "nashville_international_airport",
      type: "other",
      alt: "Nashville Airport",
      link: "https://flynashville.com/",
      delay: false,
    },
    {
      name: "osborne_coincom",
      type: "other",
      alt: "Osborne Coincom",
      link: "https://www.osbornecoin.com/",
      delay: false,
    },
    {
      name: "pronova",
      type: "other",
      alt: "Pronova",
      link:
        "https://provisionhealthcare.com/about-us/",
      delay: false,
    },
    {
      name: "Windrock",
      type: "other",
      alt: "Windrock",
      link: "https://windrock.com/",
      delay: false,
    },
    {
      name: "PGI",
      type: "other",
      alt: "PGi",
      link: "https://www.pgi.com/",
      delay: false,
    },
    {
      name: "youthvillages",
      type: "other",
      alt: "Youth Villages",
      link: "https://www.youthvillages.org/",
      delay: false,
    },
    {
      name: "american_homepatient",
      type: "other",
      alt: "American Homepatient",
      link: "http://www.ahom.com/",
      delay: false,
    },
  ];

  const view = inView ? "active" : "";

  return (
    <Styles className={`${view}`} ref={ref}>
      <Title
        title="Our Clients"
        base="LogoGrid"
      />
      <div className="heading">
        <h3>Government</h3>
      </div>
      <div className="grid">
        <LogoGridItem logos={gov} />
      </div>
      <div className="heading">
        <h3>Media</h3>
        <span className="fancyAND">and</span>{" "}
        <h3>Entertainment</h3>
      </div>
      <div className="grid">
        <LogoGridItem logos={media} />
      </div>
      <div className="heading">
        <h3>Transportation</h3>
        <span className="fancyAND">and</span>
        <h3>Automotive</h3>
      </div>
      <div className="grid">
        <LogoGridItem logos={transportation} />
      </div>
      <div className="heading">
        <h3>Consumer</h3>
        <span className="fancyAND">and</span>
        <h3>Retail</h3>
      </div>
      <div className="grid">
        <LogoGridItem logos={consumer} />
      </div>
      <div className="heading">
        <h3>Banking</h3>
        <span className="fancyAND">and</span>
        <h3>Financial</h3>
      </div>
      <div className="grid">
        <LogoGridItem logos={banking} />
      </div>
      <div className="heading">
        <h3>Other</h3>
      </div>
      <div className="grid">
        <LogoGridItem logos={other} />
      </div>
    </Styles>
  );
};
