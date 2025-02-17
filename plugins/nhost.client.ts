import { defineNuxtPlugin } from '#app'
import { NhostClient } from '@nhost/nhost-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const nhost = new NhostClient({
    subdomain: config.public.nhostSubdomain,
    region: config.public.nhostRegion
  })

  return {
    provide: {
      nhost
    }
  }
})