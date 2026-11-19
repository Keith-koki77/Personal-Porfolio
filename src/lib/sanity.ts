import { client } from '@/sanity/lib/client'
import imageUrlBuilder, { SanityImageSource } from '@sanity/image-url'

export const sanityClient = client

const imageBuilder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
})

export const urlFor = (source: SanityImageSource) => imageBuilder.image(source)

export async function getBlogPostSlugs(): Promise<string[]> {
  try {
    const slugs = await client.fetch<{ slug: string }[]>(
      `*[_type == "post"].slug.current`
    )
    if (!Array.isArray(slugs)) return []
    return slugs
      .map((s) => s?.slug)
      .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0)
  } catch (error) {
    console.warn('getBlogPostSlugs failed:', error)
    return []
  }
}

export async function getBlogPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      updatedAt,
      excerpt,
      body,
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
        _type,
        asset,
        alt
      },
      author {
        name,
        linkedIn,
        instagram,
        bio,
        image {
          asset
        }
      },
      categories[] {
        title,
        slug {
          current
        }
      }
    }`,
    { slug }
  )
}
