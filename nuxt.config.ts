import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nhost/nuxt',  
  ],

  runtimeConfig: {
    public: {
      nhostSubdomain: process.env.NHOST_SUBDOMAIN || '',
      nhostRegion: process.env.NHOST_REGION || '',
      urlHasura: process.env.URL_NHOST_HASURA || '',
      urlAuth: process.env.URL_AUTH_NHOST || '',
      urlGraphql: process.env.URL_GRAPHQL_NHOST || '',
      urlStorage: process.env.URL_STORAGE_NHOST || '',
      urlFunctions: process.env.URL_FUNCTIONS_NHOST || '',
    },
    secret: {
      nhostAdminSecret: process.env.NHOST_ADMIN_SECRET || '',
      nhostWebhookSecret: process.env.NHOST_WEBHOOK_SECRET || '',
      hasuraGraphqlAdminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET || '',
      hasuraGraphqlJwtSecret: process.env.HASURA_GRAPHQL_JWT_SECRET || '',
      grafanaAdminPassword: process.env.GRAFANA_ADMIN_PASSWORD || '',
    }
  },

  build: {
    transpile: ['@nhost/vue', '@nhost/nhost-js']
  },

  devtools: { enabled: false },
  compatibilityDate: '2025-02-15'
})