export type GovernanceFrameworkStep = {
  number: string
  title: string
  question: string
  description: string
}

export const governanceFramework: GovernanceFrameworkStep[] = [
  {
    number: '01',
    title: 'IDENTIFY',
    question: 'What problem are we solving? Is AI actually necessary?',
    description:
      'Define the business problem clearly. Determine whether AI is the right approach or if simpler solutions exist.',
  },
  {
    number: '02',
    title: 'ASSESS',
    question: 'What data, risks, stakeholders, dependencies, and potential consequences are involved?',
    description:
      'Map data requirements, identify risks (bias, privacy, security), list stakeholders, and trace dependencies.',
  },
  {
    number: '03',
    title: 'DESIGN',
    question: 'How should the AI system fit into the workflow? What boundaries and safeguards are needed?',
    description:
      'Define system boundaries, human touchpoints, fallback mechanisms, and validation checkpoints.',
  },
  {
    number: '04',
    title: 'GOVERN',
    question: 'Who is accountable? What policies, controls, human oversight, and escalation processes apply?',
    description:
      'Assign ownership, establish policies, configure controls, define oversight cadence, and set escalation paths.',
  },
  {
    number: '05',
    title: 'IMPLEMENT',
    question: 'Deploy the solution with appropriate access controls, validation, monitoring, and documentation.',
    description:
      'Deploy with access management, input/output validation, logging, monitoring, and operational runbooks.',
  },
  {
    number: '06',
    title: 'EVALUATE',
    question: 'Does the system deliver value? Is it reliable? Are the risks acceptable?',
    description:
      'Measure business outcomes, accuracy, reliability, fairness, user satisfaction, and risk indicators.',
  },
  {
    number: '07',
    title: 'IMPROVE',
    question: 'How do we adapt as the technology, organization, risks, and requirements change?',
    description:
      'Continuous review cycle: update models, refine policies, adjust controls, and evolve governance as context shifts.',
  },
]