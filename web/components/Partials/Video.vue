<template>
  <mux-video
    :playback-id="props.src"
    :poster="thumbnail"
    :class="classNames"
    :autoplay="autoplay"
    :playsinline="playsinline"
    :muted="muted"
    :loop="loop"
  />
</template>

<script setup>
import '@mux/mux-video';

const props = defineProps({
  src: String,
  thumbtime: [String, Number],
  classNames: [String, Object, Array],
  autoplay: {
    type: Boolean,
    default: true,
  },
  playsinline: {
    type: Boolean,
    default: true,
  },
  muted: {
    type: Boolean,
    default: true,
  },
  loop: {
    type: Boolean,
    default: true,
  },
});

const thumbnail = computed(() => `https://image.mux.com/${props.src}/thumbnail.webp${props.thumbtime === null ? '' : `?time=${props.thumbtime}`}`);
</script>

<style scoped>
video,
mux-video {
  @apply w-full h-full object-cover;
}
</style>
