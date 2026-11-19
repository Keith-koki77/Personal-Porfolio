'use client'

export function AIPhilosophy() {
  return (
    <section
      id="philosophy"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="philosophy-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
            The Central Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
          >
            &ldquo;AI won&rsquo;t just change what we do. It will change the value of what we know.&rdquo;
          </h2>
          <p className="text-lg leading-relaxed text-obsidian-text/90 mb-8">
            There is a lot of conversation about whether AI will replace humans. I find that conversation incomplete.
          </p>
          <p className="text-lg leading-relaxed text-obsidian-text/90 mb-8">
            I believe AI will fundamentally shift the value of knowledge work. As machines become increasingly capable of generating, processing, and synthesizing information, the advantage will increasingly come from knowing what to ask, understanding context, exercising judgment, making decisions, and taking responsibility for outcomes.
          </p>
          <p className="text-lg leading-relaxed text-obsidian-text/90 mb-8">
            The opportunity is not simply to make people work faster. It is to rethink how work is structured, where human expertise matters, and how organizations create value.
          </p>
          <p className="text-lg leading-relaxed text-obsidian-text/90">
            That is why I approach AI with both curiosity and pragmatism. I want to understand what it can do, where it falls short, what risks it introduces, and how it can be applied responsibly.
          </p>
        </div>
      </div>
    </section>
  )
}