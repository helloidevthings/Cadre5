import React from "react";

const subNav = ["Resolution", "G2", "HealthMedEX"];
const subNavMap = subNav.map((sub) => <li>{sub}</li>);

const Nav = () => (
  <ul className="Menu">
    <li>
      <a href="/About">About</a>
    </li>
    <li>
      <a href="/Resolution">Projects</a>
      <ul className="SubNav">{subNavMap}</ul>
    </li>
    <li>
      <a href="/Careers">Careers</a>
    </li>
    <li>
      <a href="/Contact">Contact</a>
    </li>
  </ul>
);

export default Nav;
