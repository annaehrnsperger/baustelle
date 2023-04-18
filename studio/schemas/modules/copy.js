import { FiAlignLeft } from 'react-icons/fi';

export default {
  name: 'copy',
  title: 'Copy',
  type: 'object',
  icon: FiAlignLeft,
  // options: {columns: 2},
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'text.0.children.0.text',
    },
    prepare({ title, content }) {
      return {
        title: title || content,
        media: FiAlignLeft,
      };
    },
  },
};
