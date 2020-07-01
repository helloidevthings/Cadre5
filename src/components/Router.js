import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Careers from "./Careers";
import ProjResolution from "./ProjResolution";
import FourOhFour from "./FourOhFour";

const Router = () => (
  // <AnimatePresence>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resolution" component={ProjResolution} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
  // </AnimatePresence>
);

export default Router;
