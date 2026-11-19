'use client'

import Link from 'next/link'
import { ChevronRightIcon } from '@/components/Icons'
import { projects } from '@/data/product-management/projects'

export function SelectedProjects() {
  return (
    <section
      id="selected-projects"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="projects-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 animate-fade-in-up">
            <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
              Selected Product Experiences
            </p>
            <h2
              id="projects-heading"
              className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
            >
              Products built around real problems. Decisions shaped by
              real-world constraints.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-10" role="list" aria-label="Selected projects">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative rounded-2xl border border-hairline-light overflow-hidden transition-luxury hover:border-ochre-brushed/50 hover:bg-ivory-light"
                role="listitem"
              >
                <div className="relative h-64 lg:h-80 rounded-lg bg-aubergine-core/10 border border-hairline-light overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aubergine-deep/50 mx-auto mb-4">
                        <svg className="h-8 w-8 text-ochre-brushed/50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="2" y="3" width="20" height="14" rx="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <p className="text-obsidian-muted font-medium">Product Screenshot Placeholder</p>
                      <p className="text-sm text-obsidian-muted/60 mt-1">{project.name}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ivory-silk to-transparent" aria-hidden="true" />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-2.5 py-1 rounded text-xs font-medium tracking-wider bg-ochre-brushed/10 text-ochre-brushed border border-ochre-brushed/20"
                    >
                      {cat}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 rounded text-xs font-medium tracking-wider bg-aubergine-deep/10 text-aubergine-deep border border-aubergine-deep/20">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-xl lg:text-2xl text-aubergine-deep mb-3 group-hover:text-ochre-brushed transition-luxury-fast">
                  {project.headline}
                </h3>
                <p className="text-obsidian-text leading-relaxed mb-6">
                  {project.overview.replace(/\n/g, ' ')}
                </p>
                <Link
                  href={project.caseStudyUrl}
                  className="flex items-center gap-2 text-sm font-medium text-ochre-brushed hover:text-ochre-champagne transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk rounded"
                  aria-label={`Explore ${project.name} case study`}
                >
                  {project.cta}
                  <ChevronRightIcon className="h-4 w-4 transition-luxury-fast group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
