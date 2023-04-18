<template>
  <article class="pb-48">
    <section class="h-screen relative pointer-events-none">
      <Media :media="project.media" class-names="w-full h-full block" />
    </section>

    <copy :title="date" :blocks="project.description" />
  </article>
</template>

<script setup>
import { seo, general, blockContent, media } from '@/utils/queries';

const query = groq`{
  ${general}
  "project": *[_type == "project" && slug.current == $slug][0]{
    ...,
    ${seo}
    ${media}
    description[]{
      ...,
      ${blockContent}
    }
  },
}`;

const project = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query, { slug: useRoute().params.project }));
project.value = data.value.project;

if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true });

useSeo({ general: data.value.general, title: project.value.title, seo: project.value.seo });

const date = computed(() => {
  const date = new Date(project.value.date);
  return `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
});
</script>
