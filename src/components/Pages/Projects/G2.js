import React from "react";
import Project from "../../Project";
import Page from "../../Page";
import WaveHr from "../../Parts/WaveHR";
import BlogText from "../../Parts/BlogText";
import CTA from "../../CTA";
import FeatureApp from "../../FeatureApp";
import ProjectFeature from "../../ProjectFeature";
import ProjectCard from "../../Parts/ProjectCard";

const ProjResolution = () => {
  const cards = [
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
    {
      title: "Mavnet",
      leadin:
        "Seamlessly Plan, Execute & Update Missions",
      descLg:
        "Mavnet makes it easy to plan and execute missions in real time for UAV and Rovers.",
      img: {
        src:
          "/images/mavnet/mavnet-project-image-card.png",
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
      subheader: "2007 • ?",
      title: "G2 - DRAFT",
      leadin:
        "Program Management for Government Agencies.",
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
      {/* <ProjectFeature
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
      /> */}
      <ProjectFeature
        themeColor="mediumTheme"
        introText={{
          title: "The Challenge",
          descLg:
            "Effective management of thousands of projects across the NNSA worth approximately $3.5B in annual appropriations.",

          svg: "ChartArrow",
        }}
        img={{
          src:
            "/images/g2/responsive_graphic.png",
          alt:
            "G2 Homescreen on tablet and phone",
        }}
      />
      <BlogText themeColor="mediumTheme">
        <h3>Capabilities</h3>
        <p>
          G2 allows the NNSA and its subordinate
          organizations to provide increased
          operational transparency to Congress and
          other constituents, efficient and
          effective project management, advanced
          reporting and data analytics to drive
          better decision making, and support of
          multiple organizations with varying
          missions within a single system.
          Capabilities include:
        </p>
        <ul>
          <li>
            Formal Change Management Processes
          </li>
          <li>
            Schedule Management
            <ul>
              <li>
                {
                  "Baseline / Forecast Schedules & Metrics"
                }
              </li>
            </ul>
          </li>
          <li>
            Financial Management
            <ul>
              <li>Funds Allocation</li>
              <li>Cost Collection</li>
              <li>Spend Plans</li>
              <li>Year-End Forecasts</li>
              <li>
                Reconciliation with DOE Financial
                Systems
              </li>
            </ul>
          </li>
          <li>Future-Year Annual Planning</li>
          <li>Real-Property Asset Management</li>
          <li>Geo-Spatial Analysis</li>
          <li>On-demand Reports</li>
          <li>
            Numerous Line-of-Business Modules
          </li>
        </ul>
      </BlogText>
      {/* <WaveHr color="#efefef" bg="#383838" />
      <WaveHr color="#383838" bg="#383838" />
      <ProjectFeature
        themeColor="darkTheme"
        row="basic"
        introText={{
          title: "Main Dashboard",
          descLg:
            "Gives an overview of project state and notifications that need to be addressed.(?)",
          desc: "Details?",
          svg: "Wrench",
        }}
        img={{
          src: "/images/g2/g2-graphs.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{ src: "/images/g2/desktop.png", alt: "" }}
        themeColor="darkTheme"
      />
*/}
      {/* <article className="blog">
        <h3>SAFe Agile</h3>
        Text about SAFe Agile.
      </article>
      <FeatureApp
        img={{
          src: "/images/g2/safe.png",
          alt: "",
        }}
        themeColor="mediumTheme"
      /> */}
      <WaveHr color="#efefef" bg="white" />
      <WaveHr color="white" bg="white" />
      <ProjectFeature
        themeColor="lightTheme"
        row="reverse"
        introText={{
          title: "Change Management",
          descLg:
            "G2 provides formal change management processes with customizable approval workflows and automated email notifications. All changes can be managed from a single screen.",
          desc:
            "To more efficiently manage change, iconography is used to indicate the type of change being made on each project and whether an approval action is required by the user.",
          svg: "Shapes",
        }}
        img={{
          src: "/images/g2/icon_signals.png",
          alt: "",
        }}
      />
      <FeatureApp
        img={{
          src: "/images/g2/notifications.png",
          alt: "",
        }}
        themeColor="lightTheme"
        tips={[
          {
            i: 1,
            top: "45%",
            left: "5%",
            desc:
              "The red-dot next to the icon shows that this item has been updated.",
          },
        ]}
      />
      <WaveHr color="white" bg="#383838" />
      <BlogText themeColor="darkTheme">
        <h3>Schedule Management</h3>
        <ul>
          <li>
            G2 allows each organization to define
            a custom Work Breakdown Structure
            (WBS) to organize and manage their
            work. Common to all organizations is
            that the lowest level of each WBS
            represents projects that are
            decomposed into tasks, milestones, and
            related metrics.
            <p>
              G2 summarizes a project’s tasks in
              an interactive Gantt view that
              allows users to easily view and
              filter work based on progress and
              active changes.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            Additionally, the details of each task
            are presented in a way that highlights
            the latest status, work progress, and
            deltas between the baseline and
            forecast milestone dates. From within
            this view, baseline changes as well as
            status updates can be initiated.
            (Note: I’ve separated this sentence as
            a separate bullet point. I’m not sure
            if it is ok to simply combine this
            with the previous bullet point as one
            long statement or if it should be
            separated. We can discuss after it is
            captured in the design.)
          </li>
        </ul>
      </BlogText>
      <FeatureApp
        img={{
          src:
            "/images/g2/Expanded-Tasks--Expanded-Timeline-huge.png",
          alt: "",
        }}
        themeColor="darkTheme"
        tips={[
          {
            i: 1,
            top: "45%",
            left: "5%",
            desc:
              "The red-dot next to the icon shows that this item has been updated.",
          },
        ]}
      />
      <WaveHr color="#383838" bg="#efefef" />
      <ProjectFeature
        themeColor="mediumTheme"
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
      <BlogText themeColor="mediumTheme">
        <h3>Process</h3>
        <p>
          G2 was developed using an agile
          framework known as SAFe. This enterprise
          framework assists organizations with the
          appropriate practices to work at scale….
        </p>
      </BlogText>
      <FeatureApp
        themeColor="mediumTheme"
        img={{
          src: "/images/g2/safe.png",
          alt: "SAFe Agile",
        }}
      />
      <BlogText>
        <p>
          This is a graphic is copyrited from SAFe
          Agile...link to it{" "}
        </p>
      </BlogText>
      <WaveHr color="#efefef" bg="#383838" />
      <ProjectFeature
        themeColor="darkTheme"
        introText={{
          title: "Awards",
          descLg:
            '"NNSA is a model for organizations that value project management as a discipline that increases success rates, creates efficiencies and aligns with demanding strategic requirements. Few organizational missions demand excellent project execution more than the NNSA G2 project."',
          desc:
            "- Mark Langley, President Project Management Institute",
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

      <ProjectFeature
        themeColor="darkTheme"
        row="reverse"
        introText={{
          title: "NNSA",
          descLg:
            "The National Nuclear Security Administration maintains and enhances the safety, security, and effectiveness of U.S. nuclear capabilities and works globally to reduce nuclear proliferation and the danger from weapons of mass destruction.",
          desc:
            "^ I’m not sure where to put this… at the moment it’s next to a video",
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
      />

      <WaveHr color="#383838" bg="#1f1f1f" />
      <WaveHr color="#1f1f1f" bg="#1f1f1f" />
      <CTA
        leadin="AFEI EXCELLENCE IN ENTERPRISE INFORMATION"
        descLg={`"NNSA's innovative system is designed to optimize investments of taxpayer funded infrastructure recapitalization, maintenance, and support nuclear nonproliferation activities in the most cost-effective manner. G2 has given the NNSA the ability to analyze key data in a holistic manner on the scale of $2 billion in annual investment decisions."`}
        desc="– Mark Langley, President Project Management Institute"
        img={{
          src: "/images/g2/G2_cover.jpg",
          alt:
            "people working in an office environment",
        }}
        type="basic"
        themeColor="darkTheme"
      />
      <CTA
        row="reverse"
        descLg={`"NNSA’s G2 system drives risk-based decisions at the enterprise level. Defensibility, traceability, and risk-based decision-making are now the norm at NNSA."`}
        desc="– James McConnell, Associate Administrator for the Office of Safety, Infrastructure, and Operations"
        img={{
          src: "/images/g2/img_of_everyone.jpg",
          alt:
            "people working standing with an award",
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
