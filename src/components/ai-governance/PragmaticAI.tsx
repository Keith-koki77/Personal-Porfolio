'use client'

import { pragmaticAIPrinciples } from '@/data/ai-governance/pragmaticPrinciples'
import { ArrowRightIcon } from '@/components/Icons'

export function PragmaticAI() {
  return (
    <section
      id="pragmatic-ai"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="pragmatic-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            Pragmatic AI
          </p>
          <h2
            id="pragmatic-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            Less AI hype. More useful application.
          </h2>
          <p className="text-lg text-ivory-surface/80 leading-relaxed mb-8">
            I am interested in what AI can actually do in a real business or technical environment. I do not believe every process needs AI. I believe the starting point should be a real problem, a clear opportunity, and an honest evaluation of whether AI is the right solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list" aria-label="Pragmatic AI principles">
          {pragmaticAIPrinciples.map((principle) => (
            <article
              key={principle.number}
              className="relative group rounded-xl p-6 lg:p-8 transition-luxury bg-ivory-silk/10 border border-aubergine-border/30 hover:border-aubergine-hover/50"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ochre-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-0 items-start">
                <div className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-ochre-brushed flex items-center justify-center text-aubergine-core font-sans font-bold text-lg lg:text-xl shadow-lg">
                  {principle.number}
                </div>

                <div className="flex-1 min-w-0 lg:pl-8">
                  <h4 className="font-display font-semibold text-xl text-ochre-champagne mb-2 group-hover:text-ivory-silk transition-luxury-fast">
                    {principle.title}
                  </h4>
                  <p className="text-ivory-surface/80 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}