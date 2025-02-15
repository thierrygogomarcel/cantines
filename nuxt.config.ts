export default defineNuxtConfig({
  modules: [
    '@nhost/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  nhost: {
    subdomain: 'local',
    region: 'eu-central-1'
  },
  runtimeConfig: {
    public: {
      nhostSubdomain: 'local',
      nhostRegion: 'eu-central-1'
    }
  },
  devtools: { enabled: false }
})