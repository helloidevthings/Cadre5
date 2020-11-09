import React from "react";
import Page from "../Page";
import HeroBasic from "../HeroBasic";
import Clients from "../Clients";
import ProjectsRelated from "../ProjectsRelated";
import LogoGrid from "../LogoGrid";

export default () => {
  return (
    <Page>
      <HeroBasic
        title="Clients"
        img={{
          src: "/images/pretty-laptop.png",
          alt: "People working in an office",
        }}
        svg="AbstractWhite"
      />
      <LogoGrid />
      <ProjectsRelated />

    </Page>
  );
};
