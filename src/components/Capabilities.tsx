'use client'

import { TargetIcon, CodeIcon, ShieldIcon, UsersIcon, LayersIcon, ZapIcon, ArrowRightIcon } from './Icons'

const capabilities = [
  {
    id: 'product',
    number: '01',
    title: 'PRODUCT MANAGEMENT',
    subtitle: 'PRIMARY FOCUS',
    icon: TargetIcon,
    accent: 'ochre-brushed',
    items: [
      'B-to-B Product Strategy & Discovery',
      'Outcome Roadmap & Validation',
      'UX Vision & Design Architecture',
      'Metrics, KPIs & Growth Orchestration',
    ],
    description:
      'End-to-end product leadership: framing strategy through customer discovery, validating via rapid experimentation, and translating insights into executable roadmaps. Design-led thinking applied to B2B workflows with rigorous metric governance.',
  },
  {
    id: 'engineering',
    number: '02',
    title: 'SOFTWARE ENGINEERING',
    subtitle: 'TECHNICAL STEWARDSHIP',
    icon: CodeIcon,
    accent: 'aubergine-deep',
    items: [
      'Modern Frontend (Next.js, TypeScript, React)',
      'Pragmatic Backend Systems Design',
      'Clear Technical Delegation & Mentorship',
      'Engineering Squad Velocity Optimization',
    ],
    description:
      'Specializing in modern frontend architecture with Next.js, TypeScript, and React. Building simple, maintainable backend systems. Emphasis on clear technical delegation, code quality standards, and mentoring high-performing engineering squads.',
  },
  {
    id: 'ai-governance',
    number: '03',
    title: 'AI GOVERNANCE & ADVISORY',
    subtitle: 'LEAD CONSULTANT',
    icon: ShieldIcon,
    accent: 'ochre-champagne',
    items: [
      'ISO/IEC 42001 Algorithmic Safety',
      'Responsible AI Advisory for Startups',
      'Algorithmic Risk Auditing & Bias Testing',
      'Automated Governance & Drift Observability',
    ],
    description:
      'Recently certified ISO/IEC 42001 Lead Assessor advising fast-growing startups on responsible AI implementation. Establishing algorithmic risk frameworks, bias auditing pipelines, and automated governance integrated into CI/CD.',
  },
]

export function Capabilities() {
  return (
    <section
      id="pillars"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="capabilities-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline-lg text-ochre-champagne mb-4">STRATEGIC CAPABILITIES · WHAT I DO</p>
          <h2
            id="capabilities-heading"
            className="font-display font-semibold text-editorial-lg text-ivory-silk leading-tight text-balance mb-6"
          >
            Three pillars balancing product strategy first, pragmatic modern engineering execution, and institutional AI governance.
          </h2>
          <p className="text-lg text-ivory-surface/70 leading-relaxed">
            Not a generalist — a specialist in the intersection where product clarity meets technical rigor and regulatory foresight.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8" role="list" aria-label="Strategic capabilities">
          {capabilities.map((capability, index) => (
            <article
              key={capability.id}
              className={`relative group rounded-xl p-8 lg:p-10 transition-luxury ${
                capability.accent === 'aubergine-deep'
                  ? 'bg-aubergine-core border border-aubergine-border hover:border-ochre-brushed/30'
                  : 'bg-ivory-silk border border-hairline-light hover:border-ochre-brushed/50'
              } sovereign-shadow overflow-hidden`}
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ochre-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

              <div className="relative z-10 space-y-6 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                        capability.accent === 'aubergine-deep'
                          ? 'bg-ivory-silk/10 text-ochre-champagne'
                          : 'bg-aubergine-deep text-ochre-brushed'
                      }`}
                    >
                      <capability.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="overline tabular-nums text-ochre-brushed/80">{capability.number}</p>
                      <h3 className={`font-display font-semibold text-xl ${
                        capability.accent === 'aubergine-deep' ? 'text-ivory-silk' : 'text-aubergine-deep'
                      }`}>
                        {capability.title}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={`flex-shrink-0 px-2.5 py-1 rounded text-xs font-medium tracking-wider ${
                      capability.accent === 'aubergine-deep'
                        ? 'bg-ochre-brushed/20 text-ochre-champagne border border-ochre-brushed/30'
                        : 'bg-ochre-brushed/10 text-ochre-brushed border border-ochre-brushed/20'
                    }`}
                  >
                    {capability.subtitle}
                  </span>
                </div>

                <p className={`leading-relaxed flex-1 ${capability.accent === 'aubergine-deep' ? 'text-ivory-surface/70' : 'text-obsidian-text'}`}>
                  {capability.description}
                </p>

                <ul className="space-y-3" role="list" aria-label={`${capability.title} focus areas`}>
                  {capability.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 transition-luxury-fast group-hover:translate-x-1">
                      <span
                        className={`flex-shrink-0 h-1.5 w-1.5 rounded-full mt-2.5 transition-luxury-fast ${
                          capability.accent === 'aubergine-deep'
                            ? 'bg-ochre-champagne/50 group-hover:bg-ochre-champagne group-hover:scale-125'
                            : 'bg-ochre-brushed/50 group-hover:bg-ochre-brushed group-hover:scale-125'
                        }`}
                        aria-hidden="true"
                      />
                      <span className={`text-sm leading-relaxed ${capability.accent === 'aubergine-deep' ? 'text-ivory-surface/60' : 'text-obsidian-text/80'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-6 flex items-center gap-2 text-sm font-medium transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 ${
                    capability.accent === 'aubergine-deep'
                      ? 'text-ochre-champagne hover:text-ochre-brushed focus-visible:ring-offset-aubergine-core'
                      : 'text-ochre-brushed hover:text-ochre-champagne focus-visible:ring-offset-ivory-silk'
                  }`}
                  aria-label={`Learn more about ${capability.title}`}
                >
                  Explore {capability.title}
                  <ArrowRightIcon className="h-4 w-4 transition-luxury-fast group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}