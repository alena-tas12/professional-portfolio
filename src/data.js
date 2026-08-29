export const intellectualIdentity = [
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

export const flagshipSystems = [
  {
    id: 'chrono',
    name: 'Chrono',
    classification: 'Human-Centric Cognitive Environment',
    problem: 'What would a computational environment look like if continuity of the human user—not isolated tasks—were the primary design constraint?',
    architecture: 'Local-first ecosystem with a 15-layer cognitive pipeline: World Model, Observation, Perception, Attention, Memory, Belief Revision, Prediction, Goals, Simulation, Arbitration, Recommendation, Confirmation, Execution, Reflection, Learning.',
    status: 'Implemented & Architected',
    evidence: 'Electron Runtime, Context DB, Documentation'
  },
  {
    id: 'genesis',
    name: 'Project Genesis',
    classification: 'Computational Educational-System Simulator',
    problem: 'How do we model and compare macro-level educational architectures and long-term educational trajectories?',
    architecture: 'A finite deterministic simulation platform. Incorporates student/faculty agents, knowledge DAGs, longitudinal modelling, and a 3D WebGL visualization engine.',
    status: 'Implemented & Research',
    evidence: 'Simulation Engine, Taxonomy Research, SIH Extension'
  },
  {
    id: 'netsage',
    name: 'NetSage',
    classification: 'Network Observation & Reasoning System',
    problem: 'How can we combine deterministic network state observation with AI-assisted diagnostic reasoning?',
    architecture: 'Network State → Observation → Diagnosis → Reasoning → Action → Verification. Integrates simulated VLANs, DHCP, NAT, and firewalls with LLM reasoning.',
    status: 'Implemented',
    evidence: 'Python Backend, Cisco Topology'
  },
  {
    id: 'green-dashboard',
    name: 'Green Dashboard',
    classification: 'Cyber-Physical IoT Energy System',
    problem: 'How do we bridge raw physical telemetry with real-time software dashboards for energy monitoring?',
    architecture: 'Sensors → Arduino/ESP8266 → Telemetry → Node.js Backend → Supabase Database → React Analytics Dashboard.',
    status: 'Implemented',
    evidence: 'Hardware, Firmware, Cloud Dashboard'
  }
];

export const technicalDomains = {
  systems: ['System architecture', 'Modular design', 'System integration', 'Computational modelling', 'Simulation'],
  ai: ['Artificial intelligence', 'Machine learning', 'Computational modelling', 'AI-assisted engineering', 'Reasoning systems'],
  software: ['Python', 'TypeScript', 'React', 'Node.js', 'Electron', 'APIs', 'Databases'],
  networking: ['Cisco networking', 'VLANs', 'DHCP', 'DNS', 'Routing', 'Firewalls', 'Network observation'],
  infrastructure: ['Linux', 'GCP', 'Virtualization', 'Docker', 'Deployment', 'Tunnelling'],
  embedded: ['Arduino', 'ESP-class microcontrollers', '8051', 'ARM7', 'Sensors', 'Telemetry']
};
