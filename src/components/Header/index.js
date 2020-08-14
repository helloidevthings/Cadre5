import React, { useState } from "react";
import Nav from "../Nav";
import Logo from "../Svgs/Logo";
import Styles from "./styled";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Styles>
      <nav className="Navigation">
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
        ></button>
        <Nav isOpen={isOpen} />
      </nav>
    </Styles>
  );
};
