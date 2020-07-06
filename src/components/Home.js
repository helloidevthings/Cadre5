import React from "react";

import Page from "./Page";
import Hero from "./Hero";
import Clients from "./Clients";
import Projects from "./Projects";
import Contact from "./Contact";
import HeroCareers from "./HeroCareers";
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
    <div className="Clients">
      <Clients />
    </div>
    <Projects />
    <WaveHr wave="white" bg="linear-gradient(#efefef, white)" />
    {/* <ProjectsRelated
      projTitle="G2"
      projLeadin="Project management for government agencies."
      imgsrc="/images/g2-screen-array.png"
      imgalt="g2 graphics"
      tags="Health"
    /> */}
    <div className="Contact">
      <Contact />
    </div>
    <div className="Careers"></div>
    <HeroCareers />
  </Page>
);

export default Home;
