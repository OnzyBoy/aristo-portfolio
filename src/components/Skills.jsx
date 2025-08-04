import React from "react";
import {
  SiJavascript, SiPython, SiOpenjdk, SiCplusplus, SiR,
  SiReact, SiNodedotjs, SiGit, SiDocker, SiFirebase, SiTypescript, SiAdobeillustrator, SiKaggle, SiNextdotjs,
  SiMysql
} from "react-icons/si";
import microsoftExcelIcon from "../assets/microsoft-excel.svg";
import powerbiIcon from "../assets/powerbi.svg";
import sqlIcon from "../assets/sql-database.svg";
import csharpIcon from "../assets/c-sharp.svg";

const Skills = () => {
  const technicalSkills = {
    "Programming Languages": [
      { name: "Python", icon: <SiPython /> },
      { name: "R", icon: <SiR /> },
      { name: "SQL", icon: <img src={sqlIcon} alt="SQL" style={{ width: '2.5rem', height: '2.5rem' }} /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "C#", icon: <img src={csharpIcon} alt="C#" style={{ width: '2.5rem', height: '2.5rem' }} /> }
    ],
    "Frameworks & Tools": [
      { name: "Excel", icon: <img src={microsoftExcelIcon} alt="Excel" style={{ width: '2.5rem', height: '2.5rem' }} /> },
      { name: "PowerBI", icon: <img src={powerbiIcon} alt="PowerBI" style={{ width: '2.5rem', height: '2.5rem' }} /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "ReactJS", icon: <SiReact /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ]
  };



  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="container">
        <div className="skills-3d-card">
          <div className="skills-glass"></div>
          <div className="technical-skills">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
