import {defineField, defineType} from 'sanity'

export const blogPostType = defineType({
  name: 'blogPost',
  title: 'Blog Posts',
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
      name: 'brand',
      title: 'Brand',
      type: 'string',
      initialValue: 'DS',
      readOnly: true,
      options: {
        list: [{title: 'Divinely Seeded', value: 'DS'}],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'contentPillar',
      title: 'Content Pillar',
      type: 'string',
      options: {
        list: [
          {
            title: 'Peptide-Informed Lifestyle',
            value: 'peptide-informed-lifestyle',
          },
          {
            title: 'Primary Food Passport',
            value: 'primary-food-passport',
          },
          {
            title: 'Metabolic Wellness',
            value: 'metabolic-wellness',
          },
          {
            title: 'Self-Advocacy & Provider Collaboration',
            value: 'self-advocacy-provider-collaboration',
          },
          {
            title: 'Faith + Intentional Living',
            value: 'faith-intentional-living',
          },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'featuredImageAlt',
      title: 'Featured Image Alt Text',
      type: 'string',
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Nnenna Animashaun',
    }),

    defineField({
      name: 'publishAt',
      title: 'Publish At',
      type: 'datetime',
      description: 'Scheduled or intended publish date.',
    }),

    defineField({
      name: 'status',
      title: 'Publishing Status',
      type: 'string',
      initialValue: 'draft',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'In Review', value: 'in-review'},
          {title: 'Approved', value: 'approved'},
          {title: 'Scheduled', value: 'scheduled'},
          {title: 'Published', value: 'published'},
          {title: 'Archived', value: 'archived'},
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'approvalStatus',
      title: 'Approval Status',
      type: 'string',
      initialValue: 'not-submitted',
      options: {
        list: [
          {title: 'Not Submitted', value: 'not-submitted'},
          {title: 'Pending Approval', value: 'pending-approval'},
          {title: 'Approved', value: 'approved'},
          {title: 'Needs Revision', value: 'needs-revision'},
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'complianceStatus',
      title: 'Compliance Status',
      type: 'string',
      initialValue: 'not-checked',
      options: {
        list: [
          {title: 'Not Checked', value: 'not-checked'},
          {title: 'Passed', value: 'passed'},
          {title: 'Flagged', value: 'flagged'},
          {title: 'Needs Human Review', value: 'needs-human-review'},
        ],
        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'sourceTranscriptLink',
      title: 'Source Transcript Link',
      type: 'url',
      description: 'Google Docs transcript link from the content engine.',
    }),

    defineField({
      name: 'sourceFileLink',
      title: 'Source File Link',
      type: 'url',
      description: 'Original audio/video source file link, if available.',
    }),

    defineField({
      name: 'seoKeyword',
      title: 'SEO Keyword',
      type: 'string',
    }),

    defineField({
      name: 'platformRepurposeNotes',
      title: 'Platform Repurpose Notes',
      type: 'text',
      rows: 4,
      description: 'Notes for turning this blog into LinkedIn, Instagram, Facebook, email, or short video content.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      pillar: 'contentPillar',
      status: 'status',
      media: 'featuredImage',
    },
    prepare({title, pillar, status, media}) {
      return {
        title,
        subtitle: `${pillar || 'No pillar'} · ${status || 'draft'}`,
        media,
      }
    },
  },
})