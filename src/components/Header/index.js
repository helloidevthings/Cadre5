import React from "react";
import Nav from "../Nav";
import Logo from "../Svgs/Logo";
import Styles from "./styled";

export default () => (
  <Styles>
    <nav className="Navigation">
      <div className="Logo">
        <a href="/">
          <Logo />
        </a>
      </div>
      <Nav />
    </nav>
  </Styles>
);
