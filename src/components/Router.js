import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import ContactPage from "./ContactPage";
import Careers from "./Careers";
import ProjResolution from "./ProjResolution";
import FourOhFour from "./FourOhFour";
import { AnimatePresence } from "framer-motion";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} isVisible="false" />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/resolution" component={ProjResolution} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default Router;
