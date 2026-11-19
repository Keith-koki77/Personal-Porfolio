'use client'

import { ArrowRightIcon } from '@/components/Icons'
import { engineeringWorkflow } from '@/data/engineering/workflow'

export function EngineeringWorkflow() {
  return (
    <section
      id="workflow"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="workflow-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 animate-fade-in-up">
            <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
              Engineering Workflow
            </p>
            <h2
              id="workflow-heading"
              className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
            >
              From technical direction to production.
            </h2>
          </div>

          <div className="lg:col-span-8 relative" role="list" aria-label="Engineering workflow stages">
            <div className="absolute left-12 top-16 bottom-16 w-[2px] bg-aubergine-border/30 lg:left-[calc(50%-1px)]" aria-hidden="true" />

            {engineeringWorkflow.map((stage, index) => (
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

                <div className="relative z-10 rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30 shadow-sm transition-luxury group-hover:border-ochre-brushed/50">
                  <h3 className="font-display font-semibold text-xl lg:text-2xl text-ivory-silk mb-2 group-hover:text-ochre-champagne transition-luxury-fast">
                    {stage.title}
                  </h3>
                  <p className="text-ivory-surface/80 leading-relaxed mb-4">
                    {stage.summary}
                  </p>
                  <ul className="space-y-2" role="list" aria-label={`${stage.title} details`}>
                    {stage.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 px-3 py-1.5 rounded-md bg-ivory-silk/20 border border-aubergine-border/30 text-sm text-ivory-surface hover:border-ochre-brushed/50 transition-luxury-fast"
                        role="listitem"
                      >
                        <ArrowRightIcon className="h-3.5 w-3.5 text-ochre-brushed" aria-hidden="true" />
                        {detail}
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