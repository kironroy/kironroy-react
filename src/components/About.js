import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About</h2>
        <img
          src={require('../relax_k.webp')}
          width="340"
          height="440"
          alt="Kiron Roy"
          className="about-image"
        />
        <div className="about-text">
          <p>
            I'm Kiron Roy, a developer and creator. I build, explore, and push
            ideas forward. I specialize in web development and creative
            projects, mixing tech with artistry. I love to learn, experiment,
            and find inspiration everywhere.
          </p>
          <p>Let’s connect—share your ideas!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
