'use client'

import Link from 'next/link'
import { ExternalLinkIcon, ShieldIcon, FileTextIcon, BuildingIcon, CodeIcon } from '@/components/Icons'
import { regulatoryFrameworks } from '@/data/ai-governance/regulatory'

const frameworkIcons: Record<string, React.ElementType> = {
  'ISO/IEC 42001': ShieldIcon,
  'NIST AI Risk Management Framework (AI RMF)': FileTextIcon,
  'OECD AI Principles': BuildingIcon,
  'EU AI Act': CodeIcon,
}

export function RegulatoryFrameworks() {
  return (
    <section
      id="regulatory"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="regulatory-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            AI Governance & Regulatory Awareness
          </p>
          <h2
            id="regulatory-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            Understanding the broader responsible AI landscape.
          </h2>
          <p className="text-lg text-ivory-surface/80 leading-relaxed">
            Awareness of these frameworks complements practical governance work. They are not interchangeable, and awareness does not constitute professional accreditation or legal expertise.
          </p>
        </div>

        <div className="space-y-8" role="list" aria-label="Regulatory frameworks">
          {regulatoryFrameworks.map((framework) => {
            const Icon = frameworkIcons[framework.name]
            return (
              <article
                key={framework.name}
                className="relative rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30 transition-luxury hover:border-aubergine-hover/50"
                role="listitem"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-ivory-silk/20 text-ochre-brushed">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4 className="font-display font-semibold text-xl text-ivory-silk">
                        {framework.name}
                      </h4>
                      {framework.sourceUrl && (
                        <Link
                          href={framework.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-1 text-ivory-surface/60 hover:text-ochre-champagne transition-luxury-fast"
                        >
                          <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                    <p className="text-ivory-surface/80 leading-relaxed mb-4">
                      {framework.description}
                    </p>
                    <p className="text-ivory-surface/60 leading-relaxed">
                      <strong>Relevance:</strong> {framework.relevance}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-16 rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30">
          <h4 className="font-display font-semibold text-lg text-ochre-champagne mb-4 flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Important Note
          </h4>
          <p className="text-ivory-surface/80 leading-relaxed">
            These frameworks are not interchangeable. Awareness of a framework does not constitute professional accreditation or legal expertise. For legal or regulatory claims, verify current authoritative sources and clearly distinguish general information from legal advice. Where relevant, the Kenyan and broader African business context should be considered without making unsupported claims about local regulatory requirements.
          </p>
        </div>
      </div>
    </section>
  )
}