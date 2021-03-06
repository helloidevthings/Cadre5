import React from "react";
import Project from "../../Project";
import Page from "../../Page";
import WaveHr from "../../Parts/WaveHR";
import BlogText from "../../Parts/BlogText";
import CTA from "../../CTA";
import FeatureApp from "../../FeatureApp";
import ProjectFeature from "../../ProjectFeature";
import ProjectCard from "../../Parts/ProjectCard";
import Image from "../../Parts/Image";

const ProjResolution = () => {
  const cards = [
    {
      title: "RESolution",
      leadin: "Simplify Work. Improve Scientific Productivity.",
      img: {
        src: "/images/resolution/resolution-project-card-image1.png",
        alt: "resolution interface graphics",
      },
      link: {
        href: "./resolution",
      },
    },
    {
      title: "Research Data Collection System",
      leadin: "Data Acquisition & Aggregation System for Researchers",
      descLg: "Data acquisition and aggregation system for researchers",
      img: {
        src: "/images/research/research-project-image-card.png",
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
      title: "Mavnet",
      leadin: "Seamlessly Plan, Execute & Update Missions",
      descLg: "Mavnet makes it easy to plan and execute missions in real time for UAV and Rovers.",
      img: {
        src: "/images/mavnet/mavnet-project-image-card.png",
        alt: "mavnet interface graphics",
      },
      link: {
        text: "View Project",
        href: "./mavnet",
        btnStyle: "secondary",
        themeColor: "dark",
        arrow: true,
      },
    },
  ];
  const details = [
    {
      title: "G2",
      leadin: "Program Management for Government Agencies.",
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
        introText={{
          title: "The Challenge",
          descLg:
            "Effective management of thousands of projects across the National Nuclear Security Administration (NNSA) worth approximately $3.5B in annual appropriations.",

          svg: "ChartArrow",
        }}
        img={{
          src: "/images/g2/responsive_graphic.png",
          alt: "G2 Homescreen on tablet and phone",
        }}
      />
      <BlogText themeColor="mediumTheme">
        <h3>Capabilities</h3>
        <p>
          G2 provides the NNSA and its subordinate organizations with increased operational
          transparency for Congress and other constituents, efficient and effective project
          management, advanced reporting and data analytics to drive better decision making, and
          support of multiple organizations with varying missions within a single system.{" "}
          <a href="https://www.youtube.com/embed/BEwz3IA8NQ8" target="_blank">
            Watch a live demo of our application.
          </a>
        </p>
        <p></p>
        <h4> Capabilities include:</h4>
        <ul>
          <li>Formal Change Management Processes</li>
          <li>
            Schedule Management
            <ul>
              <li>{"Baseline / Forecast Schedules & Metrics"}</li>
            </ul>
          </li>
          <li>
            Financial Management
            <ul>
              <li>Funds Allocation</li>
              <li>Cost Collection</li>
              <li>Spend Plans</li>
              <li>Year-End Forecasts</li>
              <li>Reconciliation with DOE Financial Systems</li>
            </ul>
          </li>
          <li>Future-Year Annual Planning</li>
          <li>Real-Property Asset Management</li>
          <li>Geo-Spatial Analysis</li>
          <li>On-demand Reports</li>
          <li>Numerous Line-of-Business Modules</li>
        </ul>
      </BlogText>
      <WaveHr color="#efefef" bg="#383838" />
      <WaveHr color="#383838" bg="#383838" />
      <ProjectFeature
        themeColor="darkTheme"
        row="basic"
        introText={{
          title: "Financial Management",
          descLg:
            "G2 manages financials for each organization performing work on a project and is therefore able to summarize financials at any higher level of the WBS.",
          desc:
            "Formal change management processes provide organizations with a structured, accountable, and transparent way to allocate new funding, move funding between projects, communicate spending plans, estimate future year budget needs, collect actual costs, and reconcile with external systems. Shown below is a compact financial chart that concisely identifies the various types of funding, costs, and commitments that are managed within G2.",
        }}
        img={{
          src: "/images/g2/fin_plan_detail.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="darkTheme"
        row="reverse"
        introText={{
          title: "Change Requests",
          descLg: "Shows a high level view of changes that are requested to a FinPlan",
          desc: "Each change needs to be approved... (?)",
        }}
        img={{
          src: "/images/g2/g2-finplan2.png",
          alt: "",
        }}
      />
      <WaveHr color="#383838" bg="#ffffff" />
      <BlogText themeColor="lightTheme">
        <h3>Dashboard</h3>
        <p className="large">
          When the user first enters the software this is the screen that they see...?
        </p>
      </BlogText>
      <FeatureApp
        img={{
          src: "/images/g2/notifications.png",
          alt: "",
        }}
        themeColor="lightTheme"
      />
      <WaveHr color="#fff" bg="#fff" />
      <WaveHr color="#fff" bg="#efefef" />

      <ProjectFeature
        themeColor="mediumTheme"
        row="basic"
        introText={{
          title: "Workflow History",
          descLg: "This view shows an overview of each person involved.",
          desc:
            "The user can see where the plan is in the approval process. The user can aslo see who has approved each change ot the plan. (?)",
        }}
        img={{
          src: "/images/g2/g2-person-management.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="mediumTheme"
        row="reverse"
        introText={{
          title: "Meta Data & Description",
          descLg: "This gives a detailed view of each Fin Plan",
          desc: "",
        }}
        img={{
          src: "/images/g2/g2-wbs-metadata.png",
          alt: "",
        }}
      />
      <WaveHr color="#efefef" bg="#efefef" />
      <WaveHr color="#efefef" bg="#fff" />
      <ProjectFeature
        themeColor="lightTheme"
        row="basic"
        introText={{
          title: "Icographic Signalling",
          descLg:
            "We used icon signalling so that the user can quickly see the changes that are requested.",
          desc: "...(?)",
        }}
        img={{
          src: "/images/g2/g2-finplan-hover.png",
          alt: "",
        }}
      />
      <ProjectFeature
        themeColor="lightTheme"
        row="reverse"
        introText={{
          title: "Change Management",
          descLg:
            "G2 provides formal change management processes with customizable approval workflows and automated email notifications. All changes can be managed from a single screen.",
          desc:
            "To more efficiently manage change, iconography is used to indicate the type of change being made on each project and whether an approval action is required by the user.",
        }}
        img={{
          src: "/images/g2/icon_signalling.png",
          alt: "",
        }}
      />
      <WaveHr color="#fff" bg="#efefef" />
      <WaveHr color="#efefef" bg="#efefef" />
      <BlogText themeColor="mediumTheme">
        <h3>Fin Plan in Detail?</h3>
        <p>Ability to change dates? Not entirely sure what's happening in this.</p>
      </BlogText>
      <FeatureApp
        img={{
          src: "/images/g2/g2-plan-detail.png",
          alt: "",
        }}
        themeColor="mediumTheme"
      />
      <WaveHr color="#efefef" bg="#383838" />
      <BlogText themeColor="darkTheme">
        <h3>Schedule Management</h3>
        <p>
          G2 allows each organization to define a custom Work Breakdown Structure (WBS) to organize
          and manage their work. Common to all organizations is that the lowest level of each WBS
          represents projects that are decomposed into tasks, milestones, and related metrics.
        </p>
        <p>
          G2 summarizes a project’s tasks in an interactive Gantt view that allows users to easily
          view and filter work based on progress and active changes.
        </p>
        <p>
          Additionally, the details of each task are presented in a way that highlights the latest
          status, work progress, and deltas between the baseline and forecast milestone dates. From
          within this view, baseline changes as well as status updates can be initiated.
        </p>
      </BlogText>
      <FeatureApp
        img={{
          src: "/images/g2/Expanded-Tasks--Expanded-Timeline-huge.png",
          alt: "",
        }}
        themeColor="darkTheme"
      />
      <WaveHr color="#383838" bg="#fff" />

      <BlogText themeColor="lightTheme">
        <h3>Process</h3>
        <p>
          G2 was developed using an agile framework known as SAFe. This framework provides
          enterprises with a set of principles and practices{" "}
          <em>“For achieving business agility using Lean, Agile, and DevOps”.</em>
        </p>
        <p>
          <small>
            The infographic, SAFe for Lean Enterprises 5.0, outlines the process – Copyright{" "}
            <a href="https://www.scaledagileframework.com/" target="_blank">
              Scaled Agile
            </a>
            .
          </small>
        </p>
      </BlogText>
      <a href="https://www.scaledagileframework.com/" target="_blank">
        <Image
          classes="blogImage"
          src="/images/g2/safe.png"
          alt="Graphic of SAFe Agile"
          figCap="SAFe Agile for Lean Enterprises 5.0 – Copyright by Scaled Agile"
        />
      </a>
      <WaveHr color="#ffffff" bg="#ffffff" />
      <WaveHr color="#ffffff" bg="#383838" />
      <ProjectFeature
        themeColor="darkTheme"
        introText={{
          title: "Awards",
          descLg: "PMI Distinguished Project Award",
          desc: `"NNSA is a model for organizations that value project management as a discipline that increases success rates, creates efficiencies and aligns with demanding strategic requirements. Few organizational missions demand excellent project execution more than the NNSA G2 project."  - Mark Langley, President Project Management Institute`,
          svg: "Award",
        }}
        iframe={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5ZJRWg8_4Uc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
      />

      {/* <ProjectFeature
        themeColor="darkTheme"
        row="reverse"
        introText={{
          title: "NNSA",
          descLg:
            "The National Nuclear Security Administration maintains and enhances the safety, security, and effectiveness of U.S. nuclear capabilities and works globally to reduce nuclear proliferation and the danger from weapons of mass destruction.",
          desc:
            "^ I’m not sure where to put this… at the moment it’s next to a video",
          link: {
            themeColor: "lightTheme",
            btnStyle: "secondary",
            text: "Learn More",
            target: true,
            href:
              "https://www.energy.gov/nnsa/articles/nnsa-s-g2-management-information-system-wins-association-enterprise",
          },
        }}
        iframe={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BEwz3IA8NQ8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        }
      /> */}

      <WaveHr color="#383838" bg="#383838" />
      <WaveHr color="#1f1f1f" bg="#1f1f1f" />
      <CTA
        leadin="AFEI EXCELLENCE IN ENTERPRISE INFORMATION"
        descLg={`"NNSA's innovative system is designed to optimize investments of taxpayer funded infrastructure recapitalization, maintenance, and support nuclear nonproliferation activities in the most cost-effective manner. G2 has given the NNSA the ability to analyze key data in a holistic manner on the scale of $2 billion in annual investment decisions."`}
        desc="– Dave Chesebrough"
        img={{
          src: "/images/g2/g2-graphs.png",
          alt: "people working in an office environment",
        }}
        type="basic"
        themeColor="darkTheme"
      />
      {/* <BlogText themeColor="darkTheme">
        <h3>
          AFEI EXCELLENCE IN ENTERPRISE
          INFORMATION
        </h3>
        <p>
          "NNSA's innovative system is designed to
          optimize investments of taxpayer funded
          infrastructure recapitalization,
          maintenance, and support nuclear
          nonproliferation activities in the most
          cost-effective manner. G2 has given the
          NNSA the ability to analyze key data in
          a holistic manner on the scale of $2
          billion in annual investment decisions."
        </p>
        <Image
          src="/images/g2/img_of_everyone.jpg"
          alt="people working standing with an award"
        />
      </BlogText> */}
      <CTA
        row="reverse"
        descLg={`"NNSA’s G2 system drives risk-based decisions at the enterprise level. Defensibility, traceability, and risk-based decision-making are now the norm at NNSA."`}
        desc="– James McConnell, Associate Administrator for the Office of Safety, Infrastructure, and Operations"
        img={{
          src: "/images/g2/img_of_everyone.jpg",
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
      <ProjectCard cards={cards} />
    </Page>
  );
};

export default ProjResolution;
