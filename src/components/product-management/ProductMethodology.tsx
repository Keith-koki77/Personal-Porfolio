'use client'

import { ArrowRightIcon } from '@/components/Icons'
import { methodology } from '@/data/product-management/methodology'

export function ProductMethodology() {
  return (
    <section
      id="methodology"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="methodology-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 animate-fade-in-up">
            <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
              Product Development Methodology
            </p>
            <h2
              id="methodology-heading"
              className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
            >
              From idea to impact.
            </h2>
            <p className="text-lg text-obsidian-text/90 leading-relaxed mb-8">
              A thoughtful process. Practical execution. Continuous
              improvement.
            </p>
            <p className="text-sm text-obsidian-muted italic">
              The methodology is adaptable, not portrayed as a rigid waterfall
              process.
            </p>
          </div>

          <div className="lg:col-span-8 relative" role="list" aria-label="Methodology stages">
            <div className="absolute left-12 top-16 bottom-16 w-[2px] bg-hairline-light lg:left-[calc(50%-1px)]" aria-hidden="true" />

            {methodology.map((stage, index) => (
              <article
                key={stage.number}
                className={`relative group py-4 lg:py-6 ${
                  index % 2 === 0 ? 'lg:pl-[calc(50%+1rem)]' : 'lg:pr-[calc(50%+1rem)]'
                }`}
                role="listitem"
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 lg:left-[calc(50%-12px)] z-10" aria-hidden="true">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core font-sans font-bold text-sm shadow-lg border border-ivory-silk">
                    {stage.number}
                  </div>
                </div>

                <div className="relative z-10 rounded-xl p-6 lg:p-8 bg-ivory-surface border border-hairline-light shadow-sm transition-luxury group-hover:border-ochre-brushed/50">
                  <h3 className="font-display font-semibold text-xl lg:text-2xl text-aubergine-deep mb-2 group-hover:text-ochre-brushed transition-luxury-fast">
                    {stage.title}
                  </h3>
                  <p className="text-obsidian-text leading-relaxed mb-4">
                    {stage.summary}
                  </p>
                  <ul className="space-y-2" role="list" aria-label={`${stage.title} deliverables`}>
                    {stage.deliverables.map((deliverable, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 px-3 py-1.5 rounded-md bg-ivory-silk border border-hairline-light text-sm text-obsidian-text/80 hover:border-ochre-brushed/50 transition-luxury-fast"
                        role="listitem"
                      >
                        <ArrowRightIcon className="h-3.5 w-3.5 text-ochre-brushed" aria-hidden="true" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
