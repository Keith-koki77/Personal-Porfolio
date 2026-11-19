import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ArrowRightIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Initiate Advisory — Keith Koki',
  description:
    'Engage Keith Koki for product leadership, software engineering, or AI governance advisory. Fractional CTO, technical due diligence, and ISO/IEC 42001 algorithmic compliance audits.',
  keywords: [
    'AI Governance Advisory',
    'ISO 42001 Compliance',
    'Fractional CTO',
    'Product Leadership',
    'Technical Due Diligence',
    'AI Integration into Business',
    'AI Advisory',
    'ISO/IEC 42001',
    'Algorithmic Safety',
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
    title: 'Initiate Advisory — Keith Koki',
    description:
      'Engage Keith Koki for product leadership, software engineering, or AI governance advisory.',
    type: 'website',
    url: 'https://keithkoki.com/advisory',
    siteName: 'Keith Koki',
    images: [
      {
        url: '/images/opengraph-advisory.jpg',
        width: 1200,
        height: 630,
        alt: 'Initiate Advisory with Keith Koki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Initiate Advisory — Keith Koki',
    description:
      'Engage Keith Koki for product leadership, software engineering, or AI governance advisory.',
    creator: '@KeithKoki3980',
    site: '@KeithKoki3980',
  },
}

const advisorySchema = {
  '@context': 'https://schema.org',
  '@type': ['Service', 'LocalBusiness'],
  name: 'Keith Koki Advisory',
  description:
    'Executive advisory for product leadership, software engineering, and AI governance. Fractional CTO, technical due diligence, ISO/IEC 42001 algorithmic compliance audits.',
  url: 'https://keithkoki.com/advisory',
  provider: {
    '@type': 'Person',
    name: 'Keith Koki',
    url: 'https://keithkoki.com',
    sameAs: [
      'https://www.linkedin.com/in/keith-koki-669782240/',
      'https://github.com/Keith-koki77/',
      'https://x.com/KeithKoki3980',
      'https://substack.com/@keithkoki',
    ],
    knowsAbout: [
      'Product Management',
      'Software Engineering',
      'AI Governance',
      'ISO/IEC 42001',
      'Technical Due Diligence',
      'Fractional CTO',
    ],
  },
  areaServed: 'Worldwide',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://keithkoki.com/contact',
    availableLanguage: 'English',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Advisory Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fractional CTO & Product Advisory',
          description:
            'Part-time CTO leadership and product strategy for early-stage and growth companies.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ISO/IEC 42001 Algorithmic Compliance Audits',
          description:
            'Certified Lead Assessor audits for AI management system compliance.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technical Due Diligence',
          description:
            'Architecture review, team assessment, and risk evaluation for investors.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Engineering Team Transformation',
          description:
            'Velocity optimisation, technical delegation, mentorship frameworks.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Speaking & Workshops',
          description:
            'Conferences, workshops, and podcasts on product, engineering, and AI governance.',
        },
      },
    ],
  },
}

const engagements = [
  'Fractional CTO & Product Advisory Retainers',
  'ISO/IEC 42001 Algorithmic Compliance Audits',
  'Technical Due Diligence for Investors',
  'Engineering Team Transformation & Scaling',
  'Speaking: Conferences, Workshops, Podcasts',
]

const services = [
  {
    id: 'product',
    title: 'Product Management',
    description:
      'I help founders and product teams turn ambiguous ideas into shipped digital products, from first discovery through to go-to-market.',
    covers: [
      'Strategy, discovery and validation',
      'Roadmaps and UX architecture',
      'Metrics and growth guidance',
    ],
    href: '/product-management',
    cta: 'View Product Management',
  },
  {
    id: 'engineering',
    title: 'Software Engineering',
    description:
      'I lead engineering teams and build simple, maintainable systems, from frontend architecture to backend design and the standards that keep a codebase healthy.',
    covers: [
      'Frontend with Next.js, TypeScript and React',
      'Backend design and code-quality standards',
      'Mentoring squads and shipping velocity',
    ],
    href: '/engineering',
    cta: 'View Engineering',
  },
  {
    id: 'ai-governance',
    title: 'AI Governance & Advisory',
    description:
      'As a certified ISO/IEC 42001 Lead Assessor, I advise fast-growing startups on responsible AI: safety frameworks, bias audits, and governance that runs inside your delivery pipeline.',
    covers: [
      'Algorithmic risk auditing and bias testing',
      'Automated governance in CI/CD',
      'Readiness for ISO/IEC 42001 certification',
    ],
    href: '/ai-governance',
    cta: 'View AI Governance',
  },
]

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen bg-[var(--color-ivory-silk)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(advisorySchema) }}
      />
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 lg:pt-44 lg:pb-28">
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }]}
          currentPage="Initiate Advisory"
          currentPageHref="/advisory"
        />
        <section
          className="grid gap-x-8 gap-y-14 lg:grid-cols-12 lg:items-end"
          aria-labelledby="advisory-heading"
        >
          <div className="lg:col-span-7">
            <h1
              id="advisory-heading"
              className="font-display font-semibold text-editorial-lg lg:text-editorial-xl tracking-tight leading-[1.05] text-[var(--color-aubergine-deep)] text-balance"
            >
              Initiate Advisory
            </h1>
            <p className="mt-8 max-w-xl text-xl lg:text-2xl leading-relaxed text-[var(--color-obsidian-text)]/75 text-pretty">
              I take on a small number of engagements across product leadership, technical advisory,
              team stewardship, and certified ISO/IEC 42001 audits. Pick the area closest to your problem.
            </p>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9" aria-labelledby="engagements-heading">
            <h2
              id="engagements-heading"
              className="font-display text-xl font-semibold text-[var(--color-aubergine-deep)]"
            >
              Typical engagements
            </h2>
            <ul className="mt-4 border-t border-[var(--color-aubergine-deep)]/20">
              {engagements.map((item) => (
                <li
                  key={item}
                  className="border-b border-[var(--color-aubergine-deep)]/10 py-3 text-[var(--color-obsidian-text)]/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* Services: one ruled list, each row is a single link */}
        <section className="mt-24 lg:mt-32" aria-labelledby="services-heading">
          <h2
            id="services-heading"
            className="mb-6 font-display text-2xl lg:text-3xl font-semibold text-[var(--color-aubergine-deep)]"
          >
            Service areas
          </h2>

          <ul className="border-t border-[var(--color-aubergine-deep)]/25">
            {services.map((service) => (
              <li
                key={service.id}
                className="group relative border-b border-[var(--color-aubergine-deep)]/15 transition-colors duration-300 hover:bg-[var(--color-ivory-surface)] focus-within:bg-[var(--color-ivory-surface)] motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-ochre-brushed)] transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100 motion-reduce:transition-none"
                />

                <div className="grid gap-x-8 gap-y-6 px-0 py-10 lg:grid-cols-12 lg:px-6 lg:py-14">
                  <h3 className="lg:col-span-4 font-display text-3xl lg:text-4xl font-semibold leading-tight text-[var(--color-aubergine-deep)] transition-colors duration-300 group-hover:text-[var(--color-ochre-brushed)] motion-reduce:transition-none">
                    <Link
                      href={service.href}
                      className="focus-visible:outline-none after:absolute after:inset-0 focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-[color:var(--color-ochre-brushed)]"
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <div className="lg:col-span-5">
                    <p className="max-w-prose text-lg leading-relaxed text-[var(--color-obsidian-text)]/75">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2.5 text-[var(--color-obsidian-text)]/70">
                      {service.covers.map((item) => (
                        <li key={item} className="flex items-baseline gap-3">
                          <span
                            aria-hidden="true"
                            className="h-px w-4 shrink-0 translate-y-[-0.3em] bg-[var(--color-ochre-brushed)]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 lg:self-end lg:text-right">
                    <span
                      aria-hidden="true"
                      className="text-sm font-semibold text-[var(--color-ochre-brushed)] underline decoration-[var(--color-ochre-brushed)]/40 underline-offset-4 transition-all duration-300 group-hover:decoration-[var(--color-ochre-brushed)] group-hover:decoration-2 motion-reduce:transition-none"
                    >
                      {service.cta}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Closing: a plain full-width band, no card, no glow */}
      <section
        className="bg-[var(--color-aubergine-deep)] text-[var(--color-ivory-silk)]"
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 px-6 py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
          <h2
            id="contact-heading"
            className="lg:col-span-6 font-display text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance"
          >
            Ready to start a conversation?
          </h2>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-[var(--color-ivory-silk)]/75">
              Tell me what you are building and where you are stuck. I take on fractional CTO, product
              leadership, technical advisory, and ISO/IEC 42001 audit work. A strict NDA is available on request.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[var(--color-ochre-brushed)] px-7 py-3.5 font-semibold text-[var(--color-aubergine-core)] transition-colors duration-300 hover:bg-[var(--color-ochre-champagne)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-ochre-champagne)] motion-reduce:transition-none"
            >
              Engage Advisory
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}