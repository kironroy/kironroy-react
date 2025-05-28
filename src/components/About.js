import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [imageSrc, setImageSrc] = useState(require('../relax_k.webp'));

  useEffect(() => {
    // Check if night mode is active (based on the user's theme preference)
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (prefersDarkMode) {
      setImageSrc(require('../night_k.webp')); // Change to night-time image
    }
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About</h2>
        <img
          src={imageSrc}
          width="340"
          height="440"
          alt="Kiron Roy"
          className="about-image night-image"
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
