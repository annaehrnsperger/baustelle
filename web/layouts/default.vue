<template>
  <div id="root" class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';

useCredits();

onMounted(() => {
  // fix nuxt bug when navigating fast on page transition
  const messages = [
    `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // chromium based
    `NotFoundError: Node.insertBefore: Child to insert before is not a child of this node`, // firefox
    `NotFoundError: The object can not be found here.`, // safari
  ];
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (e) => {
      if (messages.includes(e.message)) {
        e.preventDefault();

        window.location.reload();
      }
    });
  }
});
</script>
