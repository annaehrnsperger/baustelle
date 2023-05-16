<template>
  <img
    class="lazyload"
    :class="[
      {
        portrait: dimensions.width < dimensions.height,
        landscape: dimensions.width > dimensions.height,
      },
      classNames,
    ]"
    :height="300"
    :width="300"
    :src="
      $urlFor(src)
        .rect(dimensions.cropLeft || 0, dimensions.cropTop || 0, dimensions.width, dimensions.height)
        .width(100)
        .blur(50)
        .auto('format')
        .url()
    "
    :data-src="$urlFor(src).url()"
    :data-srcset="
      WIDTHS.map(
        (width) =>
          `${$urlFor(props.src)
            .width(width)
            .auto('format')
            .rect(dimensions.cropLeft || 0, dimensions.cropTop || 0, dimensions.width, dimensions.height)
            .url()} ${width}w`
      ).join(',')
    "
    data-sizes="auto"
    :alt="alt"
    :style="{ 'object-position': `${setHotspot.x}% ${setHotspot.y}%` }"
  />
</template>

<script setup>
const WIDTHS = [320, 640, 768, 1024, 1280, 1536, 2560, 3200];

const props = defineProps({
  src: String,
  classNames: [String, Array, Object],
  alt: {
    type: String,
    default: 'Meaningful Image Description',
  },
  media: Object,
});

const dimensions = computed(() => {
  const originalWidth = props.media.dimensions.width;
  const originalHeight = props.media.dimensions.height;

  const cropLeft = Math.floor(originalWidth * props.media.crop?.left);
  const cropTop = Math.floor(originalHeight * props.media.crop?.top);
  const cropWidth = Math.floor(originalWidth - originalWidth * props.media.crop?.left - originalWidth * props.media.crop?.right);
  const cropHeight = Math.floor(originalHeight - originalHeight * props.media.crop?.top - originalHeight * props.media.crop?.bottom);

  const width = cropWidth || originalWidth;
  const height = cropHeight || originalHeight;

  return { width, height, cropLeft, cropTop };
});

const setHotspot = computed(() => {
  if (!props.media.hotspot) return { x: 50, y: 50 };

  return { x: props.media.hotspot?.x * 100, y: props.media.hotspot?.y * 100 };
});
</script>

<style scoped>
img {
  @apply w-full h-full object-cover;
}

.hauto img {
  @apply w-full h-auto;
}
</style>
