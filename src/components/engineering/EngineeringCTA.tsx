'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

export function EngineeringCTA() {
  return (
    <section
      id="contact-cta"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            Let&rsquo;s Build.
          </p>
          <h2
            id="cta-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            Have a problem worth engineering?
          </h2>
          <p className="text-lg text-ivory-surface/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            I&rsquo;m interested in building meaningful software, solving complex
            technical challenges, and collaborating with people who want to turn
            ambitious ideas into working products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="mailto:kokikeith@gmail.cm"
              className="inline-flex items-center gap-2 rounded-full bg-ochre-brushed px-8 py-4 text-base font-medium text-aubergine-core transition-luxury hover:bg-ochre-champagne hover:gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-aubergine-ground"
            >
              Let&rsquo;s Build Something
            </Link>
            <Link
              href="/product-management"
              className="inline-flex items-center gap-2 border-b border-ivory-surface/30 pb-1 text-base text-ivory-surface transition-luxury hover:border-ochre-champagne hover:text-ochre-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-aubergine-ground"
            >
              View Product Work
              <ArrowRightIcon className="h-4 w-4 transition-luxury-fast" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}