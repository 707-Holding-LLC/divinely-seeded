import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Divinely Seeded',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      initialValue:
        'Holistic wellness coaching for women seeking balance, purpose, and radiant health.',
    }),

    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo Alt Text',
      type: 'string',
      initialValue: 'Divinely Seeded logo',
    }),

    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'info@divinelyseeded.com',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),

    defineField({
      name: 'calendlyUrl',
      title: 'Calendly URL',
      type: 'url',
      initialValue: 'https://calendly.com/divinelyseeded',
    }),

    defineField({
      name: 'headerCtaLabel',
      title: 'Header CTA Label',
      type: 'string',
      initialValue: 'Book Now',
    }),
    defineField({
      name: 'headerCtaLink',
      title: 'Header CTA Link',
      type: 'string',
      description: 'Can be internal like /contact or external like Calendly',
      initialValue: 'https://calendly.com/divinelyseeded',
    }),

    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
    }),

    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 3,
      initialValue:
        'Your partner in holistic wellness. Empowering women to live balanced, purposeful, and radiant lives.',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2026 Divinely Seeded Wellness. All rights reserved.',
    }),

    defineField({
      name: 'privacyPolicyLink',
      title: 'Privacy Policy Link',
      type: 'string',
      initialValue: '/privacy-policy',
    }),
    defineField({
      name: 'termsOfServiceLink',
      title: 'Terms of Service Link',
      type: 'string',
      initialValue: '/terms-of-service',
    }),

    defineField({
      name: 'defaultOgImage',
      title: 'Default Social Share Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'defaultOgImageAlt',
      title: 'Default Social Share Image Alt Text',
      type: 'string',
      initialValue: 'Divinely Seeded social share image',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})