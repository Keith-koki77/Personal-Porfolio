export type AILifecycleStep = {
  number: string
  title: string
  summary: string
  details: string[]
}

export const aiLifecycle: AILifecycleStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    summary: 'Understand the business problem and identify opportunities where AI could create value.',
    details: [
      'Stakeholder interviews and problem exploration',
      'Current process mapping and pain point identification',
      'AI opportunity scanning and use-case ideation',
      'Feasibility screening and prioritization',
    ],
  },
  {
    number: '02',
    title: 'EVALUATE',
    summary: 'Assess feasibility, limitations, data requirements, cost, risks, and alternatives.',
    details: [
      'Technical feasibility and data readiness assessment',
      'Risk identification (bias, privacy, security, compliance)',
      'Cost-benefit and ROI estimation',
      'Build-versus-buy and tool evaluation',
    ],
  },
  {
    number: '03',
    title: 'DESIGN',
    summary: 'Define the AI workflow, system boundaries, human involvement, and intended outcomes.',
    details: [
      'Workflow design with human touchpoints',
      'System architecture and integration planning',
      'Validation and quality criteria definition',
      'Human oversight and escalation design',
    ],
  },
  {
    number: '04',
    title: 'GOVERN',
    summary: 'Establish accountability, appropriate policies, controls, and oversight.',
    details: [
      'Accountability assignment and policy definition',
      'Risk controls and mitigation configuration',
      'Monitoring and alerting setup',
      'Documentation and audit trail design',
    ],
  },
  {
    number: '05',
    title: 'IMPLEMENT',
    summary: 'Integrate AI into the product, process, or organizational workflow.',
    details: [
      'Development and integration',
      'Access control and environment configuration',
      'Validation testing and quality assurance',
      'Documentation and runbook creation',
    ],
  },
  {
    number: '06',
    title: 'VALIDATE',
    summary: 'Test accuracy, usefulness, reliability, security, and potential failure modes.',
    details: [
      'Accuracy and performance benchmarking',
      'Edge case and failure mode testing',
      'Security and privacy validation',
      'User acceptance and usability testing',
    ],
  },
  {
    number: '07',
    title: 'MONITOR & IMPROVE',
    summary: 'Review performance, emerging risks, user feedback, and changing requirements.',
    details: [
      'Continuous monitoring and alerting',
      'Periodic risk and performance reviews',
      'User feedback integration',
      'Iterative improvement and model updates',
    ],
  },
]