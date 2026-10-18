import React, { useState } from 'react';
import './App.css';
import { masterRecord } from './data.js';

function DeepCaseStudyCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`card ${expanded ? 'expanded-card' : ''}`} style={{ transition: 'all 0.3s ease', cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 className="card-title" style={{ margin: '0 0 0.5rem 0' }}>{project.name}</h3>
          <p className="card-desc" style={{ color: '#06b6d4', fontWeight: 'bold', fontSize: '0.9rem', margin: '0 0 1rem 0' }}>{project.classification}</p>
        </div>
        <span style={{ color: '#94a3b8', fontSize: '1.2rem' }}>{expanded ? '−' : '+'}</span>
      </div>
      
      {!expanded && (
        <p className="card-desc">{project.problem}</p>
      )}

      {expanded && (
        <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }} onClick={(e) => e.stopPropagation()}>
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{color:'#e2e8f0'}}>The Problem:</strong> <span style={{color:'#94a3b8'}}>{project.problem}</span>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{color:'#e2e8f0'}}>System Model:</strong> <span style={{color:'#94a3b8'}}>{project.systemModel}</span>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{color:'#e2e8f0'}}>Architecture:</strong> <span style={{color:'#94a3b8'}}>{project.architecture}</span>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{color:'#e2e8f0'}}>Implementation:</strong> <span style={{color:'#94a3b8'}}>{project.implementation}</span>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{color:'#e2e8f0'}}>Current Status:</strong> <span style={{color:'#06b6d4'}}>{project.status}</span>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{color:'#e2e8f0'}}>Evidence:</strong> <span style={{color:'#94a3b8'}}>{project.evidence.join(' • ')}</span>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <a href={project.repository} target="_blank" rel="noreferrer" className="card-link" style={{ display: 'inline-block', background: 'rgba(6,182,212,0.1)', padding: '0.5rem 1rem', borderRadius: '4px' }}>
              View Repository &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const { profile, intellectualIdentity, flagshipSystems, engineeringDomains, academicAndExperiments, education, aiWorkflow } = masterRecord;

  return (
    <div className="app-container">
      <header className="hero-section">
        <div className="hero-content">
          <div className="avatar-wrapper">
            <img 
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=0D8ABC&color=fff&size=150&bold=true`} 
              alt={profile.name} 
              className="hero-avatar"
            />
          </div>
          <h1 className="title">{profile.name}</h1>
          <p className="subtitle">{profile.title}</p>
          <p className="hero-taglines">
            {profile.taglines.join(' • ')}
          </p>
          <p className="hero-description">
            {profile.description}
          </p>
          <div className="nav-links">
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-primary">GitHub</a>
            <a href="#systems" className="btn btn-secondary">Explore Systems</a>
            <a href="#record" className="btn btn-primary">Professional Record</a>
          </div>
        </div>
      </header>

      <main className="content-section">
        
        {/* Intellectual Identity / System Map */}
        <div id="intellectual" style={{marginBottom: '6rem'}}>
          <h2 className="section-title">The Architecture of My Work</h2>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '8px', marginBottom: '3rem', borderLeft: '4px solid #06b6d4', fontFamily: 'monospace', color: '#e2e8f0', lineHeight: '1.8' }}>
            <p>VIAN ALEN BARNES</p>
            <p> │</p>
            <p> SYSTEMS THINKING</p>
            <p> │</p>
            <p> ├── MODEL ── OBSERVE ── REASON</p>
            <p> │</p>
            <p> └── ARCHITECT ── IMPLEMENT ── EVALUATE ── FEEDBACK</p>
            <br />
            <p style={{color: '#94a3b8'}}>This engineering pattern connects my work across {intellectualIdentity.systemMap[2].replace('Domains: ', '')}.</p>
          </div>

          <h3 style={{color: '#e2e8f0', marginBottom: '2rem', textAlign: 'center'}}>{intellectualIdentity.title}</h3>
          <div className="grid">
            {intellectualIdentity.principles.map((item, idx) => (
              <div className="card" key={idx}>
                <h3 className="card-title" style={{fontSize: '1.1rem'}}>{item.concept}</h3>
                <p className="card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flagship Systems (Deep Case Studies) */}
        <div id="systems" style={{marginBottom: '6rem'}}>
          <h2 className="section-title">Flagship Systems</h2>
          <p style={{textAlign: 'center', color: '#94a3b8', marginBottom: '3rem'}}>Click a system to expand its architectural case study.</p>
          <div className="grid">
            {flagshipSystems.map(sys => (
              <DeepCaseStudyCard key={sys.id} project={sys} />
            ))}
          </div>
        </div>

        {/* Academic & Experiments */}
        <div id="experiments" style={{marginBottom: '6rem'}}>
          <h2 className="section-title">Academic & Experiments</h2>
          <div className="grid">
            {academicAndExperiments.map((exp, idx) => (
              <div className="card" key={idx} style={{padding: '1.5rem'}}>
                <h3 className="card-title" style={{fontSize: '1.1rem'}}>{exp.name}</h3>
                <p className="card-desc" style={{fontSize: '0.9rem', color: '#06b6d4'}}>{exp.classification} | {exp.status}</p>
                <p className="card-desc" style={{fontSize: '0.9rem'}}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Domains */}
        <div id="domains" style={{marginBottom: '6rem'}}>
          <h2 className="section-title">Technical Domains</h2>
          <div className="grid">
            {engineeringDomains.map((domain, idx) => (
              <div className="card" key={idx} style={{background: 'rgba(15, 23, 42, 0.5)'}}>
                <h3 className="card-title">{domain.category}</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {domain.skills.map(skill => (
                    <span key={skill} style={{background: 'rgba(6,182,212,0.1)', color: '#06b6d4', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.85rem'}}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Record / Resume */}
        <div id="record" style={{padding: '4rem 3rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'}}>
          <h2 className="section-title" style={{marginBottom: '1rem'}}>Master Professional Record</h2>
          <p style={{textAlign: 'center', color: '#94a3b8', marginBottom: '3rem'}}>
            <a href="#" style={{color: '#06b6d4', textDecoration: 'none', borderBottom: '1px dashed #06b6d4'}}>Download Formal PDF Resume</a>
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
            <div>
              <h3 style={{color: '#e2e8f0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem'}}>Education</h3>
              {education.map((ed, idx) => (
                <div key={idx}>
                  <strong style={{color: '#fff'}}>{ed.degree}</strong>
                  <p style={{color: '#94a3b8', margin: '0.2rem 0'}}>{ed.institution}</p>
                  <p style={{color: '#06b6d4', fontSize: '0.9rem', margin: 0}}>CGPA: {ed.gpa} | {ed.status}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{color: '#e2e8f0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem'}}>Experience & Research</h3>
              <div>
                <strong style={{color: '#fff'}}>{profile.title}</strong>
                <p style={{color: '#94a3b8', margin: '0.2rem 0'}}>Independent Research & Engineering</p>
                <ul style={{color: '#94a3b8', paddingLeft: '1.2rem', margin: '0.5rem 0', lineHeight: '1.6'}}>
                  <li>Architected Chrono, a 15-stage cognitive pipeline world model.</li>
                  <li>Built Genesis, a deterministic educational-system simulator.</li>
                  <li>Deployed NetSage, an AI-assisted network reasoning tool.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 style={{color: '#e2e8f0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem'}}>AI-Augmented Engineering</h3>
              <p style={{color: '#94a3b8', lineHeight: '1.6'}}>{aiWorkflow}</p>
            </div>
          </div>
        </div>

      </main>

      <footer id="contact" style={{textAlign: 'center', padding: '4rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem'}}>
        <h3 style={{color: '#e2e8f0', marginBottom: '2rem'}}>Connect</h3>
        <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem'}}>
          <a href={`mailto:${profile.email}`} style={{color: '#06b6d4', textDecoration: 'none'}}>Email</a>
          <a href={profile.linkedin} style={{color: '#06b6d4', textDecoration: 'none'}}>LinkedIn</a>
          <a href={profile.github} style={{color: '#06b6d4', textDecoration: 'none'}}>GitHub</a>
        </div>
        <p>&copy; {new Date().getFullYear()} {profile.name}. {profile.title}.</p>
      </footer>
    </div>
  );
}

export default App;
