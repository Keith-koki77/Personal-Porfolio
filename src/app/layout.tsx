import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Keith Koki',
  url: 'https://keithkoki.com',
  logo: 'https://keithkoki.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/in/keith-koki-669782240/',
    'https://github.com/Keith-koki77/',
    'https://x.com/KeithKoki3980',
    'https://substack.com/@keithkoki',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254-792-016-907',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'World',
  },
  knowsAbout: [
    'Product Management',
    'Software Engineering',
    'AI Governance',
    'ISO/IEC 42001',
    'Technical Due Diligence',
    'Fractional CTO',
  ],
  founder: {
    '@type': 'Person',
    name: 'Keith Koki',
    url: 'https://keithkoki.com',
    sameAs: [
      'https://www.linkedin.com/in/keith-koki-669782240/',
      'https://github.com/Keith-koki77/',
      'https://x.com/KeithKoki3980',
      'https://substack.com/@keithkoki',
    ],
    knowsAbout: [
      'Product Management',
      'Software Engineering',
      'AI Governance',
      'ISO/IEC 42001',
    ],
  },
}

export const metadata: Metadata = {
  metadataBase: new URL('https://keithkoki.com'),
  title: 'Keith Koki — Product Management, Software Engineering & AI Governance',
  description:
    'Executive portfolio of Keith Koki. Orchestrating product impact, pragmatic engineering architecture, and ISO/IEC 42001 certified AI governance.',
  keywords: [
    'Keith Koki',
    'Product Management',
    'Software Engineering',
    'AI Governance',
    'ISO/IEC 42001',
    'Executive Portfolio',
  ],
  authors: [{ name: 'Keith Koki' }],
  openGraph: {
    title: 'Keith Koki — Sovereign Architecture & Product Leadership',
    description:
      'Transforming early-stage ambiguity and complex technical hurdles into clear market-winning products.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Alex+Brush&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-playfair: 'Playfair Display', serif;
            --font-plus-jakarta: 'Plus Jakarta Sans', sans-serif;
            --font-alex-brush: 'Alex Brush', cursive;
          }
          ::selection {
            background-color: #c59b27;
            color: #0a000d;
          }
        ` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-ivory-silk text-obsidian-charcoal antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}