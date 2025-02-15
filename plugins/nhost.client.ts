// plugins/nhost.client.ts
import { defineNuxtPlugin } from '#app';
import { NhostClient } from '@nhost/nhost-js';
import { provideNhostClient } from '@nhost/vue'; // Importez depuis @nhost/vue

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const nhost = new NhostClient({
    subdomain: runtimeConfig.public.nhostSubdomain || '',
    region: runtimeConfig.public.nhostRegion || '',
  });

  // Fournir le client Nhost à l'application
  provideNhostClient(nhost);

  // Injecter nhost dans l'application Nuxt
  nuxtApp.provide('nhost', nhost);

  return {
    provide: {
      nhost,
    },
  };
});