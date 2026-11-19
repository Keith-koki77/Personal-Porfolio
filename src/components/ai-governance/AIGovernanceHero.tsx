'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

export function AIGovernanceHero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-aubergine-ground text-ivory-silk"
      aria-labelledby="ai-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_62%_40%,rgba(197,155,39,0.10),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-40">
        <div className="max-w-2xl">
          <p className="overline text-ochre-champagne mb-6 uppercase tracking-wider">
            AI Governance Practitioner · AI Strategist · Responsible AI Advocate · AI Innovation & Technology Practitioner
          </p>
          <h1
            id="ai-hero-heading"
            className="font-display font-extrabold text-[clamp(3rem,7vw,5rem)] leading-[0.9] tracking-[-0.02em] text-ivory-silk mb-6 text-balance"
          >
            I help organizations navigate AI responsibly, identify where it creates real value, and integrate it into the way people and businesses work.
          </h1>
          <p className="text-lg leading-relaxed text-ivory-surface/80 mb-8 max-w-xl">
            I approach AI through three lenses: governance, practical application, and the transformation of knowledge work. The opportunity is not simply to automate what humans do, but to rethink how work gets done and where human expertise creates the greatest value.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact-cta"
              className="inline-flex items-center gap-2 rounded-full bg-ochre-brushed px-8 py-4 text-base font-medium text-aubergine-core transition-luxury hover:bg-ochre-champagne hover:gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-aubergine-ground"
            >
              Let&rsquo;s Rethink How We Work With AI
              <ArrowRightIcon className="h-5 w-5 transition-luxury-fast" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-ivory-surface/30 pb-1 text-base text-ivory-surface transition-luxury hover:border-ochre-champagne hover:text-ochre-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-aubergine-ground"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        {/* Technical visual: governance/architecture inspired */}
        <div className="mt-16 lg:mt-24 relative h-[300px] lg:h-[400px] rounded-2xl border border-hairline-light bg-ivory-silk/60 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 pointer-events-none">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core shadow-lg"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core shadow-lg" aria-hidden="true">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core shadow-lg" aria-hidden="true">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ivory-silk to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}