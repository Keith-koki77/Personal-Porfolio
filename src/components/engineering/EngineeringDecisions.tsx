'use client'

import { engineeringDecisions } from '@/data/engineering/decisions'

export function EngineeringDecisions() {
  return (
    <section
      id="decisions"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="decisions-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
            Engineering Decisions & Problem Solving
          </p>
          <h2
            id="decisions-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
          >
            The real engineering work happens in the decisions.
          </h2>
        </div>

        <div className="space-y-10" role="list" aria-label="Engineering decision examples">
          {engineeringDecisions.map((decision, index) => (
            <article
              key={index}
              className="relative rounded-xl p-6 lg:p-8 bg-aubergine-deep border border-aubergine-border transition-luxury hover:border-aubergine-hover/50"
              role="listitem"
            >
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center">
                <div className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-ochre-brushed flex items-center justify-center text-aubergine-core font-sans font-bold text-lg lg:text-xl shadow-lg">
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0 space-y-4 lg:pl-8">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-display font-semibold text-xl text-ochre-champagne">
                      {decision.title}
                    </h4>
                    <span className="overline text-ochre-champagne/70">
                      Engineering Decision
                    </span>
                  </div>

                  <dl className="grid md:grid-cols-4 gap-6 pt-4 border-t border-aubergine-border/30">
                    <div className="col-span-2 md:col-span-1">
                      <p className="overline text-ivory-surface/60 text-xs uppercase tracking-wider mb-2">Problem</p>
                      <p className="text-ivory-surface leading-relaxed">
                        {decision.problem}
                      </p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <p className="overline text-ivory-surface/60 text-xs uppercase tracking-wider mb-2">Consideration</p>
                      <p className="text-ivory-surface leading-relaxed">
                        {decision.consideration}
                      </p>
                    </div>
                    <div className="col-span-2 md:col-span-2">
                      <p className="overline text-ivory-surface/60 text-xs uppercase tracking-wider mb-2">Implementation</p>
                      <p className="text-ivory-surface leading-relaxed">
                        {decision.implementation}
                      </p>
                    </div>
                    {decision.benefit && (
                      <div className="col-span-4">
                        <p className="overline text-ivory-surface/60 text-xs uppercase tracking-wider mb-2">Result</p>
                        <p className="font-display font-semibold text-lg text-ochre-champagne italic leading-relaxed">
                          {decision.benefit}
                        </p>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}