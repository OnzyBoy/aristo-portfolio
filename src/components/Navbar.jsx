import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <aside className={`side-nav glass-navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="side-nav-inner">
        <a href="#about" onClick={closeMenu} aria-label="Go to About section">
          <img src="/AA-logo.png" alt="AA Logo" className="navbar-logo" />
        </a>
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
          <a
            href="https://aristodatalab.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={closeMenu}
          >
            Projects & Certificates →
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
