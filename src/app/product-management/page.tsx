import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { ProductHero } from '@/components/product-management/ProductHero'
import { ProductIntroduction } from '@/components/product-management/ProductIntroduction'
import { ProductCapabilities } from '@/components/product-management/ProductCapabilities'
import { SelectedProjects } from '@/components/product-management/SelectedProjects'
import { ProductDecisions } from '@/components/product-management/ProductDecisions'
import { ProductMethodology } from '@/components/product-management/ProductMethodology'
import { TechnicalStack } from '@/components/product-management/TechnicalStack'
import { VentureExperience } from '@/components/product-management/VentureExperience'
import { FounderCollaboration } from '@/components/product-management/FounderCollaboration'
import { ProductCTA } from '@/components/product-management/ProductCTA'

export const metadata: Metadata = {
  title: 'Product Strategy & Management | Keith Koki',
  description:
    'Keith Koki helps founders turn business ideas into digital products through product strategy, UX design, software engineering, and AI innovation.',
  keywords: [
    'Product Management',
    'Product Strategy',
    'Product Leadership',
    'Design Thinking',
    'UX Design',
    'Roadmap Planning',
    'Product Discovery',
    'B2B Product Management',
    'Outcome Roadmaps',
    'Metrics & KPIs',
  ],
  authors: [{ name: 'Keith Koki' }],
  creator: 'Keith Koki',
  publisher: 'Keith Koki',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Product Strategy & Management | Keith Koki',
    description:
      'Keith Koki helps founders turn business ideas into digital products through product strategy, UX design, software engineering, and AI innovation.',
    type: 'website',
    url: 'https://keithkoki.com/product-management',
    siteName: 'Keith Koki',
    images: [
      {
        url: '/images/opengraph-product.jpg',
        width: 1200,
        height: 630,
        alt: 'Keith Koki Product Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Strategy & Management | Keith Koki',
    description:
      'Keith Koki helps founders turn business ideas into digital products through product strategy, UX design, software engineering, and AI innovation.',
    creator: '@KeithKoki3980',
    site: '@KeithKoki3980',
  },
}

export default function ProductManagementPage() {
  return (
    <main id="main-content" className="pt-0">
      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }]}
        currentPage="Product Management"
        currentPageHref="/product-management"
      />
      <ProductHero />
      <ProductIntroduction />
      <ProductCapabilities />
      <SelectedProjects />
      <ProductDecisions />
      <ProductMethodology />
      <TechnicalStack />
      <VentureExperience />
      <FounderCollaboration />
      <ProductCTA />
    </main>
  )
}