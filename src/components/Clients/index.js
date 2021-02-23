import React, { useState } from "react";
import Button from "../Parts/Button";
import LogoGridItem from "../Parts/LogoGridItem";
import Styles from "./styled";
import { useInView } from "react-intersection-observer";

export default () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const logos1 = [
    {
      name: "oak_ridge_white",
      type: "government",
      alt: "Oak Ridge",
      link: "https://www.ornl.gov/",
      delay: true,
    },
    {
      name: "nnsa_white",
      type: "government",
      alt: "National Nuclear Security Administration",
      link: "https://www.energy.gov/nnsa/national-nuclear-security-administration",
      delay: true,
    },
    {
      name: "sandia_white",
      type: "government",
      alt: "Sandia",
      link: "https://www.sandia.gov/",
      delay: true,
    },
    {
      name: "tennessee_state_white",
      type: "government",
      alt: "Tennessee State Gov",
      link: "https://www.tn.gov/",
      delay: true,
    },
    {
      name: "pentagon_white",
      type: "government",
      alt: "Pentagon",
      link: "https://www.defense.gov/",
      delay: true,
    },
    {
      name: "y12_white",
      type: "government",
      alt: "Y12",
      link: "https://www.y12.doe.gov/",
      delay: true,
    },
    {
      name: "lanl_white",
      type: "government",
      alt: "Y12",
      link: "https://www.lanl.gov/",
      delay: true,
    },
    {
      name: "inl_white",
      type: "government",
      alt: "Idaho National Laboratory",
      link: "https://inl.gov/",
      delay: true,
    },
    {
      name: "us_army_white",
      type: "government",
      alt: "US Army",
      link: "https://www.goarmy.com/",
      delay: true,
    },
    {
      name: "department_of_defense_white",
      type: "government",
      alt: "Department of Defense",
      link: "https://dod.defense.gov/",
      delay: true,
    },
    {
      name: "Department_of_Energy_white",
      type: "government",
      alt: "Department of Energy",
      link: "https://www.energy.gov/",
      delay: true,
    },

    {
      name: "department_of_Homeland_security_white",
      type: "government",
      alt: "Department of Homeland Security",
      link: "https://www.dhs.gov/",
      delay: true,
    },
    {
      name: "department_of_justice_white",
      type: "government",
      alt: "Department of Justice",
      link: "https://www.dhs.gov/",
      delay: true,
    },
    {
      name: "department_of_the_navy_white",
      type: "government",
      alt: "Department of the Navy",
      link: "https://www.navy.com/start?activity=1228855",
      delay: true,
    },
    {
      name: "department_of_transportation_white",
      type: "government",
      alt: "Department of Transportation",
      link: "https://www.transportation.gov/",
      delay: true,
    },
    {
      name: "force_protection_agency_white",
      type: "government",
      alt: "Force Protection Agency",
      link: "https://www.transportation.gov/",
      delay: true,
    },
    {
      name: "general_intellegence_agency_white",
      type: "government",
      alt: "General Intelligence Agency",
      link: "https://www.secretservice.gov/",
      delay: true,
    },
    {
      name: "national_geospacial_intellegence_agency_white",
      type: "government",
      alt: "National Geospatial Intelligence Agency",
      link: "https://www.nga.mil/",
      delay: true,
    },
    {
      name: "cca_white",
      type: "government",
      alt: "CCA",
      link: "http://www.correctionscorp.com/",
      delay: true,
    },
    {
      name: "pantex_white",
      type: "government",
      alt: "Pantex",
      link: "https://pantex.energy.gov/",
      delay: true,
    },
    {
      name: "pro2serve_white",
      type: "government",
      alt: "Pro 2 Serve",
      link: "https://www.p2s.com/",
      delay: true,
    },
    {
      name: "food_network_white",
      type: "media",
      alt: "Food Network",
      link: "https://www.foodnetwork.com/",
      delay: true,
    },
    {
      name: "knox_news_sentinel_white",
      type: "media",
      alt: "Knox News Sentinel",
      link: "https://www.knoxnews.com/",
      delay: true,
    },
    {
      name: "people_magazine_white",
      type: "media",
      alt: "People Magazine",
      link: "https://people.com/",
      delay: true,
    },
    {
      name: "regal_white",
      type: "media",
      alt: "Regal",
      link: "https://www.regmovies.com/",
      delay: true,
    },
    {
      name: "HGTV_white",
      type: "media",
      alt: "HGTV",
      link: "https://www.hgtv.com/",
      delay: true,
    },
    {
      name: "scripps_white",
      type: "media",
      alt: "Scripps",
      link: "https://www.scripps.org/",
      delay: true,
    },
    {
      name: "time_warner_cable_white",
      type: "media",
      alt: "Time Warner Cable",
      link: "https://official.spectrum.com/",
      delay: true,
    },
  ];

  const logos2 = [
    {
      name: "bandit_white",
      type: "media",
      alt: "Bandit",
      link: "https://www.banditlites.com/",
      delay: true,
    },
    {
      name: "vgt_white",
      type: "media",
      alt: "VGT",
      link: "https://www.aristocrat.com/business/vgt/",
      delay: true,
    },
    {
      name: "auto_zone_white",
      type: "transportation",
      alt: "Auto Zone",
      link: "https://www.autozone.com/",
      delay: true,
    },
    {
      name: "delta_white",
      type: "transportation",
      alt: "Delta",
      link: "https://www.delta.com/",
      delay: true,
    },
    {
      name: "brunswick_white",
      type: "transportation",
      alt: "Brunswick",
      link: "https://www.brunswick.com/",
      delay: true,
    },
    {
      name: "denso_white",
      type: "transportation",
      alt: "Denso",
      link: "https://www.denso.com/us-ca/en/",
      delay: true,
    },
    {
      name: "idle_air_white",
      type: "transportation",
      alt: "Idle Air",
      link: "https://www.idleair.com/",
      delay: true,
    },
    {
      name: "gridsmart_white",
      type: "transportation",
      alt: "Gridsmart",
      link: "https://gridsmart.com/",
      delay: true,
    },
    {
      name: "perceptics_white",
      type: "transportation",
      alt: "Perceptics",
      link: "https://www.perceptics.com/",
      delay: true,
    },
    {
      name: "verizon_white",
      type: "consumer",
      alt: "Verizon",
      link: "https://www.verizon.com/",
      delay: true,
    },
    {
      name: "coca_cola_white",
      type: "consumer",
      alt: "Coca Cola",
      link: "https://us.coca-cola.com/",
      delay: true,
    },
    {
      name: "CVS_pharmacy_white",
      type: "consumer",
      alt: "CVS Pharmacy",
      link: "https://www.cvs.com/",
      delay: true,
    },
    {
      name: "general_insurance_white",
      type: "consumer",
      alt: "General Insurance",
      link: "https://www.thegeneral.com/",
      delay: true,
    },
    {
      name: "radio_systems_white",
      type: "consumer",
      alt: "Radio Systems",
      link: "https://www.radiosystemscorporation.com/",
      delay: true,
    },
    {
      name: "JTV_white",
      type: "consumer",
      alt: "JTV",
      link: "https://www.jtv.com/",
      delay: true,
    },
    {
      name: "keurig_white",
      type: "consumer",
      alt: "Keurig",
      link: "https://www.keurig.com/",
      delay: true,
    },
    {
      name: "Lifeway_white",
      type: "consumer",
      alt: "Lifeway",
      link: "https://www.lifeway.com/",
      delay: true,
    },
    {
      name: "american_book_company_white",
      type: "consumer",
      alt: "American Book Company",
      link: "https://americanbookco.com/",
      delay: true,
    },
    {
      name: "nucsafe_white",
      type: "other",
      alt: "Nucsafe",
      link: "https://www.nucsafe.com/",
      delay: true,
    },
    {
      name: "avertium_white",
      type: "other",
      alt: "avertium",
      link: "https://www.avertium.com/",
      delay: true,
    },

    {
      name: "first_tennessee_white",
      type: "banking",
      alt: "First Tennessee",
      link: "https://www.firsthorizon.com/",
      delay: true,
    },
    {
      name: "chase_white",
      type: "banking",
      alt: "JP Morgan Chase",
      link: "https://www.jpmorganchase.com/",
      delay: true,
    },
    {
      name: "mortgage_investors_group_white",
      type: "banking",
      alt: "Mortgage Investors Group",
      link: "https://migonline.com/",
      delay: true,
    },
    {
      name: "citi_bank_white",
      type: "banking",
      alt: "City Bank",
      link: "https://online.citi.com/US/login.do",
      delay: true,
    },
    {
      name: "ed_financial_white",
      type: "banking",
      alt: "Ed Financial",
      link: "https://edfinancial.com/Welcome",
      delay: true,
    },

    {
      name: "ut_white",
      type: "other",
      alt: "Unniversity of Tennessee",
      link: "https://www.utk.edu/",
      delay: true,
    },
    {
      name: "3m_white",
      type: "other",
      alt: "3m",
      link: "https://www.3m.com/",
      delay: true,
    },
    {
      name: "akal_security_white",
      type: "other",
      alt: "Akal Security",
      link: "https://akalglobal.com/akal-security/",
      delay: true,
    },
    {
      name: "ams_white",
      type: "other",
      alt: "ams",
      link: "https://www.ams-corp.com/",
      delay: true,
    },
    {
      name: "rhondes_college_white",
      type: "other",
      alt: "Rhondes College",
      link: "https://www.rhodes.edu/",
      delay: true,
    },
    {
      name: "shelton_group_white",
      type: "other",
      alt: "Shelton Group",
      link: "https://sheltongrp.com/",
      delay: true,
    },
    {
      name: "first_horizon_white",
      type: "banking",
      alt: "First Horizon",
      link: "https://www.firsthorizon.com/",
      delay: true,
    },
    {
      name: "general_automics_white",
      type: "other",
      alt: "General Automics",
      link: "https://www.ga.com/",
      delay: true,
    },
    {
      name: "nashville_international_airport_white",
      type: "other",
      alt: "Nashville Airport",
      link: "https://flynashville.com/",
      delay: true,
    },
    {
      name: "osborne_coincom_white",
      type: "other",
      alt: "Osborne Coincom",
      link: "https://www.osbornecoin.com/",
      delay: true,
    },
    {
      name: "pronova_white",
      type: "other",
      alt: "Pronova",
      link: "https://provisionhealthcare.com/about-us/",
      delay: true,
    },
    {
      name: "Windrock_white",
      type: "other",
      alt: "Windrock",
      link: "https://windrock.com/",
      delay: true,
    },
    {
      name: "PGI_white",
      type: "other",
      alt: "PGi",
      link: "https://www.pgi.com/",
      delay: true,
    },
    {
      name: "rogers_white",
      type: "transportation",
      alt: "Rogers",
      link: "https://rogersgroupincint.com/",
      delay: true,
    },
    {
      name: "youthvillages_white",
      type: "other",
      alt: "Youth Villages",
      link: "https://www.youthvillages.org/",
      delay: true,
    },
    {
      name: "american_homepatient_white",
      type: "other",
      alt: "American Homepatient",
      link: "http://www.ahom.com/",
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
      </article>
      <div className="logos">
        <LogoGridItem logos={logos1} />
      </div>
      <div className="logos logoWrapper">
        <LogoGridItem logos={logos2} />
      </div>
      <button onClick={handleButtonClick}>{visible ? "See More" : "See Less"}</button>
    </Styles>
  );
};
