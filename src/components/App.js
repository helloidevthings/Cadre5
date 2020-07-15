import React from "react";
import Header from "./Header";
import Router from "./Router";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <main className="Main">
      <Header />
      <AnimatePresence>
        <Router />
      </AnimatePresence>
    </main>
  );
};

export default App;
