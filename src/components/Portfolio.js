import React from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Flow",
    description:
      "How to get more out of work.",
    link: "https://kironroy.dev/workflow",
  },
  {
    id: 2,
    title: "Artwork",
    description: "A collection of digital artworks and creative designs.",
    link: "https://kironroy.dev/art",
  },
  {
    id: 3,
    title: "Console.Log()",
    description: "Experimental coding projects and fun tech logs.",
    link: "https://js-console-log.netlify.app/",
  },
  {
    id: 4,
    title: "Dreamscape",
    description:
      "A project exploring the connection between technology and nature.",
    link: "https://dreamscapegallery.netlify.app/",
  },
  {
    id: 5,
    title: "Mathematics",
    description:
      "Projects integrating math concepts with programming challenges.",
    link: "https://kironroy.dev/mathjs",
  },
  {
    id: 6,
    title: "Mutual Funds",
    description: "Finance-oriented web apps for mutual funds and investments.",
    link: "https://kironroy.dev/mutualfunds",
  },
  {
    id: 7,
    title: "Nash Equilibrium",
    description: "Game theory and strategy-related projects.",
    link: "https://kironroy.dev/nash",
  },
  {
    id: 8,
    title: "Stoic Notes",
    description: "Digital notes and reflections on Stoicism and philosophy.",
    link: "https://kironroy.dev/stoic",
  },
  {
    id: 9,
    title: "Sunset Raga",
    description: "A project merging music, color, and serene visuals.",
    link: "https://kironroy.dev/sunsetraga/sunsetraga",
  },
  {
    id: 10,
    title: "Trees",
    description: "An homage to nature and environmental awareness.",
    link: "https://treesinfo.netlify.app/",
  },
  {
    id: 11,
    title: "Vini Gora",
    description: "A cutting-edge blend of tech and artistic vision.",
    link: "https://vinigora.netlify.app/",
  },
   {
    id: 12,
    title: "Farm to Mind",
    description: "Farm to Mind.",
    link: "https://farmtomind.netlify.app/",
  },
  
];

// Sort projects alphabetically by title
const sortedProjects = projects.sort((a, b) => a.title.localeCompare(b.title));

const Portfolio = () => {
  return (
    <section id="projects" className="portfolio">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {sortedProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
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
