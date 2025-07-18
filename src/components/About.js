import './About.css';

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <h2>About</h2>
      <picture>
        <source
          srcSet={require('../night_k.webp')}
          media="(prefers-color-scheme: dark)"
          type="image/webp"
        />
        <img
          src={require('../relax_k.webp')}
          width="340"
          height="440"
          alt="Kiron Roy"
          className="about-image"
          loading="lazy"
        />
      </picture>
      <div className="about-text">
        <p>
          I'm{' '}
          <a className="github-link" href="https://github.com/kironroy">
            Kiron Roy,
          </a>{' '}
          a developer and creator. I specialize in web development and creative
          projects
        </p>
        <p>Let’s connect—share your ideas!</p>
      </div>
    </div>
  </section>
);

export default About;
