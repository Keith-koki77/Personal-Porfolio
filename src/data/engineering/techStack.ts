export type TechGroup = {
  group: string
  items: { name: string; status: 'implemented' | 'explored' }[]
}

export const engineeringTechStack: TechGroup[] = [
  {
    group: 'Frontend',
    items: [
      { name: 'JavaScript', status: 'implemented' },
      { name: 'TypeScript', status: 'implemented' },
      { name: 'React', status: 'implemented' },
      { name: 'Next.js', status: 'implemented' },
      { name: 'Tailwind CSS', status: 'implemented' },
      { name: 'HTML', status: 'implemented' },
      { name: 'CSS', status: 'implemented' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js', status: 'implemented' },
      { name: 'Python', status: 'implemented' },
      { name: 'REST APIs', status: 'implemented' },
    ],
  },
  {
    group: 'Database & Backend Services',
    items: [
      { name: 'PostgreSQL', status: 'implemented' },
      { name: 'Supabase', status: 'implemented' },
    ],
  },
  {
    group: 'Integrations & Payments',
    items: [
      { name: 'M-Pesa Daraja', status: 'implemented' },
      { name: 'Flutterwave', status: 'explored' },
    ],
  },
  {
    group: 'CMS',
    items: [
      { name: 'Sanity', status: 'implemented' },
    ],
  },
  {
    group: 'Deployment & Infrastructure',
    items: [
      { name: 'Vercel', status: 'implemented' },
      { name: 'Railway', status: 'implemented' },
    ],
  },
  {
    group: 'Engineering Workflow',
    items: [
      { name: 'Git', status: 'implemented' },
      { name: 'GitHub', status: 'implemented' },
      { name: 'Jira', status: 'implemented' },
      { name: 'Trello', status: 'implemented' },
    ],
  },
  {
    group: 'Design & Prototyping',
    items: [
      { name: 'Figma', status: 'implemented' },
    ],
  },
]