import { defineNuxtPlugin } from '#app';
import { NhostClient } from '@nhost/nhost-js';
import { provideNhostClient } from '@nhost/vue';

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const nhost = new NhostClient({
    subdomain: runtimeConfig.public.nhostSubdomain,
    region: runtimeConfig.public.nhostRegion,
    clientStorageType: 'localStorage',
    clientStorage: typeof window !== 'undefined' ? window.localStorage : undefined,
    autoRefreshToken: true,
    autoSignIn: true
  });

  provideNhostClient(nhost);

  return {
    provide: {
      nhost,
    },
  };
});