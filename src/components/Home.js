import React, { Fragment } from "react";

import Hero from "./Hero";
import Clients from "./Clients";
import Projects from "./Projects";
import Contact from "./Contact";
import Careers from "./Careers";
import WaveHr from "./Parts/WaveHR";

const Home = () => (
  <Fragment>
    <div className="Hero">
      <Hero
        title="We are Cadre5"
        tagline="We design and develop enterprise and scientific software for global leaders."
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
    <Careers />
  </Fragment>
);

export default Home;
