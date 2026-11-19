import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ArrowRightIcon, SparklesIcon, CalendarIcon, MapPinIcon, ShieldIcon, CodeIcon, UsersIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Speaking & Workshops — Keith Koki',
  description:
    'Keith Koki speaking engagements, conference talks, workshops, and podcasts on product management, software engineering, AI governance, and ISO/IEC 42001 compliance.',
  keywords: [
    'Speaking Engagements',
    'Conference Speaker',
    'Workshop Facilitator',
    'Product Management Speaker',
    'AI Governance Speaker',
    'Engineering Leadership Speaker',
    'ISO 42001 Speaker',
    'Tech Conference Kenya',
    'ProductCon Africa',
  ],
  authors: [{ name: 'Keith Koki' }],
  creator: 'Keith Koki',
  publisher: 'Keith Koki',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Speaking & Workshops — Keith Koki',
    description:
      'Conference talks, workshops, and podcasts on product strategy, engineering leadership, and AI governance.',
    type: 'website',
    url: 'https://keithkoki.com/speaking',
    siteName: 'Keith Koki',
    images: [
      {
        url: '/images/opengraph-speaking.jpg',
        width: 1200,
        height: 630,
        alt: 'Keith Koki Speaking & Workshops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speaking & Workshops — Keith Koki',
    description:
      'Keith Koki speaking engagements on product, engineering, and AI governance.',
    creator: '@KeithKoki3980',
    site: '@KeithKoki3980',
  },
}

const topics = [
  {
    title: 'Product Strategy & Discovery',
    description:
      'From zero to validated roadmap: customer development, jobs-to-be-done, rapid prototyping, and outcome-oriented product planning.',
    icon: SparklesIcon,
    color: 'bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)]',
  },
  {
    title: 'Engineering Leadership & Team Scaling',
    description:
      'Building high-velocity engineering cultures, technical delegation, mentorship frameworks, and squad velocity optimization.',
    icon: UsersIcon,
    color: 'bg-[var(--color-aubergine-deep)]/10 text-[var(--color-aubergine-deep)]',
  },
  {
    title: 'AI Governance & ISO/IEC 42001',
    description:
      'Responsible AI implementation, algorithmic risk auditing, bias testing, and certified compliance frameworks for startups.',
    icon: ShieldIcon,
    color: 'bg-[var(--color-ochre-champagne)]/10 text-[var(--color-ochre-champagne)]',
  },
  {
    title: 'Technical Due Diligence',
    description:
      'Architecture review, team assessment, and risk evaluation for investors evaluating technical acquisitions or portfolio companies.',
    icon: CodeIcon,
    color: 'bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)]',
  },
]

const pastEngagements = [
  {
    date: '2024',
    event: 'ISO/IEC 42001 Lead Assessor Certification',
    type: 'Certification',
    location: 'BSI Group',
  },
  {
    date: '2024',
    event: 'AI Governance for Startups — Workshop',
    type: 'Workshop',
    location: 'Nairobi Tech Week',
  },
  {
    date: '2023',
    event: 'Product-Led CTO: From Code to Strategy',
    type: 'Conference Talk',
    location: 'ProductCon Africa',
  },
  {
    date: '2023',
    event: 'Scaling Engineering Teams in Emerging Markets',
    type: 'Panel Discussion',
    location: 'Africa Tech Summit',
  },
  {
    date: '2022',
    event: 'Building Design Systems at Scale',
    type: 'Workshop',
    location: 'Frontend Conference Kenya',
  },
]
export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-ivory-silk)] relative overflow-hidden" id="speaking">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-ochre-brushed)]/5 blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }]}
          currentPage="Speaking & Workshops"
          currentPageHref="/speaking"
        />
        <header className="text-center mb-24 lg:mb-32" aria-labelledby="speaking-heading">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)] text-sm font-medium uppercase tracking-wider mb-8">
            <SparklesIcon className="w-4 h-4" aria-hidden="true" />
            <span>Knowledge Sharing</span>
          </div>
          <h1
            id="speaking-heading"
            className="font-display font-semibold text-editorial-lg lg:text-editorial-xl text-[var(--color-aubergine-deep)] mb-8 leading-tight text-balance max-w-3xl mx-auto"
          >
            Speaking & Workshops
          </h1>
          <p className="font-script text-xl lg:text-2xl text-[var(--color-aubergine-deep)]/70 leading-relaxed text-balance max-w-2xl mx-auto">
            I speak at conferences, lead workshops, and join podcasts on product strategy, engineering leadership, and AI governance. Pragmatic insights from the trenches — not theory.
          </p>
        </header>

        <section className="mb-24 lg:mb-32" aria-labelledby="topics-heading">
          <h2 id="topics-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight mb-12 text-center">
            Topics I Speak On
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Speaking topics">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="relative group rounded-xl p-6 lg:p-8 bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/40 hover:bg-[var(--color-ivory-surface)] transition-all duration-300 shadow-sm hover:shadow-lg"
                role="listitem"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${topic.color} mb-6`}>
                  <topic.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-xl text-[var(--color-aubergine-deep)] mb-3">
                  {topic.title}
                </h3>
                <p className="text-[var(--color-obsidian-text)]/60 leading-relaxed">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24 lg:mb-32" aria-labelledby="engagements-heading">
          <div className="flex items-center justify-between mb-12">
            <h2 id="engagements-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
              Past Engagements
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ochre-brushed)] hover:text-[var(--color-ochre-champagne)] hover:underline transition-colors"
            >
              Book me
              <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-6" role="list" aria-label="Past speaking engagements">
            {pastEngagements.map((engagement, index) => (
              <article
                key={index}
                className="relative group flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-xl bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)] transition-all duration-300"
                role="listitem"
              >
                <div className="flex-shrink-0 w-24 md:w-32 text-center">
                  <p className="font-sans tabular-nums text-4xl lg:text-5xl font-bold text-[var(--color-ochre-brushed)]/30 group-hover:text-[var(--color-ochre-brushed)] transition-luxury">
                    {engagement.date}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 rounded text-xs font-medium tracking-wider bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)] border border-[var(--color-ochre-brushed)]/20">
                      {engagement.type}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-[var(--color-obsidian-text)]/50">
                      <MapPinIcon className="w-3 h-3" aria-hidden="true" />
                      <span>{engagement.location}</span>
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[var(--color-aubergine-deep)]">
                    {engagement.event}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden" aria-labelledby="booking-heading">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-ochre-brushed)]/10 via-transparent to-transparent" aria-hidden="true" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-ochre-hairline)]/30 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-ochre-hairline)]/30 to-transparent" aria-hidden="true" />

          <div className="relative max-w-3xl mx-auto text-center p-8 lg:p-12">
            <h2 id="booking-heading" className="font-display font-semibold text-2xl lg:text-3xl text-[var(--color-aubergine-deep)] mb-6 leading-tight">
              Want me to speak at your event?
            </h2>
            <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed mb-10 max-w-lg mx-auto">
              I accept a limited number of speaking engagements per year — conferences, workshops, podcasts, and internal team sessions. Topics are customized to your audience and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[var(--color-ochre-brushed)] text-[var(--color-aubergine-core)] font-semibold hover:bg-[var(--color-ochre-champagne)] hover:shadow-[0_0_30px_rgba(197,155,39,0.4)] transition-all duration-300"
              >
                Book a speaking slot
                <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/advisory"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-[var(--color-aubergine-border)]/30 text-[var(--color-aubergine-deep)] font-semibold hover:border-[var(--color-ochre-brushed)] hover:bg-[var(--color-ivory-surface)] transition-all duration-300"
              >
                View advisory services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}