import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <ul className="Menu">
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Resolution">Projects</a>
        </li>
        <li>
          <a href="/Careers">Careers</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    );
  }
}

export default Nav;
