import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar glass-navbar">
      <div className="container">
        <img src="/AA-logo.png" alt="AA Logo" className="navbar-logo" />
        <input type="checkbox" id="checkbox" className="nav-checkbox" />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
