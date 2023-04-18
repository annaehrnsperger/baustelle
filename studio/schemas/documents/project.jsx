import { orderRankField } from '@sanity/orderable-document-list';
import { FiSquare } from 'react-icons/fi';
import { generatePreviewMedia, slugify, slugValidation } from '../../utils/sanityHelper';

export default {
  type: 'document',
  name: 'project',
  title: 'Project',
  icon: FiSquare,
  fields: [
    orderRankField({ type: 'project' }),
    {
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      options: { collapsible: true, collapsed: true },
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', slugify },
      validation: slugValidation,
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent',
    },
    {
      title: 'Filter',
      name: 'filter',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
          title: 'Category',
          // options: {
          //   disableNew: true,
          // },
        },
      ],
    },
    {
      title: 'Preview, Hero Media',
      name: 'media',
      type: 'media',
    },
    {
      title: 'Collaborator',
      name: 'collaborator',
      type: 'object',
      options: { columns: 2 },
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Website',
          name: 'website',
          type: 'url',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      type: 'media.type',
      image: 'media.image.asset',
      playbackId: 'media.video.asset.playbackId',
    },
    prepare({ title, type, image, playbackId }) {
      return {
        title,
        media: generatePreviewMedia({ type, image, playbackId }),
      };
    },
  },
};
