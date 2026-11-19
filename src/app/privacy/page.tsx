import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Privacy Policy — Keith Koki',
  description:
    'Privacy policy for Keith Koki\'s portfolio. How personal data is collected, used, and protected when you contact Keith Koki for product, engineering, or AI governance advisory.',
  authors: [{ name: 'Keith Koki' }],
  openGraph: {
    title: 'Privacy Policy — Keith Koki',
    description:
      'Privacy policy for Keith Koki\'s portfolio. How personal data is collected, used, and protected.',
    type: 'website',
    url: 'https://keithkoki.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-ivory-silk)] relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-ochre-brushed)]/5 blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <section className="text-center mb-24 lg:mb-32" aria-labelledby="privacy-heading">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)] text-sm font-medium uppercase tracking-wider mb-8">
            <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
            <span>Legal</span>
          </div>
          <h1
            id="privacy-heading"
            className="font-display font-semibold text-editorial-lg lg:text-editorial-xl text-[var(--color-aubergine-deep)] mb-8 leading-tight text-balance max-w-2xl mx-auto"
          >
            Privacy Policy
          </h1>
          <p className="font-script text-xl lg:text-2xl text-[var(--color-aubergine-deep)]/70 leading-relaxed text-balance max-w-2xl mx-auto">
            Last updated: November 2026. This policy describes how Keith Koki ('me', 'my') collects, uses, and protects personal data when you visit this website or contact me for product, engineering, or AI governance advisory services.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            1. Overview
          </h2>
          <p className="text-lg text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            I run this portfolio website to share my work in product management, software engineering, and AI governance advisory, and to accept inbound inquiries for executive advisory, fractional CTO engagements, technical due diligence, and ISO/IEC 42001 algorithmic compliance audits. I am committed to protecting your privacy and being transparent about the information I collect.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="collection-heading">
          <h2 id="collection-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            2. Information I collect
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg text-[var(--color-aubergine-deep)] mb-2">Personal data you provide</h3>
              <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed">
                When you reach out via the contact form, email (kokikeith@gmail.cm), or LinkedIn, I may collect your name, email address, organization, and any details you voluntarily share about your project or inquiry. This data is used solely to respond to your inquiry and, if we engage, to deliver services.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg text-[var(--color-aubergine-deep)] mb-2">Automatically collected data</h3>
              <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed">
                This site may collect standard web server logs (IP address, browser type, referring page, pages visited) and anonymized analytics for operational and security purposes. No personal data is sold or shared with third parties.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg text-[var(--color-aubergine-deep)] mb-2">Cookies</h3>
              <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed">
                Minimal cookies may be used for site functionality and analytics. You can disable cookies through your browser settings.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-10" aria-labelledby="use-heading">
          <h2 id="use-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            3. How I use your information
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            I use the information you provide to: respond to your inquiry, schedule discovery calls, deliver advisory and engineering services, and for legitimate business operations. I do not use your data for marketing unless you explicitly opt in.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="sharing-heading">
          <h2 id="sharing-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            4. Sharing and disclosure
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            I do not sell, rent, or share your personal data with third parties. Data may be processed by trusted service providers (hosting, email) strictly on my behalf and under confidentiality obligations.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="rights-heading">
          <h2 id="rights-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            5. Your rights
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            You may request access to, correction of, or deletion of your personal data, and withdraw consent where applicable, by contacting me at kokikeith@gmail.cm. Requests are handled within a reasonable timeframe.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="security-heading">
          <h2 id="security-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            6. Data security and retention
          </h2>
          <p className="text-[var(--color-obsidian-text)]/70 leading-relaxed max-w-2xl">
            I apply reasonable technical and organizational measures to protect your data. Personal data is retained only as long as necessary to fulfill the purpose for which it was collected or as required by law.
          </p>
        </section>

        <section className="space-y-10" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
            7. Contact
          </h2>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-[var(--color-aubergine-deep)]">Questions about this policy?</p>
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
