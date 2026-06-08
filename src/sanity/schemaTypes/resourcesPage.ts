import {defineArrayMember, defineField, defineType} from 'sanity'

export const resourcesPageType = defineType({
  name: 'resourcesPage',
  title: 'Resources Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'Curation for the Soul',
    }),
    defineField({
      name: 'heroTitleLineOne',
      title: 'Hero Title Line One',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Wellness',
    }),
    defineField({
      name: 'heroTitleLineTwo',
      title: 'Hero Title Line Two',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Resources',
    }),
    defineField({
      name: 'heroBody',
      title: 'Hero Body',
      type: 'text',
      rows: 4,
      initialValue:
        'Thoughtfully designed tools, guides, and featured readings to help you cultivate intentionality, nourish your body, and live from the inside out.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Hero Image Alt Text',
      type: 'string',
      initialValue: 'Featured wellness resource',
    }),

    defineField({
      name: 'downloadsSectionEyebrow',
      title: 'Downloads Section Eyebrow',
      type: 'string',
      initialValue: 'Digital Downloads',
    }),
    defineField({
      name: 'downloadsSectionTitle',
      title: 'Downloads Section Title',
      type: 'string',
      initialValue: 'Free Wellness Guides',
    }),
    defineField({
      name: 'downloadsSectionIntro',
      title: 'Downloads Section Intro',
      type: 'text',
      rows: 3,
      initialValue:
        'Two resources created to support your journey — download, read, and return to them whenever you need a reset.',
    }),
    defineField({
      name: 'downloads',
      title: 'Download Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 5,
            }),
            defineField({
              name: 'tag',
              title: 'Tag',
              type: 'string',
            }),
            defineField({
              name: 'pages',
              title: 'Pages Label',
              type: 'string',
              description: 'Example: 54 pages',
            }),
            defineField({
              name: 'href',
              title: 'Download / External Link',
              type: 'string',
              description: 'PDF path, hosted file link, or checkout link',
            }),
            defineField({
              name: 'ctaLabel',
              title: 'CTA Label',
              type: 'string',
              initialValue: 'Download Free PDF',
            }),
            defineField({
              name: 'cover',
              title: 'Cover Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'coverAlt',
              title: 'Cover Image Alt Text',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'tag',
              media: 'cover',
            },
          },
        }),
      ],
    }),
    
    
    defineField({
      name: 'articlesCta',
      title: 'Articles CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          initialValue: 'Wellness Articles',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Read grounded reflections for intentional wellness.',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 4,
          initialValue:
            'Explore Divinely Seeded articles on wellness, faith, provider-informed conversations, and everyday practices for living with more clarity and intention.',
        }),
        defineField({
          name: 'ctaLabel',
          title: 'CTA Label',
          type: 'string',
          initialValue: 'Read Wellness Articles',
        }),
        defineField({
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string',
          initialValue: '/resources/articles',
        }),
      ],
    }),

    defineField({
      name: 'featuredArticleSectionEyebrow',
      title: 'Featured Article Section Eyebrow',
      type: 'string',
      initialValue: 'Featured In',
    }),
    defineField({
      name: 'featuredArticleSectionTitle',
      title: 'Featured Article Section Title',
      type: 'string',
      initialValue: 'As Seen On',
    }),
    defineField({
      name: 'featuredArticle',
      title: 'Featured Article',
      type: 'object',
      fields: [
        defineField({
          name: 'url',
          title: 'Article URL',
          type: 'url',
        }),
        defineField({
          name: 'sourceInitial',
          title: 'Source Initial',
          type: 'string',
          initialValue: 'K',
          description: 'Example: K',
        }),
        defineField({
          name: 'sourceName',
          title: 'Source Name',
          type: 'string',
          initialValue: 'KOR Shots Journal',
        }),
        defineField({
          name: 'publishDate',
          title: 'Publish Date Label',
          type: 'string',
          initialValue: 'February 8, 2021',
        }),
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'Feature',
        }),
        defineField({
          name: 'title',
          title: 'Article Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue:
            '10 Simple Tricks for Boosting Energy While Intermittent Fasting',
        }),
        defineField({
          name: 'description',
          title: 'Article Description',
          type: 'text',
          rows: 5,
        }),
        defineField({
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 5,
        }),
        defineField({
          name: 'quoteAttribution',
          title: 'Quote Attribution',
          type: 'string',
          initialValue: '— Nnenna Animashaun, Health Coach · Divinely Seeded',
        }),
        defineField({
          name: 'ctaLabel',
          title: 'CTA Label',
          type: 'string',
          initialValue: 'Read the Full Article',
        }),
        defineField({
          name: 'decorativeLabel',
          title: 'Decorative Right Panel Label',
          type: 'string',
          initialValue: 'KOR',
        }),
        defineField({
          name: 'decorativeSubtext',
          title: 'Decorative Right Panel Subtext',
          type: 'string',
          initialValue: 'Organic Wellness Shots',
        }),
        defineField({
          name: 'decorativeDescription',
          title: 'Decorative Right Panel Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Cold-pressed in small batches from locally sourced produce',
        }),
      ],
    }),

    defineField({
      name: 'coursesPromo',
      title: 'Online Courses Promo Section',
      type: 'object',
      fields: [
        defineField({
          name: 'badge',
          title: 'Badge',
          type: 'string',
          initialValue: 'Coming Soon',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Self-Paced Wellness Courses',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 5,
          initialValue:
            'Nnenna is currently preparing a collection of thoughtful digital wellness courses designed to help women build healthier rhythms, restore balance, and deepen intentional living.',
        }),
        defineField({
          name: 'subtext',
          title: 'Subtext',
          type: 'text',
          rows: 3,
          initialValue:
            'For now, explore the free guides and featured resources already available below.',
        }),
        defineField({
          name: 'primaryCtaLabel',
          title: 'Primary CTA Label',
          type: 'string',
          initialValue: 'Explore Programs',
        }),
        defineField({
          name: 'primaryCtaLink',
          title: 'Primary CTA Link',
          type: 'string',
          initialValue: '/programs',
        }),
        defineField({
          name: 'secondaryCtaLabel',
          title: 'Secondary CTA Label',
          type: 'string',
          initialValue: 'Ask About Courses',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA Link',
          type: 'string',
          initialValue: '/contact',
        }),
        defineField({
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'imageAlt',
          title: 'Section Image Alt Text',
          type: 'string',
          initialValue: 'Self-paced wellness courses coming soon',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Resources Page',
      }
    },
  },
})