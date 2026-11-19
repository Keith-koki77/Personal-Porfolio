export type WorkflowStage = {
  number: string
  title: string
  summary: string
  details: string[]
}

export const engineeringWorkflow: WorkflowStage[] = [
  {
    number: '01',
    title: 'Understand',
    summary: 'Understand the business problem, requirements, constraints, and intended outcomes.',
    details: [
      'Stakeholder interviews and requirement gathering',
      'Technical feasibility assessment',
      'Constraint identification (budget, timeline, compliance)',
      'Success criteria definition',
    ],
  },
  {
    number: '02',
    title: 'Architect',
    summary: 'Choose the appropriate architecture, technologies, data structures, integrations, and system boundaries.',
    details: [
      'System architecture design',
      'Technology selection and justification',
      'Data model and API contract design',
      'Integration planning',
      'Security and compliance review',
    ],
  },
  {
    number: '03',
    title: 'Design',
    summary: 'Translate technical requirements into clear application structures, interfaces, and system flows.',
    details: [
      'Component and service design',
      'Database schema design',
      'API endpoint specification',
      'Error handling and monitoring strategy',
      'CI/CD pipeline design',
    ],
  },
  {
    number: '04',
    title: 'Develop',
    summary: 'Implement frontend components, backend services, database models, APIs, and integrations.',
    details: [
      'Test-driven or test-along development',
      'Component library and design system adherence',
      'Type-safe API clients and server actions',
      'Database migrations and seed data',
      'Integration development and mocking',
    ],
  },
  {
    number: '05',
    title: 'Test & Validate',
    summary: 'Check application behaviour, data integrity, API responses, authentication, error handling, and edge cases.',
    details: [
      'Unit and integration testing',
      'API contract testing',
      'Authentication and authorization verification',
      'Performance and accessibility audits',
      'Cross-browser and device testing',
    ],
  },
  {
    number: '06',
    title: 'Deploy',
    summary: 'Configure environments, deploy applications, monitor health, and troubleshoot deployment issues.',
    details: [
      'Environment configuration and secrets management',
      'Zero-downtime deployment strategy',
      'Health checks and smoke tests',
      'Rollback procedures',
      'Post-deployment monitoring',
    ],
  },
  {
    number: '07',
    title: 'Improve',
    summary: 'Refine performance, maintainability, security, usability, and system reliability over time.',
    details: [
      'Performance profiling and optimization',
      'Security scanning and dependency updates',
      'Technical debt budgeting and refactoring',
      'User feedback integration',
      'Architecture evolution as requirements grow',
    ],
  },
]