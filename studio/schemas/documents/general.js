import { PAGES } from '../../utils/sanityConstants';

export default {
  type: 'document',
  name: 'general',
  title: 'General',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'seo',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      validation: (Rule) => Rule.max(155).warning('Should be under 155 characters').required(),
      description: '1200x630 recommended',
      group: 'seo',
    },
    {
      title: 'Favicon',
      name: 'favicon',
      type: 'image',
      group: 'seo',
    },
    {
      title: 'Open Graph Image',
      name: 'ogImage',
      type: 'image',
      group: 'seo',
    },
    {
      name: 'navigation',
      title: 'Navigation/Pages',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: PAGES,
          title: 'Pages',
        },
      ],
      group: 'content',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      group: 'content',
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [{ type: 'socialLink' }],
      group: 'content',
    },
    {
      title: 'Copyright',
      name: 'copyright',
      type: 'string',
      description: 'Do not include years.',
      group: 'content',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'General',
      };
    },
  },
};
