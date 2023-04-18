<template>
  <article>
    <ul>
      <li
        v-for="project in homepage.projects"
        :key="project._id"
        class="h-screen w-full flex justify-center items-center"
        :data-project="project.slug.current"
      >
        <ProjectPreview :project="project" />
      </li>
    </ul>
  </article>
</template>

<script setup>
import { general, media } from '@/utils/queries';

const query = groq`{
  ${general}
  "homepage": *[_type == "homepage"][0]{
    ...,
    projects[]->{..., ${media}}
  }
}`;

const homepage = ref(undefined);
const { data } = await useAsyncData('data', () => useSanity().fetch(query));
homepage.value = data.value.homepage;

useSeo({ general: data.value.general });

// definePageMeta({
//   pageTransition: globalTransition,
// });
</script>
