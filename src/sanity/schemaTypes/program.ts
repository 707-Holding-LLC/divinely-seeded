import {defineArrayMember, defineField, defineType} from 'sanity'

export const programType = defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'eyebrow',
      title: 'Eyebrow / Label',
      type: 'string',
      description: 'Examples: Start Here, Signature Program, Premium Experience',
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Examples: Metabolic Wellness Discovery Session',
    }),

    defineField({
      name: 'investment',
      title: 'Investment',
      type: 'string',
      description: 'Examples: Starting at $497',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'includedTitle',
      title: 'Included Section Title',
      type: 'string',
      initialValue: "What's Included",
    }),

    defineField({
      name: 'includedItems',
      title: 'Included Items',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),

    defineField({
      name: 'bestForTitle',
      title: 'Best For Section Title',
      type: 'string',
      initialValue: 'Best For',
    }),

    defineField({
      name: 'bestForItems',
      title: 'Best For Items',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),

    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
    }),

    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
      description: 'Use internal path like /contact or external link like https://...',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Program',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),

    defineField({
      name: 'programImage',
      title: 'Program Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'programImage',
    },
  },
})