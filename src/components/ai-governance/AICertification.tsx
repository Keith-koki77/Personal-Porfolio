'use client'

import { aiCertifications } from '@/data/ai-governance/certifications'
import { ShieldIcon } from '@/components/Icons'

export function AICertification() {
  return (
    <section
      id="certification"
      className="py-20 lg:py-32 bg-aubergine-deep relative overflow-hidden"
      aria-labelledby="cert-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16 lg:mb-24 animate-fade-in-up text-center">
          <p className="overline text-ochre-champagne mb-4 uppercase tracking-wider">
            Professional Credential
          </p>
          <h2
            id="cert-heading"
            className="font-display font-semibold text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-ivory-silk mb-6 text-balance"
          >
            Building a foundation in responsible AI.
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {aiCertifications.map((cert) => (
            <article
              key={cert.title}
              className="relative rounded-2xl p-8 lg:p-12 bg-ivory-silk border border-hairline-light sovereign-shadow overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ochre-brushed/5 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ochre-hairline/30 to-transparent" aria-hidden="true" />

              <div className="relative z-10 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ochre-brushed/20 text-ochre-brushed mx-auto mb-6">
                  <ShieldIcon className="h-10 w-10" aria-hidden="true" />
                </div>

                <h3 className="font-display font-semibold text-3xl text-aubergine-deep mb-4">
                  {cert.title}
                </h3>

                <div className="space-y-3 text-obsidian-text/80 max-w-md mx-auto mb-8">
                  <p><strong>Issuing Institution:</strong> {cert.issuer}</p>
                  <p><strong>Completion Date:</strong> {cert.completionDate}</p>
                  {cert.credentialId && <p><strong>Credential ID:</strong> {cert.credentialId}</p>}
                  {cert.verificationUrl && (
                    <p>
                      <strong>Verification:</strong>{' '}
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ochre-brushed hover:underline"
                      >
                        View credential
                      </a>
                    </p>
                  )}
                </div>

                {cert.imageUrl && (
                  <div className="mt-8 rounded-lg border border-hairline-light overflow-hidden">
                    <img
                      src={cert.imageUrl}
                      alt={`${cert.title} certificate`}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-hairline-light">
                  <p className="text-sm text-obsidian-muted italic">
                    This certification complements my broader experience in product development, software engineering, and practical technology application. It does not certify me as an ISO/IEC 42001 auditor or authorize me to certify organizations.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}