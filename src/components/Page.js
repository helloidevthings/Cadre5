import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { ThemeProvider } from "emotion-theming";
import theme from "../theme";

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <motion.section
      className="Content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="Content"
    >
      {children}
      <Footer />
    </motion.section>
  </ThemeProvider>
);

export default Page;
