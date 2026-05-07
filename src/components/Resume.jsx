import React, { useState } from "react";
import { FaTimes, FaEye, FaDownload } from "react-icons/fa";

const CV_PATH = "/ARISTO_Ayako_CV.pdf";
const CV_FILENAME = "ARISTO_Ayako_CV.pdf";

const Resume = () => {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <>
      <section id="resume" className="resume-section">
        <h2>Resume</h2>
        <div className="container">
          <div className="resume-3d-card">
            <div className="resume-glass"></div>
            <p className="resume-intro">
              Get a closer look at my background, experience, and skills.
            </p>
            <div className="resume-actions">
              <button
                type="button"
                className="resume-btn resume-btn-primary"
                onClick={() => setShowViewer(true)}
              >
                <FaEye /> View CV
              </button>
              <a
                href={CV_PATH}
                download={CV_FILENAME}
                className="resume-btn resume-btn-secondary"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {showViewer && (
        <div
          className="cv-modal-overlay"
          onClick={() => setShowViewer(false)}
        >
          <div
            className="cv-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cv-modal-close"
              onClick={() => setShowViewer(false)}
              aria-label="Close CV viewer"
            >
              <FaTimes />
            </button>
            <iframe
              src={CV_PATH}
              title="Aristo Ayako CV"
              className="cv-modal-frame"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
