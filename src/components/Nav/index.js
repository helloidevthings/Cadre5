import React from "react";
import Styles from "./styled";
import { NavLink } from "react-router-dom";

export default ({ isOpen, setIsOpen }) => {
  const mainNav = [
    { name: "About", path: "/About" },
    { name: "Clients", path: "/Clients" },
    { name: "Projects", path: "/Projects" },
    { name: "Careers", path: "/Careers" },
    { name: "Contact", path: "/Contact" },
  ];

  const navClick = (e) => {
    setIsOpen(false);
  };

  return (
    <Styles isOpen={isOpen} onClick={() => (isOpen = false)}>
      {mainNav.map(({ name, path }) => (
        <li className="navItem" key={name}>
          <NavLink to={path} exact onClick={navClick}>
            {name}
          </NavLink>
        </li>
      ))}
    </Styles>
  );
};
