import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig: {
    public: {
      nhostUrl: process.env.NHOST_URL || 'http://localhost:1337',
      paypalClientId: process.env.PAYPAL_CLIENT_ID
    }
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

  devtools: { enabled: false },
  compatibilityDate: '2025-02-15'
})