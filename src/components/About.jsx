import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <div className="about-3d-card">
          <div className="about-glass"></div>
          <div className="about-3d-content">
            <p>
              Hi, I'm Aristo — a Computer Science student passionate about
              Software Development and Data Analytics. With a developer's
              background, I build data tools that are insightful, scalable,
              and user-centric — turning raw data into stories that solve
              real-world problems.
            </p>
            <span>(｡•̀ᴗ-)✧</span>
            <p>
              Off the keyboard, I'm into cars, gaming, and surviving life
              one meme at a time. I speak English and Kiswahili, know some
              Japanese, and I'm currently picking up German — because
              learning never stops (unless the server goes down — then
              it's snack time). Always curious, always building, and open
              to collaborating on meaningful projects.
              <span>ツ</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
