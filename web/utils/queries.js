export const seo = `
  seo{
    ...,
    'ogImage': ogImage.asset->url,
  },
`;

export const general = `
  "general": *[_type == "general"][0]{
    ...,
    navigation[]->,
    'favicon': favicon.asset->url,
    'ogImage': ogImage.asset->url,
  },
`;

export const image = `
  type == "image" => {
    'image': image.asset->url,
    'alt': image.alt,
    'crop': image.crop,
    'hotspot': image.hotspot,
    'dimensions': image.asset->metadata.dimensions,
  },
  `;

export const video = `
  type == "video" => {
    'src': video.asset->playbackId,
    'thumbtime': video.asset->thumbTime,
  },
`;

export const media = `
  media{
    ...,
    ${image}
    ${video}
  },
`;

export const blockContent = `
  markDefs[]{
    ...,
    'type': _type,
    _type == "internalLink" => {
      'slug': page->slug.current,
    },
  },
`;

export const modules = `
  _type == "mediaGallery" => {
    ...,
    assets[]{
      ...,
      ${image}
      ${video}
    },
  },
  _type == "copy" => {
    ...,
    ${blockContent}
  },
`;
