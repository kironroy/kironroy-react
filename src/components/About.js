import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <img
          src={require('../kironroy.webp')}
          width="340"
          height="440"
          alt="Kiron Roy"
          className="about-image"
        />
        <div className="about-text">
          <p>
            Hello, I'm Kiron Roy. Welcome to my portfolio. I'm a passionate
            developer and creator, always excited about crafting innovative
            projects and exploring new ideas.
          </p>
          <p>
            I specialize in web development, artistic endeavors, and combining
            technology with creativity. I enjoy learning, experimenting, and
            seeking inspiration from the world around me. Feel free to connect
            and share your ideas!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
