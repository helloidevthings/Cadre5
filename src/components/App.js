import React, { Component } from "react";
import Header from "./Header";
import Router from "./Router";
import theme from "../theme";
import { ThemeProvider } from "emotion-theming";
import AppStyles from "./App.styled.js";
import GlobalStyles from "./Global.styled.js";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <AppStyles>
            <Header />
            <AnimatePresence>
              <Router />
            </AnimatePresence>
          </AppStyles>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
