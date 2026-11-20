
import { client } from '@/sanity/lib/client'
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from '@sanity/image-url'

export const sanityClient = client

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
})

export const urlFor = (source: SanityImageSource) =>
  imageBuilder.image(source)

/**
 * Fetch all published blog post slugs from Sanity.
 *
 * GROQ returns an array of strings for:
 * *[_type == "post"].slug.current
 *
 * Do not treat these strings as objects containing a slug property.
 */
export async function getBlogPostSlugs(): Promise<string[]> {
  const slugs = await client.fetch<string[]>(
    `*[_type == "post" && defined(slug.current)].slug.current`
  )

  if (!Array.isArray(slugs)) {
    return []
  }

  return slugs.filter(
    (slug): slug is string =>
      typeof slug === 'string' && slug.trim().length > 0
  )
}

/**
 * Fetch a single blog post using its slug.
 */
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
