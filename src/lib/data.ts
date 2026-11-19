export interface Project {
  id: string
  number: string
  title: string
  category: 'fintech' | 'healthtech' | 'governance'
  categoryLabel: string
  role: string
  narrative: string
  architecture: string
  metrics: {
    label: string
    value: string
  }[]
  actionLabel: string
  caseStudy: {
    overview: string
    challenge: string
    solution: string
    systemArchitecture: string[]
    impactStats: { label: string; value: string; desc: string }[]
    governanceNote?: string
    clientOrRegion: string
    status: string
  }
}

export interface Pillar {
  number: string
  title: string
  category: string
  description: string
  capabilities: string[]
  metricsSummary: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  deliverable: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  readTime: string
  category: string
  excerpt: string
  content: {
    intro: string
    sections: {
      heading: string
      body: string
      quote?: string
    }[]
    takeaways: string[]
  }
}

export const PROJECTS: Project[] = [
  {
    id: 'qavast',
    number: '01',
    title: 'QAVAST',
    category: 'fintech',
    categoryLabel: 'FINTECH & LOGISTICS',
    role: 'PRODUCT LEAD / VP // FINTECH AND LOGISTICS // SCALED TO 1.4M+ USERS',
    narrative:
      'Engineered scalable financial ledger and micro-credit disbursement pipeline, transforming fragmented SME supply chain liquidity into automated, transparent daily settlement systems.',
    architecture:
      'ARCHITECTED WITH NEXT.JS 15, GO MICROSERVICES, TAILWIND, AWS ECS/LAMBDA, DOCKER, POSTGRESQL MULTI-REGION REPLICATION.',
    metrics: [
      { label: 'TRANSACTION VOLUME', value: '$18.2M ANNUALIZED' },
      { label: 'LATENCY', value: '99.98% SLA / <120MS P99' },
      { label: 'OUTCOME', value: 'DISBURSEMENT: 4 DAYS → <90 SEC' },
    ],
    actionLabel: 'READ EXECUTIVE CASE STUDY',
    caseStudy: {
      overview:
        'Qavast is a Tier-1 institutional financial settlement and liquidity distribution platform operating across East Africa. It provides supply-chain financing and automated daily reconciliation for thousands of commercial merchants.',
      challenge:
        'Traditional merchant reconciliation required manual ledger audits, bank batch reconciliations taking 3 to 4 business days, and suffered from high operational default rates due to fragmented data verification.',
      solution:
        'Designed an event-driven ledger utilizing Go microservices, strict idempotent transaction queues, and double-entry bookkeeping with automated cryptographic verification. Embedded risk-scoring telemetry into the disbursement pipeline.',
      systemArchitecture: [
        'Next.js 15 Client with real-time SSE financial ticker and optimistic reconciliation UI',
        'High-concurrency Go microservices handling payment dispatch, ledger consensus, and audit events',
        'PostgreSQL with read-replicas, row-level locks, and multi-region automated replication',
        'AWS ECS Fargate, Lambda serverless webhooks, and Redis transaction locks',
        'Integrated with regional automated clearinghouses and mobile money networks (M-Pesa / RTGS)',
      ],
      impactStats: [
        { label: '$18.2M', value: 'Annualized GTV', desc: 'Processed without single reconciliation drift incident' },
        { label: '90s', value: 'Disbursement Latency', desc: 'Down from traditional 4-day bank settlement' },
        { label: '1.4M+', value: 'Active Users Served', desc: 'Transacting across multiple retail supply nodes' },
      ],
      governanceNote: 'Complies with regional central bank data residency mandates and anti-money laundering (AML) tiering.',
      clientOrRegion: 'East Africa / Cross-border',
      status: 'Live & Operational (Production)',
    },
  },
  {
    id: 'mama-sure',
    number: '02',
    title: 'MAMA SURE',
    category: 'healthtech',
    categoryLabel: 'HEALTHCARE LOGISTICS',
    role: 'B2B // HEALTHCARE LOGISTICS & PRENATAL CARE PLATFORM // KENYA & REGIONAL',
    narrative:
      'Patient-first healthtech infrastructure coordinating distributed clinics and maternal health networks, providing dynamic inventory routing and real-time midwife dispatch across rural networks.',
    architecture:
      'DESIGNED WITH DISTRIBUTED OFFLINE-FIRST PWA, GRAPHQL, REDIS QUEUES, HIPPA/LOCAL DATA SOVEREIGNTY COMPLIANT.',
    metrics: [
      { label: 'CARE VISITS', value: '350K+ ENCOUNTERS LOGGED' },
      { label: 'STOCKOUT REDUCTION', value: '-74% DRUG DEFICIT' },
      { label: 'IMPACT', value: 'EXPANDED TO 12 COUNTY CLINICS' },
    ],
    actionLabel: 'READ EXECUTIVE CASE STUDY',
    caseStudy: {
      overview:
        'Mama Sure is a life-critical maternal healthcare platform connecting rural healthcare outposts with centralized clinical specialists, inventory distribution hubs, and rapid transport dispatch.',
      challenge:
        'Rural dispensaries frequently face critical pharmaceutical stockouts and suffer from severe connectivity blackouts, preventing timely prenatal triage and emergency midwife deployment.',
      solution:
        'Architected an offline-first progressive web application with local SQLite/IndexedDB synchronization. Built background CRDT reconciliation that transparently syncs medical records as soon as intermittent connectivity is detected.',
      systemArchitecture: [
        'Offline-First PWA with local encrypted cache and conflict-free replicated data types (CRDT)',
        'GraphQL API gateway with fine-grained field-level encryption for patient confidentiality',
        'Automated pharmaceutical supply forecasting engine predicting stockouts 14 days in advance',
        'SMS fallback telemetry for remote triage centers without mobile data coverage',
        'Strict HIPAA & Kenyan Data Protection Act (DPA 2019) compliance architecture',
      ],
      impactStats: [
        { label: '350K+', value: 'Encounters Tracked', desc: 'Zero record loss across network blackouts' },
        { label: '-74%', value: 'Supply Stockouts', desc: 'Vital prenatal medicine availability guaranteed' },
        { label: '12', value: 'Counties Active', desc: 'Direct partnership with regional public health authorities' },
      ],
      governanceNote: 'Full patient pseudonymization and cryptographic tamper-evident clinical audit trails.',
      clientOrRegion: 'Kenya & East African Regional Outposts',
      status: 'Live & Scaling',
    },
  },
  {
    id: 'ai-governance',
    number: '03',
    title: 'AI GOVERNANCE & COMPLIANCE',
    category: 'governance',
    categoryLabel: 'AI GOVERNANCE & AUDITING',
    role: 'ENTERPRISE RISK ENGINE // COMPLIANT WITH ISO/IEC 42001 & EU AI ACT FRAMEWORK',
    narrative:
      'Comprehensive algorithmic accountability framework and automated risk assessment pipeline. Enforces bias auditing, model drift detection, and continuous compliance telemetry.',
    architecture:
      'PYTHON (FASTAPI), PYTORCH AUDIT HARNESS, OPENAI / LLAMA REASONING ENGINES, OPENSEARCH.',
    metrics: [
      { label: 'STANDARDS', value: 'FULL ISO/IEC 42001' },
      { label: 'RISK MITIGATION', value: '99.4% AUDIT ADHERENCE' },
      { label: 'STATUS', value: 'ENTERPRISE PILOT IMPLEMENTED' },
    ],
    actionLabel: 'READ AUDIT BLUEPRINT',
    caseStudy: {
      overview:
        'An enterprise-grade AI risk management system designed to enforce compliance with ISO/IEC 42001 (Artificial Intelligence Management System) and European AI Act transparency requirements across LLM and predictive model deployments.',
      challenge:
        'Enterprise teams adopting generative AI and autonomous agents lack verifiable guardrails, automated drift detection, model lineage documentation, and formal auditing artifacts required by institutional compliance boards.',
      solution:
        'Engineered an automated compliance harness providing real-time evaluation proxies: detecting hallucination rates, demographic bias, prompt injection vulnerabilities, and generating automated board-level compliance ledgers.',
      systemArchitecture: [
        'Python FastAPI high-throughput evaluation proxy sitting between LLM gateways and applications',
        'PyTorch statistical audit harness running counterfactual fairness and bias distribution testing',
        'OpenSearch vector & log index capturing full model input/output lineage with cryptographic signing',
        'Automated ISO/IEC 42001 clause mapping with one-click audit report generation for regulators',
      ],
      impactStats: [
        { label: 'ISO 42001', value: 'Full Compliance', desc: 'System conforms to international AIMS clauses' },
        { label: '99.4%', value: 'Audit Adherence', desc: 'Verifiable audit pass rate across model clusters' },
        { label: '100%', value: 'Traceable Lineage', desc: 'Every model inference logged with provenance hash' },
      ],
      governanceNote: 'Certified ISO/IEC 42001 Lead Auditor methodologies baked into core architecture.',
      clientOrRegion: 'Enterprise FinTech, InsurTech & HealthTech',
      status: 'Production Architecture / Advisory Engine',
    },
  },
]

export const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'PRODUCT MANAGEMENT',
    category: 'PRIMARY CAPABILITY',
    description:
      'End-to-end product strategy, customer discovery, continuous value delivery, roadmap orchestration, and metrics-driven execution that converts ambiguous problems into market-defining platforms.',
    capabilities: [
      'Product Roadmaps & Strategic Milestone Pacing',
      'Customer Discovery & User Empathy Validation',
      'High-Velocity Sprint & Feature Delivery Cycles',
      'Quantitative OKRs, Financial Unit Economics & Retention',
    ],
    metricsSummary: 'Proven track record leading products from 0-to-1 and scaling to 1.4M+ transacting users.',
  },
  {
    number: '02',
    title: 'SOFTWARE ENGINEERING',
    category: 'ENGINEERING DISCIPLINE',
    description:
      'Full-stack systems architecture, modern reactive web applications, cloud-native backend services, and robust APIs engineered for high-availability, maintainability, and clean code principles.',
    capabilities: [
      'Modern TypeScript, Next.js, React & Node.js',
      'Distributed Cloud Architecture & Scalable Microservices',
      'Database Architecture, PostgreSQL & Redis Optimization',
      'Automated CI/CD, Containerization & High-Reliability Testing',
    ],
    metricsSummary: 'Sub-120ms P99 latency architectures with 99.98% uptime in production environments.',
  },
  {
    number: '03',
    title: 'AI GOVERNANCE & ADVISORY',
    category: 'REGULATORY ASSURANCE',
    description:
      'Structured oversight for enterprise generative and agentic systems, operationalizing safety frameworks, bias auditing, compliance adherence (ISO/IEC 42001), and algorithmic risk management.',
    capabilities: [
      'ISO/IEC 42001 Risk Management & Readiness Audits',
      'Algorithmic Safety, Fairness & Bias Auditing',
      'Model Lineage, Provenance & Explainability Tooling',
      'Board & Executive Level Regulatory Advisory',
    ],
    metricsSummary: 'Certified ISO/IEC 42001 specialist aligning cutting-edge AI with institutional safety standards.',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER & VALIDATE',
    description:
      'Deep problem discovery, customer interviews, friction mapping, and financial/market model stress-testing before writing line one of code.',
    deliverable: 'Validated Problem Dossier & Unit Economics Model',
  },
  {
    number: '02',
    title: 'ARCHITECT CRISPLY',
    description:
      'Pragmatic systems blueprinting focusing on minimal surface area, maximum resilience, clean component boundaries, and verifiable metrics.',
    deliverable: 'Technical Specification & Systems Architecture Diagram',
  },
  {
    number: '03',
    title: 'LEAD & ORCHESTRATE',
    description:
      'High-cadence delivery sprints, cross-functional alignment across engineers, designers, and commercial teams, removing blockers systematically.',
    deliverable: 'Bi-Weekly Shipped Increments & Transparent Burn-Down',
  },
  {
    number: '04',
    title: 'GOVERN RESPONSIBLY',
    description:
      'Integrating rigorous institutional guardrails, algorithmic safety checks, audit logs, and robust compliance into every tier of product infrastructure.',
    deliverable: 'ISO/IEC 42001 Compliance Matrix & Security Verification',
  },
  {
    number: '05',
    title: 'SCALE & ITERATE',
    description:
      'Post-launch telemetry, automated KPI tracking, telemetry analytics, user feedback loops, and sustainable feature evolution.',
    deliverable: 'Continuous Telemetry Ledger & Growth Roadmap',
  },
]

export const BLOGS: BlogPost[] = [
  {
    id: 'pragmatic-product-management',
    slug: 'pragmatic-product-management',
    title: 'Pragmatic Product Management: Why 80% of Roadmaps Fail at the Architectural Seam',
    date: 'OCTOBER 2026',
    readTime: '8 MIN READ',
    category: 'PRODUCT STRATEGY',
    excerpt:
      'Most product roadmaps do not fail because of flawed user research or poor market fit; they disintegrate at the unmapped interface where executive ambition collides with distributed state and technical debt.',
    content: {
      intro:
        'In early-stage technology companies and scaling enterprises alike, a dangerous chasm exists between product roadmaps expressed in slide decks and the physical reality of database locks, distributed network partitions, and technical latency. When product managers treat engineering as a black box that turns user stories into software, the resulting products inevitably succumb to architectural brittleness.',
      sections: [
        {
          heading: '1. The Fallacy of Feature Velocity Over Systems Integrity',
          body:
            'A common trap is treating engineering output purely as feature velocity. Teams celebrate shipping twelve user stories per sprint while overlooking the accumulation of unbounded queries, unindexed foreign keys, and brittle third-party API dependencies. True product velocity is not measured by code committed today, but by the marginal cost and risk of deploying features twelve months from now.',
          quote:
            '"A roadmap that ignores database lock contention is not an ambitious vision—it is an executive hallucination."',
        },
        {
          heading: '2. The Architectural Seam Defined',
          body:
            'The architectural seam is the point of contact where business logic meets data persistence and network protocols. When a product leader understands how Redis pub/sub differs from an event-sourcing ledger in terms of financial idempotency, they design fundamentally better user experiences that anticipate failure states rather than pretending network timeouts never happen.',
        },
        {
          heading: '3. Constructing Resilient Feedback Loops',
          body:
            'Pragmatic product leaders do not separate technical debt from product backlog. They establish unified backlog triage where database query optimization and API latency budgets sit alongside user onboarding funnels. Every user-facing milestone is paired with an actuarial metric: SLA target, P99 latency threshold, and rollback telemetry.',
        },
      ],
      takeaways: [
        'Embed technical architecture constraints directly into PRDs and discovery phases.',
        'Track P99 latency and error budgets alongside traditional activation and retention metrics.',
        'Never delegate technical feasibility analysis purely to downstream sprint planning.',
      ],
    },
  },
  {
    id: 'demystifying-iso-42001',
    slug: 'demystifying-iso-42001',
    title: 'Demystifying ISO/IEC 42001: Operationalizing Responsible AI Without Paralyzing Velocity',
    date: 'NOVEMBER 2026',
    readTime: '12 MIN READ',
    category: 'AI GOVERNANCE',
    excerpt:
      'How high-growth engineering teams can integrate the new international standard for Artificial Intelligence Management Systems (AIMS) into their continuous deployment pipeline.',
    content: {
      intro:
        'As enterprise adoption of generative AI shifts from proof-of-concept experiments to mission-critical operational pipelines, regulatory bodies worldwide are transitioning from high-level ethics manifestos to legally enforceable compliance mandates. ISO/IEC 42001 represents the first verifiable global standard for Artificial Intelligence Management Systems (AIMS).',
      sections: [
        {
          heading: '1. Why Traditional SOC2 and ISO 27001 Are Insufficient',
          body:
            'Traditional information security standards verify data confidentiality, integrity, and availability. They verify that servers are patched and access is restricted. However, they are completely blind to non-deterministic model failure modes: algorithmic bias, reward gaming, prompt injection, and demographic disparity. ISO/IEC 42001 bridges this exact gap by enforcing systematic AI risk assessments and continuous lifecycle evaluation.',
          quote:
            '"Securing the database containing training data does not protect your organization against discriminatory model inference. ISO 42001 is about output integrity."',
        },
        {
          heading: '2. The Four Pillars of an Auditable AI Management System',
          body:
            'Implementing ISO 42001 does not require drowning engineers in bureaucracy. It requires four verifiable mechanisms: 1) System context and impact assessment; 2) Data governance and model provenance hashing; 3) Continuous risk and bias telemetry; and 4) Clear incident containment protocols for out-of-distribution hallucinations.',
        },
        {
          heading: '3. Codifying Compliance in CI/CD',
          body:
            'Rather than treating AI governance as an annual checklist, progressive teams codify audit checks as automated pipeline assertions. Every model fine-tune or prompt update must pass automated counterfactual tests for fairness, toxicity thresholds, and prompt injection resilience before promotion to production staging.',
        },
      ],
      takeaways: [
        'Map ISO/IEC 42001 clauses directly into automated CI/CD evaluation harnesses.',
        'Maintain cryptographic provenance records for training corpora, system prompts, and model weights.',
        'Establish human-in-the-loop escalation criteria for high-stakes autonomous decision paths.',
      ],
    },
  },
  {
    id: 'offline-first-imperative',
    slug: 'offline-first-imperative',
    title: 'The Offline-First Imperative: Architecting Resilient Clinical & Logistics Networks in Emerging Markets',
    date: 'AUGUST 2026',
    readTime: '10 MIN READ',
    category: 'SYSTEMS ARCHITECTURE',
    excerpt:
      'When network intermittency is the default rather than the exception, your data layer must treat the local client as an authoritative autonomous node.',
    content: {
      intro:
        'Modern Silicon Valley web software is architected with an unspoken luxury: the assumption of uninterrupted gigabit fiber and reliable 5G connections. In emerging markets across East Africa, logistics networks and rural health clinics operate in an environment where cellular towers fail, regional fiber cuts occur, and battery life is finite.',
      sections: [
        {
          heading: '1. The Lie of "Offline Mode" as an Afterthought',
          body:
            'Tacking on service workers and optimistic UI updates to a centralized database architecture never works in real clinical environments. When two community health workers register conflicting patient records while separated by three miles of zero cellular reception, naïve last-write-wins databases cause catastrophic medical data loss.',
          quote:
            '"In life-critical systems, an offline-first architecture is not a convenience feature—it is the difference between a viable diagnosis and a lost patient."',
        },
        {
          heading: '2. Conflict-Free Replicated Data Types (CRDTs) in Practice',
          body:
            'By adopting state-based CRDTs in the browser client using IndexedDB, each client device acts as an independent, sovereign distributed node. When connection is re-established, the sync protocol deterministically converges all records without requiring centralized locking or server round-trip blocking.',
        },
        {
          heading: '3. Battery-Aware and Payload-Minimized Synchronization',
          body:
            'Efficient offline synchronization requires microscopic payload budgets. Replacing heavy JSON payloads with Protocol Buffers or CBOR, coupled with delta-compression sync routines, ensures that 30 minutes of clinical records can sync over a 2G edge connection in under four seconds.',
        },
      ],
      takeaways: [
        'Design every state mutation as an append-only verifiable event with local persistence.',
        'Use CRDTs or deterministic conflict resolution matrices rather than naive timestamp overwriting.',
        'Benchmark application performance under synthetic 2G and 90% packet loss environments.',
      ],
    },
  },
]

