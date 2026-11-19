'use client'

import Link from 'next/link'
import { ChevronRightIcon, BuildingIcon, FileTextIcon } from '@/components/Icons'
import { engineeringProjects } from '@/data/engineering/projects'

export function EngineeringProjects() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-ivory-silk"
      aria-labelledby="projects-heading"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 animate-fade-in-up">
            <p className="overline text-ochre-brushed mb-4 uppercase tracking-wider">
              Selected Engineering Projects
            </p>
            <h2
              id="projects-heading"
              className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-aubergine-deep mb-6 text-balance"
            >
              Real systems. Real constraints. Real engineering.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-10" role="list" aria-label="Engineering projects">
            {engineeringProjects.map((project) => (
              <article
                key={project.id}
                className="group relative rounded-2xl border border-hairline-light overflow-hidden transition-luxury hover:border-ochre-brushed/50 hover:bg-ivory-light"
                role="listitem"
              >
                <div className="relative h-64 lg:h-80 rounded-lg bg-aubergine-core/10 border border-hairline-light overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aubergine-deep/50 mx-auto mb-4">
                        <FileTextIcon className="h-8 w-8 text-ochre-brushed/50" aria-hidden="true" />
                      </div>
                      <p className="text-obsidian-muted font-medium">Architecture Diagram Placeholder</p>
                      <p className="text-sm text-obsidian-muted/60 mt-1">{project.name} System Architecture</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ivory-silk to-transparent" aria-hidden="true" />
                </div>

                <h3 className="font-display font-semibold text-xl lg:text-2xl text-aubergine-deep mb-3 group-hover:text-ochre-brushed transition-luxury-fast">
                  {project.name}
                </h3>
                <p className="text-obsidian-text leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className="font-medium text-obsidian-text/80 mb-2">Engineering Challenge</p>
                <p className="text-obsidian-text leading-relaxed mb-6">
                  {project.challenge}
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="overline text-obsidian-muted mb-2">Engineering Areas</p>
                    <ul className="space-y-2" role="list">
                      {project.engineeringAreas.slice(0, 6).map((area, i) => (
                        <li key={i} className="flex items-start gap-2 px-3 py-1.5 rounded-md bg-ivory-surface border border-hairline-light text-sm text-obsidian-text/80">
                          <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed/50" aria-hidden="true" />
                          {area}
                        </li>
                      ))}
                      {project.engineeringAreas.length > 6 && (
                        <li className="px-3 py-1.5 text-sm text-obsidian-muted">
                          +{project.engineeringAreas.length - 6} more areas
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <p className="overline text-obsidian-muted mb-2">Important Considerations</p>
                    <ul className="space-y-2" role="list">
                      {project.importantConsiderations.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 px-3 py-1.5 rounded-md bg-ivory-surface border border-hairline-light text-sm text-obsidian-text/80">
                          <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-ochre-brushed/50" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={project.href}
                  className="mt-6 flex items-center gap-2 text-sm font-medium text-ochre-brushed hover:text-ochre-champagne transition-luxury-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre-brushed focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-silk rounded"
                  aria-label={`${project.cta} for ${project.name}`}
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