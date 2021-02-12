import React from "react";
import Project from "../../Project";
import Page from "../../Page";
import WaveHr from "../../Parts/WaveHR";
import ProjectCard from "../../Parts/ProjectCard";
import ProjectFeature from "../../ProjectFeature";
import FeatureApp from "../../FeatureApp";
import IconDesc from "../../Parts/IconDesc";

const Resolution = () => {
  const cards = [
    {
      title: "HealthMedEx",
      leadin:
        "Wireframing, Prototyping and Usability Testing",
      descLg:
        "HeathMEDX provides an all encompassing software platform to operate long-term care facilities. Their systems provide everything from point of care interfaces to enterprise reporting for assited living and nursing homes.",
      img: {
        src:
          "/images/healthmedex/healthmedex-project-card-image1.png",
        alt: "resolution interface graphics",
      },
      link: {
        text: "View Project",
        href: "./healthmedex",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
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
  ];
  const details = [
    {
      title: "RESolution",
      leadin:
        "Simplify Work. Improve Scientific Productivity.",
      descLg:
        "RESolution was created for Oak Ridge National Laboratory which is the largest US Department of Energy science and energy laboratory.",
      img: {
        src:
          "/images/resolution/anothergraph.png",
        alt: "resolution interface graphics",
      },
    },
  ];
  return (
    <Page>
      <Project details={details} />
      <WaveHr color="white" bg="#efefef"></WaveHr>
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "The Challenge",
          descLg:
            "Currently researchers interact with 80 different systems.",
          desc:
            "RESolution is a unified user interface platform designed around the researcher to manage the full lifecycle of research projects at ORNL.",
          svg: "ChartArrow",
        }}
        iframe={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2ossQTT7It8?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
      />
      <ProjectFeature
        themeColor="mediumTheme"
        row="reverse"
        introText={{
          title: "Responsive Design",
          descLg:
            "The responsive design makes the software accessible from desktops, smartphones and tablets. RESolution's design provides an enjoyable and efficient user experience for the researcher.",
          desc: "",
          svg: "Devices",
        }}
        img={{
          src:
            "/images/resolution/responsive_ipad_phone.png",
          alt: "",
        }}
      />
      <WaveHr color="#efefef" bg="white" />
      {/* Project Management */}
      <ProjectFeature
        themeColor="lightTheme"
        row="reverse"
        introText={{
          title: "Project Dashboard",
          descLg:
            "Each project dashboard gives a high level view of cost, schedule, budget authority and performance. Interactive widgets allow users to drill in and filter data.",
          desc:
            "Interactive widgets allow users to drill in and filter data.",
          svg: "Wrench",
        }}
        img={{
          src:
            "/images/resolution/project_management_dash.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="lightTheme"
        introText={{
          title: "Project Management",
          descLg:
            "The goal of this platform is to create a light-touch project management tool for researchers. ",
          desc:
            "Users can quickly set up a project in 15mins. The platform is integrated with financial systems and allows the displays of cost data relative to planning.",
          svg: "List",
        }}
        img={{
          src:
            "/images/resolution/graph-portfolio2.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{
          src:
            "/images/resolution/complex_project_graph.png",
          alt: "",
        }}
        themeColor="lightTheme"
        tips={[
          {
            i: 1,
            top: "52%",
            left: "20%",
            desc:
              "The purple line indicates the planned project work",
          },
          {
            i: 2,
            top: "28%",
            left: "26%",
            desc:
              "The gray shaded region is the full budget authority",
          },
          {
            i: 3,
            top: "28%",
            left: "60%",
            desc:
              "The upper green line shows the actuals plus commitments",
          },
          {
            i: 4,
            top: "43%",
            left: "55%",
            desc:
              "The lower green line is the amount spent",
          },
          {
            i: 5,
            top: "23%",
            left: "70%",
            desc:
              "The orange dotted line represents the work completed or work valued",
          },
          {
            i: 6,
            top: "83%",
            left: "20%",
            desc: "Project Milestones",
          },
        ]}
      />
      <ProjectFeature
        themeColor="lightTheme"
        introText={{
          title: "Portfolio Dashboard",
          descLg:
            "The most powerful and hardworking screen in the project management tool is the portfolio dashboard.",
          desc:
            "Charts at the top aggregate milestone, plan, cost and performance data for the portfolio. A data grid summarizes key project metrics, and users can expand the grid for a second layer of detail.",
          svg: "Briefcase",
        }}
        img={{
          src:
            "/images/resolution/portfolio-dash3.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{
          src:
            "/images/resolution/portfolio_dashboard2.gif",
          alt: "",
        }}
        themeColor="lightTheme"
        tips={[
          {
            i: 1,
            top: "50%",
            left: "70%",
            desc:
              "Expandable panels make it easy to find detailed information about each piece while maintaining a quick overall view of each project.",
          },
          {
            i: 2,
            top: "65%",
            left: "10%",
            desc:
              "Each quad chart represents how a high level view of how a project is going",
          },
        ]}
      />
      {/* Publications */}
      <WaveHr color="white" bg="#efefef" />
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "Publications",
          descLg:
            "Researchers publish. All publications undergo an extensive review process involving peers and institutional functions related to security and intellectual property. ",
          desc:
            "This application was designed around researchers to make the review and release process simple and efficient. It also handles security with the automatic encryption of uploaded files.",
          svg: "Doc",
        }}
        img={{
          src:
            "/images/resolution/pubs_right.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="mediumTheme"
        row="reverse"
        introText={{
          title: "Publications",
          descLg:
            "RESolution provides tools to aid the review process. The publication widgets display key metrics for management and individuals on the publication pipeline. ",
          desc:
            "Users can collaborate inside the system by commenting and approving documents.",
          svg: "Doc",
        }}
        img={{
          src: "/images/resolution/pubs_left.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{
          src: "/images/resolution/pubs_main.png",
          alt: "",
        }}
        themeColor="mediumTheme"
        tips={[
          {
            i: 1,
            top: "13%",
            left: "79%",
            desc:
              "Displays action items for each researcher",
          },
          {
            i: 2,
            top: "20%",
            left: "5%",
            desc:
              "The dashboard shows a high level view of stats. Dashboard can be toggled between calendar year and fiscal year",
          },
        ]}
      />
      {/* Site Access */}
      <WaveHr color="#efefef" bg="white" />

      <ProjectFeature
        themeColor="lightTheme"
        introText={{
          title: "Site Access",
          desc:
            "Quick filters allow users to see visitors arriving in two weeks or guests who's access is about to expire.",
          descLg:
            "Scientists use this module to manage visitors' access to ORNL's campus and research facilities. A chart view displays duration of the access authorization as well buildings and cyber access.",
          svg: "Lock",
        }}
        img={{
          src:
            "/images/resolution/site_access_detail.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{
          src:
            "/images/resolution/site_access.png",
          alt: "",
        }}
        themeColor="lightTheme"
        tips={[
          {
            i: 1,
            top: "13%",
            left: "79%",
            desc:
              "Gives an overview of each on-site individual",
          },
          {
            i: 2,
            top: "33%",
            left: "29%",
            desc:
              "Shows the level of security access each individual has on the timeline",
          },
        ]}
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
            "Researchers can track the full procurement lifecycle. This application provides a quick glance of active and pending information including: purchase requisitions, purchase orders, agreements, and items awaiting delivery.",
          svg: "CircleChart",
        }}
        img={{
          src:
            "/images/resolution/procurement_dash2.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "Procurement",
          descLg:
            "This graph makes it easy for the project manager to view the status of a project.",
          desc:
            "Each segment represents a month of the timeline. The green represents the funding for the project. The blue is how much money has been spent so far. The yellow represents how much has be invoiced so far.",
        }}
        img={{
          src:
            "/images/resolution/resolution-tooltips.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{
          src:
            "/images/resolution/procurement_timeline_graph.gif",
          alt: "",
        }}
        themeColor="mediumTheme"
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
          svg: "Money",
        }}
        img={{
          src:
            "/images/resolution/responsive_ipad_phone.png",
          alt: "",
        }}
      />
      <WaveHr color="#efefef" bg="white" />
      {/* Action List */}
      {/* <FeatureApp img={{ src: "/images/resolution/action_list.png", alt: "" }} /> */}
      <ProjectFeature
        themeColor="lightTheme"
        row="reverse"
        introText={{
          title: "Action List",
          descLg:
            "The foundation of the RESolution user interface is an action list.",
          desc:
            "After intensive user study we determined that the standard red, yellow, green alerting system of a typical dashboard was to noisy and annoying to the researchers. A subtle iconographic language that relied on form rather than color to signal importance was developed. In order not to overwhelm the user the information architecture layers the information. Prominence in the interface is given to items in the enterprise that are waiting on the researcher's actions. Alerts that may require action are secondary and items the researcher may want to follow are tertiary.",
          svg: "Action",
        }}
        img={{
          src:
            "/images/resolution/action_list_0.png",
          alt: "",
        }}
      />
      <IconDesc />
      <WaveHr color="white" bg="#efefef" />
      <ProjectCard cards={cards} />
    </Page>
  );
};

export default Resolution;
