import React from "react";
import Project from "./Project";
import Page from "./Page";
import WaveHr from "./Parts/WaveHR";
import CTA from "./CTA";
import FeatureApp from "./FeatureApp";
import ProjectFeature from "./ProjectFeature";
import ProjectsRelated from "./ProjectsRelated";

const ProjResolution = () => {
  const details = [
    {
      subheader: "2007 • 2020",
      title: "G2",
      leadin: "Project management for government agencies.",
      descLg:
        "G2 integrates Headquarters and National Laboratory scope, schedule, budget, and metric information, creating a single repository of program data. ",

      img: {
        src: "/images/g2/g2_array2.png",
        alt: "g2 graphics",
      },
    },
  ];
  return (
    <Page>
      <Project details={details} />
      <WaveHr color="white" bg="#efefef"></WaveHr>
      <ProjectFeature
        themeColor="mediumTheme"
        row="reverse"
        introText={{
          title: "The Challenge",
          desc:
            "The National Nuclear Security Administration maintains and enhances the safety, security, and effectiveness of U.S. nuclear capabilities and works globally to reduce nuclear proliferation and the danger from weapons of mass destruction.",
        }}
        img={{
          src: "/images/logos/government/nnsa.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "The Opportunity",
          desc:
            "To provide increased operational transparency to Congress and other constituents, support efficient and effective management of taxpayer funds, provide advanced data analysis and reporting capabilities to drive better decision making throughout the organization, and support the work of multiple organizations with varying missions within a single system.",
          svg: "ChartArrow",
        }}
        iframe={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BEwz3IA8NQ8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        }
      />
      <ProjectFeature
        themeColor="mediumTheme"
        row="reverse"
        introText={{
          title: "Capabilities",
          descLg:
            "G2 offers a variety of services to fit their needs with a responsive design that makes it accessible on any any device.",
          desc:
            "Financial Management, Cost Reporting, DOE STARS Reconciliation, Year-End Forecasting, Baseline/Forecast Schedules and Metrics, Out-Year & Annual Planning, Geo-Spatial Analysis, On-demand Reports, Data Warehousing, and numerous Line of Business Modules.",
          svg: "List",
        }}
        img={{
          src: "/images/g2/responsive_graphic.png",
          alt: "",
        }}
      />
      <WaveHr color="#efefef" bg="#383838" />
      <WaveHr color="#383838" bg="#383838" />
      <FeatureApp
        img={{ src: "/images/g2/desktop.png", alt: "" }}
        themeColor="darkTheme"
        tips={[
          {
            i: 1,
            top: "13%",
            left: "3%",
            desc: "Dashboard?",
          },
        ]}
      />
      <ProjectFeature
        themeColor="darkTheme"
        row="reverse"
        introText={{
          title: "Main Dashbaord",
          descLg: "Dashboard?",
          desc: "Details?",
          svg: "Wrench",
        }}
        img={{
          src: "/images/g2/g2-graphs.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{ src: "/images/g2/detail-graph.png", alt: "" }}
        themeColor="darkTheme"
        tips={[
          {
            i: 1,
            top: "13%",
            left: "3%",
            desc: "Dashboard?",
          },
        ]}
      />
      <ProjectFeature
        themeColor="darkTheme"
        row="reverse"
        introText={{
          title: "The Inbox",
          descLg: "Inbox?",
          desc: "Details?",
          svg: "Envelope",
        }}
        img={{
          src: "/images/g2/g2-graphs.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{ src: "/images/g2/inbox.png", alt: "" }}
        themeColor="darkTheme"
        tips={[
          {
            i: 1,
            top: "13%",
            left: "3%",
            desc: "Dashboard?",
          },
        ]}
      />
      <ProjectFeature
        themeColor="darkTheme"
        introText={{
          title: "Awards",
          descLg:
            '"NNSA is a model for organizations that value project management as a discipline that increases success rates, creates efficiencies and aligns with demanding strategic requirements. Few organizational missions demand excellent project execution more than the NNSA G2 project."',
          desc: "- Mark Langley, President Project Management Institute",
          svg: "Award",
        }}
        iframe={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5ZJRWg8_4Uc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        }
      />
      <WaveHr color="#383838" bg="#1f1f1f" />
      <WaveHr color="#1f1f1f" bg="#1f1f1f" />
      <CTA
        leadin="AFEI EXCELLENCE IN ENTERPRISE INFORMATION"
        descLg={`"NNSA's innovative system is designed to optimize investments of taxpayer funded infrastructure recapitalization, maintenance, and support nuclear nonproliferation activities in the most cost-effective manner. G2 has given the NNSA the ability to analyze key data in a holistic manner on the scale of $2 billion in annual investment decisions."`}
        desc="– Mark Langley, President Project Management Institute"
        img={{
          src: "/images/g2/G2_cover.jpg",
          alt: "people working in an office environment",
        }}
        type="basic"
        themeColor="darkTheme"
      />
      <CTA
        row="reverse"
        descLg={`"NNSA’s G2 system drives risk-based decisions at the enterprise level. Defensibility, traceability, and risk-based decision-making are now the norm at NNSA."`}
        desc="– James McConnell, Associate Administrator for the Office of Safety, Infrastructure, and Operations"
        img={{
          src: "/images/g2/img_of_everyone.jpeg",
          alt: "people working standing with an award",
        }}
        themeColor="darkTheme"
        link={{
          themeColor: "lightTheme",
          btnStyle: "secondary",
          text: "Learn More",
          target: true,
          href:
            "https://www.energy.gov/nnsa/articles/nnsa-s-g2-management-information-system-wins-association-enterprise",
        }}
      />
      <WaveHr color="#1f1f1f" bg="#efefef" />
      <ProjectsRelated />
    </Page>
  );
};

export default ProjResolution;
