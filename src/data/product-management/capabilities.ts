export type Capability = {
  id: string
  number: string
  title: string
  summary: string
  skills: string[]
}

export const capabilities: Capability[] = [
  {
    id: 'product-strategy',
    number: '01',
    title: 'Product Strategy & Vision',
    summary:
      'Defining what to build, why it matters, who it serves, and how it creates business value.',
    skills: [
      'Product vision',
      'Value proposition development',
      'Market positioning',
      'Business model development',
      'Product roadmaps',
      'Product-market fit exploration',
    ],
  },
  {
    id: 'discovery-research',
    number: '02',
    title: 'Product Discovery & Research',
    summary:
      'Understanding user problems, market opportunities, customer expectations, and product assumptions.',
    skills: [
      'Problem discovery',
      'User research',
      'Market analysis',
      'Customer journey mapping',
      'Opportunity assessment',
      'Assumption validation',
    ],
  },
  {
    id: 'design-experience',
    number: '03',
    title: 'Product Design & Experience',
    summary:
      'Translating product requirements into intuitive experiences that make complex interactions simple.',
    skills: [
      'UX/UI design',
      'Information architecture',
      'User flows',
      'Wireframing',
      'Prototyping',
      'Design systems',
      'Interaction design',
    ],
  },
  {
    id: 'planning-management',
    number: '04',
    title: 'Product Planning & Management',
    summary:
      'Translating product vision into actionable requirements, development priorities, and delivery plans.',
    skills: [
      'Product requirement documents',
      'Product roadmaps',
      'User stories',
      'Acceptance criteria',
      'Prioritization',
      'Backlog management',
      'Agile product delivery',
    ],
  },
  {
    id: 'technical-development',
    number: '05',
    title: 'Technical Product Development',
    summary:
      'Bridging product requirements and engineering implementation to ensure solutions are technically feasible and reliable.',
    skills: [
      'Technical specifications',
      'API integration',
      'Software architecture',
      'Database design',
      'Authentication and authorization',
      'Payment infrastructure',
      'Engineering collaboration',
    ],
  },
  {
    id: 'ai-strategy',
    number: '06',
    title: 'AI Strategy & Innovation',
    summary:
      'Identifying opportunities to use AI to improve product experiences, workflows, decision-making, and business operations.',
    skills: [
      'AI opportunity discovery',
      'AI product concepts',
      'Workflow automation',
      'AI-assisted development',
      'AI product strategy',
    ],
  },
]
