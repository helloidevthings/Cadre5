import React from "react";
import ProjectCard from "../Parts/ProjectCard";
import Styles from "./styled";

export default ({ projTitle, projLeadin, img = "", tags }) => (
  <Styles>
    <h2 className="title">Similar Projects</h2>
    <div className="cards">
      <ProjectCard
        subheader="2007--2020"
        title="Resolution"
        leadin="Simplify Work. Improve Scientific Productivity."
        img={{
          src: "/images/graph-full-min.png",
          alt: "resolution interface graphics",
        }}
        link={{
          href: "./resolution",
        }}
      />
      <ProjectCard
        subheader="2007--2020"
        title="Resolution"
        leadin="Simplify Work. Improve Scientific Productivity."
        img={{
          src: "/images/graph-full-min.png",
          alt: "resolution interface graphics",
        }}
        link={{
          href: "./resolution",
        }}
      />
      <ProjectCard
        subheader="2007--2020"
        title="Resolution"
        leadin="Simplify Work. Improve Scientific Productivity."
        img={{
          src: "/images/graph-full-min.png",
          alt: "resolution interface graphics",
        }}
        link={{
          href: "./resolution",
        }}
      />
    </div>
  </Styles>
);
