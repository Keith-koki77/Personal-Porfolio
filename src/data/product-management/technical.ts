export type TechGroup = {
  group: string
  items: { name: string; status: 'implemented' | 'explored' }[]
}

export const technicalStack: TechGroup[] = [
  {
    group: 'Product design',
    items: [{ name: 'Figma', status: 'implemented' }],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'Next.js', status: 'implemented' },
      { name: 'React', status: 'implemented' },
      { name: 'TypeScript', status: 'implemented' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js', status: 'implemented' },
      { name: 'Python', status: 'implemented' },
    ],
  },
  {
    group: 'Data and authentication',
    items: [
      { name: 'Supabase', status: 'implemented' },
      { name: 'PostgreSQL', status: 'implemented' },
    ],
  },
  {
    group: 'APIs',
    items: [
      { name: 'REST APIs', status: 'implemented' },
      { name: 'Third-party integrations', status: 'implemented' },
    ],
  },
  {
    group: 'Payments',
    items: [
      { name: 'M-Pesa Daraja', status: 'implemented' },
      { name: 'Flutterwave', status: 'explored' },
    ],
  },
  {
    group: 'CMS',
    items: [{ name: 'Sanity', status: 'implemented' }],
  },
  {
    group: 'Deployment',
    items: [
      { name: 'Vercel', status: 'implemented' },
      { name: 'Railway', status: 'implemented' },
    ],
  },
  {
    group: 'Collaboration',
    items: [
      { name: 'Git', status: 'implemented' },
      { name: 'GitHub', status: 'implemented' },
      { name: 'Jira', status: 'implemented' },
      { name: 'Trello', status: 'implemented' },
    ],
  },
  {
    group: 'AI',
    items: [
      { name: 'AI-assisted workflows', status: 'implemented' },
      { name: 'AI product strategy', status: 'implemented' },
      { name: 'Workflow automation', status: 'implemented' },
    ],
  },
]
