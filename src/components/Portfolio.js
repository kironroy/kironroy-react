import './Portfolio.css';

const projects = [
  {
    id: 2,
    title: 'Artwork',
    description: 'A collection of my artwork.',
    link: 'https://kironroy.dev/art',
  },
  {
    id: 3,
    title: 'Vincent\'s Visions',
    description: 'An art series dedicated to Vincent Van Gogh.',
    link: 'https://kironroy.dev/vincent',
  },
  {
    id: 4,
    title: 'Hadden',
    description: 'Hadden Industries official website.',
    link: 'https://hadden.netlify.app/',
  },
  {
    id: 5,
    title: 'Mathematics',
    description: 'Mathematics with TypeScript.',
    link: 'https://mathematics-six.vercel.app/',
  },
  {
    id: 6,
    title: 'Books Database',
    description: 'CRUD application. Book information stored in firebase.',
    link: 'https://books-database.netlify.app/',
  },

  {
    id: 8,
    title: 'Writers API',
    description: 'API of influential writers.',
    link: 'https://kironroy.dev/content',
  },
  {
    id: 9,
    title: 'Dreamscape',
    description: 'Limited art series.',
    link: 'https://kironroy.dev/dreamscape',
  },
  {
    id: 10,
    title: 'Trees',
    description: 'Information about trees with dynamic search.',
    link: 'https://treesinfo.netlify.app/',
  },
  {
    id: 11,
    title: 'Vini Gora',
    description: 'Offical website for Dr. Vini Gora, professional vocalist.',
    link: 'https://vinigora.netlify.app/',
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
