import React, { Component } from "react";

const ProjectContext = React.createContext({
  g2: {
    title: "G2",
    leadin:
      "Project management for government agencies.",
    descLg:
      "G2 integrates Headquarters and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data. ",
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
});
export default { ProjectContext };
