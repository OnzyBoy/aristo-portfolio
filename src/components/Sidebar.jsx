import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="parent">
        <div className="card">
          <div className="content">
            <span className="title">Aristo Ayako</span>

            <img
              src="/sideprofile.JPG"
              alt="Profile"
              className="profile-image-3d"
              onClick={() => setShowModal(true)}
              title="Click to enlarge"
            />
            <span className="text">Data Analyst | Data Scientist | Software Developer</span>

            <div className="social-links sidebar-social-links">
              <a
                href="https://github.com/OnzyBoy"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aristo-ayako/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:ayakoaristo9@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="profile-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="profile-modal-card" onClick={e => e.stopPropagation()}>
            <button className="profile-modal-close" onClick={() => setShowModal(false)}><FaTimes /></button>
            <img src="/sideprofile.JPG" alt="Profile Large" className="profile-modal-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
