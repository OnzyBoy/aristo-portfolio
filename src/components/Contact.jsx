import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Let's Connect!</h2>
        <div className="contact-3d-card">
          <div className="contact-glass"></div>
          <p className="contact-intro">
            Feel free to reach out for collaborations or just to say hi! 😄
          </p>
          <div className="social-links">
            <a href="https://github.com/OnzyBoy" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/aristo-ayako/" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:ayakoaristo9@gmail.com" className="social-link">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
