import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar glass-navbar">
      <div className="container">
        <img src="/AA-logo.png" alt="AA Logo" className="navbar-logo" />
        <button className="toggle" onClick={toggleMenu}>
          <div className={`bars ${isMenuOpen ? 'active' : ''}`} id="bar1"></div>
          <div className={`bars ${isMenuOpen ? 'active' : ''}`} id="bar2"></div>
          <div className={`bars ${isMenuOpen ? 'active' : ''}`} id="bar3"></div>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
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
