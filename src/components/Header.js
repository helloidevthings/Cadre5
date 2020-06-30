import React from "react";
import Nav from "./Nav";
import Logo from "./Svgs/Logo";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <nav className="Navigation">
          <div className="Logo">
            <a href="/">
              <Logo />
            </a>
          </div>
          <Nav />
        </nav>
      </header>
    );
  }
}

export default Header;
