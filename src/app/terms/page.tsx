import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Terms of Service — Keith Koki',
  description:
    'Terms of service for Keith Koki\'s portfolio. Governs use of the website and engagement for product, engineering, and AI governance advisory services.',
  authors: [{ name: 'Keith Koki' }],
  openGraph: {
    title: 'Terms of Service — Keith Koki',
    description:
      'Terms of service for Keith Koki\'s portfolio. Governs use of the website and advisory engagements.',
    type: 'website',
    url: 'https://keithkoki.com/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-ivory-silk)] relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-ochre-brushed)]/5 blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <section className="text-center mb-24 lg:mb-32" aria-labelledby="terms-heading">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)] text-sm font-medium uppercase tracking-wider mb-8">
            <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
            <span>Legal</span>
          </div>
          <h1
            id="terms-heading"
            className="font-display font-semibold text-editorial-lg lg:text-editorial-xl text-[var(--color-aubergine-deep)] mb-8 leading-tight text-balance max-w-2xl mx-auto"
          >
            Terms of Service
          </h1>
          <p className="font-script text-xl lg:text-2xl text-[var(--color-aubergine-deep)]/70 leading-relaxed text-balance max-w-2xl mx-auto">
            Last updated: November 2026. These terms govern your use of keithkoki.com and any advisory engagement with Keith Koki for product management, software engineering, and AI governance services.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="acceptance-heading">
          <h2 id="acceptance-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            1. Acceptance of terms
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            By accessing or using this website, or by engaging Keith Koki for advisory, fractional CTO, product leadership, engineering, or AI governance services, you agree to be bound by these terms. If you do not agree, you may not use the site or engage my services.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="services-heading">
          <h2 id="services-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            2. Services offered
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            Keith Koki offers executive advisory and product engineering services across three core areas:
          </p>
          <ul className="list-disc list-inside space-y-3 text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl pl-4">
            <li>
              <strong>Product Management</strong> — B2B product strategy & discovery, outcome roadmaps, UX vision, metrics and growth orchestration.
            </li>
            <li>
              <strong>Software Engineering</strong> — Modern frontend (Next.js, TypeScript, React), pragmatic backend design, technical delegation & mentorship, squad velocity optimization.
            </li>
            <li>
              <strong>AI Governance &amp; Advisory</strong> — ISO/IEC 42001 algorithmic safety, responsible AI advisory, algorithmic risk auditing & bias testing, automated governance observability.
            </li>
          </ul>
        </section>

        <section className="space-y-10" aria-labelledby="engagements-heading">
          <h2 id="engagements-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            3. Engagements
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            Engagements are accepted for product leadership, technical advisory, team stewardship, and certified ISO/IEC 42001 algorithmic compliance audits. Specific scope, deliverables, timeline, and fees are agreed in writing before work begins. A strict NDA is available on request.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="conduct-heading">
          <h2 id="conduct-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            4. Your conduct
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            You agree not to misuse this site or any materials provided. You are responsible for the accuracy of information you share and for securing any necessary rights or consents for your project materials.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="ip-heading">
          <h2 id="ip-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            5. Intellectual property
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            All content on this site — text, design, code, and case studies — is the property of Keith Koki and may not be reproduced without permission. Deliverables produced under a paid engagement belong to you as set out in the engagement agreement.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="disclaimer-heading">
          <h2 id="disclaimer-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            6. Disclaimer and limitation of liability
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            The site and services are provided 'as is' without warranties. Keith Koki is not liable for indirect, incidental, or consequential damages arising from your use of the site or services. Liability is limited to the amount paid for the applicable engagement, to the fullest extent permitted by law.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="governing-heading">
          <h2 id="governing-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            7. Governing law
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            These terms are governed by the laws of Kenya, without regard to conflict-of-law principles. Disputes will be resolved in the competent courts of Nairobi, Kenya.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            8. Contact
          </h2>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-[var(--color-aubergine-deep)]">Questions about these terms?</p>
              <p className="text-[var(--color-obsidian-text)]/70">
                Email{' '}
                <a
                  href="mailto:kokikeith@gmail.cm"
                  className="text-[var(--color-ochre-brushed)] hover:text-[var(--color-ochre-champagne)] underline"
                >
                  kokikeith@gmail.cm
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
