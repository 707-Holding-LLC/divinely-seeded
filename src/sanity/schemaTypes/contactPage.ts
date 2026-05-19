import {defineArrayMember, defineField, defineType} from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Begin Your Wellness Journey',
    }),
    defineField({
      name: 'heroBody',
      title: 'Hero Body',
      type: 'text',
      rows: 4,
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
    }),

    defineField({
      name: 'helpSectionTitle',
      title: 'Help Section Title',
      type: 'string',
      initialValue: 'How can we help?',
    }),
    defineField({
      name: 'helpCards',
      title: 'Help Cards',
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
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
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
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'ctaLabel',
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'formTitle',
      title: 'Form Section Title',
      type: 'string',
      initialValue: 'Send us a message',
    }),
    defineField({
      name: 'formIntro',
      title: 'Form Intro',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'formEmailLabel',
      title: 'Form Email Label',
      type: 'string',
      initialValue: 'Email Address',
    }),
    defineField({
      name: 'formHelpLabel',
      title: 'Form Help Label',
      type: 'string',
      initialValue: 'How can we help?',
    }),
    defineField({
      name: 'formMessageLabel',
      title: 'Form Message Label',
      type: 'string',
      initialValue: 'Message',
    }),
    defineField({
      name: 'formSubmitLabel',
      title: 'Form Submit Button Label',
      type: 'string',
      initialValue: 'Send Message',
    }),
    defineField({
      name: 'formHelpOptions',
      title: 'Form Help Options',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: [
        'General Inquiry',
        'Coaching Inquiry',
        'Programs',
        'Workshops & Partnerships',
      ],
    }),
    defineField({
      name: 'formMessagePlaceholder',
      title: 'Form Message Placeholder',
      type: 'string',
      initialValue: 'Tell us about your journey...',
    }),

    defineField({
      name: 'officeImage',
      title: 'Info Section Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'officeImageAlt',
      title: 'Info Section Image Alt Text',
      type: 'string',
    }),

    defineField({
      name: 'infoTitle',
      title: 'Info Title',
      type: 'string',
      initialValue: 'Virtual Sessions',
    }),
    defineField({
      name: 'infoBody',
      title: 'Info Body',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'contactEyebrow',
      title: 'Contact Eyebrow',
      type: 'string',
      initialValue: 'Get in touch',
    }),
    defineField({
      name: 'contactButtonLabel',
      title: 'Contact Button Label',
      type: 'string',
      initialValue: 'Send Us an Email',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'socialEyebrow',
      title: 'Social Eyebrow',
      type: 'string',
      initialValue: 'Follow our growth',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page',
      }
    },
  },
})