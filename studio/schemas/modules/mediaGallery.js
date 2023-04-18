import { FiImage } from 'react-icons/fi';
import { generatePreviewMedia } from '../../utils/sanityHelper';

export default {
  name: 'mediaGallery',
  title: 'Media Gallery',
  type: 'object',
  icon: FiImage,
  fields: [
    {
      title: 'Assets',
      name: 'assets',
      type: 'array',
      of: [{ type: 'media' }],
      options: { layout: 'grid' },
    },
  ],
  preview: {
    select: {
      type: 'assets.0.type',
      image: 'assets.0.image.asset',
      playbackId: 'assets.0.video.asset.playbackId',
    },
    prepare({ type, image, playbackId }) {
      return {
        title: 'Media Gallery',
        media: generatePreviewMedia({ type, image, playbackId }),
      };
    },
  },
};
