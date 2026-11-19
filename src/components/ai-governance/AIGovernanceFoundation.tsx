'use client'

import { ShieldIcon, FileTextIcon, UsersIcon, TargetIcon, CodeIcon, ShieldIcon as ShieldIcon2, BuildingIcon, ArrowRightIcon } from '@/components/Icons'

const governanceThemes = [
  {
    number: '01',
    title: 'AI Management Systems',
    icon: BuildingIcon,
    description:
      'Establishing organizational structures, responsibilities, policies, processes, and oversight for AI activities.',
  },
  {
    number: '02',
    title: 'AI Risk Management',
    icon: ShieldIcon2,
    description:
      'Identifying, assessing, treating, and monitoring AI-related risks throughout the system lifecycle.',
  },
  {
    number: '03',
    title: 'Accountability & Responsibility',
    icon: UsersIcon,
    description:
      'Defining who is responsible for AI decisions, system behaviour, oversight, and outcomes.',
  },
  {
    number: '04',
    title: 'Transparency & Explainability',
    icon: TargetIcon,
    description:
      'Understanding when and how AI systems should communicate their capabilities, limitations, and decision processes.',
  },
  {
    number: '05',
    title: 'Human Oversight',
    icon: FileTextIcon,
    description:
      'Ensuring that appropriate human involvement, review, intervention, and accountability exist where required.',
  },
  {
    number: '06',
    title: 'Data Governance',
    icon: CodeIcon,
    description:
      'Considering data quality, suitability, provenance, privacy, security, and the implications of data use.',
  },
  {
    number: '07',
    title: 'AI Lifecycle Management',
    icon: ShieldIcon,
    description:
      'Considering governance throughout planning, design, development, acquisition, deployment, operation, monitoring, and improvement.',
  },
  {
    number: '08',
    title: 'Continual Improvement',
    icon: ArrowRightIcon,
    description:
      'Reviewing AI performance, risks, controls, and governance practices as systems and organizational needs evolve.',
  },
]

export function AIGovernanceFoundation() {
  return (
    <section
      id="governance-foundation"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="governance-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            AI Governance: My Foundation
          </p>
          <h2
            id="governance-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            Innovation needs governance to become sustainable.
          </h2>
          <p className="text-lg text-ivory-surface/80 leading-relaxed mb-8">
            AI governance is not simply a compliance exercise or a collection of restrictions. It is the framework through which organizations establish accountability, understand risks, define acceptable use, maintain oversight, and build confidence in AI systems.
          </p>
          <p className="text-lg text-ivory-surface/80 leading-relaxed mb-8">
            I have completed a certification in <strong>AI Governance for ISO/IEC 42001</strong>.
          </p>
          <div className="rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl bg-ochre-brushed/20 text-ochre-brushed">
                <ShieldIcon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-ivory-silk mb-2">
                  AI Governance for ISO/IEC 42001
                </h3>
                <p className="text-ivory-surface/80">
                  <strong>Issuing Institution:</strong> [Issuing Institution — to be confirmed from certificate]<br />
                  <strong>Completion Date:</strong> [Completion Date — to be confirmed from certificate]<br />
                  <strong>Credential ID:</strong> [Credential ID — if available]
                </p>
                <p className="text-sm text-ivory-surface/60 mt-2 italic">
                  This certification complements my broader experience in product development, software engineering, and practical technology application. It does not certify me as an ISO/IEC 42001 auditor or authorize me to certify organizations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 lg:mb-24">
          <h3 className="font-display font-semibold text-2xl lg:text-3xl text-ivory-silk mb-6 text-center">
            Understanding ISO/IEC 42001
          </h3>
          <p className="text-ivory-surface/80 leading-relaxed max-w-3xl mx-auto mb-8 text-center">
            ISO/IEC 42001 is an international standard specifying requirements and guidance for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System (AIMS).
          </p>
          <p className="text-ivory-surface/60 text-sm italic text-center max-w-3xl mx-auto mb-10">
            The following themes reflect my understanding of the standard&rsquo;s key areas. This is not an exhaustive list of ISO/IEC 42001 clauses. For the complete standard, consult the official publication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list" aria-label="ISO/IEC 42001 themes">
          {governanceThemes.map((theme) => (
            <article
              key={theme.number}
              className="relative group rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30 transition-luxury hover:border-aubergine-hover/50"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ochre-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ivory-silk/20 text-ochre-brushed group-hover:bg-ochre-brushed group-hover:text-aubergine-core transition-luxury">
                    <theme.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="overline tabular-nums text-ochre-brushed/80">{theme.number}</p>
                    <h4 className="font-display font-semibold text-lg text-ivory-silk group-hover:text-ochre-champagne transition-luxury-fast">
                      {theme.title}
                    </h4>
                  </div>
                </div>
                <p className="text-ivory-surface/80 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-xl p-6 lg:p-8 bg-ivory-silk/10 border border-aubergine-border/30">
        <h4 className="font-display font-semibold text-lg text-ochre-champagne mb-4 flex items-center gap-2">
          <ShieldIcon className="h-5 w-5" aria-hidden="true" />
          Important Distinction
        </h4>
        <p className="text-ivory-surface/80 leading-relaxed">
          ISO/IEC 42001 is an organizational AI management system standard, not a guarantee that an individual AI model is unbiased, accurate, safe, or compliant with every applicable law.
        </p>
      </div>
    </section>
  )
}