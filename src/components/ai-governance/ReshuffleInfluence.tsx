'use client'

import Link from 'next/link'
import { ExternalLinkIcon } from '@/components/Icons'

export function ReshuffleInfluence() {
  return (
    <section
      id="reshuffle"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="reshuffle-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            Intellectual Influence
          </p>
          <h2
            id="reshuffle-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            &ldquo;Reshuffle&rdquo; by Sangeet Paul Choudary
          </h2>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {[
            {
              title: 'How AI changes the economics of knowledge work',
              description:
                'As the cost of information generation approaches zero, the value shifts from producing information to evaluating, contextualizing, and applying it. Organizations must redesign their economic models around judgment and decision-making rather than information processing.',
            },
            {
              title: 'How workflows and organizational structures may need to be redesigned',
              description:
                'Simply adding AI tools to existing processes rarely unlocks the full opportunity. The architecture of work—how tasks are divided, coordinated, and evaluated—must be rethought when human capability and machine intelligence can work together.',
            },
            {
              title: 'Why simply adding AI tools to existing processes may not unlock the full opportunity',
              description:
                'The real transformation comes from restructuring the division of labor between humans and AI. This requires understanding what each does best and designing new interfaces, handoffs, and accountability structures.',
            },
            {
              title: 'How the relationship between human judgment and machine capability evolves',
              description:
                'As AI handles more information processing, human value increasingly lies in framing problems, exercising judgment in ambiguous contexts, taking responsibility for outcomes, and navigating ethical and strategic trade-offs.',
            },
            {
              title: 'Why organizations need to rethink how work is divided, coordinated, and evaluated',
              description:
                'Traditional organizational structures were designed for human-only workflows. AI introduces new coordination patterns, new forms of verification, and new ways to distribute expertise across the organization.',
            },
            {
              title: 'How value may shift from producing information to applying judgment, context, creativity, and responsibility',
              description:
                'The competitive advantage of the future will not be who can generate the most content, but who can make the best decisions with AI-generated inputs, understand context deeply, and take accountability for outcomes.',
            },
          ].map((theme, index) => (
            <article
              key={index}
              className="relative rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30 transition-luxury hover:border-aubergine-hover/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ochre-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" aria-hidden="true" />
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-0 items-start">
                <div className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-ochre-brushed flex items-center justify-center text-aubergine-core font-sans font-bold text-lg lg:text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0 lg:pl-8">
                  <h4 className="font-display font-semibold text-xl text-ivory-silk mb-2">
                    {theme.title}
                  </h4>
                  <p className="text-ivory-surface/80 leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-ivory-surface/80 leading-relaxed mb-4">
            These ideas are drawn from <cite className="font-script italic">Reshuffle</cite> by Sangeet Paul Choudary, a framework for understanding how AI reorganizes work, expertise, and value creation.
          </p>
          <Link
            href="https://www.sangeetchoudary.com/reshuffle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ochre-champagne hover:text-ochre-brushed transition-luxury-fast"
          >
            Learn more about Reshuffle
            <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
          <p className="text-sm text-ivory-surface/60 mt-2 italic">
            These are my intellectual influences and interpretations. I do not represent the author&rsquo;s official views or imply an endorsement or professional relationship.
          </p>
        </div>
      </div>
    </section>
  )
}