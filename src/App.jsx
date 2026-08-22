import React from 'react';
import './App.css';

const projects = [
  {
    title: 'Educational System Simulations',
    description: 'A comprehensive system designed to simulate educational environments and complex processes.',
    tags: ['TypeScript', 'Simulation', 'Architecture'],
    link: 'https://github.com/alena-tas12/educational-system-simulations'
  },
  {
    title: 'Green Dashboard Microproject',
    description: 'An entrepreneurial dashboard focusing on green initiatives and sustainable metrics tracking.',
    tags: ['TypeScript', 'Entrepreneurship', 'Data Visualization'],
    link: 'https://github.com/alena-tas12/GreenDashboardMicroprojectEntrepreneurship'
  },
  {
    title: 'Fertilizer Hackathon Project',
    description: 'Final submission for a hackathon addressing agricultural challenges with technology.',
    tags: ['HTML', 'Hackathon', 'Agriculture'],
    link: 'https://github.com/alena-tas12/FINAL_Hackathon_fertilizer_project'
  },
  {
    title: 'Python Final & Maths Project',
    description: 'Academic projects showcasing problem-solving abilities and mathematical programming concepts.',
    tags: ['Python', 'Data Logic', 'Algorithms'],
    link: 'https://github.com/alena-tas12/python-final'
  },
  {
    title: 'Cisco Network Architecture',
    description: 'Sophisticated networking labs including VLAN configurations and complex subnetting architectures.',
    tags: ['Packet Tracer', 'Networking', 'Troubleshooting'],
    link: '#'
  }
];

function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="title">Alena Barnes</h1>
          <p className="subtitle">Software Developer & Network Engineer</p>
          <div className="nav-links">
            <a href="https://github.com/alena-tas12" target="_blank" rel="noreferrer" className="btn btn-primary">
              View GitHub
            </a>
            <a href="#projects" className="btn btn-secondary">
              See Projects
            </a>
          </div>
        </div>
      </header>

      <main className="content-section">
        <h2 className="section-title">Highlighted Work</h2>
        <div className="grid" id="projects">
          {projects.map((project, idx) => (
            <div className="card" key={idx}>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tIdx) => (
                  <span className="tag" key={tIdx}>{tag}</span>
                ))}
              </div>
              <div>
                <a href={project.link} target="_blank" rel="noreferrer" className="card-link">
                  View Details &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} Alena Barnes. Engineered with React.
      </footer>
    </div>
  );
}

export default App;
