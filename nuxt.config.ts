// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
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
  ],
  

  runtimeConfig: {
    public: {
    BASE_MEDIA_SERVER: "https://res.cloudinary.com/dwlgplrj9/image/upload/v1686849824/nangkring/"
    }
  }
  
})
