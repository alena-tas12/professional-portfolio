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

const skills = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'C++'],
  systems: ['React', 'Node.js', 'Electron', 'Docker', 'Vite'],
  networking: ['Cisco', 'VLANs', 'DHCP', 'DNS', 'NAT', 'Firewalls', 'Routing'],
  hardware: ['Arduino', 'ESP8266', '8051', 'ARM7', 'Sensors']
};

function App() {
  return (
    <div className="app-container">
      <header className="hero-section">
        <div className="hero-content">
          <img src="https://ui-avatars.com/api/?name=Alen+Barnes&background=0D8ABC&color=fff&size=150" alt="Alen Barnes" style={{borderRadius: '50%', marginBottom: '2rem'}} />
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
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-secondary">
              LinkedIn
            </a>
            <a href="#resume" className="btn btn-primary">
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="content-section">
        
        <div id="skills" style={{marginBottom: '6rem'}}>
          <h2 className="section-title">Technical Domains</h2>
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Languages & Frameworks</h3>
              <p className="card-desc">{skills.languages.join(', ')}</p>
              <p className="card-desc">{skills.systems.join(', ')}</p>
            </div>
            <div className="card">
              <h3 className="card-title">Networking & Infra</h3>
              <p className="card-desc">{skills.networking.join(', ')}</p>
            </div>
            <div className="card">
              <h3 className="card-title">Embedded & IoT</h3>
              <p className="card-desc">{skills.hardware.join(', ')}</p>
            </div>
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

        <div id="resume" style={{marginTop: '6rem', padding: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px'}}>
          <h2 className="section-title">Professional Record</h2>
          <p style={{textAlign: 'center', marginBottom: '2rem'}}>
            <a href="#" className="btn btn-primary">Download Formal Resume (PDF)</a>
          </p>
          <div style={{color: '#e2e8f0', fontFamily: 'monospace', whiteSpace: 'pre-wrap', lineHeight: '1.8'}}>
            {`EDUCATION
B.Tech in Computer Science and Engineering
CGPA: 8.64/10.0

EXPERIENCE
Computational Systems Builder | Independent Research
- Architected Chrono, a 15-stage cognitive pipeline world model.
- Built Genesis, a deterministic educational-system simulator.
- Deployed NetSage, an AI-assisted network reasoning tool.

AI-Assisted Dev: ChatGPT, Codex, Claude, Cursor, Windsurf, Antigravity, Perplexity; AI-assisted architecture, implementation, and prototyping`}
          </div>
        </div>
      </main>

      <footer id="contact" style={{textAlign: 'center', padding: '4rem', color: '#94a3b8'}}>
        <h3>Contact</h3>
        <p>Email: alena@example.local</p>
        <p>&copy; {new Date().getFullYear()} Alen Barnes. Computational Systems Builder.</p>
      </footer>
    </div>
  );
}

export default App;
