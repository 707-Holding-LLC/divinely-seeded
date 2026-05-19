import {defineArrayMember, defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'Holistic Wellness Coaching',
    }),
    defineField({
      name: 'headlineLineOne',
      title: 'Headline Line One',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Live with Balance,',
    }),
    defineField({
      name: 'headlineLineTwo',
      title: 'Headline Line Two',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Purpose, and',
    }),
    defineField({
      name: 'headlineAccent',
      title: 'Headline Accent',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Radiant Health',
    }),
    defineField({
      name: 'subheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
      initialValue:
        "Nurturing women's wellness through mindful practices and personalized guidance for a harmonious life.",
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
      initialValue: 'Founder of Divinely Seeded',
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Primary CTA Label',
      type: 'string',
      initialValue: 'Book a Session',
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary CTA Link',
      type: 'string',
      description: 'Can be external like Calendly or internal like /contact',
      initialValue: 'https://calendly.com/divinelyseeded',
    }),
    defineField({
      name: 'secondaryCtaLabel',
      title: 'Secondary CTA Label',
      type: 'string',
      initialValue: 'Explore Programs',
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
      initialValue: '/programs',
    }),

    defineField({
      name: 'missionTitle',
      title: 'Mission Section Title',
      type: 'string',
      initialValue: 'Our Mission',
    }),
    defineField({
      name: 'missionQuote',
      title: 'Mission Quote',
      type: 'text',
      rows: 3,
      initialValue:
        'Helping women achieve holistic wellness through personalized guidance and mindful practices.',
    }),
    defineField({
      name: 'missionBody',
      title: 'Mission Section Body',
      type: 'array',
      of: [{type: 'text'}],
      initialValue: [
        'We believe that every woman carries a seed of divine potential for health and happiness. Our coaching bridges the gap between where you are and where you are meant to be, focusing on the integration of mind, body, and spirit.',
      ],
    }),
    defineField({
      name: 'missionImage',
      title: 'Mission Section Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'missionImageAlt',
      title: 'Mission Image Alt Text',
      type: 'string',
      initialValue: 'Our mission visual',
    }),
    defineField({
      name: 'missionPillars',
      title: 'Mission Pillars',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'pillar',
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
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        }),
      ],
      initialValue: [
        {
          title: 'Balance',
          description: 'Finding equilibrium in every day.',
        },
        {
          title: 'Purpose',
          description: 'Aligning with your true calling.',
        },
        {
          title: 'Radiance',
          description: 'Nurturing your natural glow.',
        },
      ],
    }),

    defineField({
      name: 'founderSectionEyebrow',
      title: 'Founder Section Eyebrow',
      type: 'string',
      initialValue: 'Founder Spotlight',
    }),
    defineField({
      name: 'founderSectionTitle',
      title: 'Founder Section Title',
      type: 'string',
      initialValue: 'Meet Nnenna',
    }),
    defineField({
      name: 'founderSectionBody',
      title: 'Founder Section Body',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'founderImage',
      title: 'Founder Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'founderImageAlt',
      title: 'Founder Image Alt Text',
      type: 'string',
      initialValue: 'Nnenna portrait',
    }),
    defineField({
      name: 'founderCtaLabel',
      title: 'Founder CTA Label',
      type: 'string',
      initialValue: 'Meet the Founder',
    }),
    defineField({
      name: 'founderCtaLink',
      title: 'Founder CTA Link',
      type: 'string',
      initialValue: '/about',
    }),

    defineField({
      name: 'founderStripName',
      title: 'Founder Strip Name',
      type: 'string',
      initialValue: 'Meet Nnenna',
    }),
    defineField({
      name: 'founderStripRole',
      title: 'Founder Strip Role',
      type: 'string',
      initialValue: 'Founder & Holistic Wellness Coach',
    }),
    defineField({
      name: 'founderStripImage',
      title: 'Founder Strip Avatar',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'founderStripImageAlt',
      title: 'Founder Strip Avatar Alt Text',
      type: 'string',
      initialValue: 'Nnenna headshot',
    }),
    defineField({
      name: 'founderStripCtaLabel',
      title: 'Founder Strip CTA Label',
      type: 'string',
      initialValue: 'Meet the Founder',
    }),
    defineField({
      name: 'founderStripCtaLink',
      title: 'Founder Strip CTA Link',
      type: 'string',
      initialValue: '/about',
    }),

    defineField({
      name: 'featuredProgramsTitle',
      title: 'Featured Programs Title',
      type: 'string',
      initialValue: 'Featured Programs',
    }),
    defineField({
      name: 'featuredProgramsIntro',
      title: 'Featured Programs Intro',
      type: 'text',
      rows: 3,
      initialValue:
        'Tailored coaching experiences designed to support your journey towards a more vibrant you.',
    }),
    defineField({
      name: 'featuredPrograms',
      title: 'Featured Programs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'featuredProgramItem',
          fields: [
            defineField({
              name: 'program',
              title: 'Program',
              type: 'reference',
              to: [{type: 'program'}],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'cardTitleOverride',
              title: 'Card Title Override',
              type: 'string',
              description: 'Optional. Use only if homepage title should differ from the program title.',
            }),
            defineField({
              name: 'cardDescriptionOverride',
              title: 'Card Description Override',
              type: 'text',
              rows: 3,
              description: 'Optional. Use only if homepage description should differ from the main program description.',
            }),
            defineField({
              name: 'cardImage',
              title: 'Homepage Card Image',
              type: 'image',
              options: {hotspot: true},
              description: 'Optional homepage-specific image for this featured card.',
            }),
            defineField({
              name: 'cardImageAlt',
              title: 'Homepage Card Image Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
              description: 'Example: Start Here, Most Popular',
            }),
            defineField({
              name: 'ctaLabel',
              title: 'CTA Label',
              type: 'string',
              initialValue: 'Learn More',
            }),
            defineField({
              name: 'ctaLink',
              title: 'CTA Link',
              type: 'string',
              initialValue: '/programs',
            }),
          ],
          preview: {
            select: {
              title: 'cardTitleOverride',
              programTitle: 'program.title',
              subtitle: 'badge',
              media: 'cardImage',
            },
            prepare({title, programTitle, subtitle, media}) {
              return {
                title: title || programTitle || 'Featured Program',
                subtitle: subtitle || 'Homepage featured program',
                media,
              }
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'testimonialsTitle',
      title: 'Testimonials Section Title',
      type: 'string',
      initialValue: 'Client Stories',
    }),
    defineField({
      name: 'testimonialsIntro',
      title: 'Testimonials Intro',
      type: 'text',
      rows: 3,
      initialValue:
        'Real journeys from women who have rediscovered their vitality and peace through our programs.',
    }),
    defineField({
      name: 'homeTestimonials',
      title: 'Homepage Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'testimonial'}],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
})