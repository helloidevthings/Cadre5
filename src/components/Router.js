import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import Careers from "./Pages/Careers";
import Clients from "./Pages/Clients";
import Blog from "./Pages/Blog";
import Projects from "./Pages/Projects";
import Resolution from "./Pages/Projects/Resolution";
import HealthMedEx from "./Pages/Projects/HealthMedEx";
import Mavnet from "./Pages/Projects/Mavnet";
import ResearchData from "./Pages/Projects/ResearchData";
import ProjectManagementGraphs from "./Pages/Posts/ProjectManagementGraphs";
import G2 from "./Pages/Projects/G2";
import FourOhFour from "./Pages/FourOhFour";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route
      exact
      path="/About"
      component={About}
      isVisible="false"
    />
    <Route
      exact
      path="/Projects"
      component={Projects}
    />
    <Route path="/Careers" component={Careers} />
    <Route
      path="/Contact"
      component={ContactPage}
    />
    <Route path="/Clients" component={Clients} />
    <Route
      exact
      path="/Posts/ProjectManagementGraphs"
      component={ProjectManagementGraphs}
    />
    <Route exact path="/Blog" component={Blog} />
    <Route
      exact
      path="/Resolution"
      component={Resolution}
    />
    <Route
      exact
      path="/Healthmedex"
      component={HealthMedEx}
    />
    <Route
      exact
      path="/Mavnet"
      component={Mavnet}
    />
    <Route
      exact
      path="/ResearchData"
      component={ResearchData}
    />
    <Route exact path="/G2" component={G2} />
    <Route component={FourOhFour} />
  </Switch>
);

export default Router;
