import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteTitle,
    siteDescription,
    logo,
    logoAlt,
    contactEmail,
    phone,
    calendlyUrl,
    headerCtaLabel,
    headerCtaLink,
    instagramUrl,
    facebookUrl,
    youtubeUrl,
    footerText,
    copyrightText,
    privacyPolicyLink,
    termsOfServiceLink,
    defaultOgImage,
    defaultOgImageAlt
  }
`;

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    eyebrow,
    headlineLineOne,
    headlineLineTwo,
    headlineAccent,
    subheadline,
    heroImage,
    heroImageAlt,
    primaryCtaLabel,
    primaryCtaLink,
    secondaryCtaLabel,
    secondaryCtaLink,

    missionTitle,
    missionQuote,
    missionBody,
    missionImage,
    missionImageAlt,
    missionPillars[]{
      title,
      description
    },

    founderSectionEyebrow,
    founderSectionTitle,
    founderSectionBody,
    founderImage,
    founderImageAlt,
    founderCtaLabel,
    founderCtaLink,

    founderStripName,
    founderStripRole,
    founderStripImage,
    founderStripImageAlt,
    founderStripCtaLabel,
    founderStripCtaLink,

    featuredProgramsTitle,
    featuredProgramsIntro,
    featuredPrograms[]{
      cardTitleOverride,
      cardDescriptionOverride,
      cardImage,
      cardImageAlt,
      badge,
      ctaLabel,
      ctaLink,
      program->{
        _id,
        title,
        eyebrow,
        subtitle,
        investment,
        description,
        ctaLabel,
        ctaLink,
        featured,
        displayOrder,
        programImage
      }
    },

    testimonialsTitle,
    testimonialsIntro,
    homeTestimonials[]->{
      _id,
      name,
      role,
      quote
    }
  }
`;

export const programsPageQuery = groq`
  *[_type == "programsPage"][0]{
    eyebrow,
    title,
    intro,
    introHighlight,

    packagesTitle,
    packagesIntro,
    programCards[]->{
      _id,
      title,
      eyebrow,
      subtitle,
      investment,
      description,
      includedTitle,
      includedItems,
      bestForTitle,
      bestForItems,
      ctaLabel,
      ctaLink,
      featured,
      displayOrder,
      programImage
    },

    clientJourneyEyebrow,
    journeyTitle,
    journeySteps[]{
      stepLabel,
      stepTitle,
      stepDescription
    },

    scopeEyebrow,
    scopeTitle,
    scopeItems[]{
      title,
      description
    },
    medicalDisclaimer,

    voicesTitle,
    voicesTestimonials[]->{
      _id,
      name,
      role,
      quote
    },

    ctaTitle,
    ctaBody,
    primaryCtaLabel,
    primaryCtaLink,
    secondaryCtaLabel,
    secondaryCtaLink
  }
`;


export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    valuesEyebrow,
    valuesTitleLineOne,
    valuesTitleLineTwo,
    valuesBodyOne,
    valuesBodyTwo,
    valuesImage,
    valuesImageAlt,
    values[]{
      title,
      description
    },

    credentialsTitle,
    credentialsIntro,
    credentials,
    methodEyebrow,
    methodTitle,
    methodSteps,

    founderEyebrow,
    founderTitleLineOne,
    founderTitleLineTwo,
    founderSubtitle,
    founderBody,
    founderImage,
    founderImageAlt,

    storyTitle,
    storyQuote,
    storyParagraphOne,
    storyParagraphTwo,
    storyParagraphThree,

    whoWeServeTitle,
    whoWeServeIntro,
    whoWeServeItems,

    differentiatorsTitle,
    differentiatorsIntro,
    differentiators[]{
      title,
      description
    },

    leadershipEyebrow,
    leadershipTitle,
    leadershipBody,

    ctaTitle,
    ctaBody,
    primaryCtaLabel,
    primaryCtaLink,
    secondaryCtaLabel,
    secondaryCtaLink
  }
`;

export const resourcesPageQuery = groq`
  *[_type == "resourcesPage"][0]{
    heroEyebrow,
    heroTitleLineOne,
    heroTitleLineTwo,
    heroBody,
    heroImage,
    heroImageAlt,

    downloadsSectionEyebrow,
    downloadsSectionTitle,
    downloadsSectionIntro,
    downloads[]{
      title,
      subtitle,
      description,
      tag,
      pages,
      href,
      ctaLabel,
      cover,
      coverAlt
    },

    featuredArticleSectionEyebrow,
    featuredArticleSectionTitle,
    featuredArticle{
      url,
      sourceInitial,
      sourceName,
      publishDate,
      badge,
      title,
      description,
      quote,
      quoteAttribution,
      ctaLabel,
      decorativeLabel,
      decorativeSubtext,
      decorativeDescription
    },

    coursesPromo{
      badge,
      title,
      body,
      subtext,
      primaryCtaLabel,
      primaryCtaLink,
      secondaryCtaLabel,
      secondaryCtaLink,
      image,
      imageAlt
    }
  }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage"][0]{
    heroTitle,
    heroBody,
    heroImage,
    heroImageAlt,

    helpSectionTitle,
    helpCards[]{
      title,
      description,
      ctaLabel,
      ctaLink
    },

    formTitle,
    formIntro,
    formEmailLabel,
    formHelpLabel,
    formMessageLabel,
    formSubmitLabel,
    formHelpOptions,
    formMessagePlaceholder,

    officeImage,
    officeImageAlt,
    infoTitle,
    infoBody,

    contactEyebrow,
    contactButtonLabel,
    email,

    socialEyebrow,
    socialLinks{
      instagram,
      facebook,
      youtube
    }
  }
`;


export const privacyPolicyPageQuery = groq`
  *[_type == "privacyPolicyPage"][0]{
    eyebrow,
    title,
    lastUpdated,
    body
  }
`;

export const termsOfServicePageQuery = groq`
  *[_type == "termsOfServicePage"][0]{
    eyebrow,
    title,
    lastUpdated,
    body
  }
`;