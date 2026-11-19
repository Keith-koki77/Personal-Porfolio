'use client'

import { technicalStack } from '@/data/product-management/technical'

export function TechnicalStack() {
  return (
    <section
      id="technical-foundation"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="technical-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            Technical Foundation
          </p>
          <h2
            id="technical-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            I understand the technology behind the experience.
          </h2>
          <p className="text-lg text-ivory-surface/80 leading-relaxed">
            One of my strengths is being able to connect product decisions to
            their technical implications. My software engineering background
            allows me to engage with architecture, APIs, databases,
            integrations, and deployment considerations while keeping product
            objectives at the centre of development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list" aria-label="Technology groups">
          {technicalStack.map((group) => (
            <article
              key={group.group}
              className="relative rounded-xl p-6 lg:p-8 bg-ivory-silk/20 border border-aubergine-border/30 transition-luxury hover:border-aubergine-hover/50"
              role="listitem"
            >
              <h4 className="font-display font-semibold text-lg text-ivory-silk mb-4">
                {group.group}
              </h4>
              <ul className="space-y-3" role="list">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-ivory-silk hover:text-ochre-champagne transition-luxury-fast"
                  >
                    <span className={`flex-shrink-0 h-1.5 w-1.5 rounded-full ${
                      item.status === 'implemented'
                        ? 'bg-ochre-brushed'
                        : 'bg-ivory-surface/60'
                    }`} aria-hidden="true" />
                    <span className={item.status === 'implemented' ? 'font-medium text-ivory-silk' : 'text-ivory-surface'}>
                      {item.name}
                    </span>
                    {item.status === 'explored' && (
                      <span className="text-[10px] uppercase tracking-wider text-obsidian-muted">explored</span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
