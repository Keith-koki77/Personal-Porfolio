export type AIPragmaticPrinciple = {
  number: string
  title: string
  description: string
}

export const pragmaticAIPrinciples: AIPragmaticPrinciple[] = [
  {
    number: '01',
    title: 'Start with the problem, not the model',
    description:
      'Understand the existing process and identify the actual bottleneck before introducing AI.',
  },
  {
    number: '02',
    title: 'Evaluate usefulness, not novelty',
    description:
      'An AI feature is only valuable when it improves a meaningful outcome.',
  },
  {
    number: '03',
    title: 'Keep humans accountable',
    description:
      'AI can assist, generate, analyze, and recommend. Responsibility for important decisions must remain clearly assigned.',
  },
  {
    number: '04',
    title: 'Understand the limitations',
    description:
      'AI outputs can be inaccurate, inconsistent, biased, incomplete, or fabricated. Validation is part of implementation.',
  },
  {
    number: '05',
    title: 'Design for real workflows',
    description:
      'AI should fit into how people work rather than force organizations to adopt unnecessary complexity.',
  },
  {
    number: '06',
    title: 'Measure value',
    description:
      'Evaluate time saved, quality, consistency, cost, usability, and risk where measurable.',
  },
  {
    number: '07',
    title: 'Govern from the beginning',
    description:
      'Consider data, privacy, security, access, oversight, and accountability before deployment.',
  },
]