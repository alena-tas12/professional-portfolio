import React, { useState } from 'react';
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

function MasterRecord({ onBack }) {
  return (
    <div className="master-record-container fade-in">
      <button onClick={onBack} className="btn btn-secondary back-btn">&larr; Back to Highlights</button>
      
      <div className="record-header">
        <h1>Master Professional Record</h1>
        <p>The uncompressed, 100% complete inventory of engineering capabilities, architecture, and systems history.</p>
      </div>

      <div className="record-content">
        <section className="record-section">
          <h2>1. Professional Identity</h2>
          <p>
            <strong>Systems-oriented Computer Engineering student</strong> specializing in Data Science and Cybersecurity, focused on architecture, computational modelling, AI systems, and intelligent human-system interaction. Designs and integrates modular systems across software, networks, cloud infrastructure, and embedded environments, using AI-augmented engineering workflows to model, observe, reason about, and interact with complex systems.
          </p>
        </section>

        <section className="record-section">
          <h2>2. Core Systems & Projects</h2>
          
          <div className="record-item">
            <h3>Chrono – Context-Aware Personal Intelligence System</h3>
            <p><span className="status-badge implemented">IMPLEMENTED</span> <span className="status-badge architected">ARCHITECTED</span></p>
            <ul>
              <li><strong>Stack:</strong> Electron, React, TypeScript, Node.js, Prisma, Local AI</li>
              <li><strong>Architecture:</strong> Local-first human-centric cognitive environment integrating memory, context, scheduling, and AI orchestration.</li>
              <li><strong>Capabilities:</strong> Human-system interaction, cognitive contracts, modular desktop infrastructure (separated frontend, API, data layers).</li>
            </ul>
          </div>

          <div className="record-item">
            <h3>Project Genesis – Educational-System Simulation Platform</h3>
            <p><span className="status-badge implemented">IMPLEMENTED</span> <span className="status-badge architected">ARCHITECTED</span></p>
            <ul>
              <li><strong>Stack:</strong> TypeScript, React, Three.js, Node.js</li>
              <li><strong>Architecture:</strong> Modular simulation representing learners, teachers, knowledge structures, and macro-level socio-economic effects.</li>
              <li><strong>Capabilities:</strong> Deterministic simulation, seeded randomness, agent engines, knowledge DAGs, longitudinal modelling.</li>
            </ul>
          </div>

          <div className="record-item">
            <h3>NetSage AI – Hybrid Network Troubleshooting System</h3>
            <p><span className="status-badge implemented">IMPLEMENTED</span></p>
            <ul>
              <li><strong>Stack:</strong> Python, AI (LLMs), Cisco Networking, Backend Testing</li>
              <li><strong>Architecture:</strong> Hybrid AI-assisted network troubleshooting combining deterministic rule-based checks with LLM reasoning.</li>
              <li><strong>Capabilities:</strong> Network observation across simulated VLANs, DHCP, NAT, firewalls; end-to-end Python test infrastructure.</li>
            </ul>
          </div>

          <div className="record-item">
            <h3>Cloud & On-Premise Infrastructure System</h3>
            <p><span className="status-badge implemented">IMPLEMENTED</span></p>
            <ul>
              <li><strong>Stack:</strong> Google Cloud Platform (GCP), VirtualBox, Linux, Ngrok, DNS, SSH</li>
              <li><strong>Architecture:</strong> Scalable cloud infrastructure interacting with local Linux server environments.</li>
              <li><strong>Capabilities:</strong> GCP Compute Engine VMs, local Linux configuration, custom DNS routing, secure public tunneling.</li>
            </ul>
          </div>

          <div className="record-item">
            <h3>Green Dashboard – IoT Energy Monitoring System</h3>
            <p><span className="status-badge implemented">IMPLEMENTED</span></p>
            <ul>
              <li><strong>Stack:</strong> Node.js, React, Arduino, ESP8266, Supabase, Prisma</li>
              <li><strong>Architecture:</strong> End-to-end IoT monitoring connecting physical sensors to a real-time software dashboard.</li>
              <li><strong>Capabilities:</strong> Cyber-physical systems integration, embedded firmware, real-time telemetry, responsive mapping.</li>
            </ul>
          </div>
        </section>

        <section className="record-section">
          <h2>3. Cross-Domain Engineering Capabilities</h2>
          <div className="record-grid">
            <div className="record-grid-item">
              <h4>Architecture & System Design</h4>
              <p>System decomposition, modular architectures, agent architectures, orchestration, retrieval mechanisms, simulation architecture. Workflow: Problem &rarr; Conceptualization &rarr; Architecture &rarr; AI-assisted exploration &rarr; Implementation &rarr; Integration.</p>
            </div>
            <div className="record-grid-item">
              <h4>Hardware &rarr; Software Integration</h4>
              <p>Physical sensor &rarr; Microcontroller &rarr; Communication &rarr; Server &rarr; Data processing &rarr; Dashboard. Working with Arduino, ESP8266/ESP32, 8051, ARM7, sensors, relays.</p>
            </div>
            <div className="record-grid-item">
              <h4>Deep Networking Integration</h4>
              <p>Router &rarr; Switch &rarr; VLANs &rarr; DHCP &rarr; Inter-VLAN routing &rarr; NAT &rarr; DNS &rarr; SSH &rarr; Firewall / ASA. Executed via Cisco Packet Tracer and physical infrastructure.</p>
            </div>
            <div className="record-grid-item">
              <h4>AI & Data Engineering</h4>
              <p>AI-Assisted Workflow using ChatGPT, Codex, Claude, Cursor, Windsurf, Antigravity, Perplexity. Model usage for research, debugging, and computational logic (TensorFlow, PyTorch).</p>
            </div>
          </div>
        </section>

        <section className="record-section">
          <h2>4. Leadership & Organization</h2>
          <p>
            <strong>Roles:</strong> Prefect & Tech Support, Sports Captain (Hebron School). HMUN Delegate.<br/>
            <strong>Impact:</strong> Operating with real-world responsibility, managing teams, and integrating with human organizations beyond isolated coding environments.
          </p>
        </section>

      </div>
    </div>
  );
}

function App() {
  const [view, setView] = useState('home');

  if (view === 'master') {
    return (
      <div className="app-container">
        <MasterRecord onBack={() => setView('home')} />
      </div>
    );
  }

  return (
    <div className="app-container fade-in">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="title">Alena Barnes</h1>
          <p className="subtitle">Software Developer & Network Engineer</p>
          <div className="nav-links">
            <button onClick={() => setView('master')} className="btn btn-primary">
              View Master Record
            </button>
            <a href="https://github.com/alena-tas12" target="_blank" rel="noreferrer" className="btn btn-secondary">
              GitHub Profile
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
