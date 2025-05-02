import React from "react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      school: "Catholic University of Eastern Africa",
      year: "Expected Graduation: 2025",
    },
    {
      degree: "Highschool Diploma",
      school: "Light Academy Boys Nairobi",
      year: "Graduated: 2020",
      grade: "B+"
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="container">
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3>{edu.degree}</h3>
              <p className="school-name">{edu.school}</p>
              <p className="graduation-year">{edu.year}</p>
              {edu.grade && <p className="grade">Grade: {edu.grade}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;