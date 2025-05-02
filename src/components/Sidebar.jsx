import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-container">
        <img src="/sideprofile.JPG" alt="Profile" className="profile-image" />
        <h2 className="profile-name">Aristo Ayako</h2>
        <p className="profile-title">Software Developer</p>
      </div>

      <div className="sidebar-social-links">
        <a href="https://github.com/OnzyBoy" className="sidebar-social-link">
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aristo-ayako/"
          className="sidebar-social-link"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:ayakoaristo9@gmail.com" className="sidebar-social-link">
          <FaEnvelope /> Email
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
