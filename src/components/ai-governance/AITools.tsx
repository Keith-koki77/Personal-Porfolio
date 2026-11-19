'use client'

import { aiTools } from '@/data/ai-governance/tools'

export function AITools() {
  return (
    <section
      id="ai-tools"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="tools-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
            AI Tools & Technology Ecosystem
          </p>
          <h2
            id="tools-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
          >
            Informed tool selection and practical application.
          </h2>
          <p className="text-lg text-obsidian-text/90 leading-relaxed">
            Only displaying tools I have actually used or explored. Not implying that using an AI assistant means I have built its underlying model.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list" aria-label="AI tool groups">
          {aiTools.map((group) => (
            <article
              key={group.group}
              className="relative rounded-xl p-6 lg:p-8 bg-aubergine-deep border border-aubergine-border transition-luxury hover:border-aubergine-hover/50"
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