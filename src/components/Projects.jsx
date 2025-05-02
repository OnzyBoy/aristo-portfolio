import React from "react";
import { 
  SiNextdotjs, SiMysql, SiFirebase, 
  SiReact, SiSolidity, SiGithub 
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "PesaTrack",
      description: "A modern personal finance tracking application that focuses on simplicity and efficiency in managing your finances.",
      technologies: [
        { name: "NextJS", icon: <SiNextdotjs /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Firebase", icon: <SiFirebase /> }
      ],
      githubLink: "https://github.com/OnzyBoy/pesatrack",
    },
    {
      title: "Subscription Management System",
      description: "A decentralized subscription management system built on Avalanche blockchain, enabling automated recurring payments and subscription management for SaaS, newsletters, and streaming platforms.",
      technologies: [
        { name: "ReactJS", icon: <SiReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Solidity", icon: <SiSolidity /> }
      ],
      githubLink: "https://github.com/OnzyBoy/Subscription-Management-System-Avalanche",
      livePreview: "https://subscription-management-system-gules.vercel.app/",
      partner: {
        name: "Lynn Matini",
        link: "https://github.com/Lynn-Matini"
      }
    },
    {
      title: "Student-Zone",
      description: "A cutting-edge platform designed to revolutionize the way students manage their academic life.",
      technologies: [
        { name: "NextJs", icon: <SiNextdotjs /> },
        { name: "Firebase", icon: <SiFirebase /> }
      ],
      githubLink: "https://github.com/OnzyBoy/student-zone",
      livePreview: "https://studentszone.vercel.app/",
      partner: {
        name: "Shalom Obongo",
        link: "https://github.com/ShalomObongo"
      }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <div key={i} className="tech-tag">
                    <span className="tech-icon">{tech.icon}</span>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <SiGithub />
                </a>
                {project.livePreview && (
                  <button
                    onClick={() => window.open(project.livePreview, '_blank')}
                    className="preview-button"
                  >
                    <FaExternalLinkAlt /> Live Preview
                  </button>
                )}
              </div>
              {project.partner && (
                <div className="project-partner">
                  <button
                    onClick={() => window.open(project.partner.link, '_blank')}
                    className="partner-button"
                  >
                    Partner: {project.partner.name}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
