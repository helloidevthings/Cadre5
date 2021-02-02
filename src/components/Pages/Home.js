import React from "react";

import Page from "../Page";
import Hero from "../Hero";
import Clients from "../Clients";
import Project from "../Project";
import ProjectsRelated from "../ProjectsRelated";
import Contact from "../Contact";
import HeroImage from "../HeroImage";
import HeroBasic from "../HeroBasic";
import WaveHr from "../Parts/WaveHR";
import ProjectCard from "../Parts/ProjectCard";

const Home = () => {
  const resolution = [
    {
      subheader: "2007 • 2020",
      title: "RESolution",
      leadin:
        "Simplify Work. Improve Scientific Productivity.",
      descLg:
        "RESolution was created for Oak Ridge National Laboratory which is the largest US Department of Energy science and energy laboratory.",
      img: {
        src:
          "/images/resolution/anothergraph.png",
        alt: "resolution interface graphics",
      },
      link: {
        themeColor: "dark",
        btnStyle: "secondary",
        text: "View Project",
        href: "/resolution",
        arrow: true,
      },
    },
  ];
  const g2 = [
    {
      subheader: "2007 • 2020",
      title: "G2",
      leadin:
        "Program Management for Government Agencies.",
      descLg:
        "G2 was created for the National Nuclear Security Administration (NNSA) to integrate Headquarter and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data.",

      img: {
        src: "/images/g2-screen-array.png",
        alt: "g2 graphics",
      },
      link: {
        text: "View Project",
        href: "/g2",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
      },
    },
  ];

  const cards = [
    {
      title: "HealthMedEx",
      leadin:
        "Wireframing, Prototyping and Usability Testing",
      descLg:
        "HeathMEDX provides an all encompassing software platform to operate long-term care facilities. Their systems provide everything from point of care interfaces to enterprise reporting for assited living and nursing homes.",
      img: {
        src:
          "/images/healthmedex/healthmedex-project-card-image1.png",
        alt: "resolution interface graphics",
      },
      link: {
        text: "View Project",
        href: "./healthmedex",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
      },
    },
    {
      title: "Research Data Collection System",
      leadin:
        "Data Acquisition & Aggregation System for Researchers",
      descLg:
        "Data acquisition and aggregation system for researchers",
      img: {
        src:
          "/images/research/research-project-image-card.png",
        alt: "g2 graphics",
      },
      link: {
        text: "View Project",
        href: "/researchdata",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
      },
    },
    {
      title: "Mavnet",
      leadin:
        "Seamlessly Plan, Execute & Update Missions",
      descLg:
        "Mavnet makes it easy to plan and execute missions in real time for UAV and Rovers.",
      img: {
        src:
          "/images/mavnet/mavnet-project-image-card.png",
        alt: "mavnet interface graphics",
      },
      link: {
        text: "View Project",
        href: "./mavnet",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
      },
    },
  ];

  return (
    <Page>
      <Hero
        title="We are Cadre5"
        tagline="We design and develop enterprise and scientific software for global leaders."
        ctaText="Portfolio"
      />

      <Clients />

      <WaveHr
        color="#2b0000"
        bg="linear-gradient(to top, #ededed1a, #e9e9e95e)"
      />
      <Project
        details={resolution}
        themeColor="mediumTheme"
      />
      <WaveHr color="#ededed" bg="white" />
      <Project details={g2} />
      {/* <WaveHr color="#ededed" bg="white" /> */}
      {/* <Project details={healthmedex} /> */}
      <WaveHr color="white" bg="#efefef" />
      {/* <ProjectsRelated /> */}
      <ProjectCard cards={cards} />
      <Contact />
      <div className="Careers"></div>
      <HeroImage
        title="Careers"
        leadin="We're dedicated to building great software"
        desc="Founded in 1999, we strive to delight our customers and their end
          users with the systems we craft. We need YOU to join our team."
        img={{
          src: "/images/meeting3.png",
          alt: "people working in an office",
        }}
        link={{
          text: "Opportunities",
          btnStyle: "primary",
          themeColor: "lightTheme",
          href: "/Careers",
        }}
      />
      <HeroBasic
        title=""
        img={{
          src: "/images/cadre5office.jpg",
          alt: "Cadre5 Building",
        }}
      />
    </Page>
  );
};

export default Home;
