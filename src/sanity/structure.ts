import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('siteSettings').title('Site Settings'),
      S.documentTypeListItem('homePage').title('Home Page'),
      S.documentTypeListItem('programsPage').title('Programs Page'),
      S.documentTypeListItem('contactPage').title('Contact Page'),
      S.documentTypeListItem('program').title('Programs'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('aboutPage').title('About Page'),
      S.documentTypeListItem('resourcesPage').title('Resources Page'),
      S.divider(),

      S.documentTypeListItem('blogPost').title('Blog Posts'),

      S.divider(),
      S.documentTypeListItem('privacyPolicyPage').title('Privacy Policy Page'),
      S.documentTypeListItem('termsOfServicePage').title('Terms of Service Page'),
    ])