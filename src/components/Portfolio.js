import React, { useEffect, useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the Netlify serverless function
    fetch('/.netlify/functions/projects') // Relative URL since both are deployed on Netlify
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  // Sort projects alphabetically by title
  const sortedProjects = projects.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <section id="projects" className="portfolio">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {sortedProjects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
