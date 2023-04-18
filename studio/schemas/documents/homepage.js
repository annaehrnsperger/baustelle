import { FiHome } from 'react-icons/fi';

export default {
  type: 'document',
  name: 'homepage',
  title: 'Hompage',
  icon: FiHome,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          title: 'Project',
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        media: FiHome,
      };
    },
  },
};
