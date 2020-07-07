import React, { Fragment } from "react";
import Project from "./Project";

const Projects = () => (
  <Fragment>
    <section className="Projects">
      <div className="Project_heading">
        <h2>Our Projects</h2>
      </div>

      <Project
        subheader="2007--2020"
        title="Resolution"
        leadin="Simplify Work. Improve Scientific Productivity."
        descLg="Currently researchers interact with 80 different systems that were designed from the perspective of the business unit."
        wave={{
          color: "#1f1f1f",
          bg: "linear-gradient(#efefef, white)",
        }}
        img={{
          src: "/images/graph-full-min.png",
          alt: "resolution interface graphics",
        }}
        link={{
          text: "View Project",
          href: "./resolution",
          style: "primary",
          theme: "dark",
        }}
      />
      <Project
        subheader="2007--2020"
        title="G2"
        leadin="Project management for government agencies."
        descLg="G2 integrates Headquarters and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data. "
        wave={{
          color: "white",
          bg: "linear-gradient(#efefef, white)",
        }}
        img={{ src: "/images/g2-screen-array.png", alt: "g2 graphics" }}
        link={{
          text: "View Project",
          href: "./g2",
          style: "primary",
          theme: "dark",
        }}
      />
    </section>
  </Fragment>
);

export default Projects;
