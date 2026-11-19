'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

export function EngineeringHero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-aubergine-ground text-ivory-silk"
      aria-labelledby="engineering-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_62%_40%,rgba(197,155,39,0.10),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-40">
        <div className="max-w-2xl">
          <p className="overline text-ochre-champagne mb-6 uppercase tracking-wider">
            Software Engineer · Full-Stack Developer · Solutions Architect · AI Innovator
          </p>
          <h1
            id="engineering-hero-heading"
            className="font-display font-extrabold text-[clamp(3rem,7vw,5rem)] leading-[0.9] tracking-[-0.02em] text-ivory-silk mb-6 text-balance"
          >
            I turn complex problems into working software.
          </h1>
          <p className="text-lg leading-relaxed text-ivory-surface/80 mb-8 max-w-xl">
            I design, engineer, and deploy digital products, backend systems, APIs, and
            intelligent applications. My work connects thoughtful architecture with
            practical implementation.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ochre-brushed px-8 py-4 text-base font-medium text-aubergine-core transition-luxury hover:bg-ochre-champagne hover:gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-aubergine-ground"
            >
              Explore Engineering Work
              <ArrowRightIcon className="h-5 w-5 transition-luxury-fast" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-ivory-surface/30 pb-1 text-base text-ivory-surface transition-luxury hover:border-ochre-champagne hover:text-ochre-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-aubergine-ground"
            >
              Let&rsquo;s Build Something
            </Link>
          </div>
        </div>

        {/* Technical visual: code/architecture inspired */}
        <div className="mt-16 lg:mt-24 relative h-[300px] lg:h-[400px] rounded-2xl border border-hairline-light bg-ivory-silk/60 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 pointer-events-none">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core shadow-lg"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core shadow-lg" aria-hidden="true">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core shadow-lg" aria-hidden="true">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ivory-silk to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}