export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['mux-video'].includes(tag),
    },
  },

  //TODO
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity', '@pinia/nuxt'],

  css: [
    '@/assets/styles/fallback.css',
    '@/assets/styles/fonts.css',
    '@/assets/styles/index.css',
    '@/assets/styles/normalize.css',
    '@/assets/styles/utilities.css',
    '@/assets/styles/variables.css',
  ],

  imports: { dirs: ['./stores'] },

  components: [{ path: '~/components', pathPrefix: false }],

  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    apiVersion: '2022-03-24',
    useCdn: false,
  },

  //TODO
  runtimeConfig: {
    public: {
      shopifyDomain: process.env.SHOPIFY_DOMAIN,
      shopifyStorefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
  },
});
