import React from "react";

import Page from "./Page";
import Hero from "./Hero";
import Clients from "./Clients";
import Projects from "./Projects";
import ProjectsRelated from "./ProjectsRelated";

import Contact from "./Contact";
import HeroCareers from "./HeroCareers";
import HeroBasic from "./HeroBasic";
import WaveHr from "./Parts/WaveHR";

const Home = () => (
  <Page>
    <div className="Hero">
      <Hero
        title="We are Cadre5"
        tagline="We design and develop enterprise and scientific software for global leaders."
        ctaText="About Us"
      />
    </div>
    <Clients />
    <Projects />
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

export default Home;
