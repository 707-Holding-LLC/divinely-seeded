import {defineArrayMember, defineField, defineType} from 'sanity'

export const programsPageType = defineType({
  name: 'programsPage',
  title: 'Programs Page',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'Wellness Coaching Packages',
    }),
    defineField({
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Support for Sustainable Lifestyle Transformation',
    }),
    defineField({
      name: 'intro',
      title: 'Founder Credential Line',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
      initialValue:
        "Founded by Nnenna Animashaun - Triple-certified through the Institute for Integrative Nutrition (Health Coach, Gut Health, Women's Hormone Health) with 18+ years of federal health program leadership.",
    }),

    defineField({
      name: 'introHighlight',
      title: 'Intro Highlight Box',
      type: 'text',
      rows: 6,
      description: 'Highlighted paragraph shown directly under the hero intro.',
      initialValue:
        'At Divinely Seeded, our coaching is designed for women who want to feel informed, supported, and grounded while navigating metabolic health, peptide-informed wellness, body composition, energy, inflammation, and sustainable lifestyle change. We provide lifestyle coaching, education, accountability, and wellness navigation to support clients who are exploring or currently using provider-prescribed peptide therapy under the care of a licensed medical professional.',
    }),

    defineField({
      name: 'packagesTitle',
      title: 'Packages Section Title',
      type: 'string',
      initialValue: 'Wellness Coaching, Rooted in Lifestyle Support',
    }),
    defineField({
      name: 'packagesIntro',
      title: 'Packages Section Intro',
      type: 'text',
      rows: 4,
      initialValue:
        'Your body is not a project to fix - it is a system to nourish, understand, and support. Our packages are designed to help you feel more confident, prepared, and consistent as you explore or navigate provider-led metabolic, regenerative, or peptide-based wellness care.',
    }),

    defineField({
      name: 'programCards',
      title: 'Program Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'program'}],
        }),
      ],
    }),

    defineField({
      name: 'clientJourneyEyebrow',
      title: 'Client Journey Eyebrow',
      type: 'string',
      initialValue: 'Your Path to Wellness',
    }),
    defineField({
      name: 'journeyTitle',
      title: 'Client Journey Title',
      type: 'string',
      initialValue: 'How the Client Journey Works',
    }),
    defineField({
      name: 'journeyIntro',
      title: 'Client Journey Intro',
      type: 'text',
      rows: 3,
      initialValue:
        'From your first conversation to long-term maintenance - here is what to expect when you work with Divinely Seeded.',
    }),
    defineField({
      name: 'journeySteps',
      title: 'Client Journey Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'stepLabel',
              title: 'Step Label',
              type: 'string',
            }),
            defineField({
              name: 'stepTitle',
              title: 'Step Title',
              type: 'string',
            }),
            defineField({
              name: 'stepDescription',
              title: 'Step Description',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: 'stepTitle',
              subtitle: 'stepLabel',
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'scopeEyebrow',
      title: 'Scope Section Eyebrow',
      type: 'string',
      initialValue: 'Scope of Practice',
    }),
    defineField({
      name: 'scopeTitle',
      title: 'Scope Section Title',
      type: 'string',
      initialValue: 'What We Support',
    }),
    defineField({
      name: 'scopeIntro',
      title: 'Scope Intro',
      type: 'text',
      rows: 4,
      initialValue:
        'Divinely Seeded provides health and wellness coaching, education, and lifestyle support. We do not diagnose, treat, prescribe, inject, dispense, or manage medications. Coaching services are not a substitute for medical care.',
    }),
    defineField({
      name: 'scopeItems',
      title: 'Scope Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'medicalDisclaimer',
      title: 'Medical Disclaimer',
      type: 'text',
      rows: 4,
      initialValue:
        'Divinely Seeded is a wellness coaching practice. Nothing shared during coaching constitutes medical advice, diagnosis, or treatment. Always consult your licensed medical provider before making changes to your health care routine.',
    }),

    defineField({
      name: 'voicesTitle',
      title: 'Voices Section Title',
      type: 'string',
      initialValue: 'Stories of Transformation',
    }),
    defineField({
      name: 'voicesTestimonials',
      title: 'Voices Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'testimonial'}],
        }),
      ],
    }),

    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      initialValue: 'Ready to plant the seeds of your transformation?',
    }),
    defineField({
      name: 'ctaBody',
      title: 'CTA Body',
      type: 'text',
      rows: 3,
      initialValue:
        'Schedule a discovery call to find the program that resonates with your current season of life.',
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Primary CTA Label',
      type: 'string',
      initialValue: 'Book a Discovery Call',
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary CTA Link',
      type: 'string',
      initialValue: 'https://calendly.com/divinelyseeded',
    }),
    defineField({
      name: 'secondaryCtaLabel',
      title: 'Secondary CTA Label',
      type: 'string',
      initialValue: 'Download Resources',
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
      initialValue: '/resources',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Programs Page',
      }
    },
  },
})