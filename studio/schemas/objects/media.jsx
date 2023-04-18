import { generatePreviewMedia, generatePreviewMediaTitle } from '../../utils/sanityHelper';

export default {
  title: 'Media',
  name: 'media',
  type: 'object',
  fields: [
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'image',
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      hidden: ({ parent }) => !parent?.type || parent.type !== 'image',
    },
    {
      name: 'video',
      type: 'mux.video',
      title: 'Video',
      hidden: ({ parent }) => !parent?.type || parent.type !== 'video',
    },
  ],
  preview: {
    select: {
      title: 'image.alt',
      type: 'type',
      image: 'image.asset',
      imageName: 'image.asset.originalFilename',
      playbackId: 'video.asset.playbackId',
    },
    prepare({ type, imageName, image, playbackId }) {
      return {
        title: generatePreviewMediaTitle({ type, image, imageName, playbackId }),
        media: generatePreviewMedia({ type, image, playbackId }),
      };
    },
  },
};
