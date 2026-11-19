import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { AIGovernanceHero } from '@/components/ai-governance/AIGovernanceHero'
import { AIPhilosophy } from '@/components/ai-governance/AIPhilosophy'
import { ReshuffleInfluence } from '@/components/ai-governance/ReshuffleInfluence'
import { AIGovernanceFoundation } from '@/components/ai-governance/AIGovernanceFoundation'
import { AICapabilities } from '@/components/ai-governance/AICapabilities'
import { PragmaticAI } from '@/components/ai-governance/PragmaticAI'
import { AIApplications } from '@/components/ai-governance/AIApplications'
import { GovernanceFramework } from '@/components/ai-governance/GovernanceFramework'
import { HumanAI } from '@/components/ai-governance/HumanAI'
import { AIGovernanceVsAdoption } from '@/components/ai-governance/AIGovernanceVsAdoption'
import { AITools } from '@/components/ai-governance/AITools'
import { RegulatoryFrameworks } from '@/components/ai-governance/RegulatoryFrameworks'
import { AILifecycle } from '@/components/ai-governance/AILifecycle'
import { AICertification } from '@/components/ai-governance/AICertification'
import { AIGovernanceCTA } from '@/components/ai-governance/AIGovernanceCTA'

export const metadata: Metadata = {
  title: 'AI Governance & ISO/IEC 42001 Advisory | Keith Koki',
  description:
    'Certified ISO/IEC 42001 Lead Assessor providing AI governance advisory: algorithmic safety, responsible AI implementation, bias auditing, drift monitoring, and compliance frameworks for startups.',
  keywords: [
    'AI Governance',
    'ISO 42001',
    'ISO/IEC 42001',
    'Responsible AI',
    'Algorithmic Safety',
    'AI Advisory',
    'AI Compliance',
    'Bias Auditing',
    'Model Drift Monitoring',
    'AI Risk Assessment',
    'AI Integration into Business',
    'AI Revolution',
    'AI in Organizations',
  ],
  authors: [{ name: 'Keith Koki' }],
  creator: 'Keith Koki',
  publisher: 'Keith Koki',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'AI Governance & ISO/IEC 42001 Advisory | Keith Koki',
    description:
      'Certified ISO/IEC 42001 Lead Assessor providing AI governance advisory: algorithmic safety, responsible AI implementation, bias auditing, drift monitoring, and compliance frameworks.',
    type: 'website',
    url: 'https://keithkoki.com/ai-governance',
    siteName: 'Keith Koki',
    images: [
      {
        url: '/images/opengraph-ai-governance.jpg',
        width: 1200,
        height: 630,
        alt: 'Keith Koki AI Governance Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Governance & ISO/IEC 42001 Advisory | Keith Koki',
    description:
      'Certified ISO/IEC 42001 Lead Assessor providing AI governance advisory for startups.',
    creator: '@KeithKoki3980',
    site: '@KeithKoki3980',
  },
}

export default function AIGovernancePage() {
  return (
    <main id="main-content" className="pt-0 min-h-screen bg-ivory-silk">
      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }]}
        currentPage="AI Governance"
        currentPageHref="/ai-governance"
      />
      <AIGovernanceHero />
      <AIPhilosophy />
      <ReshuffleInfluence />
      <AIGovernanceFoundation />
      <AICapabilities />
      <PragmaticAI />
      <AIApplications />
      <GovernanceFramework />
      <HumanAI />
      <AIGovernanceVsAdoption />
      <AITools />
      <RegulatoryFrameworks />
      <AILifecycle />
      <AICertification />
      <AIGovernanceCTA />
    </main>
  )
}