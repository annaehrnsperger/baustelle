export default function ({ general, title, seo }) {
  const lang = 'en'; //TODO
  const description = seo?.metaDescription || general.metaDescription;
  const image = seo?.ogImage || general.ogImage;

  useHead({
    title: title ? `${title} • ${general.siteTitle}` : general.siteTitle,
    htmlAttrs: {
      lang,
    },
    meta: [
      { name: 'robots', content: 'noindex, nofollow' }, //TODO
      {
        name: 'title',
        content: general.siteTitle,
      },
      {
        property: 'og:title',
        content: general.siteTitle,
      },
      description && {
        name: 'description',
        content: description,
      },

      image && {
        property: 'og:image',
        content: image,
      },
    ],
    link: [general.favicon ? { rel: 'icon', type: 'image/png', href: general.favicon } : { rel: 'icon', href: 'data:image' }],
    // script: [{ defer: true, 'data-domain': 'domain.de', src: 'https://plausible.io/js/plausible.js' }],
  });
}
