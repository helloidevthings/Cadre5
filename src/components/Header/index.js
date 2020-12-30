import React, { useState } from "react";
import Nav from "../Nav";
import Logo from "../Svgs/Logo";
import LogoMobile from "../Svgs/LogoMobile";
import MenuIcon from "../Svgs/MenuIcon";
import MenuIconOpen from "../Svgs/MenuIconOpen";
import Styles from "./styled";

export default () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Styles>
      <nav className="Navigation">
        <div className="LogoMobile">
          <a href="/">
            <LogoMobile />
          </a>
        </div>
        <div className="Logo">
          <a href="/">
            <Logo />
          </a>
        </div>
        <button
          className="menuButton"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <MenuIcon />
          ) : (
            <MenuIconOpen />
          )}
        </button>
        <Nav isOpen={isOpen} />
      </nav>
    </Styles>
  );
};
