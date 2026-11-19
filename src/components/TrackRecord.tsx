'use client'

import { ArrowRightIcon, BuildingIcon, FileTextIcon, ShieldIcon, ChevronRightIcon } from './Icons'

const ventures = [
  {
    id: 'qavaeat',
    number: '01',
    name: 'QAVAEAT',
    role: 'PRODUCT-LED CTO · PRODUCT ENGINEERING & ROADMAP LEADERSHIP',
    description:
      'Engineering delegated to the core dev team; leads overall product strategy, product engineering execution, and customer-facing experiences. Focus: scalable MVP, multi-tenant commerce workflows, intuitive customer interfaces, and data-backed feature cycles.',
    stack: ['Next.js (Frontend)', 'Node.js (Backend)', 'PostgreSQL'],
    outcome: 'Streamlined customer journeys & agile feature cadence.',
    icon: BuildingIcon,
  },
  {
    id: 'mama-sure',
    number: '02',
    name: 'MAMA SURE',
    role: 'CTO · TECH TEAM LEADERSHIP, DESIGN, PRODUCT & SCALING',
    description:
      'Full-technical & product stewardship—leading the entire tech team, owning UI/UX design systems, driving product management, and scaling infrastructure. Focus: Dynamic Insurtech underwriting engine, unified design tokens, sub-second API pipelines, and high-velocity team shipping cadence.',
    stack: ['Next.js (Frontend)', 'Python / FastAPI (Backend)', 'PostgreSQL'],
    outcome: 'Unified design system & instant policy decisioning.',
    icon: BuildingIcon,
  },
  {
    id: 'ai-governance',
    number: '03',
    name: 'AI GOVERNANCE & COMPLIANCE',
    role: 'CERTIFIED LEAD CONSULTANT · ALGORITHMIC SAFETY & ISO/IEC 42001',
    description:
      'Recently certified lead assessor providing actionable advisory for growing startups on responsible artificial intelligence, algorithmic risk auditing, and institutional readiness.',
    stack: ['ISO/IEC 42001 AIAS', 'Drift Observability', 'Bias Auditing'],
    outcome: 'Certified Lead Assessor Advisory Framework.',
    icon: ShieldIcon,
  },
]

export function TrackRecord() {
  return (
    <section
      id="works"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="track-record-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline-lg text-ochre-brushed mb-4">TRACK RECORD · DEPLOYED SYSTEMS</p>
          <h2
            id="track-record-heading"
            className="font-display font-semibold text-editorial-lg text-aubergine-deep leading-tight text-balance mb-6"
          >
            Production systems engineered for customer clarity, pragmatic high-velocity execution, and rigorous institutional governance.
          </h2>
          <p className="text-lg text-obsidian-text leading-relaxed">
            Each venture represents a distinct mandate: product-led CTO stewardship, full-stack technical leadership, and certified algorithmic governance advisory.
          </p>
        </div>

        <div className="space-y-8" role="list" aria-label="Venture portfolio">
          {ventures.map((venture, index) => (
            <article
              key={venture.id}
              className="relative group rounded-xl bg-ivory-silk border border-hairline-light hover:border-ochre-brushed/50 hover:bg-ivory-light transition-luxury sovereign-shadow overflow-hidden"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ochre-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

              <div className="relative z-10 p-8 lg:p-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-4 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-aubergine-deep text-ochre-brushed">
                        <venture.icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="overline text-obsidian-muted">{venture.number}</p>
                        <h3 className="font-display font-semibold text-2xl lg:text-3xl text-aubergine-deep">
                          {venture.name}
                        </h3>
                      </div>
                    </div>

                    <p className="overline-lg text-ochre-brushed font-medium">{venture.role}</p>

                    <p className="text-obsidian-text leading-relaxed text-base lg:text-lg">
                      {venture.description}
                    </p>

                    <div className="pt-4 border-t border-hairline-light space-y-3">
                      <div>
                        <p className="overline text-obsidian-muted mb-2">TECH STACK</p>
                        <div className="flex flex-wrap gap-2">
                          {venture.stack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 rounded-md bg-ivory-surface border border-hairline-light text-sm text-obsidian-text font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-hairline-light">
                        <p className="overline text-obsidian-muted mb-2">OUTCOME</p>
                        <p className="text-obsidian-text font-medium">{venture.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8">
                    <div className="relative h-64 lg:h-80 rounded-lg bg-aubergine-core/20 border border-aubergine-border/30 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aubergine-deep/50 mx-auto mb-4">
                            <FileTextIcon className="h-8 w-8 text-ochre-brushed/50" aria-hidden="true" />
                          </div>
                          <p className="text-obsidian-muted font-medium">System Architecture Diagram</p>
                          <p className="text-sm text-obsidian-muted/60 mt-1">{venture.name} Technical Blueprint</p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-aubergine-core/80 to-transparent" aria-hidden="true" />
                    </div>
                    <button
                      type="button"
                      className="mt-4 flex items-center gap-2 text-sm font-medium text-ochre-brushed hover:text-ochre-champagne transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk rounded"
                      aria-label={`View ${venture.name} case study`}
                    >
                      View Case Study
                      <ChevronRightIcon className="h-4 w-4 transition-luxury-fast group-hover:translate-x-1" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}