export type AICapability = {
  id: string
  number: string
  title: string
  summary: string
  skills: string[]
}

export const aiCapabilities: AICapability[] = [
  {
    id: 'governance-systems',
    number: '01',
    title: 'AI Governance & Management Systems',
    summary: 'Establishing organizational structures, responsibilities, policies, and oversight for AI activities.',
    skills: [
      'Understanding ISO/IEC 42001',
      'AI governance frameworks and organizational accountability',
      'AI policies and responsible-use principles',
      'AI risk identification and management',
      'AI lifecycle oversight',
      'Governance documentation and controls',
      'Human oversight and escalation structures',
    ],
  },
  {
    id: 'responsible-ai',
    number: '02',
    title: 'Responsible AI & Risk Awareness',
    summary: 'Understanding responsible AI principles, evaluating risks, and designing for trustworthiness.',
    skills: [
      'Responsible AI principles',
      'Bias and fairness considerations',
      'Privacy and data protection awareness',
      'Transparency and explainability',
      'Security and misuse considerations',
      'Human accountability',
      'Evaluation of AI limitations and failure modes',
    ],
  },
  {
    id: 'strategy-adoption',
    number: '03',
    title: 'AI Strategy & Adoption',
    summary: 'Identifying appropriate AI use cases, evaluating business value, and planning responsible adoption.',
    skills: [
      'Identifying appropriate AI use cases',
      'Evaluating business value',
      'Assessing organizational readiness',
      'AI adoption roadmaps',
      'Build-versus-buy considerations',
      'Workflow suitability and process redesign',
      'Human-AI collaboration models',
    ],
  },
  {
    id: 'implementation',
    number: '04',
    title: 'Practical AI Implementation',
    summary: 'Integrating AI into workflows, applications, and development processes with appropriate safeguards.',
    skills: [
      'Integrating AI into existing workflows',
      'AI-assisted software development',
      'AI-enabled application experiences',
      'Workflow automation',
      'AI tool evaluation and selection',
      'Prompt design and structured AI workflows',
      'Human review and validation',
    ],
  },
  {
    id: 'product-innovation',
    number: '05',
    title: 'AI Product & Innovation',
    summary: 'Identifying opportunities for AI-enabled products and defining useful AI functionality.',
    skills: [
      'Identifying opportunities for AI-enabled products',
      'AI product discovery',
      'Defining useful AI functionality',
      'AI product requirements',
      'User experience for AI-enabled applications',
      'Managing uncertainty in AI-powered experiences',
      'Evaluating usefulness beyond technical novelty',
    ],
  },
  {
    id: 'transformation',
    number: '06',
    title: 'AI Transformation & The Future of Work',
    summary: 'Understanding how AI shifts the value of knowledge work and redesigns human-AI collaboration.',
    skills: [
      'Understanding the changing economics of knowledge work',
      'Human-AI collaboration',
      'Workflow redesign',
      'Organizational adaptation',
      'Knowledge distribution and accessibility',
      'Human judgment and decision-making',
      'Identifying where human expertise becomes more valuable',
    ],
  },
]