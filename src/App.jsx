import React from 'react';
import './App.css';
import { intellectualIdentity, flagshipSystems, technicalDomains } from './data';

function App() {
  return (
    <>
      <nav>
        <div className="nav-brand">ALEN BARNES</div>
        <div className="nav-links">
          <a href="#map">System Map</a>
          <a href="#intellectual">How I Think</a>
          <a href="#systems">Flagship Systems</a>
          <a href="#domains">Domains</a>
        </div>
      </nav>

      <div className="portfolio-wrapper">
        <header className="hero">
          <h1>ALEN BARNES</h1>
          <h2>Computational Systems Builder</h2>
          <div className="hero-disciplines">
            Architecture &middot; AI Systems &middot; Computational Modelling &middot; Infrastructure
          </div>
          <p>I design and build computational systems that model, observe, reason about, and interact with complex environments.</p>
        </header>

        <section id="map" className="system-map-section">
          <h3>The System Map</h3>
          <div className="map-container">
            <div className="node core">ALEN BARNES</div>
            <div className="line vertical"></div>
            <div className="node">SYSTEMS THINKING</div>
            <div className="line vertical"></div>
            <div className="line horizontal"></div>
            <div className="map-row">
              <div className="node domain">MODEL</div>
              <div className="node domain">OBSERVE</div>
              <div className="node domain">REASON</div>
            </div>
            <div className="line horizontal" style={{marginTop: '20px'}}></div>
            <div className="line vertical"></div>
            <div className="node core">ARCHITECT</div>
            <div className="line vertical"></div>
            <div className="line horizontal" style={{width: '900px'}}></div>
            <div className="map-row" style={{width: '1000px', marginTop: '20px'}}>
              <div className="map-col">
                <div className="node domain">Human Systems</div>
                <div className="line vertical" style={{height: '20px'}}></div>
                <div className="node" style={{borderColor: 'var(--accent-blue)'}}>Chrono</div>
              </div>
              <div className="map-col">
                <div className="node domain">Education Systems</div>
                <div className="line vertical" style={{height: '20px'}}></div>
                <div className="node" style={{borderColor: 'var(--accent-blue)'}}>Genesis</div>
              </div>
              <div className="map-col">
                <div className="node domain">AI Systems</div>
                <div className="line vertical" style={{height: '20px'}}></div>
                <div className="node" style={{borderColor: 'var(--accent-blue)'}}>Engineering Workflow</div>
              </div>
              <div className="map-col">
                <div className="node domain">Networks & Infra</div>
                <div className="line vertical" style={{height: '20px'}}></div>
                <div className="node" style={{borderColor: 'var(--accent-blue)'}}>NetSage</div>
              </div>
              <div className="map-col">
                <div className="node domain">Physical Systems</div>
                <div className="line vertical" style={{height: '20px'}}></div>
                <div className="node" style={{borderColor: 'var(--accent-blue)'}}>Green Dashboard</div>
              </div>
            </div>
          </div>
        </section>

        <section id="intellectual" className="intellectual-identity">
          <h3>How I Think</h3>
          <p>Different domains. Same mind. Same engineering pattern.</p>
          <div className="identity-grid">
            {intellectualIdentity.map((item, idx) => (
              <div className="identity-card" key={idx}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="systems" className="systems-section">
          <h3>Flagship Systems</h3>
          {flagshipSystems.map(system => (
            <div className="case-study" key={system.id}>
              <div className="case-header">
                <div>
                  <h4>{system.name}</h4>
                  <div className="case-class">{system.classification}</div>
                </div>
                <div className="status-badge">{system.status}</div>
              </div>
              <div className="case-body">
                <h5>Problem</h5>
                <p>{system.problem}</p>
                <h5>Architecture</h5>
                <p>{system.architecture}</p>
                <h5>Evidence</h5>
                <p style={{fontFamily: 'monospace', color: 'var(--accent-cyan)'}}>{system.evidence}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="domains" className="systems-section" style={{borderTop: '1px solid var(--border-light)'}}>
          <h3>Engineering Domains</h3>
          <div className="domains-grid">
            <div className="domain-group">
              <h4>Systems & Architecture</h4>
              <ul>{technicalDomains.systems.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="domain-group">
              <h4>AI & Computation</h4>
              <ul>{technicalDomains.ai.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="domain-group">
              <h4>Software</h4>
              <ul>{technicalDomains.software.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="domain-group">
              <h4>Networking</h4>
              <ul>{technicalDomains.networking.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="domain-group">
              <h4>Infrastructure</h4>
              <ul>{technicalDomains.infrastructure.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="domain-group">
              <h4>Embedded & IoT</h4>
              <ul>{technicalDomains.embedded.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          </div>
        </section>
        
        <footer style={{textAlign: 'center', padding: '3rem', borderTop: '1px solid var(--border-light)', color: 'var(--text-muted)'}}>
          &copy; {new Date().getFullYear()} Alen Barnes. Computational Systems Builder.
        </footer>
      </div>
    </>
  );
}

export default App;
