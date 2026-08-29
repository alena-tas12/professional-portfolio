import React, { useState } from 'react';
import './App.css';

const systems = [
  {
    id: 'chrono',
    title: 'Chrono',
    subtitle: 'Human-centric cognitive environment',
    description: 'A local-first system designed around continuity, context, memory, state, reasoning and interaction across time.',
    category: 'Human Systems'
  },
  {
    id: 'genesis',
    title: 'Project Genesis',
    subtitle: 'Computational educational-system simulator',
    description: 'A deterministic simulation platform for modelling educational architectures, learners, institutions and long-term educational trajectories.',
    category: 'Educational Systems'
  },
  {
    id: 'netsage',
    title: 'NetSage',
    subtitle: 'Hybrid network reasoning system',
    description: 'Network observation and troubleshooting combining deterministic network checks with AI-assisted reasoning.',
    category: 'Networks & Infra'
  },
  {
    id: 'green-dashboard',
    title: 'Green Dashboard',
    subtitle: 'Cyber-physical energy system',
    description: 'Physical sensing → telemetry → backend → analytics → human-facing dashboard.',
    category: 'Physical Systems'
  }
];

function SystemMap() {
  return (
    <div className="system-map">
      <div className="node root-node">ALEN</div>
      <div className="line vertical"></div>
      <div className="node concept-node">SYSTEMS THINKING</div>
      <div className="line vertical"></div>
      
      <div className="horizontal-bar top-bar"></div>
      <div className="trinity-nodes">
        <div className="node concept-node">MODEL</div>
        <div className="node concept-node">OBSERVE</div>
        <div className="node concept-node">REASON</div>
      </div>
      <div className="horizontal-bar bottom-bar"></div>
      
      <div className="line vertical"></div>
      <div className="node concept-node">ARCHITECT</div>
      <div className="line vertical"></div>
      
      <div className="horizontal-bar wide-bar"></div>
      <div className="domain-nodes">
        <div className="domain-col">
          <div className="node domain-node">Human<br/>Systems</div>
          <div className="line vertical small"></div>
          <div className="node project-node">Chrono</div>
        </div>
        <div className="domain-col">
          <div className="node domain-node">Education<br/>Systems</div>
          <div className="line vertical small"></div>
          <div className="node project-node">Genesis</div>
        </div>
        <div className="domain-col">
          <div className="node domain-node">AI<br/>Systems</div>
          <div className="line vertical small"></div>
          <div className="node project-node">AI Workflow</div>
        </div>
        <div className="domain-col">
          <div className="node domain-node">Networks<br/>& Infra</div>
          <div className="line vertical small"></div>
          <div className="node project-node">NetSage</div>
        </div>
        <div className="domain-col">
          <div className="node domain-node">Physical<br/>Systems</div>
          <div className="line vertical small"></div>
          <div className="node project-node">Green</div>
        </div>
      </div>
    </div>
  );
}

function HowIThink() {
  return (
    <div className="how-i-think fade-in">
      <h2>How I Think</h2>
      <div className="think-grid">
        <div className="think-card">
          <h3>Architecture before implementation</h3>
          <p>I ask <em>"What should the system actually be?"</em> before <em>"What framework should I use?"</em>. Chrono treats the system as a cognitive environment with explicit subsystem ownership, a world model, and a 15-stage cognitive pipeline.</p>
        </div>
        <div className="think-card">
          <h3>Systems rather than isolated features</h3>
          <p>Decomposing problems into: Environment &rarr; State &rarr; Observation &rarr; Representation &rarr; Reasoning &rarr; Decision &rarr; Action &rarr; Feedback &rarr; Updated state.</p>
        </div>
        <div className="think-card">
          <h3>Evidence before inference</h3>
          <p>Don't invent state. Observed evidence &rarr; candidate hypothesis &rarr; verification &rarr; confidence &rarr; active belief.</p>
        </div>
        <div className="think-card">
          <h3>AI as an instrument</h3>
          <p>I am not just a "person who uses AI." I use AI systems as engineering instruments across architecture exploration, implementation, debugging, research, prototyping, and evaluation.</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
      <nav className="top-nav">
        <div className="nav-brand">ALEN BARNES</div>
        <div className="nav-links">
          <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</button>
          <button className={activeTab === 'systems' ? 'active' : ''} onClick={() => setActiveTab('systems')}>Systems</button>
          <button className={activeTab === 'think' ? 'active' : ''} onClick={() => setActiveTab('think')}>How I Think</button>
          <button className={activeTab === 'inventory' ? 'active' : ''} onClick={() => setActiveTab('inventory')}>Master Record</button>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'home' && (
          <div className="fade-in">
            <header className="hero-section">
              <h1 className="title">Alen Barnes</h1>
              <h2 className="subtitle">Computational Systems Builder</h2>
              <div className="tags-row">
                <span>Architecture</span> • <span>AI Systems</span> • <span>Computational Modelling</span> • <span>Infrastructure</span>
              </div>
              <p className="hero-desc">
                I design and build computational systems that model, observe, reason about, and interact with complex environments.
              </p>
              <p className="hero-subdesc">
                My work spans AI systems, computational simulation, human-system interaction, networking, cloud infrastructure, and embedded systems.
              </p>
            </header>
            
            <div className="system-map-container">
              <SystemMap />
            </div>
          </div>
        )}

        {activeTab === 'systems' && (
          <div className="fade-in systems-view">
            <h2>Selected Systems</h2>
            <div className="systems-list">
              {systems.map(sys => (
                <div key={sys.id} className="system-card">
                  <div className="system-category">{sys.category}</div>
                  <h3 className="system-title">{sys.title}</h3>
                  <h4 className="system-subtitle">{sys.subtitle}</h4>
                  <p className="system-desc">{sys.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'think' && <HowIThink />}
        
        {activeTab === 'inventory' && (
          <div className="fade-in text-center" style={{padding: '4rem'}}>
            <h2>Master Professional Record</h2>
            <p style={{color: 'var(--text-muted)'}}>The uncompressed architectural record of all implementations, simulations, and infrastructure pipelines.</p>
            <p><em>(Render the deep-dive record here)</em></p>
          </div>
        )}
      </main>

      <footer>
        &copy; {new Date().getFullYear()} Alen Barnes. Computational Systems Builder.
      </footer>
    </div>
  );
}

export default App;
