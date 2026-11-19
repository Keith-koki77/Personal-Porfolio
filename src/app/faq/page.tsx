import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ArrowRightIcon, ChevronDownIcon, ShieldIcon, TargetIcon, CodeIcon, SparklesIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'FAQ — AI Governance, Product Management & Engineering | Keith Koki',
  description:
    'Frequently asked questions about AI governance (ISO/IEC 42001), product management, and software engineering advisory services by Keith Koki.',
  keywords: [
    'FAQ',
    'AI Governance FAQ',
    'ISO 42001 FAQ',
    'Product Management FAQ',
    'Software Engineering FAQ',
    'Fractional CTO FAQ',
    'AI Advisory FAQ',
    'Technical Due Diligence FAQ',
  ],
  authors: [{ name: 'Keith Koki' }],
  creator: 'Keith Koki',
  publisher: 'Keith Koki',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'FAQ — AI Governance, Product Management & Engineering | Keith Koki',
    description:
      'Answers to common questions about AI governance, product management, and engineering advisory.',
    type: 'website',
    url: 'https://keithkoki.com/faq',
    siteName: 'Keith Koki',
    images: [
      {
        url: '/images/opengraph-faq.jpg',
        width: 1200,
        height: 630,
        alt: 'Keith Koki FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Keith Koki',
    description:
      'Frequently asked questions about AI governance, product management, and engineering advisory.',
    creator: '@KeithKoki3980',
    site: '@KeithKoki3980',
  },
}

interface FAQItem {
  question: string
  answer: string
  category: 'ai-governance' | 'product' | 'engineering'
}

const faqs: FAQItem[] = [
  // AI GOVERNANCE - 10 questions
  {
    category: 'ai-governance',
    question: 'What is ISO/IEC 42001 and why does it matter for AI systems?',
    answer:
      'ISO/IEC 42001 is the first international certifiable standard for AI management systems, providing a structured framework to govern AI responsibly across its lifecycle. It matters because it gives organisations a systematic way to manage AI risks — bias, drift, security, transparency — while demonstrating compliance to regulators, investors, and customers. As a certified Lead Assessor, I help startups implement this standard pragmatically, not as a paperwork exercise.',
  },
  {
    category: 'ai-governance',
    question: 'When should a startup engage an AI governance advisor?',
    answer:
      'Engage an AI governance advisor before shipping AI features to production — early governance is 10x cheaper than retrofits. Most startups engage me when: (1) raising Series A/B with investor AI risk questions, (2) operating in regulated sectors (fintech, healthtech, insurtech), (3) integrating LLMs into customer-facing products, or (4) preparing for EU AI Act compliance.',
  },
  {
    category: 'ai-governance',
    question: 'What does an ISO/IEC 42001 compliance audit involve?',
    answer:
      'An ISO/IEC 42001 audit covers AI policy, risk assessment, data governance, model lifecycle, deployment controls, drift monitoring, incident response, supplier management, and continual improvement. I conduct gap assessments first, guide implementation of missing controls, then perform the certification audit — typically 8–16 weeks depending on organisational maturity.',
  },
  {
    category: 'ai-governance',
    question: 'How do you assess algorithmic bias and fairness?',
    answer:
      'I use statistical parity testing, disparate impact analysis, counterfactual fairness checks, and subgroup performance evaluation across protected attributes (gender, ethnicity, age, geography). Tests run in your CI/CD pipeline so every model version is validated before deployment, with business-context fairness thresholds and ongoing monitoring dashboards.',
  },
  {
    category: 'ai-governance',
    question: 'What is model drift and how do you monitor for it?',
    answer:
      'Model drift is when input data distributions or input-output relationships shift over time, degrading performance. I implement three-layer monitoring: (1) data drift via KS-test and PSI on features, (2) concept drift via label distribution and confidence tracking, (3) performance drift via latency-aware metric tracking — all alerting to your incident management system.',
  },
  {
    category: 'ai-governance',
    question: 'How does AI governance integrate with existing DevOps/MLOps pipelines?',
    answer:
      'Governance becomes invisible guardrails: policy-as-code for model cards, automated bias tests in PR checks, drift monitors as scheduled jobs, audit log aggregation to SIEM. Engineers ship fast; non-compliant changes fail fast with clear remediation guidance — "governance by default" embedded in your delivery pipeline.',
  },
  {
    category: 'ai-governance',
    question: 'What is the EU AI Act and how does ISO 42001 relate to it?',
    answer:
      'The EU AI Act is the world\'s first comprehensive AI regulation, classifying systems by risk and imposing obligations on high-risk AI. ISO/IEC 42001 provides a management system framework that maps directly to the Act\'s high-risk requirements — risk management, data governance, transparency, human oversight, accuracy, robustness, and post-market monitoring. ISO 42001 certification is strong evidence of conformity.',
  },
  {
    category: 'ai-governance',
    question: 'Can you help with responsible AI policy development?',
    answer:
      'Yes. I draft and operationalise responsible AI policies tailored to your organisation: acceptable use, model approval workflows, data handling standards, vendor assessment, incident escalation, and board reporting. The policy is codified into your delivery process with tooling support — not left as an unread PDF.',
  },
  {
    category: 'ai-governance',
    question: 'What is the ROI of investing in AI governance early?',
    answer:
      'Early governance prevents costly retrofits: (1) faster enterprise sales — compliance artifacts close deals 30–50% faster, (2) reduced incident risk — production drift/bias incidents cost 10–100x more post-launch, (3) investor confidence — AI risk is a top due-diligence item for Series A+, (4) regulatory readiness — avoiding EU AI Act fines up to €35M or 7% global turnover.',
  },
  {
    category: 'ai-governance',
    question: 'How do you approach AI governance for organisations with limited technical maturity?',
    answer:
      'Start with a lightweight maturity assessment, then prioritise quick wins: model inventory, basic risk classification, simple approval gates, and monitoring on the highest-impact model. Iterate quarterly, adding sophistication (automated testing, advanced drift detection, formal audit trails) as the team and product mature — no big-bang implementations.',
  },

  // PRODUCT MANAGEMENT - 7 questions
  {
    category: 'product',
    question: 'What does a product-led CTO actually do day-to-day?',
    answer:
      'A product-led CTO owns the "why" and "what" alongside the "how": customer discovery calls, roadmap prioritisation with outcome metrics, UX reviews, sprint planning with clear acceptance criteria, technical spec reviews, and hiring/mentoring. I don\'t write production code — I ensure engineering effort maps to validated customer problems.',
  },
  {
    category: 'product',
    question: 'How do you run product discovery for B2B products?',
    answer:
      'I use a structured Jobs-to-be-Done framework: identify segments, recruit 8–12 interviewees, conduct switched interviews to uncover struggling moments, map job steps/pains/gains, define outcome metrics, build and test low-fidelity prototypes, validate willingness-to-pay — all in 4–6 weeks to de-risk months of engineering.',
  },
  {
    category: 'product',
    question: 'What is your approach to roadmap prioritisation?',
    answer:
      'Outcome-driven, not feature-driven: each item ties to a specific OKR (e.g., "Reduce onboarding drop-off from 40% to 15%"). I use RICE scoring modified for B2B with a strategic alignment multiplier. Roadmaps are quarterly commitments with monthly check-ins; scope flexes, outcomes don\'t.',
  },
  {
    category: 'product',
    question: 'How do you define and track product metrics that matter?',
    answer:
      'I establish a metric hierarchy: North Star (e.g., weekly active paying teams) → leading indicators (activation rate, time-to-value) → diagnostic metrics (funnel conversion, feature adoption). Teams own leading indicators; leadership owns the North Star. Dashboards are real-time, reviewed weekly. Vanity metrics are banned from executive reviews.',
  },
  {
    category: 'product',
    question: 'How do you balance design-led thinking with engineering velocity?',
    answer:
      'Design and engineering run in parallel: design works one sprint ahead on validated problems, producing component-ready specs in a shared design system (code, not Figma). Engineers implement against frozen specs; design debt is tracked like technical debt. This eliminates handoff friction and rework.',
  },
  {
    category: 'product',
    question: 'What is your go-to-market strategy framework for early-stage products?',
    answer:
      'Three-horizon GTM: (1) Founder-led sales to first 10–20 customers — validate problem-solution fit and pricing, (2) Product-led growth with self-serve onboarding — scale to 100–500 customers, (3) Sales-assisted enterprise motion for complex deals. Each horizon has distinct metrics, team structure, and investment thesis.',
  },
  {
    category: 'product',
    question: 'How do you handle technical debt vs. feature velocity trade-offs?',
    answer:
      'Technical debt is a portfolio decision: I allocate a fixed "debt budget" per sprint (typically 20%) and prioritise debt that blocks next quarter\'s outcomes. Debt is tracked in the same backlog as features with RICE scores, making trade-offs visible to product and leadership — not hidden in engineering.',
  },

  // ENGINEERING - 4 questions
  {
    category: 'engineering',
    question: 'What does your modern frontend architecture look like?',
    answer:
      'Next.js 14+ App Router with Server Components by default, TypeScript strict mode, TanStack Query for server state, Zustand for client UI state, Tailwind CSS with a custom design system (tokens, primitives, patterns). Testing: Vitest + React Testing Library + Playwright E2E. CI: type-check, lint, unit, E2E on every PR.',
  },
  {
    category: 'engineering',
    question: 'How do you approach backend architecture for scale?',
    answer:
      'Pragmatic over premature: start with a modular monolith (Next.js API routes or FastAPI) on PostgreSQL. Extract services only when team ownership, scaling characteristics, or deployment independence demand it. Prisma/Drizzle for type-safe DB, Redis for caching/queues, event-driven patterns for reliability. Kubernetes only when operational maturity justifies it.',
  },
  {
    category: 'engineering',
    question: 'How do you build high-velocity engineering teams?',
    answer:
      'Three pillars: (1) Clear ownership — each engineer owns a domain end-to-end, (2) Fast feedback — PRs reviewed in <4 hours, CI <10 min, staging auto-deploys on merge, (3) Growth culture — weekly pairing, monthly tech talks, individual development plans tied to business impact. I hire for trajectory and mentor seniors into tech leads.',
  },
  {
    category: 'engineering',
    question: 'What is your technical due diligence process for investors?',
    answer:
      'I evaluate six dimensions: (1) Architecture — modularity, scalability, single points of failure, (2) Code quality — test coverage, debt hotspots, dependency risk, (3) Team — bus factor, seniority, hiring pipeline, (4) Process — CI/CD, incident response, release cadence, (5) Security — secrets, authZ/authN, encryption, (6) Product–tech fit. Deliverable: executive summary + detailed findings with remediation priority and cost estimates.',
  },
]

const categories = [
  { id: 'ai-governance', label: 'AI Governance & ISO 42001', icon: ShieldIcon, count: 10 },
  { id: 'product', label: 'Product Management', icon: TargetIcon, count: 7 },
  { id: 'engineering', label: 'Software Engineering', icon: CodeIcon, count: 4 },
]

export default function FAQPage() {
  // Generate FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-[var(--color-ivory-silk)] relative overflow-hidden" id="faq">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-ochre-brushed)]/5 blur-[200px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }]}
            currentPage="FAQ"
            currentPageHref="/faq"
          />

          <header className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)] text-sm font-medium uppercase tracking-wider mb-8">
              <SparklesIcon className="w-4 h-4" aria-hidden="true" />
              <span>Frequently Asked</span>
            </div>
            <h1 className="font-display font-semibold text-editorial-lg lg:text-editorial-xl text-[var(--color-aubergine-deep)] mb-8 leading-tight text-balance max-w-3xl mx-auto">
              Questions & Answers
            </h1>
            <p className="font-script text-xl lg:text-2xl text-[var(--color-aubergine-deep)]/70 leading-relaxed text-balance max-w-2xl mx-auto">
              Practical answers to the questions I hear most from founders, investors, and engineering leaders.
            </p>
          </header>

          {/* Category Navigation */}
          <nav className="mb-16 flex flex-wrap justify-center gap-3" aria-label="FAQ Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-category={cat.id}
                className="category-btn px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/40 hover:bg-[var(--color-ivory-surface)]"
                aria-pressed="false"
              >
                <span className="flex items-center gap-2">
                  <cat.icon className="w-4 h-4" aria-hidden="true" />
                  {cat.label}
                  <span className="px-2 py-0.5 text-xs bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)] rounded-full">
                    {cat.count}
                  </span>
                </span>
              </button>
            ))}
          </nav>

          {/* FAQ Sections */}
          {categories.map((cat) => (
            <section
              key={cat.id}
              id={`faq-${cat.id}`}
              className="mb-16 lg:mb-24 category-section"
              aria-labelledby={`faq-${cat.id}-heading`}
            >
              <h2
                id={`faq-${cat.id}-heading`}
                className="font-display font-semibold text-2xl lg:text-3xl text-[var(--color-aubergine-deep)] mb-8 flex items-center gap-3"
              >
                <cat.icon className="w-6 h-6 text-[var(--color-ochre-brushed)]" aria-hidden="true" />
                {cat.label}
              </h2>

              <div className="space-y-4" role="list" aria-label={`${cat.label} questions`}>
                {faqs
                  .filter((faq) => faq.category === cat.id)
                  .map((faq, index) => (
                    <details
                      key={`${cat.id}-${index}`}
                      className="group rounded-xl bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)] transition-all duration-300"
                      role="listitem"
                    >
                      <summary
                        className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ochre-brushed)]"
                        aria-expanded="false"
                      >
                        <h3 className="font-display font-semibold text-lg lg:text-xl text-[var(--color-aubergine-deep)] pr-8">
                          {faq.question}
                        </h3>
                        <ChevronDownIcon
                          className="flex-shrink-0 w-5 h-5 text-[var(--color-ochre-brushed)] transition-transform duration-200 group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <div className="px-6 pb-6 pt-0 border-t border-[var(--color-aubergine-border)]/10">
                        <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed speakable">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
              </div>
            </section>
          ))}

          {/* CTA */}
          <section className="relative overflow-hidden rounded-3xl bg-[var(--color-aubergine-deep)] p-8 lg:p-12 text-white text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-ochre-brushed)]/10 via-transparent to-transparent" aria-hidden="true" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display font-semibold text-2xl lg:text-3xl mb-6 leading-tight">
                Didn&rsquo;t find your answer?
              </h2>
              <p className="text-white/70 leading-relaxed mb-10">
                Every engagement is different. Book a 30-minute discovery call to discuss your specific context.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[var(--color-ochre-brushed)] text-[var(--color-aubergine-core)] font-semibold hover:bg-[var(--color-ochre-champagne)] hover:shadow-[0_0_30px_rgba(197,155,39,0.4)] transition-all duration-300"
              >
                Book a discovery call
                <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}