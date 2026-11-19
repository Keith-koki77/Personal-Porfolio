export type Project = {
  id: string
  name: string
  categories: string[]
  status: string
  headline: string
  overview: string
  involvement: string[]
  cta: string
  caseStudyUrl: string
}

export const projects: Project[] = [
  {
    id: 'qavaeat',
    name: 'QavaEat',
    categories: ['FoodTech', 'Consumer Marketplace', 'Meal Planning'],
    status: 'Mobile app launched',
    headline:
      'Making everyday meal planning stress-free, healthy, and predictable.',
    overview:
      'QavaEat is a food-tech platform connecting customers with trusted private chefs through meal discovery, scheduling, and prepayment.\n\nRather than focusing on instant food ordering, the product helps customers make meal decisions in advance, organize their food spending, and schedule meals around their routines.\n\nThe opportunity was to build a platform that makes everyday eating more organized and predictable while giving chefs access to more consistent, prepaid demand.',
    involvement: [
      'Product vision and positioning',
      'Marketplace and business model strategy',
      'Customer and chef discovery experiences',
      'Meal planning and scheduling UX',
      'Prepayment and wallet workflows',
      'Payment and fulfilment requirements',
      'Technical product specifications',
      'Product development and launch',
    ],
    cta: 'Explore QavaEat Case Study',
    caseStudyUrl: '/product-management/qavaeat',
  },
  {
    id: 'mamasure',
    name: 'MamaSure',
    categories: ['HealthTech', 'Digital Health', 'Financial Workflows'],
    status: 'In development',
    headline:
      'Connecting maternal healthcare, planning, and financial support.',
    overview:
      'MamaSure is a maternal healthcare technology platform designed to bring pregnancy assessments, maternity planning, healthcare access, financial contributions, and payment visibility into a connected experience.\n\nThe product challenge is to connect multiple healthcare and financial workflows into one coherent digital journey.\n\nThe platform involves interconnected product modules that require careful product definition, technical architecture, data consistency, and user experience planning.',
    involvement: [
      'Product requirements and module definition',
      'User workflows and product architecture',
      'Healthcare planning journeys',
      'Contributions and payment workflows',
      'Technical specifications',
      'API integration requirements',
      'Frontend and backend implementation',
      'Product quality and reliability considerations',
    ],
    cta: 'Explore MamaSure Case Study',
    caseStudyUrl: '/product-management/mamasure',
  },
]
