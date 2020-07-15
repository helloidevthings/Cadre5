import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const mainNav = ["About", "Projects", "Careers", "Contact"];
const subNav = ["Resolution", "G2", "HealthMedEX"];
const subNavMap = subNav.map((sub) => (
  <li>
    <a href={sub}>{sub}</a>
  </li>
));

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { y: 8, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Nav = () => (
  <motion.ul
    className="Menu"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {mainNav.map((index) => (
      <motion.li key={index} className="item" variants={item}>
        <a href={index}>{index}</a>
        {/* {index === "Projects" && (
          <AnimatePresence>
            <ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {subNavMap}
            </ul>
          </AnimatePresence>
        )} */}
      </motion.li>
    ))}
  </motion.ul>
);

export default Nav;
