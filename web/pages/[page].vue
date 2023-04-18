<template>
  <article class="pt-12">
    <component :is="chooseModule(module)" v-for="module in page.content" :key="module._key" :module="module" />
  </article>
</template>

<script setup>
import { seo, general, blockContent, media, modules } from '@/utils/queries';

const query = groq`{
  ${general}
  "page": *[_type == "page" && slug.current == $slug][0]{
    ...,
    ${seo}
    ${media}
    description[]{
      ...,
      ${blockContent}
    },
    content[]{
      ...,
      ${modules}
    }
  },
}`;

const page = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query, { slug: useRoute().params.page }));
page.value = data.value.page;

if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

useSeo({ general: data.value.general, title: page.value.title, seo: page.value.seo });

const copy = resolveComponent('copy');
const mediaGallery = resolveComponent('mediaGallery');

const chooseModule = (module) => {
  if (module._type === 'copy') return copy;
  if (module._type === 'mediaGallery') return mediaGallery;
};
</script>
