import React, { Fragment } from "react";
import Project from "./Project";

class Projects extends React.Component {
  render() {
    return (
      <Fragment>
        {" "}
        <section className="Projects">
          <div className="Project_heading">
            <h2>Our Projects</h2>
          </div>
          <Project
            subheader="2007--2020"
            title="Resolution"
            leadin="Simplify Work. Improve Scientific Productivity."
            descLg="Currently researchers interact with 80 different systems that were designed from the perspective of the business unit."
            wave="#1f1f1f"
            bg="linear-gradient(#efefef, white)"
            imgsrc="/images/graph-full-min.png"
            imgalt="resolution interface graphics"
          />
          <Project
            subheader="2007--2020"
            title="G2"
            leadin="Project management for government agencies."
            descLg="G2 integrates Headquarters and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data. "
            wave="white"
            bg="linear-gradient(#efefef, white)"
            imgsrc="/images/g2-screen-array.png"
            imgalt="g2 graphics"
          />
        </section>
      </Fragment>
    );
  }
}

export default Projects;
