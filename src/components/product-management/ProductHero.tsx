'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

export function ProductHero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-aubergine-ground text-ivory-silk"
      aria-labelledby="product-hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_62%_40%,rgba(197,155,39,0.10),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-40">
        <div className="max-w-2xl">
          <p className="overline text-ochre-champagne mb-6 uppercase tracking-wider">
            Product Strategy · Design · Technology
          </p>
          <h1
            id="product-hero-heading"
            className="font-display font-extrabold text-[clamp(3rem,7vw,5rem)] leading-[0.9] tracking-[-0.02em] text-ivory-silk mb-6 text-balance"
          >
            Good ideas deserve more than good execution. They deserve the right
            product thinking.
          </h1>
          <p className="text-lg leading-relaxed text-ivory-surface/80 mb-8 max-w-xl">
            I help founders turn complex ideas into purposeful digital products
            by connecting business strategy, user experience, and technology.
          </p>
          <p className="font-display font-medium text-ochre-champagne mb-10">
            Product Leader · Technical Product Designer · Software Engineer ·
            AI Innovator
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ochre-brushed px-8 py-4 text-base font-medium text-aubergine-core transition-luxury hover:bg-ochre-champagne hover:gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-aubergine-ground"
            >
              Let&rsquo;s Build Something
              <ArrowRightIcon className="h-5 w-5 transition-luxury-fast" aria-hidden="true" />
            </Link>
            <Link
              href="/product-management"
              className="inline-flex items-center gap-2 border-b border-ivory-surface/30 pb-1 text-base text-ivory-surface transition-luxury hover:border-ochre-champagne hover:text-ochre-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-aubergine-ground"
            >
              Explore My Work
            </Link>
          </div>
        </div>

        {/* Intersection visual: business, design, technology */}
        <div className="mt-16 lg:mt-24 relative h-[300px] lg:h-[400px] rounded-2xl border border-hairline-light bg-ivory-silk/60 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 pointer-events-none">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core shadow-lg"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core shadow-lg" aria-hidden="true">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
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
