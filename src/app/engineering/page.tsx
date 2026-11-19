import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { EngineeringHero } from '@/components/engineering/EngineeringHero'
import { EngineeringPhilosophy } from '@/components/engineering/EngineeringPhilosophy'
import { EngineeringCapabilities } from '@/components/engineering/EngineeringCapabilities'
import { EngineeringTechStack } from '@/components/engineering/EngineeringTechStack'
import { EngineeringProjects } from '@/components/engineering/EngineeringProjects'
import { EngineeringArchitecture } from '@/components/engineering/EngineeringArchitecture'
import { EngineeringDecisions } from '@/components/engineering/EngineeringDecisions'
import { EngineeringWorkflow } from '@/components/engineering/EngineeringWorkflow'
import { EngineeringPrinciples } from '@/components/engineering/EngineeringPrinciples'
import { EngineeringCTA } from '@/components/engineering/EngineeringCTA'

export const metadata: Metadata = {
  title: 'Software Engineering & Full-Stack Development | Keith Koki',
  description:
    'Explore Keith Koki\'s software engineering work across full-stack development, backend systems, APIs, SaaS applications, payment integrations, and AI-enabled solutions.',
  keywords: [
    'Software Engineering',
    'Full-Stack Development',
    'Frontend Architecture',
    'Backend Systems',
    'Next.js',
    'TypeScript',
    'React',
    'Engineering Leadership',
    'Technical Stewardship',
    'Engineering Velocity',
    'Technical Due Diligence',
  ],
  authors: [{ name: 'Keith Koki' }],
  creator: 'Keith Koki',
  publisher: 'Keith Koki',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Software Engineering & Full-Stack Development | Keith Koki',
    description:
      'Explore Keith Koki\'s software engineering work across full-stack development, backend systems, APIs, SaaS applications, payment integrations, and AI-enabled solutions.',
    type: 'website',
    url: 'https://keithkoki.com/engineering',
    siteName: 'Keith Koki',
    images: [
      {
        url: '/images/opengraph-engineering.jpg',
        width: 1200,
        height: 630,
        alt: 'Keith Koki Software Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Engineering & Full-Stack Development | Keith Koki',
    description:
      'Explore Keith Koki\'s software engineering work across full-stack development, backend systems, APIs, and AI-enabled solutions.',
    creator: '@KeithKoki3980',
    site: '@KeithKoki3980',
  },
}

export default function EngineeringPage() {
  return (
    <main id="main-content" className="pt-0 min-h-screen bg-ivory-silk">
      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }]}
        currentPage="Software Engineering"
        currentPageHref="/engineering"
      />
      <EngineeringHero />
      <EngineeringPhilosophy />
      <EngineeringCapabilities />
      <EngineeringTechStack />
      <EngineeringProjects />
      <EngineeringArchitecture />
      <EngineeringDecisions />
      <EngineeringWorkflow />
      <EngineeringPrinciples />
      <EngineeringCTA />
    </main>
  )
}