'use client'

import { TargetIcon, CodeIcon, ShieldIcon, UsersIcon, LayersIcon, ZapIcon } from '@/components/Icons'
import { capabilities } from '@/data/product-management/capabilities'

const capabilityIcons: Record<string, React.ElementType> = {
  'product-strategy': TargetIcon,
  'discovery-research': UsersIcon,
  'design-experience': LayersIcon,
  'planning-management': CodeIcon,
  'technical-development': ShieldIcon,
  'ai-strategy': ZapIcon,
}

export function ProductCapabilities() {
  return (
    <section
      id="capabilities"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="capabilities-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline-lg text-ochre-champagne mb-4 uppercase tracking-wider">
            Product Capabilities
          </p>
          <h2
            id="capabilities-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            I connect the thinking, design, and execution required to build
            products.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list" aria-label="Product capabilities">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIcons[capability.id]
            return (
              <article
                key={capability.id}
                className="relative group rounded-xl p-8 lg:p-10 transition-luxury bg-ivory-silk border border-hairline-light hover:border-ochre-brushed/50 hover:bg-ivory-light overflow-hidden"
                role="listitem"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ochre-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" aria-hidden="true" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-aubergine-deep text-ochre-brushed group-hover:bg-ochre-brushed group-hover:text-aubergine-core transition-luxury">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="overline tabular-nums text-ochre-brushed/80">{capability.number}</p>
                        <h3 className="font-display font-semibold text-xl text-aubergine-deep group-hover:text-ochre-brushed transition-luxury-fast">
                          {capability.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="leading-relaxed flex-1 text-obsidian-text mb-6">
                    {capability.summary}
                  </p>

                  <ul className="space-y-2" role="list" aria-label={`${capability.title} focus areas`}>
                    {capability.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 px-3 py-1.5 rounded-md bg-ivory-surface border border-hairline-light text-sm text-obsidian-text/80 hover:border-ochre-brushed/50 hover:text-ochre-brushed transition-luxury-fast"
                        role="listitem"
                      >
                        <span
                          className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed/50 group-hover:bg-ochre-brushed transition-luxury-fast"
                          aria-hidden="true"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
