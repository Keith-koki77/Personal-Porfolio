'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { table } from '@sanity/table'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: "1daerlrn",
  dataset: "production",
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    visionTool({ defaultApiVersion: '2026-03-01' }),
    table(),
  ],
})