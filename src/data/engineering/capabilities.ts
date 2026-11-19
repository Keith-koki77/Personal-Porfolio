export type EngineeringCapability = {
  id: string
  number: string
  title: string
  skills: string[]
}

export const engineeringCapabilities: EngineeringCapability[] = [
  {
    id: 'fullstack',
    number: '01',
    title: 'Full-Stack Application Development',
    skills: [
      'Responsive web application development',
      'Frontend architecture and component-driven interfaces',
      'Backend development and business logic',
      'API integration and application connectivity',
      'Authentication and authorization',
      'Database integration and application state management',
    ],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Engineering & System Architecture',
    skills: [
      'REST API design and implementation',
      'Backend services and application architecture',
      'Database schema design and relationships',
      'Authentication and access control',
      'Data validation and consistency',
      'Transactional workflows and business logic',
      'Error handling and system reliability',
    ],
  },
  {
    id: 'frontend',
    number: '03',
    title: 'Frontend Engineering',
    skills: [
      'Modern React application development',
      'Next.js App Router',
      'TypeScript and reusable components',
      'Responsive interfaces',
      'Server and client component architecture',
      'API consumption and frontend state management',
      'Performance and accessibility considerations',
    ],
  },
  {
    id: 'database',
    number: '04',
    title: 'Database & Data Engineering',
    skills: [
      'PostgreSQL and relational data modelling',
      'Supabase database architecture',
      'Data relationships and constraints',
      'Row-Level Security where appropriate',
      'Database migrations and schema evolution',
      'Financial and transactional data integrity',
    ],
  },
  {
    id: 'integrations',
    number: '05',
    title: 'API Integrations & Payment Systems',
    skills: [
      'RESTful API integrations',
      'Authentication between services',
      'Payment workflow implementation',
      'M-Pesa Daraja integration and sandbox development',
      'Flutterwave payment integration exploration',
      'Webhooks and callback handling',
      'Transaction status management and reconciliation',
    ],
  },
  {
    id: 'ai',
    number: '06',
    title: 'AI Engineering & Intelligent Applications',
    skills: [
      'AI-assisted application development',
      'AI-powered product workflows',
      'Integration of AI capabilities into existing applications',
      'Workflow automation',
      'AI tools and developer productivity workflows',
      'Exploration and practical application of emerging AI technologies',
    ],
  },
  {
    id: 'devops',
    number: '07',
    title: 'Deployment, Infrastructure & DevOps',
    skills: [
      'Application deployment and hosting',
      'Vercel deployments',
      'Railway services and environments',
      'Environment configuration',
      'Production debugging',
      'API health checks and deployment troubleshooting',
      'Git and GitHub workflows',
      'Build, release, and maintenance processes',
    ],
  },
  {
    id: 'cms',
    number: '08',
    title: 'CMS & Content Infrastructure',
    skills: [
      'Sanity CMS',
      'Structured content modelling',
      'Content API integration',
      'Dynamic content rendering',
      'Image optimization and content delivery',
      'SEO-friendly content architecture',
    ],
  },
]