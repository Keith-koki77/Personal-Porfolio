import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { TargetIcon, CodeIcon, ShieldIcon, UsersIcon, LayersIcon, ZapIcon, ChevronRightIcon, CheckIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Strategic Pillars — Capabilities, Process & Philosophy | Keith Koki',
  description:
    'Keith Koki\'s three strategic pillars: Product Management (strategy & discovery), Software Engineering (technical stewardship), and AI Governance (ISO/IEC 42001 certified). Plus the 5-step execution process and core philosophy.',
  keywords: [
    'Product Management Capabilities',
    'Software Engineering Process',
    'AI Governance Framework',
    'ISO 42001 Implementation',
    'Design Thinking',
    'Product Leadership',
    'Technical Stewardship',
    'Execution Process',
    'Engineering Philosophy',
    'Responsible AI',
  ],
  authors: [{ name: 'Keith Koki' }],
  creator: 'Keith Koki',
  publisher: 'Keith Koki',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Strategic Pillars — Capabilities, Process & Philosophy | Keith Koki',
    description:
      'Three pillars balancing product strategy, pragmatic engineering, and institutional AI governance.',
    type: 'website',
    url: 'https://keithkoki.com/pillars',
    siteName: 'Keith Koki',
    images: [
      {
        url: '/images/opengraph-pillars.jpg',
        width: 1200,
        height: 630,
        alt: 'Keith Koki Strategic Pillars',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Pillars — Capabilities, Process & Philosophy | Keith Koki',
    description:
      'Three pillars balancing product strategy, pragmatic engineering, and institutional AI governance.',
    creator: '@KeithKoki3980',
    site: '@KeithKoki3980',
  },
}

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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Keith Koki 5-Step Execution Process',
  description:
    'A repeatable, low-friction loop that moves from validated insight to governed scale for product and engineering delivery.',
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title,
    text: step.description,
    itemListElement: step.details.map((detail, detailIndex) => ({
      '@type': 'HowToDirection',
      position: detailIndex + 1,
      text: detail,
    })),
  })),
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: 'Varies by engagement',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Product discovery toolkit' },
    { '@type': 'HowToSupply', name: 'Technical architecture templates' },
    { '@type': 'HowToSupply', name: 'Engineering process frameworks' },
    { '@type': 'HowToSupply', name: 'AI governance checklists' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Next.js + TypeScript' },
    { '@type': 'HowToTool', name: 'PostgreSQL + Prisma/Drizzle' },
    { '@type': 'HowToTool', name: 'CI/CD pipeline' },
    { '@type': 'HowToTool', name: 'ISO/IEC 42001 framework' },
  ],
}

const philosophyItems = [
  { icon: UsersIcon, text: 'CTO @ Qavaeat — Product Engineering & Roadmap Leadership' },
  { icon: LayersIcon, text: 'CTO @ Mama Sure — Tech Team Leadership, Design, Product & Scaling' },
  { icon: ShieldIcon, text: 'Certified ISO/IEC 42001 Lead Assessor — Algorithmic Safety & AI Governance' },
]

export default function PillarsPage() {
  return (
    <main className="min-h-screen bg-ivory-silk relative overflow-hidden" id="pillars">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-ochre-brushed)]/5 blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }]}
          currentPage="Strategic Pillars"
          currentPageHref="/pillars"
        />
        {/* CAPABILITIES SECTION */}
        <section className="mb-24 lg:mb-32" aria-labelledby="capabilities-heading">
          <header className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
            <p className="overline-lg text-ochre-brushed mb-4">STRATEGIC CAPABILITIES · WHAT I DO</p>
            <h2 className="font-display font-semibold text-editorial-lg lg:text-editorial-xl text-aubergine-deep leading-tight text-balance mb-6">
              Three pillars balancing product strategy first, pragmatic modern engineering execution, and institutional AI governance.
            </h2>
            <p className="text-lg text-obsidian-text leading-relaxed">
              Not a generalist — a specialist in the intersection where product clarity meets technical rigor and regulatory foresight.
            </p>
          </header>

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
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="mb-24 lg:mb-32 relative overflow-hidden" aria-labelledby="process-heading">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-ochre-champagne/5 via-transparent to-transparent" aria-hidden="true" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hairline-light to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hairline-light to-transparent" aria-hidden="true" />

          <header className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
            <p className="overline-lg text-ochre-brushed mb-4">EXECUTION PROCESS · HOW I WORK</p>
            <h2 className="font-display font-semibold text-editorial-lg lg:text-editorial-xl text-aubergine-deep leading-tight text-balance mb-6">
              A repeatable, low-friction loop that moves from validated insight to governed scale.
            </h2>
          </header>

          <div className="space-y-6" role="list" aria-label="Execution process steps">
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
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="relative overflow-hidden" aria-labelledby="philosophy-heading">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-aubergine-deep/5 via-transparent to-transparent" aria-hidden="true" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
                <header>
                  <p className="overline-lg text-ochre-brushed mb-4">EXECUTION PHILOSOPHY · WHY IT WORKS</p>
                  <blockquote className="font-display font-medium text-2xl lg:text-3xl text-aubergine-deep leading-tight text-balance relative pl-6 border-l-2 border-ochre-brushed/50">
                    &ldquo;Great products emerge when user empathy steers the roadmap, and engineering remains radically pragmatic.&rdquo;
                  </blockquote>
                </header>

                <div className="space-y-8 pt-8 border-t border-hairline-light">
                  <div>
                    <p className="overline text-obsidian-muted mb-3">CREDENTIALS & ROLES</p>
                    <div className="space-y-3">
                      {philosophyItems.map((cred, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <cred.icon className="h-5 w-5 text-ochre-brushed" aria-hidden="true" />
                          </div>
                          <p className="text-obsidian-text text-sm leading-relaxed">{cred.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-hairline-light">
                    <p className="overline text-obsidian-muted mb-3">ENGAGEMENT MODEL</p>
                    <div className="space-y-2 text-sm text-obsidian-text/70">
                      <p>Fractional CTO & Product Advisory Retainers</p>
                      <p>ISO/IEC 42001 Algorithmic Compliance Audits</p>
                      <p>Technical Due Diligence for Investors</p>
                      <p>Engineering Team Transformation & Scaling</p>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-5" aria-labelledby="philosophy-heading">
                <div
                  className="sticky top-24 rounded-xl bg-aubergine-deep border border-aubergine-border p-8 lg:p-10 sovereign-shadow-lg relative overflow-hidden"
                  role="region"
                  aria-label="Engagement summary"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(197,155,39,0.03)_0%,_transparent_50%)]" aria-hidden="true" />
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

                  <div className="relative z-10 space-y-8">
                    <div className="text-center">
                      <p className="overline text-ochre-champagne mb-4">SELECTIVE ENGAGEMENTS</p>
                      <p className="text-ivory-silk font-medium text-lg leading-relaxed">
                        I accept a limited number of advisory and leadership engagements per quarter to ensure depth of involvement.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-aubergine-border/50 space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-ochre-brushed flex-shrink-0" aria-hidden="true" />
                        <p className="text-ivory-surface/80 text-sm">24hr confidential response SLA</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-ochre-brushed flex-shrink-0" aria-hidden="true" />
                        <p className="text-ivory-surface/80 text-sm">Strict NDA available on request</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-ochre-brushed flex-shrink-0" aria-hidden="true" />
                        <p className="text-ivory-surface/80 text-sm">Global: Tokyo · San Francisco · London · Remote</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-aubergine-border/50 text-center">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-ochre-brushed text-aubergine-core font-semibold hover:bg-ochre-champagne hover:gold-glow transition-all duration-300"
                      >
                        Initiate Advisory
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}