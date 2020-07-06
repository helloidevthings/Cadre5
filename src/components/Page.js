import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Page = ({ children }) => (
  <motion.section
    className="Content"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="Content"
  >
    {children}
  </motion.section>
);

export default Page;
