'use client'

import { useState } from 'react'
import { MailIcon, GlobeIcon, ClockIcon, MapPinIcon, ArrowRightIcon, CheckIcon, CopyIcon, CheckedIcon, ShieldIcon, BuildingIcon, AwardIcon } from './Icons'

const hubs = [
  { city: 'Tokyo', timezone: 'JST', icon: MapPinIcon },
  { city: 'San Francisco', timezone: 'PST', icon: MapPinIcon },
  { city: 'London', timezone: 'GMT', icon: MapPinIcon },
  { city: 'Global', timezone: 'Remotely', icon: GlobeIcon },
]

const perks = [
  { icon: ShieldIcon, title: 'Executive Advisory', desc: 'Fractional CTO & Product Leadership Retainers' },
  { icon: BuildingIcon, title: 'Technical Due Diligence', desc: 'Architecture review & team assessment for investors' },
  { icon: AwardIcon, title: 'ISO/IEC 42001 Audits', desc: 'Certified algorithmic compliance & bias testing' },
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'kokikeith@gmail.cm'

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
            <div>
              <p className="overline-lg text-ochre-champagne mb-4">DIRECT ADVISORY ACCESS</p>
              <h2
                id="contact-heading"
                className="font-display font-semibold text-editorial-lg text-ivory-silk leading-tight text-balance mb-6"
              >
                Let&rsquo;s Work Together.
              </h2>
              <p className="text-lg text-ivory-surface/70 leading-relaxed max-w-2xl">
                Engagements accepted for product leadership, technical advisory, team stewardship, and certified ISO/IEC 42001 algorithmic compliance audits.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4" role="list" aria-label="Engagement benefits">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-aubergine-core/50 border border-aubergine-border/30 hover:border-ochre-brushed/50 hover:bg-aubergine-core transition-luxury"
                  role="listitem"
                >
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-ochre-brushed/10 text-ochre-brushed">
                    <perk.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg text-ivory-silk">{perk.title}</h3>
                    <p className="text-sm text-ivory-surface/60 mt-1">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-aubergine-border/50">
              <p className="overline text-ivory-surface/50 mb-4">SLA: Confidential response within 24 business hours</p>
              <p className="text-sm text-ivory-surface/50 italic">Strict NDA available on request.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 rounded-xl bg-aubergine-core border border-aubergine-border/50 hover:border-ochre-brushed/50 transition-luxury">
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-ochre-brushed/10 text-ochre-brushed">
                  <MailIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="overline text-ivory-surface/50 mb-1">DIRECT CORRESPONDENCE</p>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="flex items-center gap-2 font-mono text-base font-medium text-ochre-champagne hover:text-ochre-brushed transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 focus-visible:ring-offset-aubergine-deep rounded px-2 py-1"
                      aria-label={copied ? 'Copied to clipboard' : 'Copy email address'}
                    >
                      {copied ? (
                        <>
                          <CheckedIcon className="h-4 w-4" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <CopyIcon className="h-4 w-4" aria-hidden="true" />
                          <span>{email}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 rounded-md border border-ochre-brushed/30 bg-transparent text-sm font-medium text-ochre-champagne hover:bg-ochre-brushed/10 hover:border-ochre-brushed transition-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 focus-visible:ring-offset-aubergine-deep"
                  aria-label="Open email client"
                >
                  <MailIcon className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Compose</span>
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list" aria-label="Global advisory hubs">
                {hubs.map((hub, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-aubergine-core/50 border border-aubergine-border/30 hover:border-ochre-brushed/50 hover:bg-aubergine-core transition-luxury text-center"
                    role="listitem"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <hub.icon className="h-5 w-5 text-ochre-brushed" aria-hidden="true" />
                    </div>
                    <p className="font-display font-medium text-lg text-ivory-silk">{hub.city}</p>
                    <p className="text-sm text-ivory-surface/50">{hub.timezone}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="w-full sm:w-auto mt-4 flex items-center justify-center gap-3 rounded-md bg-ochre-brushed px-8 py-4 text-lg font-medium text-aubergine-core hover:bg-ochre-champagne hover:gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 focus-visible:ring-offset-aubergine-deep transition-luxury"
              aria-label="Initiate Confidential Inquiry"
            >
              Initiate Confidential Inquiry
              <ArrowRightIcon className="h-6 w-6 transition-luxury-fast" aria-hidden="true" />
            </button>
          </div>

          <aside className="lg:col-span-5" aria-labelledby="contact-info-heading">
            <div
              className="sticky top-24 rounded-xl bg-ivory-silk border border-hairline-light p-8 lg:p-10 sovereign-shadow-lg relative overflow-hidden"
              role="region"
              aria-label="Contact information"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(197,155,39,0.03)_0%,_transparent_50%)]" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-hairline-light to-transparent" aria-hidden="true" />

              <div className="relative z-10 space-y-8">
                <div>
                  <p className="overline text-obsidian-muted mb-4">CONTACT DETAILS</p>
                  <h3 id="contact-info-heading" className="font-display font-semibold text-2xl lg:text-3xl text-aubergine-deep">
                    Ready to begin.
                  </h3>
                </div>

                <div className="space-y-5 pt-6 border-t border-hairline-light">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-aubergine-deep/10 text-aubergine-deep">
                      <MailIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="overline text-obsidian-muted">EMAIL</p>
                      <a
                        href={`mailto:${email}`}
                        className="font-mono text-base font-medium text-aubergine-deep hover:text-ochre-brushed transition-luxury-fast"
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-aubergine-deep/10 text-aubergine-deep">
                      <GlobeIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="overline text-obsidian-muted">LINKEDIN</p>
                      <a
                        href="https://www.linkedin.com/in/keith-koki-669782240/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-obsidian-text hover:text-ochre-brushed transition-luxury-fast"
                      >
                        linkedin.com/in/keith-koki-669782240
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-aubergine-deep/10 text-aubergine-deep">
                      <ClockIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="overline text-obsidian-muted">AVAILABILITY</p>
                      <p className="text-obsidian-text">Selective advisory engagements</p>
                      <p className="text-sm text-obsidian-muted mt-1">24hr confidential response SLA</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-hairline-light">
                  <p className="overline text-obsidian-muted mb-4">GLOBAL ADVISORY HUBS</p>
                  <div className="grid grid-cols-2 gap-3">
                    {hubs.map((hub, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg bg-ivory-surface border border-hairline-light hover:border-ochre-brushed/50 transition-luxury-fast"
                      >
                        <p className="font-medium text-obsidian-charcoal text-sm">{hub.city}</p>
                        <p className="text-xs text-obsidian-muted">{hub.timezone}</p>
                      </div>
                    ))}
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