export type EngineeringProject = {
  id: string
  name: string
  description: string
  challenge: string
  engineeringAreas: string[]
  architecture: string[]
  importantConsiderations: string[]
  caseStudySections: string[]
  href: string
  cta: string
}

export const engineeringProjects: EngineeringProject[] = [
  {
    id: 'qavaeat',
    name: 'QavaEat',
    description:
      'A meal planning and private-chef platform built around predictable meals, scheduling, and prepaid food plans.',
    challenge:
      'QavaEat requires more than a conventional food-ordering interface. Its product model involves customer meal planning, chef discovery, meal scheduling, prepaid subscriptions or wallet balances, multiple chefs, payment tracking, and fulfilment workflows.',
    engineeringAreas: [
      'Next.js frontend architecture',
      'React and TypeScript application development',
      'Supabase authentication and database integration',
      'User roles and access management',
      'Chef onboarding and approval workflows',
      'Chef profiles, kitchens, and menus',
      'Meal planning and scheduling logic',
      'Breakfast, lunch, and dinner scheduling',
      'Prepaid meal plans and wallet workflows',
      'Payment tracking and transaction records',
      'Backend and frontend integration',
      'Sanity CMS integration for content',
      'Vercel deployment and production workflows',
    ],
    architecture: [
      'Customer / Chef / Administrator interfaces',
      'Next.js application',
      'Authentication and application services',
      'Supabase database and storage',
      'Payment services and external integrations',
      'Meal scheduling, fulfilment, and settlement workflows',
      'Sanity CMS as separate content-management integration',
    ],
    importantConsiderations: [
      'The platform supports planned and prepaid meals, not simply instant ordering.',
      'Customers can organize meals across multiple days.',
      'Different meals may involve different chefs and prices.',
      'Payment and wallet movements must be traceable.',
      'Chef payouts and settlement workflows account for fulfilment and customer satisfaction.',
      'Delivery is coordinated through delivery partners; QavaEat is not itself a delivery company.',
      'The delivery commission model is a partner charge, not a customer delivery surcharge.',
    ],
    caseStudySections: [
      'Problem and system requirements',
      'Architecture and technology choices',
      'Frontend implementation',
      'Backend and database design',
      'Integrations and transactional workflows',
      'Technical challenges and decisions',
      'Deployment and ongoing improvements',
    ],
    href: '/product-management/qavaeat',
    cta: 'View Engineering Case Study',
  },
  {
    id: 'mamasure',
    name: 'MamaSure',
    description:
      'A digital maternal healthcare platform designed to support maternal planning, financial contributions, and access to healthcare-related services.',
    challenge:
      'The platform requires careful coordination between user data, healthcare-related workflows, contributions, payments, and financial records. Frontend and backend separation, API versioning, authentication, data modelling, financial transaction integrity, payment callback handling, and deployment troubleshooting are all critical.',
    engineeringAreas: [
      'Next.js frontend application',
      'Python backend development',
      'REST API architecture',
      'Supabase authentication and data integration',
      'User profiles and access control',
      'Maternal assessments and planning workflows',
      'Hospital-related data and discovery',
      'Plans and contribution workflows',
      'Payment integration and M-Pesa Daraja sandbox development',
      'Dashboard and financial records',
      'API deployment using Railway',
      'Frontend deployment using Vercel',
      'Environment configuration and cross-service integration',
    ],
    architecture: [
      'Frontend application (Next.js)',
      'REST API layer',
      'Python backend services',
      'Supabase authentication and database',
      'M-Pesa integration and external services',
    ],
    importantConsiderations: [
      'Separation of frontend and backend responsibilities.',
      'API versioning and endpoint structure.',
      'Authentication and authorization.',
      'Data modelling and relational consistency.',
      'Financial transaction integrity.',
      'Payment callback handling.',
      'API validation and error handling.',
      'Deployment and production troubleshooting.',
    ],
    caseStudySections: [
      'System requirements and architecture',
      'Frontend and backend implementation',
      'Database design and data consistency',
      'Payment integration and workflows',
      'API design and deployment',
      'Technical challenges and decisions',
    ],
    href: '/product-management/mamasure',
    cta: 'View Engineering Case Study',
  },
  {
    id: 'greenlead',
    name: 'GreenLead',
    description:
      'An ESG reporting SaaS platform focused on helping organizations manage environmental, social, and governance reporting.',
    challenge:
      'Building a SaaS product involves product and technical collaboration, reporting workflows, data management, user-facing application development, and translating business requirements into software functionality.',
    engineeringAreas: [
      'SaaS application architecture',
      'Product and technical collaboration',
      'Reporting workflows',
      'Data management',
      'User-facing application development',
      'Business requirements translated into software functionality',
    ],
    architecture: [
      'SaaS frontend application',
      'Backend services for reporting',
      'Data storage and processing',
      'User management and authentication',
    ],
    importantConsiderations: [
      'SaaS application architecture and multi-tenancy considerations.',
      'Reporting workflow design and data accuracy.',
      'User experience for business-focused workflows.',
    ],
    caseStudySections: [
      'Product overview and technical approach',
      'Architecture and data flow',
      'Key engineering decisions',
    ],
    href: '#',
    cta: 'Learn More',
  },
]