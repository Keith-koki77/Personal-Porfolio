export type AIToolGroup = {
  group: string
  items: { name: string; status: 'implemented' | 'explored' }[]
}

export const aiTools: AIToolGroup[] = [
  {
    group: 'AI Assistants & Models',
    items: [
      { name: 'ChatGPT', status: 'implemented' },
      { name: 'Claude', status: 'implemented' },
      { name: 'Other verified AI assistants', status: 'explored' },
    ],
  },
  {
    group: 'AI Development & Engineering',
    items: [
      { name: 'AI-assisted coding tools', status: 'implemented' },
      { name: 'Development workflows', status: 'implemented' },
      { name: 'AI-enabled application integrations', status: 'explored' },
    ],
  },
  {
    group: 'Research & Knowledge Work',
    items: [
      { name: 'AI research tools', status: 'implemented' },
      { name: 'Information synthesis', status: 'implemented' },
      { name: 'Knowledge management', status: 'explored' },
    ],
  },
  {
    group: 'Automation & Workflows',
    items: [
      { name: 'Verified workflow automation tools', status: 'explored' },
      { name: 'AI-assisted operational processes', status: 'explored' },
      { name: 'Integrations between existing applications', status: 'implemented' },
    ],
  },
]