import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleProjectsClick = () => {
    closeMenu();
    alert("Development in progress. Check back soon!");
  };

  return (
    <aside className={`side-nav glass-navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="side-nav-inner">
        <img src="/AA-logo.png" alt="AA Logo" className="navbar-logo" />
        <button
          className="toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className={`bars ${isMenuOpen ? "active" : ""}`} id="bar1"></div>
          <div className={`bars ${isMenuOpen ? "active" : ""}`} id="bar2"></div>
          <div className={`bars ${isMenuOpen ? "active" : ""}`} id="bar3"></div>
        </button>
        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#resume" onClick={closeMenu}>Resume</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button
            type="button"
            className="nav-cta"
            onClick={handleProjectsClick}
          >
            Projects & Certificates →
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
