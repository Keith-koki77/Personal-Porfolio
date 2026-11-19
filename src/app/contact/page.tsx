import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { LinkedInIcon, InstagramIcon, PhoneIcon, MailIcon, ArrowRightIcon, SparklesIcon, MapPinIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Contact — Keith Koki',
  description: 'Get in touch with Keith Koki for product strategy, engineering leadership, AI governance consulting, or speaking engagements.',
  keywords: [
    'Contact Keith Koki',
    'Hire Fractional CTO',
    'AI Governance Consulting',
    'Product Strategy Consulting',
    'Technical Advisory',
    'ISO 42001 Auditor',
  ],
  authors: [{ name: 'Keith Koki' }],
  creator: 'Keith Koki',
  publisher: 'Keith Koki',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact — Keith Koki',
    description: 'Get in touch for product strategy, engineering leadership, AI governance consulting, or speaking engagements.',
    type: 'website',
    url: 'https://keithkoki.com/contact',
    siteName: 'Keith Koki',
    images: [
      {
        url: '/images/opengraph-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Keith Koki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Keith Koki',
    description: 'Get in touch for product strategy, engineering leadership, AI governance consulting, or speaking engagements.',
    creator: '@KeithKoki3980',
    site: '@KeithKoki3980',
  },
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/keith-koki-669782240/',
    icon: LinkedInIcon,
    color: 'bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white',
    ariaLabel: 'Connect on LinkedIn',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/koki_keith/',
    icon: InstagramIcon,
    color: 'bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F] hover:text-white',
    ariaLabel: 'Follow on Instagram',
  },
]

const contactInfo = [
  {
    label: 'Phone',
    value: '+254 792 016 907',
    href: 'tel:+254792016907',
    icon: PhoneIcon,
  },
  {
    label: 'Email',
    value: 'kokikeith@gmail.cm',
    href: 'mailto:kokikeith@gmail.cm',
    icon: MailIcon,
  },
  {
    label: 'Location',
    value: 'Nairobi, Kenya',
    href: '#',
    icon: MapPinIcon,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-ivory-silk)] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-ochre-brushed)]/5 blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-ochre-champagne)]/10 blur-[200px]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden="true">
        <div className="absolute inset-0 bg-[url(&#34;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232A162B' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&#34;)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }]}
          currentPage="Contact"
          currentPageHref="/contact"
        />
        {/* Header Section */}
        <section className="text-center mb-24 lg:mb-32" aria-labelledby="contact-heading">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)] text-sm font-medium uppercase tracking-wider mb-8">
            <SparklesIcon className="w-4 h-4" aria-hidden="true" />
            <span>Let&apos;s work together</span>
          </div>

          <h1 id="contact-heading" className="font-display font-semibold text-editorial-lg lg:text-editorial-xl text-[var(--color-aubergine-deep)] mb-8 leading-tight text-balance max-w-3xl mx-auto">
            Get in touch
          </h1>

          <p className="font-script text-xl lg:text-2xl text-[var(--color-aubergine-deep)]/70 leading-relaxed text-balance max-w-2xl mx-auto">
            Whether you&apos;re building a product from zero, scaling engineering teams, navigating AI governance, or need a speaker for your event — I&apos;d love to hear about it.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Contact Methods */}
          <section className="space-y-8" aria-labelledby="connect-heading">
            <h2 id="connect-heading" className="font-display font-semibold text-3xl lg:text-4xl text-[var(--color-aubergine-deep)] leading-tight">
              Start a conversation
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-5 p-6 rounded-2xl bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)] transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="relative w-14 h-14 rounded-xl bg-[var(--color-ochre-brushed)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-ochre-brushed)] group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[var(--color-ochre-brushed)] group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-obsidian-text)]/40 mb-1">
                      {item.label}
                    </p>
                    {item.href !== '#' ? (
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-[var(--color-aubergine-deep)] group-hover:text-[var(--color-ochre-brushed)] transition-colors truncate"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-lg font-medium text-[var(--color-aubergine-deep)] truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                  {item.href !== '#' && (
                    <ArrowRightIcon className="w-5 h-5 text-[var(--color-obsidian-text)]/30 group-hover:text-[var(--color-ochre-brushed)] transition-colors shrink-0" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-[var(--color-aubergine-border)]/10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-obsidian-text)]/40 mb-6">
                Connect socially
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[var(--color-aubergine-border)]/10 text-sm font-medium transition-all duration-300 ${social.color}`}
                    aria-label={social.ariaLabel}
                  >
                    <social.icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form / CTA Card */}
          <section className="relative pb-32 lg:pb-40" aria-labelledby="work-heading">
            <div className="relative rounded-3xl bg-[var(--color-aubergine-deep)] p-8 lg:p-12 overflow-hidden">
              {/* Decorative accents */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-ochre-brushed)]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-ochre-champagne)]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

              <div className="relative z-10">
                <h2 id="work-heading" className="font-display font-semibold text-3xl lg:text-4xl text-white mb-6 leading-tight">
                  What I can help with
                </h2>

                <ul className="space-y-4 mb-10" role="list">
                  {[
                    'Product strategy & discovery (0 → 1)',
                    'Engineering leadership & team scaling',
                    'AI governance, safety & compliance',
                    'Technical due diligence & architecture review',
                    'Founder coaching & executive advisory',
                    'Speaking: conferences, podcasts, workshops',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[var(--color-ivory-silk)]/90">
                      <div className="relative w-6 h-6 rounded-full bg-[var(--color-ochre-brushed)]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-ochre-brushed)]" />
                      </div>
                      <span className="text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-[var(--color-ivory-silk)]/60 mb-6 text-lg leading-relaxed">
                    I respond within 24–48 hours. For urgent inquiries, email is fastest.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="mailto:kokikeith@gmail.cm?subject=Inquiry%20from%20website"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[var(--color-ochre-brushed)] text-[var(--color-aubergine-core)] font-semibold hover:bg-[var(--color-ochre-champagne)] hover:shadow-[0_0_30px_rgba(197,155,39,0.4)] transition-all duration-300"
                    >
                      <MailIcon className="w-5 h-5" aria-hidden="true" />
                      <span>Email me directly</span>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/keith-koki-669782240/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-[var(--color-ochre-brushed)] transition-all duration-300"
                    >
                      <LinkedInIcon className="w-5 h-5" aria-hidden="true" />
                      <span>Connect on LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute bottom-0 right-0 lg:-bottom-12 lg:-right-12 w-72 lg:w-80 p-6 rounded-2xl bg-white border border-[var(--color-aubergine-border)]/10 shadow-2xl" aria-hidden="true">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-ochre-brushed)]/10 flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 text-[var(--color-ochre-brushed)]" />
                </div>
                <h3 className="font-display font-semibold text-xl text-[var(--color-aubergine-deep)]">
                  Quick start
                </h3>
              </div>
              <p className="text-sm text-[var(--color-obsidian-text)]/60 leading-relaxed mb-4">
                Book a 30-min discovery call to explore how we might work together.
              </p>
              <Link
                href="mailto:kokikeith@gmail.cm?subject=Discovery%20Call%20Request"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ochre-brushed)] hover:text-[var(--color-ochre-champagne)] transition-colors"
              >
                Schedule a call
                <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>

        {/* Footer note */}
        <footer className="mt-24 lg:mt-32 pt-12 border-t border-[var(--color-aubergine-border)]/10 text-center">
          <p className="text-sm text-[var(--color-obsidian-text)]/50 max-w-xl mx-auto leading-relaxed">
            &copy; {new Date().getFullYear()} Keith Koki. Built with intention, shipped with care.
          </p>
        </footer>
      </div>
    </main>
  )
}