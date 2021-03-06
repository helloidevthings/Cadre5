import React from "react";
import Page from "../Page";
import HeroBasic from "../HeroBasic";
import CTA from "../CTA";
import Featurette from "../Featurette";
import Title from "../Parts/Title";
import LogoGrid from "../LogoGrid";
import ProjectCard from "../Parts/ProjectCard";
import WaveHR from "../Parts/WaveHR";

const About = () => {
  const cards = [
    {
      title: "G2",
      leadin:
        "Program Management for Government Agencies.",
      descLg:
        "G2 was created for the National Nuclear Security Administration (NNSA) to integrate Headquarter and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data.",

      img: {
        src:
          "/images/g2/g2-project-image-card1.png",
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
    {
      title: "RESolution",
      leadin:
        "Simplify Work. Improve Scientific Productivity.",
      img: {
        src:
          "/images/resolution/resolution-project-card-image1.png",
        alt: "resolution interface graphics",
      },
      link: {
        href: "./resolution",
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
  ];
  return (
    <Page>
      <HeroBasic
        title="About Us"
        img={{
          src: "/images/cadre5office.jpg",
          alt: "Cadre5 Building",
        }}
        svg="AbstractWhite"
      />
      <CTA
        leadin="Cadre5 is dedicated to building great software."
        descLg="We strive to delight our customers and their end users with the systems we craft. "
        desc="Building software that people enjoy using and that delivers significant business value requires a commitment from the whole team. We often work in blended teams where our clients may provide product owners, subject matter experts, quality assurance and even developers that will take over the solution once it is delivered."
        img={{
          src: "/images/updating-whiteboard2.png",
          alt:
            "people working in an office environment",
        }}
        type="basic"
        border="border"
      />
      <Featurette
        title="Our Partners"
        quote="The word cadre refers to a group of experts that come together to achieve a goal. We are a cadre, who works closely with our clients to solve problems together."
      />
      <Title
        title={"Awards & Recognition"}
        base="CTA"
      />
      <CTA
        leadin="Oak Ridge National Laboratory Innovator Award"
        desc="Innovator Award: Cadre5, LLC, a small business located in Knoxville, for the development of an outstanding idea, process, project management mechanism or technology. Cadre5 has assisted the laboratory for several years in the area of software engineering and has consulted on multiple projects, most notably the Fieldable Nuclear Materials Identification System and the G2 Program Management System."
        img={{
          src: "/images/g2-screen-array.png",
          alt: "g2 interface graphics",
        }}
        type="basic"
        link={{
          themeColor: "dark",
          btnStyle: "secondary",
          text: "Learn More",
          target: true,
          href:
            "https://www.ornl.gov/news/six-area-firms-receive-ornl-small-business-awards",
        }}
      />

      <CTA
        row="reverse"
        themeColor="mediumTheme"
        leadin="Excellence.gov Awards, Overall Winner"
        desc="Research Enterprise Solution (RESolution) – To integrate multiple new technologies for Oak Ridge National Laboratory (ORNL) into one seamless user experience. The application offers streamlined, one-stop access to ORNL data from the underlying LOB systems – reducing the daily hassle of IT and allowing researchers to be productive anytime, anywhere and on any device."
        img={{
          src:
            "/images/resolution/procurement_dash2.png",
          alt: "resolution interface graphics",
        }}
        type="alt"
        link={{
          themeColor: "dark",
          btnStyle: "secondary",
          text: "Learn More",
          target: true,
          href:
            "https://www.businesswire.com/news/home/20151110006186/en/Groundbreaking-Government-Programs-Recognized-15th-Annual-Excellence.Gov",
        }}
      />
      <CTA
        leadin="U.S. Small Business Administration, Southeast Subcontractor of the Year"
        desc="Cadre5, was presented with the U.S. Small Business Administration’s Small Business Subcontractor of the Year Award for Region 4, which includes Alabama, Florida, Georgia, Kentucky, Mississippi, North Carolina, South Carolina, and Tennessee."
        img={{
          src: "/images/samatdesk.png",
          alt:
            "people working in an office environment",
        }}
        type="basic"
        link={{
          themeColor: "dark",
          btnStyle: "secondary",
          text: "Learn More",
          target: true,
          href:
            "https://oakridgetoday.com/2014/09/29/cadre5-wins-small-business-subcontractor-year-award/",
        }}
      />
      <LogoGrid />

      <WaveHR color="#ffffff" bg="#efefef" />
      <ProjectCard cards={cards} />
    </Page>
  );
};
export default About;
