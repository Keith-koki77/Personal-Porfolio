import { MetadataRoute } from 'next'

const baseUrl = 'https://keithkoki.com'

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

const routes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/advisory', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/product-management', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/engineering', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ai-governance', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/works', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pillars', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/speaking', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blogs', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        en: `${baseUrl}${route.path}`,
      },
    },
  }))
}