'use client'

import { governanceFramework } from '@/data/ai-governance/governanceFramework'
import { ArrowRightIcon } from '@/components/Icons'

export function GovernanceFramework() {
  return (
    <section
      id="governance-framework"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="framework-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
            AI Governance in Practice: A Framework
          </p>
          <h2
            id="framework-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
          >
            THE PRACTICAL AI GOVERNANCE LOOP
          </h2>
          <p className="text-lg text-obsidian-text/90 leading-relaxed mb-8">
            This is my practical working framework, informed by responsible AI and AI management principles. It is not an official ISO/IEC 42001 framework and does not reproduce the standard&rsquo;s formal requirements.
          </p>
        </div>

        <div className="relative" role="list" aria-label="Governance framework steps">
          <div className="absolute left-12 top-16 bottom-16 w-[2px] bg-hairline-light lg:left-[calc(50%-1px)]" aria-hidden="true" />

          {governanceFramework.map((step, index) => (
            <article
              key={step.number}
              className={`relative group py-4 lg:py-6 ${
                index % 2 === 0 ? 'lg:pl-[calc(50%+1rem)]' : 'lg:pr-[calc(50%+1rem)]'
              }`}
              role="listitem"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 lg:left-[calc(50%-12px)] z-10" aria-hidden="true">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ochre-brushed text-aubergine-core font-sans font-bold text-sm shadow-lg border border-ivory-silk">
                  {step.number}
                </div>
              </div>

              <div className="relative z-10 rounded-xl p-6 lg:p-8 bg-ivory-surface border border-hairline-light shadow-sm transition-luxury group-hover:border-ochre-brushed/50">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-display font-semibold text-xl lg:text-2xl text-aubergine-deep group-hover:text-ochre-brushed transition-luxury-fast">
                    {step.title}
                  </h3>
                  <span className="overline text-ochre-brushed/70">{step.question}</span>
                </div>
                <p className="text-obsidian-text leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}