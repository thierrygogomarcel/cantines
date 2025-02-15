export default defineNuxtConfig({
  modules: [
    '@nhost/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  nhost: {
    subdomain: process.env.NHOST_SUBDOMAIN || 'local',
    region: process.env.NHOST_REGION || 'eu-central-1'
  },
  runtimeConfig: {
    public: {
      nhostSubdomain: process.env.NHOST_SUBDOMAIN || 'local',
      nhostRegion: process.env.NHOST_REGION || 'eu-central-1',
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
      paypalClientId: process.env.PAYPAL_CLIENT_ID
    },
    stripeSecretKey: process.env.STRIPE_SECRET_KEY
  },
  app: {
    head: {
      title: 'GogoSoft - Cantine Scolaire',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Gestion moderne et efficace de cantine scolaire avec système de tickets-repas numérique' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  devtools: { enabled: false }
})