import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <img src={require("../kiron.jpeg")} alt="Kiron Roy" className="about-image" />
        <p>
          Hello, I'm Kiron Roy. Welcome to my portfolio. I'm a passionate developer
          and creator, always excited about crafting innovative projects and
          exploring new ideas.
        </p>
        <p>
          I specialize in web development, artistic endeavors, and combining
          technology with creativity. When I'm not working on projects, I enjoy
          learning, experimenting, and seeking inspiration from the world around
          me. Feel free to connect and share your ideas!
        </p>
      </div>
    </section>
  );
};

export default About;
