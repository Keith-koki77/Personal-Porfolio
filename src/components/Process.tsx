'use client'

import { ArrowRightIcon, ChevronRightIcon, UsersIcon, TargetIcon, CodeIcon, ShieldIcon, ZapIcon, CheckIcon, BuildingIcon } from './Icons'

const steps = [
  {
    number: '01',
    title: 'DISCOVER & VALIDATE',
    description:
      'Deep product discovery, user interviews, friction mapping, and customer validation before committing engineering capital.',
    icon: TargetIcon,
    details: [
      'Customer development interviews',
      'Jobs-to-be-done framework',
      'Rapid prototype validation',
      'Market sizing & TAM analysis',
    ],
  },
  {
    number: '02',
    title: 'ARCHITECT SIMPLY',
    description:
      'Pragmatic technology choices over unnecessary complexity, paired with clean, modular modern frontend standards and scalable data schemas.',
    icon: CodeIcon,
    details: [
      'Next.js + TypeScript frontend architecture',
      'Serverless / container-native backends',
      'PostgreSQL with Prisma / Drizzle ORM',
      'Design system & component library',
    ],
  },
  {
    number: '03',
    title: 'LEAD & DELEGATE',
    description:
      'Empowering core engineering teams, establishing clear sprint cadences, removing blockers, and maintaining high team velocity.',
    icon: UsersIcon,
    details: [
      'Two-week sprint cycles with clear goals',
      'Technical spec reviews & RFC process',
      'Pair programming & code review culture',
      'Engineering career development plans',
    ],
  },
  {
    number: '04',
    title: 'GOVERN RESPONSIBLY',
    description:
      'Integrating certified ISO/IEC 42001 algorithmic safety checks, audit logs, and ethical observability into continuous deployment.',
    icon: ShieldIcon,
    details: [
      'Algorithmic impact assessments',
      'Bias & fairness testing pipelines',
      'Model drift monitoring & alerting',
      'Audit-ready documentation trails',
    ],
  },
  {
    number: '05',
    title: 'SCALE & ITERATE',
    description:
      'Continuous data-driven product refinement, telemetry analysis, user feedback loops, and sustainable technological growth.',
    icon: ZapIcon,
    details: [
      'Product analytics & cohort analysis',
      'A/B testing & feature flags',
      'Customer feedback synthesis',
      'Technical debt budgeting',
    ],
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="py-20 lg:py-32 bg-ivory-silk relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-ochre-champagne/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hairline-light to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hairline-light to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8 space-y-6" role="list" aria-label="Execution process steps">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative group flex gap-6 p-6 lg:p-8 rounded-xl bg-ivory-silk border border-hairline-light hover:border-ochre-brushed/50 hover:bg-ivory-light transition-luxury sovereign-shadow"
                role="listitem"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ochre-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" aria-hidden="true" />
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-ochre-brushed via-ochre-champagne/50 to-transparent" aria-hidden="true" />

                <div className="relative z-10 flex-shrink-0 w-16 lg:w-20">
                  <div className="flex items-center justify-center">
                    <span className="font-sans tabular-nums text-4xl lg:text-5xl font-bold text-ochre-brushed/30 group-hover:text-ochre-brushed transition-luxury">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-aubergine-deep/10 text-aubergine-deep group-hover:bg-aubergine-deep group-hover:text-ivory-silk transition-luxury">
                        <step.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-semibold text-xl lg:text-2xl text-aubergine-deep">
                        {step.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      className="flex-shrink-0 p-2 rounded-lg bg-ivory-surface border border-hairline-light text-obsidian-muted hover:bg-ochre-brushed/10 hover:border-ochre-brushed hover:text-ochre-brushed transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed"
                      aria-label={`Expand ${step.title} details`}
                    >
                      <ChevronRightIcon className="h-5 w-5 transition-luxury-fast group-hover:rotate-90" aria-hidden="true" />
                    </button>
                  </div>

                  <p className="mt-4 text-obsidian-text leading-relaxed text-base lg:text-lg">
                    {step.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2" role="list" aria-label={`${step.title} key practices`}>
                    {step.details.map((detail, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-md bg-ivory-surface border border-hairline-light text-sm text-obsidian-text/80 hover:border-ochre-brushed/50 hover:text-ochre-brushed transition-luxury-fast"
                        role="listitem"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="lg:col-span-4" aria-labelledby="philosophy-heading">
            <div
              className="sticky top-24 rounded-xl bg-aubergine-deep border border-aubergine-border p-8 lg:p-10 sovereign-shadow-lg relative overflow-hidden"
              role="region"
              aria-label="Execution philosophy"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(197,155,39,0.03)_0%,_transparent_50%)]" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

              <div className="relative z-10 space-y-8">
                <div>
                  <p className="overline text-ochre-champagne mb-4">EXECUTION PHILOSOPHY</p>
                  <blockquote className="font-display font-medium text-2xl lg:text-3xl text-ivory-silk leading-tight text-balance relative pl-6 border-l-2 border-ochre-brushed/50">
                    &ldquo;Great products emerge when user empathy steers the roadmap, and engineering remains radically pragmatic.&rdquo;
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-aubergine-border/50 space-y-6">
                  <div>
                    <p className="overline text-ivory-surface/50 mb-3">CREDENTIALS & ROLES</p>
                    <div className="space-y-3">
                      {[
                        { icon: BuildingIcon, text: 'CTO @ Qavaeat — Product Engineering & Roadmap Leadership' },
                        { icon: BuildingIcon, text: 'CTO @ Mama Sure — Tech Team Leadership, Design, Product & Scaling' },
                        { icon: ShieldIcon, text: 'Certified ISO/IEC 42001 Lead Assessor — Algorithmic Safety & AI Governance' },
                      ].map((cred, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <cred.icon className="h-5 w-5 text-ochre-brushed" aria-hidden="true" />
                          </div>
                          <p className="text-ivory-surface/80 text-sm leading-relaxed">{cred.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-aubergine-border/50">
                    <p className="overline text-ivory-surface/50 mb-3">ENGAGEMENT MODEL</p>
                    <div className="space-y-2 text-sm text-ivory-surface/70">
                      <p>Fractional CTO & Product Advisory Retainers</p>
                      <p>ISO/IEC 42001 Algorithmic Compliance Audits</p>
                      <p>Technical Due Diligence for Investors</p>
                      <p>Engineering Team Transformation & Scaling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}