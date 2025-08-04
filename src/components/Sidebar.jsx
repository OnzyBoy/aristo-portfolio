import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaExpand } from "react-icons/fa";

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
            <span className="text">Juniour Data Analyst | Software Developer</span>
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              <a href="https://github.com/OnzyBoy" className="neumorph-btn" target="_blank" rel="noopener noreferrer">
                <FaGithub className="svg" />
              </a>
              <a href="https://www.linkedin.com/in/aristo-ayako/" className="neumorph-btn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="svg" />
              </a>
              <a href="mailto:ayakoaristo9@gmail.com" className="neumorph-btn" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="svg" />
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
