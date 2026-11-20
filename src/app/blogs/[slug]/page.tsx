import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ClockIcon, LinkedInIcon, InstagramIcon } from '@/components/Icons'
import { sanityClient, getBlogPostSlugs } from '@/lib/sanity'
import type { BlogPost, BlogPostCategory, PortableTextBlock, SourceLink, FAQ, OriginalDataTable } from '@/lib/blog-types'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

const BLOG_POST_TYPE = 'post'

type Category = {
  title?: string | null
  slug?: { current?: string | null } | null
}

type RelatedPost = {
  _id: string
  title: string
  slug: string
  excerpt?: string | null
  publishedAt?: string | null
  mainImage?: BlogPost['mainImage'] | null
  categories?: (Category | null)[] | null
}

type RecentPost = {
  _id: string
  title: string
  slug: string
  publishedAt: string
  mainImage?: BlogPost['mainImage'] | null
  excerpt?: string | null
  body?: PortableTextBlock[]
  categories?: BlogPostCategory[] | null
}

type Heading = { id: string; text: string; level: number }
type KeyedBlock = PortableTextBlock & { _key?: string }

function categorySlug(cat: Category): string | null {
  const fromSlug = cat.slug?.current
  if (fromSlug) return fromSlug
  const fromTitle = cat.title?.trim().toLowerCase().replace(/\s+/g, '-')
  return fromTitle || null
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  updatedAt,
  excerpt,
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        _ref,
        url
      }
    }
  },
  extractableSentences,
  sourceLinks[] {
    title,
    url
  },
  faqs[] {
    question,
    answer
  },
  originalDataTable {
    title,
    columns,
    rows[] {
      cells
    }
  },
  mainImage {
    alt,
    asset->{
      _id,
      _ref,
      url
    }
  },
  author->{
    name,
    role,
    bio,
    linkedIn,
    instagram,
    image {
      alt,
      asset->{
        _id,
        _ref,
        url
      }
    }
  },
  categories[]->{_id, title, slug}
}`

const RECENT_POSTS_QUERY = `*[_type == "post" && defined(slug.current)]
  | order(publishedAt desc)[0...8]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  mainImage {
    alt,
    asset->{
      _id,
      _ref,
      url
    }
  },
  excerpt,
  body,
  categories[]->{_id, title}
}`

const options = { next: { revalidate: 30 } }

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || sanityClient.config().projectId
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || sanityClient.config().dataset

const builder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
})

const urlFor = (source: SanityImageSource) => {
  if (!source) return null
  try {
    return builder.image(source)
  } catch (error) {
    return null
  }
}

const getImageUrl = (source: any, width = 1400) => {
  if (!source) return "/images/placeholder.jpg"

  // POST_QUERY dereferences the Sanity asset and returns asset.url.
  const assetUrl = source.asset?.url
  if (typeof assetUrl === "string" && assetUrl.startsWith("https://")) {
    return assetUrl
  }

  // Fallback for Sanity image objects that only contain an asset reference.
  if (source.asset?._ref || source._ref) {
    const builtUrl = urlFor(source)?.width(width).quality(85).auto("format").url()
    if (builtUrl) return builtUrl
  }

  return "/images/placeholder.jpg"
}

export async function generateStaticParams() {
  try {
    const slugs = await getBlogPostSlugs()

    console.log(
      `[Sanity] Found ${slugs.length} blog posts for static generation:`,
      slugs
    )

    return slugs.map((slug: string) => ({
      slug,
    }))
  } catch (error) {
    console.error(
      '[Sanity] generateStaticParams failed:',
      error
    )

    // Fail the build rather than silently deploying
    // without the expected blog article pages.
    throw error
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await sanityClient.fetch<BlogPost>(POST_QUERY, { slug }, options)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const ogImageUrl = getImageUrl(post.mainImage)
  const authorName = post.author?.name || 'Keith Koki'
  const authorLinkedIn = post.author?.linkedIn || 'https://www.linkedin.com/in/keith-koki-669782240/'
  const siteUrl = 'https://keithkoki.com'
  const postUrl = `${siteUrl}/blogs/${slug}`
  const description = post.excerpt || post.body?.[0]?.children?.[0]?.text?.substring(0, 155) || 'Read more about this story.'
  const keywords = post.categories?.map((cat) => cat.title).join(', ') || 'Product, Engineering, Leadership, AI Governance'

  return {
    title: post.title,
    description,
    keywords,
    authors: [{ name: authorName, url: authorLinkedIn }],
    creator: authorName,
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
    alternates: {
      canonical: postUrl,
      types: {
        'application/rss+xml': `${siteUrl}/rss.xml`,
      },
    },
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url: postUrl,
      siteName: 'Keith Koki',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [authorName],
      tags: post.categories?.map((cat) => cat.title) || [],
      images: ogImageUrl !== "/images/placeholder.jpg"
        ? [{ url: ogImageUrl, width: 1200, height: 630, alt: post.mainImage?.alt || post.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: ogImageUrl !== "/images/placeholder.jpg" ? [ogImageUrl] : [],
      creator: '@KeithKoki3980',
      site: '@KeithKoki3980',
    },
    verification: {
      google: 'google-site-verification-code',
    },
    category: post.categories?.[0]?.title || 'Technology',
  }
}

const components = {
  types: {
    image: ({ value }: any) => {
      const src = getImageUrl(value)
      if (!src || src === "/images/placeholder.jpg") return null

      return (
        <div className="my-12 relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src={src}
            alt={value.alt || "Blog content image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
          />
          {value.caption && (
            <p className="mt-4 text-center text-sm text-obsidian-text/60 italic px-4">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-ochre-brushed hover:text-ochre-champagne underline underline-offset-2 transition-luxury-fast"
        target={value.blank ? "_blank" : undefined}
        rel={value.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children, value }: any) => {
      const text = value.children?.[0]?.text || ""
      const id = slugify(text)
      return (
        <h2
          id={id}
          className="font-display font-semibold text-2xl lg:text-3xl text-aubergine-deep mt-10 mb-4 leading-tight scroll-mt-28"
        >
          {children}
        </h2>
      )
    },
    h3: ({ children, value }: any) => {
      const text = value.children?.[0]?.text || ""
      const id = slugify(text)
      return (
        <h3
          id={id}
          className="font-display font-medium text-xl lg:text-2xl text-aubergine-deep mt-8 mb-3 leading-tight scroll-mt-28"
        >
          {children}
        </h3>
      )
    },
    h4: ({ children }: any) => (
      <h4 className="font-display font-medium text-lg lg:text-xl text-aubergine-deep mt-6 mb-2 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-obsidian-text/80 leading-relaxed mb-6 text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-ochre-brushed/50 pl-6 italic text-obsidian-text/80 text-lg lg:text-xl my-8">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 space-y-2 mb-6" style={{ listStylePosition: 'inside' }}>
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 space-y-2 mb-6" style={{ listStylePosition: 'inside' }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-obsidian-text/80 leading-relaxed ml-4">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-obsidian-text/80 leading-relaxed ml-4">{children}</li>
    ),
  },
}

function Dateline({ post }: { post: BlogPost }) {
  const published = post.publishedAt ? new Date(post.publishedAt) : null
  const updated = post.updatedAt ? new Date(post.updatedAt) : null
  return (
    <div className="flex items-center gap-1 text-ivory-surface/60 text-sm">
      <CalendarIcon className="h-3.5 w-3.5" aria-hidden="true" />
      {published ? (
        <time dateTime={published.toISOString()}>
          {published.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </time>
      ) : null}
      {updated && published && updated > published && (
        <>
          {' · '}
          <span>Updated {updated.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </>
      )}
    </div>
  )
}

function ExtractableSentences({ sentences }: { sentences?: string[] }) {
  if (!sentences?.length) return null
  return (
    <div className="mt-12">
      <h2 className="overline text-ochre-brushed mb-4">Key takeaways</h2>
      <ul className="space-y-4">
        {sentences.map((s, i) => (
          <li key={i} className="text-xl text-aubergine-deep font-medium border-l-4 border-ochre-brushed pl-4 py-2 mb-6 italic leading-relaxed">
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SourceLinks({ links }: { links?: SourceLink[] }) {
  if (!links?.length) return null
  return (
    <div className="mt-10 p-4 rounded-lg border border-ochre-brushed/30 bg-ivory-surface/20">
      <h3 className="overline text-ochre-brushed mb-3 text-xs">Sources</h3>
      <ul className="space-y-1 text-sm text-obsidian-text/80">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              href={l.url}
              className="text-ochre-brushed hover:underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FAQBlock({ faqs }: { faqs?: FAQ[] }) {
  if (!faqs?.length) return null
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-semibold text-aubergine-deep mb-8">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-ochre-brushed/30 rounded-lg overflow-hidden">
            <h3 className="px-6 py-3 bg-ivory-surface/30 text-xl font-medium text-aubergine-deep cursor-pointer select-none">
              {faq.question}
            </h3>
            <div className="px-6 py-4 border-t border-ochre-brushed/10 text-obsidian-text/90 leading-relaxed">
              <PortableText value={faq.answer} components={components} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function OriginalDataTableBlock({ table }: { table?: OriginalDataTable }) {
  if (!table) return null
  return (
    <figure className="mt-12">
      {table.title && <figcaption className="overline text-ochre-brushed mb-2 text-sm">{table.title}</figcaption>}
      <table className="min-w-full border-collapse mb-8 border border-ochre-brushed/30 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-ivory-surface border-b border-ochre-brushed/20">
            {table.columns.map((col, i) => (
              <th key={i} className="px-4 py-3 text-left text-sm font-medium text-obsidian-text uppercase tracking-wider">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ochre-brushed/10">
          {table.rows.map((row, i) => (
            <tr key={i} className="last:border-0 hover:bg-ivory-surface/20 transition-colors">
              {row.cells.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-sm text-obsidian-text/90">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

function JSONLD({ post }: { post: BlogPost }) {
  const published = post.publishedAt ? new Date(post.publishedAt).toISOString() : new Date().toISOString()
  const updated = post.updatedAt ? new Date(post.updatedAt).toISOString() : published
  const authorName = post.author?.name || 'Keith Koki'
  const authorRole = post.author?.role || 'Product & Engineering Leadership'
  const imageUrl = getImageUrl(post.mainImage)
  const authorLinkedIn = post.author?.linkedIn
  const authorInstagram = post.author?.instagram
  const sameAs = [authorLinkedIn, authorInstagram].filter(Boolean) as string[]
  const postUrl = `https://keithkoki.com/blogs/${post.slug}`
  const siteUrl = 'https://keithkoki.com'
  const categories = post.categories?.map((cat) => cat.title) || []

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#blogposting`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.title,
    description: post.excerpt || post.body?.[0]?.children?.[0]?.text?.substring(0, 155) || 'Read more about this story.',
    image: imageUrl !== "/images/placeholder.jpg" ? [imageUrl] : ['https://keithkoki.com/images/opengraph.jpg'],
    datePublished: published,
    dateModified: updated,
    author: {
      '@type': 'Person',
      '@id': `${siteUrl}/#author`,
      name: authorName,
      jobTitle: authorRole,
      url: siteUrl,
      image: post.author?.image ? getImageUrl(post.author.image) : 'https://keithkoki.com/logo.png',
      sameAs: sameAs.length > 0 ? sameAs : ['https://www.linkedin.com/in/keith-koki-669782240/', 'https://www.instagram.com/koki_keith/'],
      knowsAbout: categories,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Keith Koki',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#logo`,
        url: 'https://keithkoki.com/logo.png',
        width: 512,
        height: 512,
      },
    },
    articleSection: categories[0] || 'Technology',
    articleTag: categories,
    keywords: categories.join(', '),
    wordCount: post.body?.reduce((count: number, block: PortableTextBlock) => {
      if (block._type === 'block' && block.children) {
        return count + block.children.reduce((charCount: number, child: { _type: string; text?: string }) => {
          if (child._type === 'span' && child.text) {
            return charCount + child.text.length;
          }
          return charCount;
        }, 0);
      }
      return count;
    }, 0) || 0,
    timeRequired: `PT${Math.max(1, Math.ceil((post.excerpt?.length || 0) / 200))}M`,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    ...(post.extractableSentences?.length ? { about: post.extractableSentences } : {}),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteUrl}/blogs`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Keith Koki',
    description: 'Product & Engineering Leadership insights by Keith Koki',
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#author`,
    name: authorName,
    jobTitle: authorRole,
    url: siteUrl,
    image: post.author?.image ? getImageUrl(post.author.image) : 'https://keithkoki.com/logo.png',
    sameAs: sameAs.length > 0 ? sameAs : ['https://www.linkedin.com/in/keith-koki-669782240/', 'https://www.instagram.com/koki_keith/'],
    knowsAbout: categories,
    worksFor: {
      '@id': `${siteUrl}/#organization`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  )
}

function extractHeadings(blocks: PortableTextBlock[]): { headings: Heading[]; idByKey: Record<string, string> } {
  const headings: Heading[] = []
  const idByKey: Record<string, string> = {}
  const used: Record<string, number> = {}

    ; (blocks || []).forEach((block) => {
      const style = block?.style
      if (style !== 'h2' && style !== 'h3') return

      const text = (block.children?.map((c) => c.text).join('') || '').trim()
      if (!text) return

      const base = slugify(text) || 'section'
      const count = used[base] ?? 0
      used[base] = count + 1
      const id = count === 0 ? base : `${base}-${count + 1}`

      const key = (block as KeyedBlock)._key
      if (key) idByKey[key] = id
      headings.push({ id, text, level: parseInt(style[1], 10) })
    })

  return { headings, idByKey }
}

function TocList({ headings }: { headings: Heading[] }) {
  return (
    <ul className="space-y-2">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={`block text-sm text-obsidian-text/80 hover:text-ochre-brushed transition-luxury-fast border-l-2 py-0.5 ${heading.level === 2 ? 'border-ochre-brushed pl-3' : 'border-transparent pl-7'
              }`}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

function TableOfContents({ headings }: { headings: Heading[] }) {
  if (!headings.length) return null
  return (
    <nav
      className="p-6 rounded-xl bg-ivory-silk border border-hairline-light sovereign-shadow"
      aria-label="Table of contents"
    >
      <h3 className="overline text-ochre-brushed mb-4">Contents</h3>
      <TocList headings={headings} />
    </nav>
  )
}

function MobileTableOfContents({ headings }: { headings: Heading[] }) {
  if (!headings.length) return null
  return (
    <details className="lg:hidden mb-10 rounded-xl bg-ivory-silk border border-hairline-light sovereign-shadow group">
      <summary className="cursor-pointer select-none list-none px-5 py-4 flex items-center justify-between overline text-ochre-brushed">
        <span>In this article</span>
        <span className="text-lg leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <nav className="px-5 pb-5" aria-label="Table of contents">
        <TocList headings={headings} />
      </nav>
    </details>
  )
}

function estimateReadMinutes(excerpt?: string | null) {
  return Math.max(1, Math.ceil((excerpt?.length || 0) / 200))
}

function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  if (!posts.length) return null
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-20 lg:mt-28 pb-24" aria-labelledby="read-next-heading">
      <div className="flex items-end justify-between mb-8 border-t border-hairline-light pt-12">
        <div>
          <span className="overline text-ochre-brushed">Keep reading</span>
          <h2 id="read-next-heading" className="font-display font-semibold text-3xl lg:text-4xl text-aubergine-deep mt-2">
            Read next
          </h2>
        </div>
        <Link
          href="/blogs"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-ochre-brushed hover:text-ochre-champagne transition-luxury-fast"
        >
          All posts
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((related) => {
          const cats = (related.categories ?? []).filter((c): c is Category => !!c && !!c.title)
          const date = related.publishedAt ? new Date(related.publishedAt) : null
          return (
            <Link
              key={related._id || related.slug}
              href={`/blogs/${related.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-ivory-silk border border-hairline-light sovereign-shadow hover:border-ochre-brushed/50 transition-luxury"
            >
              <div className="relative aspect-[16/9] bg-ivory-surface overflow-hidden">
                {related.mainImage ? (
                  <Image
                    src={getImageUrl(related.mainImage)}
                    alt={related.mainImage.alt || related.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-6">
                {cats[0] && <span className="overline text-ochre-brushed mb-3">{cats[0].title}</span>}
                <h3 className="font-display font-semibold text-xl text-aubergine-deep leading-snug group-hover:text-ochre-brushed transition-luxury-fast">
                  {related.title}
                </h3>
                {related.excerpt && (
                  <p className="mt-3 text-sm text-obsidian-text/70 leading-relaxed line-clamp-3">{related.excerpt}</p>
                )}
                <div className="mt-auto pt-5 flex items-center justify-between text-xs text-obsidian-text/60">
                  <span className="flex items-center gap-3">
                    {date && (
                      <time dateTime={date.toISOString()}>
                        {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </time>
                    )}
                    <span>{estimateReadMinutes(related.excerpt)} min read</span>
                  </span>
                  <ArrowRightIcon
                    className="h-4 w-4 text-ochre-brushed transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

async function getRelatedPosts(currentSlug: string, categorySlugs: string[]): Promise<RelatedPost[]> {
  try {
    let related: RelatedPost[] = []

    if (categorySlugs.length > 0) {
      const sharedQuery = `*[
        _type == $type &&
        defined(slug.current) &&
        slug.current != $slug &&
        count(categories[]->slug.current[@ in $categorySlugs]) > 0
      ] | order(count(categories[]->slug.current[@ in $categorySlugs]) desc, publishedAt desc)[0...$limit] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        mainImage {
          alt,
          asset->{
            _id,
            _ref,
            url
          }
        },
        "categories": categories[]->{_id, title, slug}
      }`

      const result = await sanityClient.fetch(sharedQuery, {
        type: BLOG_POST_TYPE,
        slug: currentSlug,
        categorySlugs,
        limit: 3,
      })
      related = Array.isArray(result) ? result : []
    }

    if (related.length < 3) {
      const excludeSlugs = [currentSlug, ...related.map((p) => p.slug)]
      const latestQuery = `*[
        _type == $type &&
        defined(slug.current) &&
        !(slug.current in $excludeSlugs)
      ] | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        mainImage {
          alt,
          asset->{
            _id,
            _ref,
            url
          }
        },
        "categories": categories[]->{_id, title, slug}
      }`

      const latest = await sanityClient.fetch(latestQuery, {
        type: BLOG_POST_TYPE,
        excludeSlugs,
        limit: 3 - related.length,
      })
      if (Array.isArray(latest)) related = [...related, ...latest]
    }

    return related.filter((p) => p && p.slug && p.title)
  } catch (error) {
    console.warn('getRelatedPosts failed:', error)
    return []
  }
}

function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  return <BlogPostContent params={params} />
}

async function BlogPostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await sanityClient.fetch<BlogPost>(POST_QUERY, { slug }, options)

  if (!post) {
    notFound()
  }

  const recentPosts = await sanityClient.fetch<RecentPost[]>(RECENT_POSTS_QUERY, {}, options)

  const categories = ((post.categories ?? []) as (Category | null)[]).filter(
    (cat): cat is Category => !!cat && !!cat.title && !!categorySlug(cat)
  )

  const { headings } = extractHeadings(post.body as PortableTextBlock[])

  const authorName = post.author?.name || 'Keith Koki'
  const authorRole = post.author?.role || 'Product & Engineering Leadership'
  const authorImgSrc =
    post.author?.image?.asset?.url || post.author?.image?.asset?._ref
      ? getImageUrl(post.author.image, 400)
      : ''
  const authorLinkedIn = post.author?.linkedIn || 'https://www.linkedin.com/in/keith-koki-669782240/'
  const authorInstagram = post.author?.instagram || 'https://www.instagram.com/koki_keith/'
  const authorBio = post.author?.bio?.[0]?.children?.[0]?.text || 'CTO & Product Leader helping founders turn complex ideas into purposeful digital products.'

  return (
    <article className="min-h-screen bg-ivory-silk">
      <JSONLD post={post} />

      <main className="min-h-screen bg-ivory-silk py-20 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
          {/* Breadcrumbs for SEO & UX */}
          <nav
            className="mb-8"
            aria-label="Breadcrumb"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <ol className="flex items-center gap-2 text-sm text-obsidian-text/60" role="list">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link
                  href="/"
                  className="hover:text-ochre-brushed transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="flex items-center gap-2" aria-hidden="true">
                <span>/</span>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link
                  href="/blogs"
                  className="hover:text-ochre-brushed transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">Blog</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="flex items-center gap-2" aria-hidden="true">
                <span>/</span>
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" aria-current="page">
                <span
                  itemProp="name"
                  className="text-obsidian-text/90 font-medium truncate max-w-[300px]"
                >
                  {post.title}
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-24 px-4">
            <div className="flex items-center gap-3 text-sm font-medium text-ochre-brushed mb-8 uppercase tracking-wider">
              <Link
                href="/blogs"
                className="hover:text-ochre-champagne transition-colors"
              >
                Blogs
              </Link>
              <span className="text-ochre-champagne bg-ochre-brushed/10 px-3 py-1 rounded-full">
                {post.categories?.[0]?.title || 'Article'}
              </span>
            </div>

            <h1 className="font-display font-semibold text-editorial-lg lg:text-editorial-xl text-aubergine-deep mb-12 leading-tight text-balance">
              {post.title}
            </h1>

            {/* Author Byline & Published Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-obsidian-text/70">
              <div className="flex items-center gap-3.5">
                {authorImgSrc && authorImgSrc !== "/images/placeholder.jpg" ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-ochre-brushed/20 shrink-0 shadow-sm">
                    <Image
                      src={authorImgSrc}
                      alt={authorName}
                      width={48}
                      height={48}
                      className="object-cover"
                      quality={90}
                      unoptimized
                      priority
                    />
                  </div>
                ) : null}
                <div className="text-left">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-aubergine-deep font-bold text-base leading-tight">
                      {authorName}
                    </span>
                    <div className="flex items-center gap-1.5 ml-1">
                      {authorLinkedIn && (
                        <a
                          href={authorLinkedIn}
                          target="_blank"
                          rel="author noopener noreferrer"
                          aria-label={`${authorName} on LinkedIn`}
                          title="LinkedIn Profile"
                          className="w-6 h-6 rounded-full bg-ochre-brushed/10 text-ochre-brushed hover:bg-ochre-brushed hover:text-white flex items-center justify-center transition-luxury-fast"
                        >
                          <LinkedInIcon className="w-3 h-3" />
                        </a>
                      )}
                      {authorInstagram && (
                        <a
                          href={authorInstagram}
                          target="_blank"
                          rel="author noopener noreferrer"
                          aria-label={`${authorName} on Instagram`}
                          title="Instagram Profile"
                          className="w-6 h-6 rounded-full bg-ochre-brushed/10 text-ochre-brushed hover:bg-ochre-brushed hover:text-white flex items-center justify-center transition-luxury-fast"
                        >
                          <InstagramIcon className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-obsidian-text/50 text-xs uppercase tracking-wider mt-0.5">
                    {authorRole}
                  </p>
                </div>
              </div>

              <div className="w-px h-10 bg-ochre-brushed/20 hidden sm:block" />

              <div className="text-left">
                <p className="text-aubergine-deep font-bold">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <p className="text-obsidian-text/50 text-xs uppercase tracking-wider">
                  {new Date(post.publishedAt).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          {post.mainImage && (
            <div className="relative w-full aspect-[21/10] rounded-[32px] overflow-hidden mb-16 lg:mb-32 group border border-hairline-light">
              <Image
                src={getImageUrl(post.mainImage)}
                alt={post.mainImage?.alt || post.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
                sizes="100vw"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
            <article className="lg:col-span-8 flex flex-col">
              <div className="prose prose-lg max-w-none">
                <PortableText value={post.body as PortableTextBlock[]} components={components} />
              </div>

              {/* Author Bio Box */}
              <div className="mt-16 p-8 lg:p-10 rounded-[32px] bg-aubergine-deep/5 border border-hairline-light flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-ivory-silk shadow-md bg-ivory-surface">
                  {authorImgSrc && authorImgSrc !== "/images/placeholder.jpg" ? (
                    <Image
                      src={authorImgSrc}
                      alt={authorName}
                      width={80}
                      height={80}
                      className="object-cover"
                      quality={90}
                      unoptimized
                    />
                  ) : null}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-aubergine-deep">
                        {authorName}
                      </h4>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ochre-brushed">
                        {authorRole}
                      </p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      {authorLinkedIn && (
                        <a
                          href={authorLinkedIn}
                          target="_blank"
                          rel="author noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-ochre-brushed/10 text-ochre-brushed hover:bg-ochre-brushed hover:text-white transition-luxury-fast"
                        >
                          <LinkedInIcon className="w-3 h-3" />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {authorInstagram && (
                        <a
                          href={authorInstagram}
                          target="_blank"
                          rel="author noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-ochre-brushed/10 text-ochre-brushed hover:bg-ochre-brushed hover:text-white transition-luxury-fast"
                        >
                          <InstagramIcon className="w-3 h-3" />
                          <span>Instagram</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-obsidian-text/70 leading-relaxed">
                    {authorBio}
                  </p>
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-hairline-light flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="flex flex-col gap-6">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-obsidian-text/50 flex items-center gap-2" />
                  <div className="flex flex-wrap gap-3">
                    {post.categories?.map((cat: any) => (
                      <span
                        key={cat._id || cat.slug?.current}
                        className="text-sm font-bold px-6 py-2 bg-aubergine-deep/5 text-aubergine-deep rounded-full hover:bg-aubergine-deep hover:text-ivory-silk transition-luxury-fast cursor-default"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-obsidian-text/50 text-right">
                    Share this story
                  </span>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-16">
              <div className="sticky top-40 space-y-16">
                {headings.length > 0 && (
                  <div className="p-6 rounded-xl bg-ivory-silk border border-hairline-light sovereign-shadow">
                    <h4 className="text-xs font-bold text-aubergine-deep uppercase tracking-[0.2em] mb-8 border-b border-hairline-light pb-4">
                      On this page
                    </h4>
                    <nav className="flex flex-col gap-5">
                      {headings.map((heading: any, i: number) => (
                        <a
                          key={i}
                          href={`#${heading.id}`}
                          className={`text-base transition-luxury-fast hover:translate-x-1 ${heading.level === 3
                            ? 'pl-6 text-obsidian-text/50 text-sm font-medium border-l border-hairline-light'
                            : 'text-aubergine-deep font-bold hover:text-ochre-brushed'
                            }`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Recent Posts */}
                <div className="space-y-8">
                  <h4 className="text-xs font-bold text-aubergine-deep uppercase tracking-[0.2em] mb-4">
                    Latest Insights
                  </h4>
                  <div className="space-y-6">
                    {recentPosts
                      .filter((p) => p._id !== post._id)
                      .slice(0, 3)
                      .map((rPost) => (
                        <Link
                          key={rPost._id}
                          href={`/blogs/${rPost.slug}`}
                          className="flex gap-5 group"
                        >
                          <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-md">
                            <Image
                              src={getImageUrl(rPost.mainImage)}
                              alt={rPost.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-110"
                              sizes="96px"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h5 className="text-base font-bold text-aubergine-deep line-clamp-2 leading-tight group-hover:text-ochre-brushed transition-luxury-fast mb-2">
                              {rPost.title}
                            </h5>
                            <span className="text-[10px] font-bold text-obsidian-text/40 uppercase tracking-widest">
                              {new Date(rPost.publishedAt).toLocaleDateString(
                                'en-US',
                                {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                }
                              )}
                            </span>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="p-8 bg-aubergine-deep rounded-[32px] text-ivory-silk shadow-xl flex flex-col gap-6 relative overflow-hidden">
                  <h4 className="text-2xl font-bold leading-tight relative z-10">
                    Stay updated
                  </h4>
                  <p className="text-ivory-surface/70 text-sm leading-relaxed relative z-10">
                    Get the latest stories and insights delivered directly to your inbox.
                  </p>
                  <div className="relative z-10">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-6 py-4 rounded-2xl bg-ivory-surface/10 border border-hairline-light focus:outline-none focus:bg-ivory-surface/20 transition-luxury-fast text-sm mb-4 placeholder:text-ivory-surface/40"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
            {recentPosts
              .filter((p) => p._id !== post._id)
              .slice(0, 3)
              .map((rPost) => {
                const description =
                  rPost.excerpt ||
                  rPost.body?.[0]?.children?.[0]?.text?.slice(0, 120) + '...'

                return (
                  <Link
                    key={rPost._id}
                    href={`/blogs/${rPost.slug}`}
                    className="group bg-ivory-silk border border-hairline-light overflow-hidden transition-luxury flex flex-col"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={getImageUrl(rPost.mainImage)}
                        alt={rPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="py-6 px-6 flex flex-col flex-1">
                      <span className="text-[12px] font-light uppercase tracking-[0.2em] text-ochre-brushed/60 mb-3">
                        {rPost.categories?.[0]?.title || 'Article'}
                      </span>

                      <h3 className="text-lg font-bold text-aubergine-deep mb-3 group-hover:text-ochre-brushed transition-luxury-fast line-clamp-2">
                        {rPost.title}
                      </h3>

                      <p className="text-sm text-obsidian-text/70 mb-6 line-clamp-3">
                        {description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {rPost.categories?.slice(0, 3).map((cat: any) => (
                          <span
                            key={cat._id}
                            className="text-xs font-normal px-3 py-1 bg-aubergine-deep/5 text-aubergine-deep rounded-full hover:bg-aubergine-deep hover:text-ivory-silk transition-luxury-fast"
                          >
                            #{cat.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </main>
    </article>
  )
}

export default BlogPostPage