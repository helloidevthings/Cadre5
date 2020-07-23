import React, { Fragment } from "react";
import Project from "./Project";
import Page from "./Page";
import WaveHr from "./Parts/WaveHR";
import ProjectFeature from "./ProjectFeature";
import ProjectsRelated from "./ProjectsRelated";
import projects from "../projectData";
import FeatureApp from "./FeatureApp";
import IconDesc from "./Parts/IconDesc";

const ProjResolution = () => (
  <Page>
    <Project
      subheader="2007–2020"
      title="RESolution"
      leadin="Simplify Work. Improve Scientific Productivity."
      descLg="RESolution was created for Oak Ridge National Laboratory which is the largest US Department of Energy science and energy laboratory."
      img={{
        src: "/images/graph-full-min.png",
        alt: "resolution interface graphics",
      }}
    />
    <WaveHr color="white" bg="#efefef"></WaveHr>
    <ProjectFeature
      themeColor="mediumTheme"
      introText={{
        title: "The Challenge",
        desc:
          "Currently researchers interact with 80 different systems. Resolution is a unified user interface platform designed around the researcher to manage the full lifecycle of research projects at ORNL.",
        svg: "Wrench",
      }}
      img={{
        src: "/images/resolution/video.png",
        alt: "",
      }}
    />
    <ProjectFeature
      themeColor="mediumTheme"
      row="reverse"
      introText={{
        title: "Responsive Design",
        descLg:
          "The responsive design makes It accessible from desktops, smartphones and tablets. Resolution's design provides an enjoyable and efficient user experience for the researcher.",
        desc: "",
        svg: "ChartArrow",
      }}
      img={{
        src: "/images/resolution/responsive_ipad_phone.png",
        alt: "",
      }}
    />
    <WaveHr color="#efefef" bg="white" />
    {/* Project Management */}
    <FeatureApp
      img={{ src: "/images/resolution/project_management_main2.png", alt: "" }}
      themeColor="mediumTheme"
    />
    <WaveHr color="#efefef" bg="white" />
    <ProjectFeature
      themeColor="lightTheme"
      introText={{
        title: "Project Management",
        descLg:
          "The goal of this platform is to create a light-touch project management tool for researchers.",
        desc:
          "Users can quickly set up a project in 15mins. The platform is integrated with financial systems and allows the displays of cost data relative to planning.",
        svg: "Wrench",
      }}
      img={{
        src: "/images/resolution/projectmanagement_graph.png",
        alt: "",
      }}
    />
    <ProjectFeature
      themeColor="lightTheme"
      row="reverse"
      introText={{
        title: "Project Dashboard",
        descLg:
          "Each project dashboard gives a high level view of cost, schedule, budget authority and performance.",
        desc: "Interactive widgets allow users to drill in and filter data.",
        svg: "Wrench",
      }}
      img={{
        src: "/images/resolution/project_management_dash.png",
        alt: "",
      }}
    />
    <ProjectFeature
      themeColor="lightTheme"
      introText={{
        title: "Portfolio Dashboard",
        descLg:
          "The most powerful and hardworking screen in the project management tool is the portfolio dashboard.",
        desc:
          "Charts at the top aggregate milestone, plan, cost and performance data for the portfolio. A data grid summarizes key project metrics, and users can expand the grid for a second layer of detail.",
        svg: "Wrench",
      }}
      img={{
        src: "/images/resolution/graph-portfolio2.png",
        alt: "",
      }}
    />
    {/* Publications */}
    <WaveHr color="white" bg="#efefef" />
    <FeatureApp
      img={{ src: "/images/resolution/pubs_main.png", alt: "" }}
      themeColor="lightTheme"
    />
    <ProjectFeature
      themeColor="lightTheme"
      introText={{
        title: "Publications",
        descLg:
          "Researchers publish. All publications undergo an extensive review process involving peers and institutional functions related to security and intellectual property.",
        desc:
          "This application was designed around researcher to make the review and release process simple and efficient. It also handles security with the automatic encryption of uploaded files",
        svg: "Wrench",
      }}
      img={{
        src: "/images/resolution/pubs_right.png",
        alt: "",
      }}
    />
    <ProjectFeature
      themeColor="lightTheme"
      row="reverse"
      introText={{
        title: "Publications",
        descLg:
          "Resolution provides tools to aid the review process. The publication widgets display key metrics for management and individuals on the publication pipeline.",
        desc:
          "Authors can correspond with reviewers inside the system, reducing the need for communications; view documents within the system, reducing download times; copy and paste acknowledgement text; and receive help within Publications itself.",
        svg: "Wrench",
      }}
      img={{
        src: "/images/resolution/pubs_left.png",
        alt: "",
      }}
    />
    {/* Site Access */}
    <WaveHr color="white" bg="#efefef" />
    <FeatureApp
      img={{ src: "/images/resolution/site_access.png", alt: "" }}
      themeColor="lightTheme"
    />
    <ProjectFeature
      themeColor="lightTheme"
      introText={{
        title: "Site Access",
        desc:
          "Quick filters allow users to see visitors arriving in two weeks or guests who's access is about to expire.",
        descLg:
          "Scientists use this module to manage visitors access to ORNL's campus and research facilities. A chart view displays duration of the access authorization as well buildings and cyber access.",
        svg: "Wrench",
      }}
      img={{
        src: "/images/resolution/site_access_detail.png",
        alt: "",
      }}
    />
    <WaveHr color="white" bg="#efefef" />
    {/* Procurement */}
    <ProjectFeature
      themeColor="mediumTheme"
      row="reverse"
      introText={{
        title: "Procurement",
        descLg:
          "Conducting world leading research requires a wide range of supplies and services, from polar bear guards in the arctic to neutron target vessels.",
        desc:
          "Researchers can track the full procurment lifecycle. This application provides a quick glance of active and pending information including: purchase requisitions, purchase orders, agreements, and items awaiting delivery.",

        svg: "Wrench",
      }}
      img={{
        src: "/images/resolution/procurement.png",
        alt: "",
      }}
    />
    {/* Estimator */}
    <ProjectFeature
      themeColor="mediumTheme"
      introText={{
        title: "Estimator",
        descLg:
          "Project Estimator was developed to create an easy, consistent way to estimate project costs.",
        desc:
          "Project Estimator uses official SAP rates, so you know your estimate is accurate, and enables you to easily develop a simple schedule and estimate in one tool! It is also collaborative, so you can easily work on estimates with others at ORNL.",
        svg: "ChartArrow",
      }}
      img={{
        src: "/images/resolution/responsive_ipad_phone.png",
        alt: "",
      }}
    />
    <WaveHr color="#efefef" bg="white" />
    {/* Action List */}
    <FeatureApp img={{ src: "/images/resolution/action_list.png", alt: "" }} />
    <ProjectFeature
      themeColor="lightTheme"
      row="reverse"
      introText={{
        title: "Action List",
        descLg:
          "The foundation of the RESolution user interface is an action list.",
        desc:
          "After intensive user study we determined that the standard red, yellow, green alerting system of a typical dashboard was to noisy and annoying to the researchers. A subtle iconographic language that relied on form rather than color to signal importance was developed. In order not to overwhelm the user the information architecture layers the information. Prominence in the interface is given to items in the enterprise that are waiting on the researcher's actions. Alerts that may require action are secondary and items the researcher may want to follow are tertiary.",
        svg: "Wrench",
      }}
      img={{
        src: "/images/resolution/action_list_2.png",
        alt: "",
      }}
    />
    <IconDesc />
    <WaveHr color="white" bg="#efefef" />
    <ProjectsRelated />
  </Page>
);

export default ProjResolution;
