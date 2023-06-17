// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  runtimeConfig: {
    public: {
    BASE_MEDIA_SERVER: "https://res.cloudinary.com/dwlgplrj9/image/upload/v1686849824/nangkring/"
    }
  }
  
})
