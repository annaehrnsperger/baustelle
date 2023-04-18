import { FiSidebar } from 'react-icons/fi';
import { slugify, slugValidation } from '../../utils/sanityHelper';
import { MODULES } from '../../utils/sanityConstants';

export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: FiSidebar,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: { source: 'title', slugify },
      validation: slugValidation,
    },
    {
      name: 'description',
      type: 'blockContent',
      title: 'Description',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: MODULES,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description.0.children.0.text',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
        media: FiSidebar,
      };
    },
  },
};
