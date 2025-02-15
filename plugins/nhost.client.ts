import { defineNuxtPlugin } from '#app';
import { NhostClient } from '@nhost/nhost-js';
import { provideNhostClient } from '@nhost/vue';

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const nhost = new NhostClient({
    subdomain: 'local',
    region: 'eu-central-1',
  });

  provideNhostClient(nhost);

  return {
    provide: {
      nhost,
    },
  };
});