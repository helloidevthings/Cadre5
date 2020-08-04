import React from "react";

import Page from "./Page";
import Hero from "./Hero";
import Clients from "./Clients";
import Project from "./Project";
import ProjectsRelated from "./ProjectsRelated";

import Contact from "./Contact";
import HeroCareers from "./HeroCareers";
import HeroBasic from "./HeroBasic";
import WaveHr from "./Parts/WaveHR";

const Home = () => {
  const resolution = [
    {
      subheader: "2007 • 2020",
      title: "RESolution",
      leadin: "Simplify Work. Improve Scientific Productivity.",
      descLg:
        "RESolution was created for Oak Ridge National Laboratory which is the largest US Department of Energy science and energy laboratory.",
      img: {
        src: "/images/resolution/anothergraph.png",
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
      leadin: "Project management for government agencies.",
      descLg:
        "G2 integrates Headquarters and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data. ",

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
  const healthmedex = [
    {
      subheader: "2007 • 2020",
      title: "HealthMedEx",
      leadin: "Wireframing, Prototyping and Usability Testing",
      descLg:
        "HeathMEDX provides an all encompassing software platform to operate long-term care facilities. Their systems provide everything from point of care interfaces to enterprise reporting for assited living and nursing homes.",
      img: {
        src: "/images/healthmedex/healthmedex1.png",
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
  ];
  return (
    <Page>
      <Hero
        title="We are Cadre5"
        tagline="We design and develop enterprise and scientific software for global leaders."
        ctaText="About Us"
      />
      <Clients />
      <WaveHr color="#1f1f1f" bg="white" />
      <Project details={resolution} />
      <Project details={g2} />
      <Project details={healthmedex} />
      <WaveHr color="white" bg="#efefef" />
      <ProjectsRelated />
      <Contact />
      <div className="Careers"></div>
      <HeroCareers />
      <HeroBasic
        title=""
        img={{ src: "/images/cadre5office.jpg", alt: "Cadre5 Building" }}
      />
    </Page>
  );
};

export default Home;
