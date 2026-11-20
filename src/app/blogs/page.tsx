import { Metadata } from 'next'
import BlogClient from '@/components/BlogClient'

export const metadata: Metadata = {
  title: 'Blog — Product, Engineering & AI Governance Insights | Keith Koki',
  description:
    'Deep-dive articles on product strategy, software engineering, AI governance, ISO/IEC 42001, and technical leadership from Keith Koki.',
  keywords: [
    'Product Management Blog',
    'Software Engineering Articles',
    'AI Governance Insights',
    'ISO 42001 Guide',
    'Technical Leadership',
    'Product Strategy',
    'Engineering Best Practices',
  ],
  authors: [{ name: 'Keith Koki' }],
  creator: 'Keith Koki',
  publisher: 'Keith Koki',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Blog — Keith Koki',
    description:
      'Deep-dive articles on product strategy, software engineering, AI governance, and technical leadership.',
    type: 'website',
    url: 'https://keithkoki.com/blogs',
    siteName: 'Keith Koki',
    images: [
      {
        url: '/images/opengraph-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Keith Koki Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Keith Koki',
    description:
      'Deep-dive articles on product strategy, software engineering, AI governance, and technical leadership.',
    creator: '@KeithKoki3980',
    site: '@KeithKoki3980',
  },
}

export default function BlogPage() {
  return (
    <BlogClient />
  )
}