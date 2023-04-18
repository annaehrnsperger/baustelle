<template>
  <div class="block-content">
    <SanityContent :blocks="blocks" :serializers="serializers" />
  </div>
</template>

<script setup>
import Link from './Serializers/Link.vue';
import Highlight from './Serializers/Highlight.vue';

const props = defineProps({
  blocks: Array,
});

const serializers = {
  styles: {},
  marks: {
    externalLink: Link,
    internalLink: Link,
    highlight: Highlight,
  },
};
</script>

<style>
.block-content p:not(:last-child),
.block-content ul:not(:last-child) {
  @apply pb-6;
}

.block-content a {
  @apply underline;
}

.block-content ul li {
  margin-left: 15px;
}

.block-content ul li::before {
  content: '●';
  display: inline-block;
  width: 15px;
  margin-left: -15px;
}

.block-highlight::before {
  content: '● ';
}
</style>
