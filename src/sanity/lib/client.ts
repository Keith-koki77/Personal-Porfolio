import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

// Public client for published content (no token needed for public dataset)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for public content
})

// Authenticated client for draft/private content
export const clientWithToken = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
})
