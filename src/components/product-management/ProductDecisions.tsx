'use client'

import { decisions } from '@/data/product-management/decisions'

export function ProductDecisions() {
  return (
    <section
      id="product-thinking"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="decisions-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            Product Thinking in Practice
          </p>
          <h2
            id="decisions-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            The quality of a product is often determined by the decisions made
            before and during development.
          </h2>
        </div>

        <div className="space-y-10" role="list" aria-label="Product decision examples">
          {decisions.map((decision, index) => (
            <article
              key={index}
              className="relative rounded-xl p-8 lg:p-10 bg-ivory-silk/40 border border-hairline-light transition-luxury hover:bg-ivory-light"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ochre-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" aria-hidden="true" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center">
                <div className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-ochre-brushed flex items-center justify-center text-aubergine-core font-sans font-bold text-lg lg:text-xl shadow-lg">
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0 space-y-4 lg:pl-8">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-display font-semibold text-xl text-ochre-champagne">
                      {decision.project}
                    </h4>
                    <span className="overline text-ochre-champagne/70">
                      Product Decision
                    </span>
                  </div>

                  <dl className="grid md:grid-cols-2 gap-6 pt-4 border-t border-hairline-light/30">
                    <div className="col-span-2 md:col-span-1">
                      <p className="overline text-obsidian-muted/60 text-xs uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-ivory-surface leading-relaxed">
                        {decision.challenge}
                      </p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <p className="overline text-obsidian-muted/60 text-xs uppercase tracking-wider mb-2">Decision</p>
                      <p className="text-ivory-surface leading-relaxed">
                        {decision.decision}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="overline text-obsidian-muted/60 text-xs uppercase tracking-wider mb-2">Rationale</p>
                      <p className="text-ivory-surface leading-relaxed">
                        {decision.rationale}
                      </p>
                    </div>
                    {decision.detail && (
                      <div className="col-span-2">
                        <p className="overline text-obsidian-muted/60 text-xs uppercase tracking-wider mb-2">Commercial Detail</p>
                        <p className="text-ivory-surface leading-relaxed italic">
                          {decision.detail}
                        </p>
                      </div>
                    )}
                    <div className="col-span-2">
                      <p className="overline text-obsidian-muted/60 text-xs uppercase tracking-wider mb-2">Product Principle</p>
                      <p className="font-display font-semibold text-lg text-ochre-champagne italic leading-relaxed">
                        {decision.principle}
                      </p>
                    </div>
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
