import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ArrowRightIcon, CalendarIcon, ClockIcon, ChevronRightIcon, SparklesIcon } from '@/components/Icons'

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

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  updatedAt?: string
  categories: Array<{ title: string; slug: string }>
  mainImage?: {
    alt?: string
    asset?: { _ref?: string; url?: string }
  }
  author?: {
    name: string
    role?: string
    image?: any
  }
}

const POSTS_PER_PAGE = 6

// This would normally come from Sanity via getStaticProps or a server component
// For now, we'll use a placeholder that shows the structure
async function getBlogPosts(page: number): Promise<{ posts: BlogPost[]; total: number }> {
  // In production, this would query Sanity
  // For now, return empty - the actual implementation uses Sanity client
  return { posts: [], total: 0 }
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Keith Koki Blog',
  description: 'Deep-dive articles on product strategy, software engineering, AI governance, and technical leadership.',
  url: 'https://keithkoki.com/blogs',
  author: {
    '@type': 'Person',
    name: 'Keith Koki',
    url: 'https://keithkoki.com',
    sameAs: [
      'https://www.linkedin.com/in/keith-koki-669782240/',
      'https://github.com/Keith-koki77/',
      'https://x.com/KeithKoki3980',
      'https://substack.com/@keithkoki',
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Keith Koki',
    logo: {
      '@type': 'ImageObject',
      url: 'https://keithkoki.com/logo.png',
    },
  },
  blogPosts: [],
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page = '1' } = await searchParams
  const currentPage = parseInt(page, 10) || 1
  
  // In production, fetch from Sanity
  // const { posts, total } = await getBlogPosts(currentPage)
  const posts: BlogPost[] = []
  const total = 0
  const totalPages = Math.ceil(total / POSTS_PER_PAGE)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="min-h-screen bg-[var(--color-ivory-silk)] relative overflow-hidden" id="blogs">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-ochre-brushed)]/5 blur-[200px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-aubergine-deep)]/5 blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }]}
            currentPage="Blog"
            currentPageHref="/blogs"
          />

          <header className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)] text-sm font-medium uppercase tracking-wider mb-8">
              <SparklesIcon className="w-4 h-4" aria-hidden="true" />
              <span>Insights & Analysis</span>
            </div>
            <h1 className="font-display font-semibold text-editorial-lg lg:text-editorial-xl text-[var(--color-aubergine-deep)] mb-8 leading-tight text-balance max-w-3xl mx-auto">
              Blog
            </h1>
            <p className="font-script text-xl lg:text-2xl text-[var(--color-aubergine-deep)]/70 leading-relaxed text-balance max-w-2xl mx-auto">
              Deep-dive analysis on product strategy, engineering leadership, AI governance, and the intersection of technology and business.
            </p>
          </header>

          {posts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" role="list" aria-label="Blog posts">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group relative rounded-xl bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)] transition-all duration-300 overflow-hidden"
                    role="listitem"
                  >
                    {post.mainImage?.asset?.url && (
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="block aspect-video overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ochre-brushed)]"
                        aria-label={`Read: ${post.title}`}
                      >
                        <img
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </Link>
                    )}
                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {post.categories.slice(0, 2).map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/blogs?category=${cat.slug}`}
                            className="px-2.5 py-1 rounded text-xs font-medium tracking-wider bg-[var(--color-ochre-brushed)]/10 text-[var(--color-ochre-brushed)] border border-[var(--color-ochre-brushed)]/20 hover:bg-[var(--color-ochre-brushed)] hover:text-white transition-colors"
                          >
                            {cat.title}
                          </Link>
                        ))}
                      </div>
                      <Link href={`/blogs/${post.slug}`}>
                        <h2 className="font-display font-semibold text-xl lg:text-2xl text-[var(--color-aubergine-deep)] group-hover:text-[var(--color-ochre-brushed)] transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-[var(--color-obsidian-text)]/60 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[var(--color-obsidian-text)]/50 pt-4 border-t border-[var(--color-aubergine-border)]/10">
                        <time dateTime={post.publishedAt}>
                          <CalendarIcon className="w-4 h-4 inline mr-1" aria-hidden="true" />
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                        <span>
                          <ClockIcon className="w-4 h-4 inline mr-1" aria-hidden="true" />
                          {Math.ceil(post.excerpt.length / 200)} min read
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav
                  className="flex items-center justify-center gap-2"
                  aria-label="Blog pagination"
                >
                  {currentPage > 1 && (
                    <Link
                      href={`/blogs?page=${currentPage - 1}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)] transition-colors"
                      aria-label="Previous page"
                    >
                      <ChevronRightIcon className="w-4 h-4 rotate-180" aria-hidden="true" />
                      <span>Previous</span>
                    </Link>
                  )}
                  
                  <div className="flex items-center gap-1" role="group" aria-label="Page numbers">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum
                      if (totalPages <= 5) {
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }
                      return (
                        <Link
                          key={pageNum}
                          href={`/blogs?page=${pageNum}`}
                          className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                            pageNum === currentPage
                              ? 'bg-[var(--color-ochre-brushed)] text-[var(--color-aubergine-core)]'
                              : 'bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)]'
                          }`}
                          aria-label={`Page ${pageNum}`}
                          aria-current={pageNum === currentPage ? 'page' : undefined}
                        >
                          {pageNum}
                        </Link>
                      )
                    })}
                  </div>

                  {currentPage < totalPages && (
                    <Link
                      href={`/blogs?page=${currentPage + 1}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)] transition-colors"
                      aria-label="Next page"
                    >
                      <span>Next</span>
                      <ChevronRightIcon className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  )}
                </nav>
              )}
            </>
          ) : (
            <section className="text-center py-24">
              <div className="max-w-xl mx-auto">
                <SparklesIcon className="w-16 h-16 mx-auto mb-6 text-[var(--color-ochre-brushed)]/50" aria-hidden="true" />
                <h2 className="font-display font-semibold text-2xl lg:text-3xl text-[var(--color-aubergine-deep)] mb-4">
                  No posts yet
                </h2>
                <p className="text-[var(--color-obsidian-text)]/60 leading-relaxed mb-8">
                  Articles on product strategy, engineering leadership, and AI governance are coming soon.
                </p>
                <Link
                  href="/advisory"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-ochre-brushed)] text-[var(--color-aubergine-core)] font-semibold hover:bg-[var(--color-ochre-champagne)] transition-colors"
                >
                  Explore advisory services
                  <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  )
}