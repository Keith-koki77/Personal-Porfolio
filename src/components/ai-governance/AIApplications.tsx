'use client'

import { CodeIcon, LayersIcon, ZapIcon, UsersIcon, TargetIcon } from '@/components/Icons'

const aiApplications = [
  {
    id: 'software-engineering',
    title: 'AI-Assisted Software Engineering',
    icon: CodeIcon,
    description:
      'Using AI tools to accelerate software development while maintaining engineering judgment and responsibility.',
    items: [
      'Using AI tools to accelerate software development',
      'Understanding how AI changes development workflows',
      'Using AI to investigate technical problems',
      'Assisting with code generation and refactoring',
      'Reviewing and validating generated code',
      'Maintaining engineering judgment and responsibility',
    ],
    status: 'implemented',
  },
  {
    id: 'product-development',
    title: 'AI-Enabled Product Development',
    icon: LayersIcon,
    description:
      'Identifying where AI can improve product experiences and integrating AI into application architectures.',
    items: [
      'Identifying where AI can improve product experiences',
      'Exploring intelligent application workflows',
      'Evaluating AI capabilities against product requirements',
      'Integrating AI into existing application architectures',
      'Considering trust, accuracy, and user control in AI-powered features',
    ],
    status: 'explored',
  },
  {
    id: 'business-workflows',
    title: 'AI-Powered Business Workflows',
    icon: ZapIcon,
    description:
      'Workflow automation, information processing, knowledge management, and research assistance using AI.',
    items: [
      'Workflow automation',
      'Information processing and synthesis',
      'Knowledge management',
      'Research assistance',
      'Repetitive task reduction',
      'AI-assisted operational processes',
    ],
    status: 'explored',
  },
  {
    id: 'strategy-experimentation',
    title: 'AI Strategy & Experimentation',
    icon: TargetIcon,
    description:
      'Evaluating emerging AI tools, comparing practical use cases, and exploring how AI changes business models.',
    items: [
      'Evaluating emerging AI tools',
      'Comparing practical use cases',
      'Testing capabilities and limitations',
      'Identifying organizational opportunities',
      'Exploring how AI changes business models and work structures',
    ],
    status: 'implemented',
  },
]

export function AIApplications() {
  return (
    <section
      id="ai-applications"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="applications-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            AI Application & Practical Work
          </p>
          <h2
            id="applications-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            I actively explore and apply AI in real workflows.
          </h2>
          <p className="text-lg text-ivory-surface/80 leading-relaxed">
            This section demonstrates genuine AI application in software engineering, product development, business workflows, and strategy experimentation. Exploratory work is clearly labeled.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8" role="list" aria-label="AI applications">
          {aiApplications.map((app) => (
            <article
              key={app.id}
              className="relative group rounded-xl p-6 lg:p-8 transition-luxury bg-ivory-silk/10 border border-aubergine-border/30 hover:border-aubergine-hover/50"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ochre-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

              <div className="relative z-10 flex flex-col gap-6 h-full">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ivory-silk/20 text-ochre-brushed group-hover:bg-ochre-brushed group-hover:text-aubergine-core transition-luxury">
                    <app.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-xl text-ivory-silk group-hover:text-ochre-champagne transition-luxury-fast">
                      {app.title}
                    </h4>
                    <span className={`px-2.5 py-1 rounded text-xs font-medium tracking-wider ${
                      app.status === 'implemented'
                        ? 'bg-ochre-brushed/20 text-ochre-champagne border border-ochre-brushed/30'
                        : 'bg-ivory-surface/20 text-ivory-surface/60 border border-ivory-surface/30'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                </div>

                <p className="text-ivory-surface/80 leading-relaxed">
                  {app.description}
                </p>

                <ul className="space-y-2" role="list" aria-label={`${app.title} examples`}>
                  {app.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 px-3 py-1.5 rounded-md bg-ivory-silk/20 border border-aubergine-border/30 text-sm text-ivory-surface hover:border-ochre-brushed/50 transition-luxury-fast"
                      role="listitem"
                    >
                      <span
                        className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed/50 group-hover:bg-ochre-brushed transition-luxury-fast"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30">
          <h4 className="font-display font-semibold text-lg text-ochre-champagne mb-4 flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Methodology for Practical AI Application
          </h4>
          <p className="text-ivory-surface/80 leading-relaxed mb-4">
            For each practical example, I structure the work around:
          </p>
          <ul className="space-y-2" role="list">
            {[
              'The problem — What is the real bottleneck or opportunity?',
              'Why AI was considered — What capability makes AI relevant?',
              'The chosen tool or approach — Selected based on fit, not novelty.',
              'How the workflow was structured — Human-AI handoffs, validation points, escalation.',
              'Where human review is necessary — Accountability boundaries.',
              'The limitations encountered — Accuracy, consistency, bias, context gaps.',
              'The observed result — Time saved, quality impact, user feedback, if documented.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 px-3 py-2 rounded-lg bg-ivory-silk/20 border border-aubergine-border/30 text-sm text-ivory-surface">
                <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed/50 mt-2" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-ivory-surface/60 mt-4 italic">
            Exploratory work is clearly labeled. I do not invent AI projects, integrations, automation results, productivity percentages, or deployed features.
          </p>
        </div>
      </div>
    </section>
  )
}