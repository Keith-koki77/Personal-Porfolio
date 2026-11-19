'use client'

export function VentureExperience() {
  return (
    <section
      id="entrepreneurial-experience"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="venture-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 animate-fade-in-up">
            <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
              Entrepreneurial Experience
            </p>
            <h2
              id="venture-heading"
              className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
            >
              I understand the realities of building businesses, not just
              products.
            </h2>
          </div>

          <div className="lg:col-span-8 rounded-xl p-8 lg:p-10 bg-aubergine-deep border border-aubergine-border sovereign-shadow overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
            <div className="relative z-10 space-y-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="overline text-ochre-champagne mb-2 uppercase tracking-wider">
                    GreenLead
                  </p>
                  <h3 className="font-display font-semibold text-xl lg:text-2xl text-ivory-silk">
                    ESG Reporting SaaS
                  </h3>
                  <p className="overline text-ochre-brushed/70 text-xs uppercase tracking-wider mt-2 mb-4">
                    Co-founder
                  </p>
                </div>
              </div>

              <p className="text-ivory-surface/80 leading-relaxed text-lg">
                As a co-founder, I&rsquo;ve been involved in building a SaaS
                business focused on ESG reporting. This experience strengthens
                my understanding of early-stage product development, business
                opportunities, commercial thinking, and the relationship between
                product direction and venture building.
              </p>

              <p className="text-ivory-surface/60 text-sm italic mt-4 border-t border-aubergine-border/50 pt-4">
                Experience date: May 2023 onwards, subject to verification of current involvement.
              </p>

              <div className="mt-8 pt-6 border-t border-aubergine-border/50">
                <p className="overline text-ivory-surface/60 mb-4 uppercase tracking-wider text-xs">
                  Broader experience
                </p>
                <ul className="space-y-2 text-ivory-surface/60 text-sm" role="list">
                  <li role="listitem">Digital marketing</li>
                  <li role="listitem">Web development</li>
                  <li role="listitem">VFX</li>
                  <li role="listitem">CGI</li>
                  <li role="listitem">AI innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
