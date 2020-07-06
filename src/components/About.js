import React from "react";

import Page from "./Page";
import HeroBasic from "./HeroBasic";
import CTA from "./CTA";
import Featurette from "./Featurette";
import Title from "./Parts/Title";
import LogoGrid from "./LogoGrid";
// import { motion, AnimatePresence } from "framer-motion";

const About = ({ isVisible }) => (
  <Page>
    {/* <AnimatePresence>
      {isVisible && (
        <motion.div
          className="animation-wrapper"
          key="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        > */}
    <HeroBasic />
    <CTA
      subheader="FOUNDED IN 1999"
      leadin="Cadre5 is dedicated to building great software."
      descLg="We strive to delight our customers and their end users with the systems we craft. "
      desc="Building software that people enjoy using and that delivers significant business value requires a commitment from the whole team. We often work in blended teams where our clients may provide product owners, subject matter experts, quality assurance and even developers that will take over the solution once it is delivered."
      imgsrc="/images/stock-of-working.png"
      imgalt="people working in an office environment"
      type="basic"
    />
    <Featurette
      title="Our Partners"
      quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <Title title="Awards ;amp Recognition" base="CTA" />
    <CTA
      subheader="Awarded in 2014"
      leadin="Oak Ridge National Laboratory Innovator Award"
      desc="Innovator Award: Cadre5, LLC, a small business located in Knoxville, for the development of an outstanding idea, process, project management mechanism or technology. Cadre5 has assisted the laboratory for several years in the area of software engineering and has consulted on multiple projects, most notably the Fieldable Nuclear Materials Identification System and the Global Threat Reduction Initiative Program Management Information System II."
      imgsrc="/images/graph-full-min.png"
      imgalt="resolution interface graphics"
      type="basic"
    />
    <CTA
      subheader="Awarded in 2015"
      leadin="Overall WinnerExcellence.gov Awards"
      desc="Research Enterprise Solution (RESolution) – To integrate multiple new technologies for Oak Ridge National Laboratory (ORNL) into one seamless user experience. The application offers streamlined, one-stop access to ORNL data from the underlying LOB systems – reducing the daily hassle of IT and allowing researchers to be productive anytime, anywhere and on any device."
      imgsrc="/images/graph-full-min.png"
      imgalt="resolution interface graphics"
      type="alt"
    />
    <CTA
      subheader="Awarded in 2015"
      leadin="U.S. Small Business Administration, Southeast Subcontractor of the Year"
      desc="Cadre5, was recently presented with the U.S. Small Business Administration’s 2014 Small Business Subcontractor of the Year Award for Region 4, which includes Alabama, Florida, Georgia, Kentucky, Mississippi, North Carolina, South Carolina, and Tennessee."
      imgsrc="/images/stock-of-working.png"
      imgalt="people working in an office environment"
      type="basic"
    />
    <LogoGrid />
    {/* </motion.div>
      )}
    </AnimatePresence> */}
  </Page>
);

export default About;
