import React from "react";
import Header from "./Header";
import Router from "./Router";
import { ThemeProvider } from "emotion-theming";
import theme from "../theme";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main className="Main">
        <Header />
        <AnimatePresence>
          <Router />
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
};

export default App;
