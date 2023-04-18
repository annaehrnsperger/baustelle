<template>
  <a v-if="props.type === 'externalLink'" :href="props.href" target="_blank" rel="noopener noreferrer"><slot /></a>
  <NuxtLink v-if="props.type === 'internalLink'" :to="props.slug"><slot /></NuxtLink>
</template>

<script setup>
const props = defineProps({
  type: String,
  href: String,
  slug: String,
  page: Object,
});
</script>
