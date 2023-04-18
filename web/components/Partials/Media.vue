<template>
  <figure :class="classNames">
    <Img v-if="media.type === 'image' && media.image" :media="media" :src="media.image" :alt="media.alt" :class-names="assetClassNames" />
    <Video v-if="media.type === 'video' && media.src" :src="media.src" :thumbtime="media.thumbtime" :class-names="assetClassNames" />
  </figure>
</template>

<script setup>
import Img from './Img.vue';
import Video from './Video.vue';

defineProps({
  media: Object,
  classNames: [String, Object, Array],
  assetClassNames: [String, Object, Array],
});
</script>
