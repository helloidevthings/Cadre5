import React from "react";
import Styles from "./styled";
import { NavLink } from "react-router-dom";

export default ({ isOpen }) => {
  const mainNav = [
    { name: "About", path: "/About" },
    { name: "Projects", path: "/Projects" },
    { name: "Careers", path: "/Careers" },
    { name: "Contact", path: "/Contact" },
  ];
  console.log(isOpen);
  return (
    <Styles isOpen={isOpen}>
      <ul>
        {mainNav.map(({ name, path }) => (
          <li key={name}>
            <NavLink to={path} exact>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </Styles>
  );
};
