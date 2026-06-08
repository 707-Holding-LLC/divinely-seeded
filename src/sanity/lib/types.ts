export type SiteSettings = {
  siteTitle?: string;
  siteDescription?: string;
  logo?: unknown;
  logoAlt?: string;
  contactEmail?: string;
  phone?: string;
  calendlyUrl?: string;
  headerCtaLabel?: string;
  headerCtaLink?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  youtubeUrl?: string;
  footerText?: string;
  copyrightText?: string;
  privacyPolicyLink?: string;
  termsOfServiceLink?: string;
  defaultOgImage?: unknown;
  defaultOgImageAlt?: string;
};

export type ProgramReference = {
  _id: string;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  investment?: string;
  description?: string;
  ctaLabel?: string;
  ctaLink?: string;
  featured?: boolean;
  displayOrder?: number;
  programImage?: unknown;
};

export type HomeFeaturedProgramItem = {
  cardTitleOverride?: string;
  cardDescriptionOverride?: string;
  cardImage?: unknown;
  cardImageAlt?: string;
  badge?: string;
  ctaLabel?: string;
  ctaLink?: string;
  program?: ProgramReference | null;
};

export type HomeTestimonial = {
  _id: string;
  name?: string;
  role?: string;
  quote?: string;
};

export type HomePageData = {
  eyebrow?: string;
  headlineLineOne?: string;
  headlineLineTwo?: string;
  headlineAccent?: string;
  subheadline?: string;
  heroImage?: unknown;
  heroImageAlt?: string;
  primaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;

  missionTitle?: string;
  missionQuote?: string;
  missionBody?: string[];
  missionImage?: unknown;
  missionImageAlt?: string;
  missionPillars?: {
    title?: string;
    description?: string;
  }[];

  founderSectionEyebrow?: string;
  founderSectionTitle?: string;
  founderSectionBody?: string[];
  founderImage?: unknown;
  founderImageAlt?: string;
  founderCtaLabel?: string;
  founderCtaLink?: string;

  founderStripName?: string;
  founderStripRole?: string;
  founderStripImage?: unknown;
  founderStripImageAlt?: string;
  founderStripCtaLabel?: string;
  founderStripCtaLink?: string;

  featuredProgramsTitle?: string;
  featuredProgramsIntro?: string;
  featuredPrograms?: HomeFeaturedProgramItem[];

  testimonialsTitle?: string;
  testimonialsIntro?: string;
  homeTestimonials?: HomeTestimonial[];
};

export type ProgramsProgramCard = {
  _id: string;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  investment?: string;
  description?: string;
  includedTitle?: string;
  includedItems?: string[];
  bestForTitle?: string;
  bestForItems?: string[];
  ctaLabel?: string;
  ctaLink?: string;
  featured?: boolean;
  displayOrder?: number;
  programImage?: unknown;
};

export type ProgramsVoiceTestimonial = {
  _id: string;
  name?: string;
  role?: string;
  quote?: string;
};

export type ProgramsJourneyStep = {
  stepLabel?: string;
  stepTitle?: string;
  stepDescription?: string;
};

export type ProgramsScopeItem = {
  title?: string;
  description?: string | string[];
};

export type ProgramsPageData = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  introHighlight?: string;

  packagesTitle?: string;
  packagesIntro?: string;
  programCards?: ProgramsProgramCard[];

  clientJourneyEyebrow?: string;
  journeyTitle?: string;
  journeyIntro?: string;
  journeySteps?: ProgramsJourneyStep[];

  scopeEyebrow?: string;
  scopeTitle?: string;
  scopeIntro?: string;
  scopeItems?: ProgramsScopeItem[];
  medicalDisclaimer?: string;

  voicesTitle?: string;
  voicesTestimonials?: ProgramsVoiceTestimonial[];

  ctaTitle?: string;
  ctaBody?: string;
  primaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
};

export type AboutValueItem = {
  title?: string;
  description?: string;
};

export type AboutDifferentiatorItem = {
  title?: string;
  description?: string;
};

export type AboutPageData = {
  valuesEyebrow?: string;
  valuesTitleLineOne?: string;
  valuesTitleLineTwo?: string;
  valuesBodyOne?: string;
  valuesBodyTwo?: string;
  valuesImage?: unknown;
  valuesImageAlt?: string;
  values?: AboutValueItem[];

  credentialsTitle?: string;
  credentialsIntro?: string;
  credentials?: string[];
  methodEyebrow?: string;
  methodTitle?: string;
  methodSteps?: string[];

  founderEyebrow?: string;
  founderTitleLineOne?: string;
  founderTitleLineTwo?: string;
  founderSubtitle?: string;
  founderBody?: string;
  founderImage?: unknown;
  founderImageAlt?: string;

  storyTitle?: string;
  storyQuote?: string;
  storyParagraphOne?: string;
  storyParagraphTwo?: string;
  storyParagraphThree?: string;

  whoWeServeTitle?: string;
  whoWeServeIntro?: string;
  whoWeServeItems?: string[];

  differentiatorsTitle?: string;
  differentiatorsIntro?: string;
  differentiators?: AboutDifferentiatorItem[];

  leadershipEyebrow?: string;
  leadershipTitle?: string;
  leadershipBody?: string;

  ctaTitle?: string;
  ctaBody?: string;
  primaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
};


export type ResourceDownloadItem = {
  title?: string;
  subtitle?: string;
  description?: string;
  tag?: string;
  pages?: string;
  href?: string;
  ctaLabel?: string;
  cover?: unknown;
  coverAlt?: string;
};

export type ArticlesCtaData = {
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaLink?: string;
};

export type FeaturedArticleData = {
  url?: string;
  sourceInitial?: string;
  sourceName?: string;
  publishDate?: string;
  badge?: string;
  title?: string;
  description?: string;
  quote?: string;
  quoteAttribution?: string;
  ctaLabel?: string;
  decorativeLabel?: string;
  decorativeSubtext?: string;
  decorativeDescription?: string;
};

export type CoursesPromoData = {
  badge?: string;
  title?: string;
  body?: string;
  subtext?: string;
  primaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
  image?: unknown;
  imageAlt?: string;
};

export type ResourcesPageData = {
  heroEyebrow?: string;
  heroTitleLineOne?: string;
  heroTitleLineTwo?: string;
  heroBody?: string;
  heroImage?: unknown;
  heroImageAlt?: string;

  downloadsSectionEyebrow?: string;
  downloadsSectionTitle?: string;
  downloadsSectionIntro?: string;
  downloads?: ResourceDownloadItem[];

  articlesCta?: ArticlesCtaData;
  
  featuredArticleSectionEyebrow?: string;
  featuredArticleSectionTitle?: string;
  featuredArticle?: FeaturedArticleData;

  coursesPromo?: CoursesPromoData;
};

export type ContactHelpCard = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaLink?: string;
};

export type ContactSocialLinks = {
  instagram?: string;
  facebook?: string;
  youtube?: string;
};

export type ContactPageData = {
  heroTitle?: string;
  heroBody?: string;
  heroImage?: unknown;
  heroImageAlt?: string;

  helpSectionTitle?: string;
  helpCards?: ContactHelpCard[];

  formTitle?: string;
  formIntro?: string;
  formEmailLabel?: string;
  formHelpLabel?: string;
  formMessageLabel?: string;
  formSubmitLabel?: string;
  formHelpOptions?: string[];
  formMessagePlaceholder?: string;

  officeImage?: unknown;
  officeImageAlt?: string;
  infoTitle?: string;
  infoBody?: string;

  contactEyebrow?: string;
  contactButtonLabel?: string;
  email?: string;

  socialEyebrow?: string;
  socialLinks?: ContactSocialLinks;
};


export type PortableTextBlock = {
  _key?: string;
  _type: string;
  children?: {
    _key?: string;
    _type?: string;
    text?: string;
    marks?: string[];
  }[];
  markDefs?: {
    _key?: string;
    _type?: string;
    href?: string;
  }[];
  style?: string;
  listItem?: string;
  level?: number;
};


export type BlogPostSummary = {
  _id: string;
  title?: string;
  slug?: {
    current?: string;
  };
  brand?: "DS";
  contentPillar?: string;
  excerpt?: string;
  featuredImage?: unknown;
  featuredImageAlt?: string;
  author?: string;
  publishAt?: string;
  status?: "draft" | "in-review" | "approved" | "scheduled" | "published" | "archived";
  approvalStatus?: "not-submitted" | "pending-approval" | "approved" | "needs-revision";
  complianceStatus?: "not-checked" | "passed" | "flagged" | "needs-human-review";
  seoKeyword?: string;
};

export type BlogPostData = BlogPostSummary & {
  body?: PortableTextBlock[];
  sourceTranscriptLink?: string;
  sourceFileLink?: string;
  platformRepurposeNotes?: string;
};

export type LegalDocumentPageData = {
  eyebrow?: string;
  title?: string;
  lastUpdated?: string;
  body?: PortableTextBlock[];
};