'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@/components/Icons'

export function AIGovernanceCTA() {
  return (
    <section
      id="contact-cta"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            Let&rsquo;s Make AI Work.
          </p>
          <h2
            id="cta-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            Let&rsquo;s make AI useful, responsible, and meaningful.
          </h2>
          <p className="text-lg text-ivory-surface/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            I am interested in working with founders, teams, and organizations that want to understand AI beyond the hype, adopt it thoughtfully, and build systems that create meaningful value.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="mailto:kokikeith@gmail.cm"
              className="inline-flex items-center gap-2 rounded-full bg-ochre-brushed px-8 py-4 text-base font-medium text-aubergine-core transition-luxury hover:bg-ochre-champagne hover:gold-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-aubergine-ground"
            >
              Let&rsquo;s Rethink How We Work With AI
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-ivory-surface/30 pb-1 text-base text-ivory-surface transition-luxury hover:border-ochre-champagne hover:text-ochre-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-aubergine-ground"
            >
              Start a Conversation
            </Link>
          </div>

          <div className="mt-16 rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30 max-w-2xl mx-auto">
            <h4 className="font-display font-semibold text-lg text-ivory-silk mb-4">
              Potential Areas of Collaboration
            </h4>
            <ul className="grid md:grid-cols-2 gap-3 text-ivory-surface/80 text-sm" role="list">
              <li className="flex items-start gap-2" role="listitem"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> AI governance awareness and readiness</li>
              <li className="flex items-start gap-2" role="listitem"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Practical AI adoption strategy</li>
              <li className="flex items-start gap-2" role="listitem"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> AI use-case identification and assessment</li>
              <li className="flex items-start gap-2" role="listitem"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Responsible AI principles and workflow design</li>
              <li className="flex items-start gap-2" role="listitem"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> AI-enabled product development</li>
              <li className="flex items-start gap-2" role="listitem"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> AI workflow integration</li>
              <li className="flex items-start gap-2" role="listitem"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> AI risk awareness and governance planning</li>
              <li className="flex items-start gap-2" role="listitem"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> Human-AI workflow redesign</li>
              <li className="flex items-start gap-2" role="listitem"><span className="h-1.5 w-1.5 rounded-full bg-ochre-brushed mt-2" aria-hidden="true" /> AI innovation and experimentation</li>
            </ul>
            <p className="text-sm text-ivory-surface/60 mt-6 italic">
              These areas reflect my actual experience and qualifications. I do not provide formal certification, independent conformity assessments, legal opinions, or accredited audits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}