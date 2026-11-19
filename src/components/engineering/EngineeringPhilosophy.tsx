'use client'

export function EngineeringPhilosophy() {
  return (
    <section
      id="philosophy"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="philosophy-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
            Engineering Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
          >
            &ldquo;Engineering is more than writing code.&rdquo;
          </h2>
          <p className="text-lg leading-relaxed text-obsidian-text/90 mb-8">
            I focus on understanding the problem before choosing the technology. I
            think about system architecture, data structures, user experience,
            maintainability, security, integrations, deployment, and the long-term
            implications of technical decisions.
          </p>
          <p className="text-lg leading-relaxed text-obsidian-text/90 mb-8">
            The objective is not simply to make something work. It is to build
            something that can be understood, maintained, improved, and relied upon.
          </p>
        </div>
      </div>
    </section>
  )
}