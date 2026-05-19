import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // Values / hero section
    defineField({
      name: 'valuesEyebrow',
      title: 'Values Section Eyebrow',
      type: 'string',
      initialValue: 'Mission, Vision & Values',
    }),
    defineField({
      name: 'valuesTitleLineOne',
      title: 'Values Title Line One',
      type: 'string',
      initialValue: 'Rooted in Wellness.',
    }),
    defineField({
      name: 'valuesTitleLineTwo',
      title: 'Values Title Line Two',
      type: 'string',
      initialValue: 'Guided by Purpose.',
    }),
    defineField({
      name: 'valuesBodyOne',
      title: 'Values Body Paragraph One',
      type: 'text',
      rows: 4,
      initialValue:
        'Divinely Seeded exists to inspire and support women in nurturing their divine potential through holistic wellness, self-awareness, and lifestyle transformation.',
    }),
    defineField({
      name: 'valuesBodyTwo',
      title: 'Values Body Paragraph Two',
      type: 'text',
      rows: 4,
      initialValue:
        'Our vision is radiant health, emotional balance, and a deeper connection to purpose — rooted in divine alignment.',
    }),
    defineField({
      name: 'valuesImage',
      title: 'Values Section Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'valuesImageAlt',
      title: 'Values Section Image Alt Text',
      type: 'string',
      initialValue: 'Divinely Seeded mission and values',
    }),
    defineField({
      name: 'values',
      title: 'Values Cards',
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
          title: 'Integrity',
          description:
            'Guided by authenticity, compassion, and care in every client journey.',
        },
        {
          title: 'Balance',
          description:
            'Creating harmony between body, mind, spirit, and daily life.',
        },
        {
          title: 'Growth',
          description:
            'Encouraging sustainable transformation through steady self-evolution.',
        },
        {
          title: 'Divine Alignment',
          description:
            'Honoring the connection between wellness, purpose, and inner peace.',
        },
      ],
    }),

    // Credentials section
    defineField({
      name: 'credentialsTitle',
      title: 'Credentials Section Title',
      type: 'string',
      initialValue: 'A Holistic Approach, Grounded in Training',
    }),
    defineField({
      name: 'credentialsIntro',
      title: 'Credentials Intro',
      type: 'text',
      rows: 5,
      initialValue:
        'Divinely Seeded blends evidence-based wellness coaching with mindfulness, spiritual reflection, and practical lifestyle transformation. The work is designed to support sustainable change, not temporary fixes.',
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials List',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      initialValue: [
        'Certified Integrative Nutrition Health Coach',
        'Integrative Nutrition Gut Health Certification',
        'Women’s Hormone Health Certification',
        'Background in Behavioral Health, Mind-Body Medicine, and Wellness Education',
      ],
    }),
    defineField({
      name: 'methodEyebrow',
      title: 'Method Card Eyebrow',
      type: 'string',
      initialValue: 'Our Method',
    }),
    defineField({
      name: 'methodTitle',
      title: 'Method Card Title',
      type: 'string',
      initialValue: 'How the work unfolds',
    }),
    defineField({
      name: 'methodSteps',
      title: 'Method Steps',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      initialValue: [
        'Listen deeply',
        'Assess holistically',
        'Create a realistic plan',
        'Support lasting change',
      ],
    }),

    // Founder intro section
    defineField({
      name: 'founderEyebrow',
      title: 'Founder Section Eyebrow',
      type: 'string',
      initialValue: 'Meet the Founder',
    }),
    defineField({
      name: 'founderTitleLineOne',
      title: 'Founder Title Line One',
      type: 'string',
      initialValue: 'Nnenna',
    }),
    defineField({
      name: 'founderTitleLineTwo',
      title: 'Founder Title Line Two',
      type: 'string',
      initialValue: 'Animashaun',
    }),
    defineField({
      name: 'founderSubtitle',
      title: 'Founder Subtitle',
      type: 'string',
      initialValue: 'Founder · Certified Integrative Health & Wellness Coach',
    }),
    defineField({
      name: 'founderBody',
      title: 'Founder Intro Body',
      type: 'text',
      rows: 5,
      initialValue:
        'Nnenna’s work is rooted in lived experience, healing, and service. Through Divinely Seeded, she helps women restore energy, create healthier rhythms, and reconnect with purpose through holistic support that honors mind, body, and spirit.',
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
      initialValue: 'Nnenna Animashaun',
    }),

    // Founder story section
    defineField({
      name: 'storyTitle',
      title: 'Founder Story Title',
      type: 'string',
      initialValue: 'Why Divinely Seeded Was Created',
    }),
    defineField({
      name: 'storyQuote',
      title: 'Founder Story Quote',
      type: 'text',
      rows: 3,
      initialValue: 'Healing became personal before it ever became professional.',
    }),
    defineField({
      name: 'storyParagraphOne',
      title: 'Story Paragraph One',
      type: 'text',
      rows: 5,
      initialValue:
        'Divinely Seeded was born from necessity. When conventional medical solutions did not bring the answers she needed, Nnenna began searching for natural ways to heal her body and restore balance in her life.',
    }),
    defineField({
      name: 'storyParagraphTwo',
      title: 'Story Paragraph Two',
      type: 'text',
      rows: 6,
      initialValue:
        'That personal journey eventually led her to formal training in integrative wellness and to a calling much larger than herself. She also grew up watching her parents work tirelessly to build their businesses, often with limited resources. A foundation that shaped her lifelong commitment to resilience, opportunity, and empowerment.',
    }),
    defineField({
      name: 'storyParagraphThree',
      title: 'Story Paragraph Three',
      type: 'text',
      rows: 5,
      initialValue:
        'Today, that same conviction lives at the heart of Divinely Seeded: helping women build healthier, more aligned lives with the right tools, support, and knowledge.',
    }),

    // Who we serve
    defineField({
      name: 'whoWeServeTitle',
      title: 'Who We Serve Title',
      type: 'string',
      initialValue: 'Who We Serve',
    }),
    defineField({
      name: 'whoWeServeIntro',
      title: 'Who We Serve Intro',
      type: 'text',
      rows: 4,
      initialValue:
        'Divinely Seeded is designed for women who want a more sustainable, compassionate, and whole-person approach to wellness.',
    }),
    defineField({
      name: 'whoWeServeItems',
      title: 'Who We Serve Items',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      initialValue: [
        'Women seeking holistic healing',
        'Women navigating stress and burnout',
        'Women pursuing emotional balance and sustainable wellness',
        'Women managing demanding lifestyles who want support that fits real life',
      ],
    }),

    // Differentiators
    defineField({
      name: 'differentiatorsTitle',
      title: 'Differentiators Title',
      type: 'string',
      initialValue: 'What Makes Divinely Seeded Different',
    }),
    defineField({
      name: 'differentiatorsIntro',
      title: 'Differentiators Intro',
      type: 'text',
      rows: 4,
      initialValue:
        'Our work is designed to be deeply human, spiritually grounded, and practical enough to support real, sustainable transformation.',
    }),
    defineField({
      name: 'differentiators',
      title: 'Differentiators',
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
          title: 'Holistic and spiritually grounded',
          description:
            'We integrate wellness coaching with mindfulness and divine alignment.',
        },
        {
          title: 'Personalized support',
          description: 'Each client journey is tailored, not templated.',
        },
        {
          title: 'Sustainable lifestyle change',
          description: 'We focus on long-term habits, not temporary fixes.',
        },
        {
          title: 'Compassionate and measurable',
          description:
            'Growth is supported through reflection, self-assessment, and real life wellness shifts.',
        },
      ],
    }),

    // Leadership section
    defineField({
      name: 'leadershipEyebrow',
      title: 'Leadership Section Eyebrow',
      type: 'string',
      initialValue: 'Leadership with Depth',
    }),
    defineField({
      name: 'leadershipTitle',
      title: 'Leadership Section Title',
      type: 'string',
      initialValue: 'Built with compassion and discipline',
    }),
    defineField({
      name: 'leadershipBody',
      title: 'Leadership Section Body',
      type: 'text',
      rows: 6,
      initialValue:
        'Nnenna’s work extends beyond coaching alone. She also leads other mission-driven ventures and brings a broader background spanning wellness, healthcare, entrepreneurship, and community-centered leadership. That multidisciplinary perspective strengthens the foundation of Divinely Seeded and reinforces the care, discipline, and integrity behind the brand.',
    }),

    // CTA section
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      initialValue: 'Start your wellness journey with support that sees the whole you',
    }),
    defineField({
      name: 'ctaBody',
      title: 'CTA Body',
      type: 'text',
      rows: 4,
      initialValue:
        'Whether you’re ready for coaching, exploring programs, or simply looking for a more aligned path forward, Divinely Seeded is here to support your next step.',
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
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page',
      }
    },
  },
})