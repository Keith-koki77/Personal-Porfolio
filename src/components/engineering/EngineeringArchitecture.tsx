'use client'

import { engineeringProjects } from '@/data/engineering/projects'

export function EngineeringArchitecture() {
  return (
    <section
      id="architecture"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="architecture-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            System Architecture & Engineering Thinking
          </p>
          <h2
            id="architecture-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            I think beyond the interface.
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {engineeringProjects.filter(p => p.id !== 'greenlead').map((project) => (
            <article key={project.id} className="space-y-8">
              <header>
                <h3 className="font-display font-semibold text-2xl lg:text-3xl text-ivory-silk mb-3">
                  {project.name} — Application Architecture
                </h3>
                <p className="text-ivory-surface/80 leading-relaxed">
                  Architecture diagrams represent actual or clearly labelled conceptual architecture. Not all services shown are production-ready.
                </p>
              </header>

              <div className="rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30 overflow-x-auto">
                <div className="font-mono text-sm text-ivory-surface leading-relaxed whitespace-pre-wrap">
{project.architecture.map((layer, i) => (
  i === 0 ? layer : `↓\n${layer}`
)).join('\n')}
                </div>
              </div>

              <details className="group rounded-xl p-6 bg-ivory-silk/20 border border-aubergine-border/30">
                <summary className="flex items-center justify-between cursor-pointer font-display font-semibold text-lg text-ivory-silk group-hover:text-ochre-champagne transition-luxury-fast">
                  <span>Key Engineering Considerations</span>
                  <svg className="h-5 w-5 text-ochre-brushed transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="mt-4 space-y-3 text-ivory-surface/80" role="list">
                  {project.importantConsiderations.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 px-3 py-2 rounded-lg bg-ivory-silk/50 border border-aubergine-border/30">
                      <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed/50 mt-2" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}