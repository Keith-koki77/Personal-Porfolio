'use client'

import { aiGovernanceComparison } from '@/data/ai-governance/comparison'

export function AIGovernanceVsAdoption() {
  return (
    <section
      id="governance-vs-adoption"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up text-center">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            AI Governance vs. AI Adoption
          </p>
          <h2
            id="comparison-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            The goal is not to choose between innovation and governance. It is to make responsible innovation possible.
          </h2>
        </div>

        <div className="rounded-xl border border-aubergine-border/30 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-6 lg:p-8 bg-ivory-silk/10 border-r border-aubergine-border/30 lg:border-r lg:border-b-0">
              <h3 className="font-display font-semibold text-xl text-ochre-champagne mb-6 text-center">
                AI Adoption
              </h3>
              <ul className="space-y-4" role="list">
                {aiGovernanceComparison.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-lg bg-ivory-silk border border-hairline-light">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-ochre-brushed/20 text-ochre-brushed font-sans font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-ivory-surface leading-relaxed">{item.adoption}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 lg:p-8 bg-ivory-silk/10">
              <h3 className="font-display font-semibold text-xl text-ochre-champagne mb-6 text-center">
                AI Governance
              </h3>
              <ul className="space-y-4" role="list">
                {aiGovernanceComparison.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-lg bg-ivory-silk border border-hairline-light">
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-ochre-brushed/20 text-ochre-brushed font-sans font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-ivory-surface leading-relaxed">{item.governance}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-display font-semibold text-xl text-ivory-silk mb-4">
            The goal is not to choose between innovation and governance.
          </p>
          <p className="font-display font-semibold text-xl text-ochre-champagne">
            It is to make responsible innovation possible.
          </p>
        </div>
      </div>
    </section>
  )
}