export const masterRecord = {
  profile: {
    name: 'Alen Barnes',
    title: 'Computational Systems Builder',
    taglines: ['Architecture', 'AI Systems', 'Computational Modelling', 'Infrastructure'],
    description: 'I design and build computational systems that model, observe, reason about, and interact with complex environments. My work spans AI systems, computational simulation, human-system interaction, networking, cloud infrastructure, and embedded systems.',
    email: 'alena@example.local',
    github: 'https://github.com/alena-tas12',
    linkedin: 'https://linkedin.com'
  },
  intellectualIdentity: {
    title: "How I Think",
    principles: [
      {
        concept: "Architecture before implementation",
        description: "I define system boundaries, state, responsibilities, interactions, and interfaces before choosing implementation details."
      },
      {
        concept: "Systems over features",
        description: "I am interested in how components interact as a system rather than treating each feature as an isolated object."
      },
      {
        concept: "Evidence before inference",
        description: "Systems should distinguish observed state from assumptions and hypotheses."
      },
      {
        concept: "Model before optimization",
        description: "A system needs an understandable model of what it is doing before optimization or automation becomes meaningful."
      },
      {
        concept: "Human Agency & Continuity",
        description: "AI should function as an engineering component or augmentation layer, not automatically replace human judgment."
      }
    ],
    systemMap: [
      "ALEN -> SYSTEMS THINKING",
      "MODEL -> OBSERVE -> REASON -> ARCHITECT -> IMPLEMENT -> EVALUATE -> FEEDBACK",
      "Domains: AI, Education, Networks, Software, Infrastructure, IoT, Human/System interaction"
    ]
  },
  flagshipSystems: [
    {
      id: 'chrono',
      name: 'Chrono',
      classification: 'Human-Centric Cognitive Environment',
      problem: 'Designing a computational environment where the continuity of the human user—not isolated tasks—is the primary design constraint.',
      systemModel: 'Local-first ecosystem tracking continuity, context, memory, state, and reasoning across time.',
      architecture: '15-layer cognitive pipeline: World Model, Observation, Perception, Attention, Memory, Belief Revision, Prediction, Goals, Simulation, Arbitration, Recommendation, Confirmation, Execution, Reflection, Learning.',
      implementation: 'Electron runtime, Context database, Event Bus, Local inference models.',
      status: 'Implemented & Architected',
      repository: '#',
      evidence: ['System Architecture Document', 'Cognitive Pipeline Schematic', 'Local Prototype']
    },
    {
      id: 'genesis',
      name: 'Project Genesis',
      classification: 'Computational Educational-System Simulator',
      problem: 'Modelling and comparing macro-level educational architectures and long-term educational trajectories.',
      systemModel: 'Finite deterministic simulation platform incorporating student/faculty agents, knowledge DAGs, and longitudinal retention modelling.',
      architecture: 'Simulation Engine -> State Tracking -> Comparative Metrics -> 3D WebGL Visualization Engine.',
      implementation: 'TypeScript, React, WebGL, Node.js backend for simulation state.',
      status: 'Implemented & Research',
      repository: 'https://github.com/alena-tas12/educational-system-simulations',
      evidence: ['Simulation Engine', 'Taxonomy Research', 'SIH/MoSPI Extension Application']
    },
    {
      id: 'netsage',
      name: 'NetSage',
      classification: 'Network Observation & Reasoning System',
      problem: 'Combining deterministic network state observation with AI-assisted diagnostic reasoning.',
      systemModel: 'Network State → Observation → Diagnosis → Reasoning → Action → Verification.',
      architecture: 'Integrates simulated VLANs, DHCP, NAT, and firewalls with LLM diagnostic reasoning.',
      implementation: 'Python backend, Cisco Packet Tracer environments, automation scripts.',
      status: 'Implemented',
      repository: '#',
      evidence: ['Python Backend Code', 'Cisco Topology Diagrams', 'Routing Tables']
    },
    {
      id: 'green-dashboard',
      name: 'Green Dashboard',
      classification: 'Cyber-Physical IoT Energy System',
      problem: 'Bridging raw physical telemetry with real-time software dashboards for sustainable energy monitoring.',
      systemModel: 'Sensors → Microcontroller → Telemetry → Backend → Data → Analytics → Dashboard.',
      architecture: 'Arduino/ESP8266 reading physical state, transmitting via MQTT/HTTP to Node.js backend, stored in Supabase, visualized in React.',
      implementation: 'Hardware sensors, C++ firmware, Node.js, React.',
      status: 'Implemented',
      repository: 'https://github.com/alena-tas12/GreenDashboardMicroprojectEntrepreneurship',
      evidence: ['Hardware prototype photos', 'Firmware code', 'Cloud Dashboard']
    }
  ],
  academicAndExperiments: [
    {
      name: 'Eco Tracker / Fertilizer Hackathon',
      classification: 'AI-Assisted Food-Waste Platform',
      description: 'Computer vision concept for food waste analysis and NPK modelling to calculate fertilizer requirements.',
      status: 'Prototype',
      repository: 'https://github.com/alena-tas12/FINAL_Hackathon_fertilizer_project'
    },
    {
      name: 'Python Final & Maths Algorithms',
      classification: 'Academic Mathematics',
      description: 'Algorithmic programming and data logic implementations showcasing computational mathematics.',
      status: 'Academic',
      repository: 'https://github.com/alena-tas12/python-final'
    }
  ],
  engineeringDomains: [
    {
      category: 'Systems & Architecture',
      skills: ['System Architecture', 'Modular Design', 'System Integration', 'Computational Modelling', 'Simulation', 'C4 Architecture']
    },
    {
      category: 'AI & Computation',
      skills: ['AI Systems', 'Machine Learning', 'Data Analysis', 'Reasoning Systems', 'AI-Assisted Engineering']
    },
    {
      category: 'Software Engineering',
      skills: ['Python', 'TypeScript', 'JavaScript', 'React', 'Node.js', 'Electron', 'Databases']
    },
    {
      category: 'Networking & Infra',
      skills: ['Cisco Networking', 'VLANs', 'DHCP', 'DNS', 'Firewalls', 'Routing', 'Linux', 'Docker', 'GCP']
    },
    {
      category: 'Embedded & IoT',
      skills: ['Arduino', 'ESP-class microcontrollers', '8051', 'ARM7', 'Sensors', 'Telemetry']
    }
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'University',
      gpa: '8.64/10.0',
      status: 'Completed'
    }
  ],
  aiWorkflow: 'AI-Assisted Dev: ChatGPT, Codex, Claude, Cursor, Windsurf, Antigravity, Perplexity used actively for architecture exploration, implementation, prototyping, and evaluation.'
};
