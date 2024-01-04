// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  css:[
    "vuetify/styles/main.sass",
    'tailwindcss/base.css',
    'tailwindcss/components.css',
    'tailwindcss/utilities.css',
    "@mdi/font/css/materialdesignicons.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build:{
    transpile: ["vuetify"]
  },

})
