'use client'

export function ProductIntroduction() {
  return (
    <section
      id="about-my-work"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="about-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
            About My Work
          </p>
          <h2
            id="about-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
          >
            &ldquo;I think beyond features. I think about the entire product.&rdquo;
          </h2>
          <p className="text-lg leading-relaxed text-obsidian-text/90 mb-8">
            Building a successful digital product requires more than identifying
            features and putting them into development.
          </p>
          <p className="text-lg leading-relaxed text-obsidian-text/90 mb-8">
            It requires understanding the business opportunity, identifying the
            right problem, knowing who you&rsquo;re building for, making
            deliberate product decisions, and ensuring the solution can actually
            be delivered.
          </p>
          <p className="text-lg leading-relaxed text-obsidian-text/90 mb-8">
            That&rsquo;s where I work.
          </p>
          <p className="text-lg leading-relaxed text-obsidian-text/90 mb-8">
            My background spans product strategy, UX/UI design, software
            engineering, and AI innovation. This allows me to approach product
            development from multiple perspectives, connecting business
            objectives with user needs and technical realities.
          </p>
          <p className="text-lg leading-relaxed text-obsidian-text/90">
            Whether I&rsquo;m shaping an early-stage idea, refining an existing
            platform, or working through complex technical requirements, I focus
            on making products purposeful, usable, and sustainable.
          </p>
        </div>
      </div>
    </section>
  )
}
