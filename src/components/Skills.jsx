import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  SiJavascript, SiPython, SiOpenjdk, SiCplusplus,
  SiReact, SiNodedotjs, SiGit, SiDocker,
  SiFirebase, SiTypescript, SiAdobeillustrator 
} from "react-icons/si";

const Skills = () => {
  const technicalSkills = {
    "Programming Languages": [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <SiOpenjdk /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "TypeScript", icon: <SiTypescript /> }
    ],
    "Frameworks & Tools": [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> }
    ]
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="container">
        <div className="technical-skills">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h4>{category}</h4>
              <Slider {...sliderSettings} className="skills-carousel">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
