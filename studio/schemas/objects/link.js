import { FiLink } from 'react-icons/fi';
import { PAGES } from '../../utils/sanityConstants';

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Link', value: 'internalLink' },
          { title: 'External Link', value: 'externalLink' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: PAGES,
      hidden: ({ parent }) => !parent?.type || parent.type !== 'internalLink',
      options: { disableNew: true },
    },
    {
      name: 'href',
      type: 'url',
      title: 'URL',
      hidden: ({ parent }) => !parent?.type || parent.type !== 'externalLink',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        media: FiLink,
      };
    },
  },
};
