'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ArrowRightIcon, CalendarIcon, ClockIcon, ChevronRightIcon, SparklesIcon, ChevronDownIcon } from '@/components/Icons'
import { sanityClient, urlFor } from '@/lib/sanity'

interface Category {
  title: string
  slug: string
  count: number
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

const POSTS_PER_LOAD = 6

async function fetchCategories(): Promise<Category[]> {
  return sanityClient.fetch<Category[]>(
    `*[_type == "category"] | order(title asc) {
      title,
      "slug": slug.current,
      "count": count(*[_type == "post" && references(^._id)])
    }`
  )
}

async function fetchPosts(params: { offset: number; limit: number; categorySlug?: string }): Promise<{ posts: BlogPost[]; total: number }> {
  const { offset, limit, categorySlug } = params
  
  const filter = categorySlug ? `&& $categorySlug in categories[].slug.current` : ''
  
  const total = await sanityClient.fetch<number>(
    `count(*[_type == "post" ${filter}])`,
    { categorySlug }
  )

  const posts = await sanityClient.fetch<BlogPost[]>(
    `*[_type == "post" ${filter}] | order(publishedAt desc)[$offset...$limit] {
      "slug": slug.current,
      title,
      excerpt,
      publishedAt,
      updatedAt,
      mainImage {
        alt,
        asset
      },
      author {
        name,
        role,
        image
      },
      categories[] {
        title,
        "slug": slug.current
      }
    }`,
    { offset, limit, categorySlug }
  )

  return { posts, total }
}

export default function BlogClient() {
  const [categories, setCategories] = useState<Category[]>([])
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadingCategories, setLoadingCategories] = useState(true)
  const [hasMore, setHasMore] = useState(true)
  const [total, setTotal] = useState(0)
  const [loadedCount, setLoadedCount] = useState(0)

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories()
      .then((cats) => {
        setCategories(cats)
        setLoadingCategories(false)
      })
      .catch(() => setLoadingCategories(false))
  }, [])

  // Fetch initial posts when category changes
  useEffect(() => {
    setLoading(true)
    setPosts([])
    setLoadedCount(0)
    
    fetchPosts({ offset: 0, limit: POSTS_PER_LOAD, categorySlug: selectedCategory || undefined })
      .then(({ posts: fetchedPosts, total: totalCount }) => {
        setPosts(fetchedPosts)
        setLoadedCount(fetchedPosts.length)
        setTotal(totalCount)
        setHasMore(fetchedPosts.length < totalCount)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setHasMore(false)
      })
  }, [selectedCategory])

  const loadMore = () => {
    if (loading || !hasMore) return
    
    setLoading(true)
    
    fetchPosts({ offset: loadedCount, limit: POSTS_PER_LOAD, categorySlug: selectedCategory || undefined })
      .then(({ posts: newPosts, total: totalCount }) => {
        setPosts((prevPosts) => [...prevPosts, ...newPosts])
        setLoadedCount((prevLoaded) => prevLoaded + newPosts.length)
        setHasMore(loadedCount + newPosts.length < totalCount)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setHasMore(false)
      })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
        }) }}
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

          <header className="text-center mb-12 lg:mb-16">
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

          {/* Category Filter Tabs */}
          {!loadingCategories && categories.length > 0 && (
            <div className="mb-12 flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Blog categories">
              <button
                role="tab"
                aria-selected={!selectedCategory}
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  !selectedCategory
                    ? 'bg-[var(--color-ochre-brushed)] text-[var(--color-aubergine-core)]'
                    : 'bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)]'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  role="tab"
                  aria-selected={selectedCategory === cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === cat.slug
                      ? 'bg-[var(--color-ochre-brushed)] text-[var(--color-aubergine-core)]'
                      : 'bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)]'
                  }`}
                >
                  {cat.title}
                  <span className="ml-2 px-1.5 py-0.5 text-xs bg-[var(--color-aubergine-border)]/20 rounded-full">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          )}

          {loading && posts.length === 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <article key={i} className="animate-pulse rounded-xl bg-white border border-[var(--color-aubergine-border)]/10 overflow-hidden">
                  <div className="aspect-video bg-[var(--color-aubergine-border)]/10" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-[var(--color-aubergine-border)]/10 rounded w-1/4" />
                    <div className="h-6 bg-[var(--color-aubergine-border)]/10 rounded w-3/4" />
                    <div className="h-4 bg-[var(--color-aubergine-border)]/10 rounded w-full" />
                    <div className="h-4 bg-[var(--color-aubergine-border)]/10 rounded w-2/3" />
                  </div>
                </article>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" role="list" aria-label="Blog posts">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group relative rounded-xl bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)] transition-all duration-300 overflow-hidden"
                    role="listitem"
                  >
                    {post.mainImage?.asset && (
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="block aspect-video overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ochre-brushed)]"
                        aria-label={`Read: ${post.title}`}
                      >
                        <img
                          src={urlFor(post.mainImage)?.width(800).height(450).quality(85).auto('format').url() || ''}
                          alt={post.mainImage.alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </Link>
                    )}
                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {post.categories?.slice(0, 2).map((cat) => (
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
                          {Math.ceil((post.excerpt?.length || 0) / 200)} min read
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center">
                  <button
                    onClick={loadMore}
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-[var(--color-aubergine-border)]/10 hover:border-[var(--color-ochre-brushed)]/30 hover:bg-[var(--color-ivory-surface)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-[var(--color-ochre-brushed)]" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Loading more...
                      </>
                    ) : (
                      <>
                        Load more articles
                        <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Show total count */}
              <p className="mt-8 text-center text-sm text-[var(--color-obsidian-text)]/50">
                Showing {loadedCount} of {total} articles
              </p>
            </>
          ) : (
            <section className="text-center py-24">
              <div className="max-w-xl mx-auto">
                <SparklesIcon className="w-16 h-16 mx-auto mb-6 text-[var(--color-ochre-brushed)]/50" aria-hidden="true" />
                <h2 className="font-display font-semibold text-2xl lg:text-3xl text-[var(--color-aubergine-deep)] mb-4">
                  {selectedCategory ? 'No articles in this category yet' : 'No articles yet'}
                </h2>
                <p className="text-[var(--color-obsidian-text)]/60 leading-relaxed mb-8">
                  {selectedCategory 
                    ? 'Check back soon for articles in this category.'
                    : 'Articles on product strategy, engineering leadership, and AI governance are coming soon.'}
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

function loadMore() {
  // This is intentionally left empty - the actual function is inside the component
}