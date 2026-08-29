import React from 'react';
import './App.css';

const projects = [
  {
    title: 'Chrono',
    description: 'Human-Centric Cognitive Environment. A local-first system designed around continuity, context, memory, state, reasoning and interaction across time.',
    tags: ['Architecture', 'World Model', 'Cognitive Pipeline'],
    link: '#'
  },
  {
    title: 'Project Genesis',
    description: 'Computational Educational-System Simulator. A deterministic simulation platform for modelling educational architectures and longitudinal trajectories.',
    tags: ['Simulation', 'Knowledge Graphs', 'Research'],
    link: 'https://github.com/alena-tas12/educational-system-simulations'
  },
  {
    title: 'NetSage',
    description: 'Network Observation & Reasoning System. Combines deterministic network state observation with AI-assisted diagnostic reasoning.',
    tags: ['Networking', 'VLANs', 'Diagnosis'],
    link: '#'
  },
  {
    title: 'Green Dashboard',
    description: 'Cyber-Physical IoT Energy Monitoring System. Physical sensing → telemetry → backend → analytics → human-facing dashboard.',
    tags: ['IoT', 'Data Visualization', 'Full-stack'],
    link: 'https://github.com/alena-tas12/GreenDashboardMicroprojectEntrepreneurship'
  }
];

const intellectualIdentity = [
  {
    title: 'Architecture before implementation',
    description: 'I define system boundaries, state, responsibilities, interactions, and interfaces before choosing implementation details. I ask "What should the system actually be?" before "What framework should I use?"'
  },
  {
    title: 'Systems over features',
    description: 'I am interested in how components interact as a system rather than treating each feature as an isolated object. Environment → State → Observation → Reasoning → Action → Feedback.'
  },
  {
    title: 'Evidence before inference',
    description: 'Systems should distinguish observed state from assumptions and hypotheses. Do not invent state just because a model can generate a plausible answer.'
  },
  {
    title: 'Human agency & Continuity',
    description: 'AI should function as an engineering component or augmentation layer, not automatically replace human judgment. For intelligent systems, context and state across time matter as much as individual interactions.'
  }
];

function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="title" style={{textTransform: 'uppercase', letterSpacing: '2px'}}>Alen Barnes</h1>
          <p className="subtitle" style={{color: '#06b6d4', fontWeight: 'bold'}}>Computational Systems Builder</p>
          <p style={{fontSize: '1.2rem', color: '#94a3b8', margin: '1rem 0 2rem 0'}}>
            Architecture • AI Systems • Computational Modelling • Infrastructure
          </p>
          <p style={{fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: '1.6'}}>
            I design and build computational systems that model, observe, reason about, and interact with complex environments.
          </p>
          <div className="nav-links">
            <a href="https://github.com/alena-tas12" target="_blank" rel="noreferrer" className="btn btn-primary">
              View GitHub
            </a>
            <a href="#projects" className="btn btn-secondary">
              See Systems
            </a>
          </div>
        </div>
      </header>

      <main className="content-section">
        
        <div id="intellectual" style={{marginBottom: '6rem'}}>
          <h2 className="section-title">How I Think</h2>
          <div className="grid">
            {intellectualIdentity.map((item, idx) => (
              <div className="card" key={idx}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="section-title">Flagship Systems</h2>
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
        &copy; {new Date().getFullYear()} Alen Barnes. Computational Systems Builder.
      </footer>
    </div>
  );
}

export default App;
