import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
      title: 'Last Updated',
      description: 'When this post was last substantively updated (for the dateline).',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'Short summary shown on index pages and meta descriptions.',
      rows: 4,
    }),
    defineField({
      name: 'extractableSentences',
      title: 'Extractable Sentences',
      type: 'array',
      description: 'Key sentences written to stand alone for AI answer extraction and pull quotes.',
      of: [
        defineArrayMember({
          type: 'string',
          title: 'Sentence',
        }),
      ],
    }),
    defineField({
      name: 'sourceLinks',
      title: 'Source Links',
      type: 'array',
      description: 'Primary sources cited inline (not secondary write-ups).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'sourceLink',
          fields: [
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ Block',
      type: 'array',
      description: 'Real reader questions with direct answers, marked up as Q&A for AI extraction.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faq',
          fields: [
            {name: 'question', title: 'Question', type: 'string'},
            {name: 'answer', title: 'Answer', type: 'blockContent'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'originalDataTable',
      title: 'Original Data Table',
      type: 'object',
      description: 'A comparison table of original data (price vs performance, etc.) that AI can lift into answers.',
      fields: [
        {name: 'title', title: 'Table Title', type: 'string'},
        {
          name: 'columns',
          title: 'Column Headers',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        },
        {
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'tableRow',
              fields: [
                {
                  name: 'cells',
                  title: 'Cells',
                  type: 'array',
                  of: [defineArrayMember({type: 'string'})],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
