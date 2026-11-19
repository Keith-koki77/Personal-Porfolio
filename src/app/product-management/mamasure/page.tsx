import { Metadata } from 'next'

import Link from 'next/link'
import { ArrowLeftIcon, BuildingIcon, FileTextIcon, ShieldIcon, CodeIcon, UsersIcon, ZapIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'MamaSure Case Study | Product Management Portfolio | Keith Koki',
  description:
    'A maternal healthcare technology platform connecting pregnancy assessments, planning, healthcare access, financial contributions, and payment visibility. Product architecture and technical implementation case study.',
  authors: [{ name: 'Keith Koki' }],
  openGraph: {
    title: 'MamaSure Case Study | Product Management Portfolio | Keith Koki',
    description:
      'A maternal healthcare technology platform connecting pregnancy assessments, planning, healthcare access, financial contributions, and payment visibility.',
    type: 'website',
    url: 'https://keithkoki.com/product-management/mamasure',
  },
}

export default function MamaSureCaseStudy() {
  const mamasureTeal = '#00B8A9'
  const mamasureNavy = '#1A2A44'
  const mamasureCoral = '#FF6B6B'

  return (
    <main id="main-content" className="pt-0">
      <article>
          {/* Hero */}
          <header className="relative py-20 lg:py-32 bg-aubergine-ground text-ivory-silk overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(60%_55%_at_62%_40%,rgba(0,184,169,0.15),transparent_70%)]"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <Link
                href="/product-management"
                className="inline-flex items-center gap-2 text-sm font-medium text-ochre-champagne hover:text-ochre-brushed transition-luxury-fast mb-8"
              >
                <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                Back to Product Management
              </Link>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span
                  className="px-3 py-1 rounded text-xs font-medium tracking-wider bg-teal-500/20 text-teal-400 border border-teal-500/30"
                  style={{ backgroundColor: `${mamasureTeal}20`, color: mamasureTeal, borderColor: `${mamasureTeal}40` }}
                >
                  HealthTech
                </span>
                <span
                  className="px-3 py-1 rounded text-xs font-medium tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  style={{ backgroundColor: `${mamasureNavy}20`, color: mamasureNavy, borderColor: `${mamasureNavy}40` }}
                >
                  Digital Health
                </span>
                <span
                  className="px-3 py-1 rounded text-xs font-medium tracking-wider bg-red-500/20 text-red-400 border border-red-500/30"
                  style={{ backgroundColor: `${mamasureCoral}20`, color: mamasureCoral, borderColor: `${mamasureCoral}40` }}
                >
                  Financial Workflows
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded text-xs font-medium tracking-wider bg-ivory-silk/20 text-ivory-surface border border-ivory-silk/30">
                  In development
                </span>
              </div>
              <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] tracking-[-0.02em] text-ivory-silk mt-6 mb-4 text-balance">
                Connecting maternal healthcare, planning, and financial support.
              </h1>
            </div>
          </header>

          <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16 lg:py-24 space-y-20 lg:space-y-28">
            {/* Overview */}
            <section aria-labelledby="overview-heading">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="overview-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Overview
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    MamaSure is a maternal healthcare technology platform designed to bring pregnancy assessments, maternity planning, healthcare access, financial contributions, and payment visibility into a connected experience.
                  </p>
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    The product challenge is to connect multiple healthcare and financial workflows into one coherent digital journey. The platform involves interconnected product modules that require careful product definition, technical architecture, data consistency, and user experience planning.
                  </p>
                </div>
              </div>
            </section>

            {/* Problem */}
            <section aria-labelledby="problem-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="problem-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    The Problem
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    Maternal healthcare involves interconnected needs. Users may need to:
                  </p>
                  <ul className="space-y-3" role="list">
                    {[
                      'Track pregnancy progress',
                      'Complete assessments',
                      'Plan upcoming healthcare needs',
                      'Discover healthcare facilities',
                      'Understand healthcare plans',
                      'Organize financial contributions',
                      'Track payments and available balances',
                      'Monitor their progress',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-obsidian-text leading-relaxed">
                    The product opportunity is to bring relevant planning, healthcare coordination, and financial visibility into one digital platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Product Vision */}
            <section aria-labelledby="vision-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="vision-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Product Vision
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <blockquote className="font-display font-semibold text-2xl lg:text-3xl text-ivory-silk leading-tight text-balance bg-aubergine-deep p-8 lg:p-12 rounded-xl border border-aubergine-border">
                    Build a digital maternal healthcare platform that connects pregnancy assessments, planning, healthcare access, financial contributions, and progress tracking.
                  </blockquote>
                </div>
              </div>
            </section>

            {/* Product Architecture Diagram */}
            <section aria-labelledby="architecture-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="architecture-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Product Architecture
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg text-obsidian-text leading-relaxed mb-8">
                    The diagram below shows the ten interconnected modules of the MamaSure platform. Not all modules are production-ready; some are in active development or planned.
                  </p>
                  <div className="rounded-xl p-6 lg:p-8 bg-ivory-surface border border-hairline-light">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
                      {/* Central Platform */}
                      <div className="relative z-10 flex h-32 w-32 lg:h-40 lg:w-40 items-center justify-center rounded-full bg-aubergine-deep border-4 border-ochre-brushed shadow-lg flex-col text-center p-2">
                        <span className="font-display font-semibold text-lg text-ochre-champagne">MamaSure</span>
                        <span className="overline text-ochre-brushed/70">Platform</span>
                      </div>

                      {/* Module Cards - arranged in a grid */}
                      <div className="flex-1 grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 p-4 lg:p-0">
                        {[
                          { title: 'Auth & Profiles', color: mamasureTeal },
                          { title: 'Assessments', color: mamasureTeal },
                          { title: 'Planning', color: mamasureNavy },
                          { title: 'Hospitals', color: mamasureNavy },
                          { title: 'Healthcare Plans', color: mamasureNavy },
                          { title: 'Contributions', color: mamasureCoral },
                          { title: 'Payments', color: mamasureCoral },
                          { title: 'Dashboard', color: mamasureTeal },
                          { title: 'Cover', color: mamasureCoral },
                          { title: 'Ledger', color: mamasureNavy },
                        ].map((module, i) => (
                          <div
                            key={i}
                            className="relative rounded-lg p-3 text-center transition-luxury hover:scale-105 hover:shadow-lg"
                            style={{ borderColor: `${module.color}40`, backgroundColor: `${module.color}10` }}
                          >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full" style={{ backgroundColor: module.color }} aria-hidden="true" />
                            <p className="text-sm font-medium text-obsidian-text pt-2" style={{ color: module.color }}>
                              {module.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-obsidian-muted text-center mt-6 max-w-2xl mx-auto">
                      Not all modules are live or production-ready. This represents the target product architecture.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Product Requirements & Technical Decisions */}
            <section aria-labelledby="requirements-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="requirements-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Product Requirements & Technical Decisions
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'User authentication and profiles',
                      'Assessment workflows',
                      'Pregnancy-stage data',
                      'User-specific plans',
                      'Healthcare facility discovery',
                      'Contribution management',
                      'Payment records',
                      'Financial ledgers',
                      'Personalized dashboard information',
                    ].map((item, i) => (
                      <div key={i} className="rounded-lg p-4 bg-ivory-surface border border-hairline-light">
                        <p className="font-medium text-obsidian-text">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl p-6 lg:p-8 bg-aubergine-deep border border-aubergine-border">
                    <h3 className="font-display font-semibold text-lg text-ivory-silk mb-4 flex items-center gap-2">
                      <ShieldIcon className="h-5 w-5 text-ochre-brushed" aria-hidden="true" />
                      Key Module Distinctions
                    </h3>
                    <dl className="space-y-4 text-ivory-surface/80">
                      <div>
                        <dt className="font-semibold text-ivory-silk">Payments</dt>
                        <dd className="mt-1">Process and record financial transactions.</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ivory-silk">Contributions</dt>
                        <dd className="mt-1">Track financial support towards a plan.</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ivory-silk">Ledger</dt>
                        <dd className="mt-1">Maintain traceable financial movements.</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-ivory-silk">Dashboard</dt>
                        <dd className="mt-1">Present relevant healthcare and financial information.</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Architecture */}
            <section aria-labelledby="tech-arch-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="tech-arch-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Technical Architecture
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      'Next.js',
                      'React',
                      'TypeScript',
                      'Python',
                      'REST API',
                      'Supabase',
                      'PostgreSQL',
                      'M-Pesa Daraja',
                      'Vercel',
                      'Railway',
                    ].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-ivory-surface border border-hairline-light text-sm text-obsidian-text">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-3" role="list">
                    {[
                      { title: 'API Contracts', desc: 'Defined API interfaces between frontend and Python/FastAPI backend with strict validation.' },
                      { title: 'Authentication & Authorization', desc: 'Supabase Auth with row-level security for healthcare data isolation.' },
                      { title: 'Data Consistency', desc: 'Transactional integrity across assessments, pregnancy stages, profiles, and plans.' },
                      { title: 'Financial Transaction Integrity', desc: 'ACID-compliant payment, contribution, and ledger operations.' },
                      { title: 'Frontend/Backend Integration', desc: 'Type-safe API clients with OpenAPI spec generation.' },
                      { title: 'Deployment & Reliability', desc: 'Vercel (frontend) + Railway (backend) with health checks and monitoring.' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                        <strong className="text-aubergine-deep">{item.title}:</strong>
                        <span className="text-obsidian-text">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Product Challenges */}
            <section aria-labelledby="challenges-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="challenges-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Product Challenges
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  {[
                    {
                      title: 'Data Consistency Across Modules',
                      desc: 'Assessments, pregnancy stages, profiles, and plans must stay synchronized. A pregnancy-stage change ripples through assessments, plan eligibility, and dashboard data.',
                    },
                    {
                      title: 'Financial Integrity',
                      desc: 'Payment, contribution, and ledger modules must maintain traceable, auditable records. A single transaction updates balances, contribution progress, and ledger entries atomically.',
                    },
                    {
                      title: 'Complex User Journeys',
                      desc: 'Users navigate healthcare assessments, facility discovery, contribution schedules, and payment tracking in one session. The UX must feel cohesive, not modular.',
                    },
                    {
                      title: 'API Reliability & Validation',
                      desc: 'Third-party payment APIs (M-Pesa Daraja) introduce latency and failure modes. Robust validation, idempotency, and retry logic are essential for financial trust.',
                    },
                  ].map((challenge, i) => (
                    <article key={i} className="rounded-xl p-6 lg:p-8 bg-ivory-surface border border-hairline-light">
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-ochre-brushed/10 flex items-center justify-center text-ochre-brushed font-bold">
                          {i + 1}
                        </span>
                        <div>
                          <h4 className="font-display font-semibold text-lg text-aubergine-deep mb-1">{challenge.title}</h4>
                          <p className="text-obsidian-text leading-relaxed">{challenge.desc}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* Outcomes */}
            <section aria-labelledby="outcomes-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="outcomes-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Outcomes
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg text-obsidian-text leading-relaxed mb-6">
                    Product milestones to date:
                  </p>
                  <p className="text-sm text-obsidian-muted italic mb-8">
                    The following are placeholders for verified metrics to be populated. Not all modules are complete or live.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      'Registered users',
                      'Completed assessments',
                      'Active plans',
                      'Successful payments',
                      'Contribution volume',
                      'API success rate',
                    ].map((metric) => (
                      <div key={metric} className="p-4 rounded-lg bg-ivory-surface border border-hairline-light/50">
                        <p className="font-medium text-obsidian-text">{metric}</p>
                        <p className="text-sm text-obsidian-muted mt-1">[Placeholder &mdash; to be verified]</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Lessons Learned */}
            <section aria-labelledby="lessons-heading" className="border-t border-hairline-light pt-8">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <h2 id="lessons-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mb-6">
                    Lessons Learned
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-4">
                  {[
                    'Complex product architecture requires systems thinking from day one &mdash; modules cannot be designed in isolation.',
                    'Technical product management is essential when financial and healthcare data intersect; product decisions have regulatory and compliance implications.',
                    'Financial workflow design demands auditability, traceability, and atomic operations as first-class product requirements.',
                    'API-driven product development enables parallel frontend/backend work but requires strict contract governance.',
                    'Product quality and reliability are not afterthoughts &mdash; they must be designed into the architecture and verified continuously.',
                    'Distinguishing planned, developed, tested, and production-ready functionality is critical for stakeholder trust and product credibility.',
                  ].map((lesson, i) => (
                    <div key={i} className="flex items-start gap-3 px-4 py-3 rounded-lg bg-ivory-surface border border-hairline-light">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" />
                      <p className="text-obsidian-text leading-relaxed">{lesson}</p>
                    </div>
                  ))}
                </div>
              </div>
</section>
            </div>
          </article>
        </main>
      )
    }