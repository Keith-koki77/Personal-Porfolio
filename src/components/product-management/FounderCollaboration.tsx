'use client'

export function FounderCollaboration() {
  return (
    <section
      id="working-with-founders"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="founders-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 animate-fade-in-up">
            <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
              Working With Founders
            </p>
            <h2
              id="founders-heading"
              className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
            >
              Have an idea? An existing product? Or a problem worth solving?
            </h2>
            <p className="text-lg text-ivory-surface/80 leading-relaxed mb-8">
              I work with founders and teams at different stages of product
              development.
            </p>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6 lg:gap-8" role="list" aria-label="Engagement areas">
            <article
              className="relative rounded-xl p-6 lg:p-8 bg-ivory-silk border border-hairline-light transition-luxury hover:border-ochre-brushed/50"
              role="listitem"
            >
              <h4 className="font-display font-semibold text-lg text-aubergine-deep mb-3 group-hover:text-ochre-brushed transition-luxury-fast">
                Early-stage ideas
              </h4>
              <p className="text-obsidian-text leading-relaxed">
                Turn an initial idea into a clearly defined product opportunity.
              </p>
            </article>
            <article
              className="relative rounded-xl p-6 lg:p-8 bg-ivory-silk border border-hairline-light transition-luxury hover:border-ochre-brushed/50"
              role="listitem"
            >
              <h4 className="font-display font-semibold text-lg text-aubergine-deep mb-3 group-hover:text-ochre-brushed transition-luxury-fast">
                MVP development
              </h4>
              <p className="text-obsidian-text leading-relaxed">
                Define, scope, design, and plan a first viable product.
              </p>
            </article>
            <article
              className="relative rounded-xl p-6 lg:p-8 bg-ivory-silk border border-hairline-light transition-luxury hover:border-ochre-brushed/50"
              role="listitem"
            >
              <h4 className="font-display font-semibold text-lg text-aubergine-deep mb-3 group-hover:text-ochre-brushed transition-luxury-fast">
                Existing products
              </h4>
              <p className="text-obsidian-text leading-relaxed">
                Improve product architecture, usability, workflows, and delivery.
              </p>
            </article>
            <article
              className="relative rounded-xl p-6 lg:p-8 bg-ivory-silk border border-hairline-light transition-luxury hover:border-ochre-brushed/50"
              role="listitem"
            >
              <h4 className="font-display font-semibold text-lg text-aubergine-deep mb-3 group-hover:text-ochre-brushed transition-luxury-fast">
                AI product opportunities
              </h4>
              <p className="text-obsidian-text leading-relaxed">
                Identify and shape practical AI-enabled product solutions.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 rounded-xl p-8 lg:p-12 bg-ivory-silk border border-hairline-light sovereign-shadow overflow-hidden">
          <p className="text-lg leading-relaxed text-obsidian-text text-balance mb-6">
            I value clear communication, thoughtful decision-making, realistic
            execution plans, and a shared understanding of what success looks
            like. I&rsquo;m interested in working with people who are serious
            about solving problems, open to challenging assumptions, and
            committed to building products that create genuine value.
          </p>
        </div>
      </div>
    </section>
  )
}
