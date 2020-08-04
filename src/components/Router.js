import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import ContactPage from "./ContactPage";
import Careers from "./Careers";
import Projects from "./Projects";
import ProjResolution from "./ProjResolution";
import ProjHealthMedEx from "./ProjHealthMedEx";
import ProjG2 from "./ProjG2";
import FourOhFour from "./FourOhFour";
import { AnimatePresence } from "framer-motion";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} isVisible="false" />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/resolution" component={ProjResolution} />
      <Route exact path="/healthmedex" component={ProjHealthMedEx} />
      <Route exact path="/g2" component={ProjG2} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default Router;
