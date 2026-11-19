'use client'

import { engineeringPrinciples } from '@/data/engineering/principles'

export function EngineeringPrinciples() {
  return (
    <section
      id="principles"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="principles-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
            Engineering Principles
          </p>
          <h2
            id="principles-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
          >
            How I work.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list" aria-label="Engineering principles">
          {engineeringPrinciples.map((principle, index) => (
            <article
              key={index}
              className="relative rounded-xl p-6 lg:p-8 bg-aubergine-deep border border-aubergine-border transition-luxury hover:border-aubergine-hover/50"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ochre-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

              <div className="relative z-10 flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-ochre-brushed/20 text-ochre-brushed font-sans font-bold text-lg">
                  {index + 1}
                </span>
                <p className="text-ivory-silk leading-relaxed mt-1">
                  {principle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}