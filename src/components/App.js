import React from "react";
import Header from "./Header";
import Router from "./Router";
import theme from "../theme";
import { ThemeProvider } from "emotion-theming";
import AppStyles from "./App.styled.js";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyles className="Main">
        <Header />
        <AnimatePresence>
          <Router />
        </AnimatePresence>
      </AppStyles>
    </ThemeProvider>
  );
};

export default App;
