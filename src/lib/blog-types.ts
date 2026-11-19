export interface PortableTextBlock {
  _key: string
  _type: 'block'
  style: string
  children: {
    _key: string
    _type: string
    text: string
    marks?: string[]
  }[]
  markDefs?: {
    _key: string
    _type: string
    [key: string]: unknown
  }[]
}

export interface BlogPostAuthor {
  name: string
  role?: string
  linkedIn?: string
  instagram?: string
  bio?: PortableTextBlock[]
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      url?: string
    }
    alt?: string
    url?: string
  }
}

export interface BlogPostCategory {
  _id?: string
  title: string
  slug: {
    current: string
  }
}

export interface BlogPostMainImage {
  asset?: {
    _ref: string
    _type: 'reference'
    url?: string
  }
  alt?: string
  url?: string
}

export interface SourceLink {
  title: string
  url: string
}

export interface FAQ {
  question: string
  answer: PortableTextBlock[]
}

export interface OriginalDataTable {
  title?: string
  columns: string[]
  rows: {
    cells: string[]
  }[]
}

export interface BlogPost {
  _id?: string
  id: string
  slug: string
  title: string
  publishedAt: string
  updatedAt?: string
  excerpt?: string
  body?: PortableTextBlock[]
  extractableSentences?: string[]
  sourceLinks?: SourceLink[]
  faqs?: FAQ[]
  originalDataTable?: OriginalDataTable
  mainImage?: BlogPostMainImage
  author?: BlogPostAuthor
  categories?: BlogPostCategory[]
}
