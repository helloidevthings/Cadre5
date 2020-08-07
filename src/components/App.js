import React from "react";
import Header from "./Header";
import Router from "./Router";
import theme from "../theme";
import { ThemeProvider } from "emotion-theming";
import AppStyles from "./App.styled.js";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppStyles className="Main">
          <Header />
          <AnimatePresence>
            <Router />
          </AnimatePresence>
        </AppStyles>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
