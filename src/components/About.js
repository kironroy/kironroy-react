import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [imageSrc, setImageSrc] = useState(require('../relax_k.webp'));

  useEffect(() => {
    const updateImage = event => {
      if (event.matches) {
        setImageSrc(require('../night_k.webp'));
      } else {
        setImageSrc(require('../relax_k.webp'));
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial state
    updateImage(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', updateImage);

    // Cleanup event listener when component unmounts
    return () => {
      mediaQuery.removeEventListener('change', updateImage);
    };
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
            I'm{' '}
            <a className="github-link" href="https://github.com/kironroy">
              Kiron Roy,
            </a>{' '}
            a developer and creator. I specialize in web development and
            creative projects
          </p>
          <p>Let’s connect—share your ideas!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
