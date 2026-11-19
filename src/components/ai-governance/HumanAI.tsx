'use client'

import Link from 'next/link'
import { ExternalLinkIcon } from '@/components/Icons'

export function HumanAI() {
  const themes = [
    {
      title: 'The changing value of knowledge',
      description:
        'When information becomes easier to generate, the ability to evaluate, contextualize, and apply it becomes increasingly important.',
    },
    {
      title: 'The difference between information and judgment',
      description:
        'AI can produce recommendations and explanations, but organizations still need people who understand context, consequences, and trade-offs.',
    },
    {
      title: 'The redesign of workflows',
      description:
        'Organizations should rethink how work is divided between people and AI rather than simply automate existing processes.',
    },
    {
      title: 'Human accountability',
      description:
        'The ability to delegate tasks to AI does not remove organizational or human responsibility.',
    },
    {
      title: 'The emergence of new forms of value',
      description:
        'As AI changes how knowledge is produced, new opportunities emerge around coordination, interpretation, trust, decision-making, and problem-solving.',
    },
  ]

  return (
    <section
      id="human-ai"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="human-ai-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            Human + AI: The Future of Knowledge Work
          </p>
          <h2
            id="human-ai-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            &ldquo;AI changes the value of knowledge. It doesn&rsquo;t eliminate the need for human judgment.&rdquo;
          </h2>
          <p className="text-lg text-ivory-surface/80 leading-relaxed mb-8">
            Knowledge work is changing. For a long time, organizations rewarded people for their ability to acquire, process, retain, and produce information. AI is increasingly capable of assisting with many of those activities.
          </p>
          <p className="text-lg text-ivory-surface/80 leading-relaxed mb-8">
            But information production is not the same as understanding. Generating an answer is not the same as knowing whether it is correct. Producing an output is not the same as taking responsibility for its consequences.
          </p>
          <p className="text-lg text-ivory-surface/80 leading-relaxed mb-8">
            As AI capabilities grow, I believe the value of human contribution will increasingly shift toward judgment, context, creativity, relationships, strategic thinking, problem framing, and accountability.
          </p>
          <p className="text-lg text-ivory-surface/80 leading-relaxed font-semibold mb-8">
            The question should not only be how much work AI can replace. It should be:
          </p>
          <blockquote className="font-display font-medium text-xl text-ivory-silk italic leading-relaxed border-l-4 border-ochre-brushed pl-6 my-8 text-balance">
            How should we redesign work when human capability and machine intelligence can work together?
          </blockquote>
        </div>

        <div className="space-y-8 lg:space-y-12" role="list" aria-label="Human-AI themes">
          {themes.map((theme, index) => (
            <article
              key={index}
              className="relative rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30 transition-luxury hover:border-aubergine-hover/50"
              role="listitem"
            >
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-0 items-start">
                <div className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-ochre-brushed flex items-center justify-center text-aubergine-core font-sans font-bold text-lg lg:text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0 lg:pl-8">
                  <h4 className="font-display font-semibold text-xl text-ochre-champagne mb-2">
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

        <div className="mt-16 rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30 text-center">
          <h3 className="font-display font-semibold text-xl text-ivory-silk mb-4">
            Reference: Reshuffle
          </h3>
          <p className="text-ivory-surface/80 leading-relaxed mb-4 max-w-2xl mx-auto">
            These ideas draw inspiration from <cite className="font-script italic">Reshuffle</cite> by Sangeet Paul Choudary, a framework for understanding how AI reorganizes work, expertise, and value creation.
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