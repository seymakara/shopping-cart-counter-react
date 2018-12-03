import React, { Component } from "react";

const NavBar = props => {
  // DON'T FORGET TO PASS PROPS AS AN ARGUMENT TO FUNCTIONAL COMPONENTS!!!
  console.log("Navbar-rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
