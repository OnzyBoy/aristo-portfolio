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
              Hi, I'm Aristo — a curious and committed Computer Science student
              who loves bringing ideas to life through code. I'm passionate about
              Software Development and Data Analytics, and I enjoy digging into data
              to find stories and patterns that can help solve real-world problems.
              Whether I'm building smooth, user-friendly web apps or exploring data
              to uncover meaningful insights, I'm all about learning, improving, and
              making things that matter (even if I sometimes have to battle a
              few bugs along the way)
            </p>
            <span>(｡•̀ᴗ-)✧</span>
            <p>
              When I'm not knee-deep in code, you'll probably find me
              chatting about cars, gaming, or swapping tips on how to survive
              the chaos of life one meme at a time. I speak English and Kiswahili,
              know a decent amount of Japanese, and I'm currently learning German
              — because why not? I'm a big believer that learning never really stops...
              unless the server goes down — then it's snack time. I'm always curious,
              always exploring, and up for teaming up on cool, meaningful projects.
              <span>ツ</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
