import { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { TrackRecord } from '@/components/TrackRecord'
import { Capabilities } from '@/components/Capabilities'
import { Process } from '@/components/Process'
import { Contact } from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Keith Koki — Product Management, Software Engineering & AI Governance',
  description:
    'Executive portfolio of Keith Koki. Orchestrating product impact, pragmatic engineering architecture, and ISO/IEC 42001 certified AI governance advisory. CTO at Qavaeat & Mama Sure.',
  keywords: [
    'Keith Koki',
    'Product Management',
    'Product Leadership',
    'Software Engineering',
    'AI Governance',
    'ISO 42001',
    'ISO/IEC 42001',
    'AI Advisory',
    'AI Integration',
    'Design Thinking',
    'Fractional CTO',
    'Technical Due Diligence',
  ],
  authors: [{ name: 'Keith Koki' }],
  creator: 'Keith Koki',
  publisher: 'Keith Koki',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Keith Koki — Sovereign Architecture & Product Leadership',
    description:
      'Transforming early-stage ambiguity and complex technical hurdles into clear market-winning products.',
    type: 'website',
    url: 'https://keithkoki.com/',
    siteName: 'Keith Koki',
    locale: 'en_US',
    images: [
      {
        url: '/images/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Keith Koki — Product, Engineering & AI Governance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keith Koki — Product, Engineering & AI Governance',
    description:
      'Executive portfolio of Keith Koki. Product leadership, software engineering, and ISO/IEC 42001 certified AI governance advisory.',
    creator: '@KeithKoki3980',
    site: '@KeithKoki3980',
    images: ['/images/opengraph.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'Technology',
}

export default function Home() {
  return (
    <main id="main-content" className="pt-0 min-h-screen bg-ivory-silk">
      <Hero />
      <TrackRecord />
      <Capabilities />
      <Process />
      <Contact />
    </main>
  )
}