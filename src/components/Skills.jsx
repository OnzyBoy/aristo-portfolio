import React from "react";
import {
  SiJavascript, SiPython, SiR, SiTypescript,
  SiPostgresql, SiMysql,
  SiPandas, SiNumpy, SiScikitlearn,
  SiReact, SiNextdotjs, SiDotnet,
  SiLinux, SiGit, SiDocker, SiStreamlit
} from "react-icons/si";
import sqlIcon from "../assets/sql-database.svg";

const Skills = () => {
  const technicalSkills = {
    "Data Stack": [
      { name: "Python", icon: <SiPython /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
      { name: "R", icon: <SiR /> },
      { name: "SQL", icon: <img src={sqlIcon} alt="SQL" style={{ width: '2.5rem', height: '2.5rem' }} /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> }
    ],
    "Web Stack": [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: ".NET", icon: <SiDotnet /> }
    ],
    "Tools & DevOps": [
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "Streamlit", icon: <SiStreamlit /> }
    ]
  };

  const softSkills = [
    "Project Management",
    "Data Story Telling",
    "Strategic Planning",
    "Problem Solving",
    "Team Collaboration"
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="container">
        <div className="skills-3d-card">
          <div className="skills-glass"></div>
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h4>{category}</h4>
                <div className="skills-grid">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-name">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill) => (
                <div key={skill} className="soft-skill-item">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
