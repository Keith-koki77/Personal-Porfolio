export type MethodologyStage = {
  number: string
  title: string
  summary: string
  deliverables: string[]
}

export const methodology: MethodologyStage[] = [
  {
    number: '01',
    title: 'Discover the opportunity',
    summary:
      'Understand the business, market, users, and underlying problem.',
    deliverables: [
      'Discovery brief',
      'Research insights',
      'Problem statement',
      'Opportunity assessment',
    ],
  },
  {
    number: '02',
    title: 'Define the product',
    summary:
      'Establish the product vision, value proposition, objectives, and target users.',
    deliverables: [
      'Product vision',
      'Product objectives',
      'User requirements',
      'Product specifications',
    ],
  },
  {
    number: '03',
    title: 'Shape the strategy',
    summary:
      'Determine priorities, scope, feasibility, and the path towards delivery.',
    deliverables: [
      'MVP definition',
      'Product roadmap',
      'Prioritization framework',
      'Feature scope',
    ],
  },
  {
    number: '04',
    title: 'Design the experience',
    summary:
      'Map journeys, create wireframes, prototype, and validate key interactions.',
    deliverables: [
      'User flows',
      'Wireframes',
      'Interactive prototypes',
      'Design specifications',
    ],
  },
  {
    number: '05',
    title: 'Build and deliver',
    summary:
      'Translate product requirements into engineering tasks, coordinate development, and test releases.',
    deliverables: [
      'Technical specifications',
      'Product backlog',
      'QA criteria',
      'Release plan',
    ],
  },
  {
    number: '06',
    title: 'Measure and improve',
    summary:
      'Evaluate product performance, gather feedback, and identify the next opportunities.',
    deliverables: [
      'Product metrics',
      'User feedback',
      'Performance insights',
      'Improvement roadmap',
    ],
  },
]
