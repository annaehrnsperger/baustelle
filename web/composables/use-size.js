import { BREAKPOINTS } from '@/utils/constants';

export default function () {
  const width = ref(0);
  const height = ref(0);
  const isMobile = ref(false);

  function onResize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;

    isMobile.value = width.value < BREAKPOINTS.md;
  }

  onMounted(() => {
    onResize();

    window.addEventListener('resize', onResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });

  return { width, height, isMobile };
}
