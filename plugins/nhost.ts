import { defineNuxtPlugin } from '#app'
import { NhostClient } from '@nhost/nhost-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const nhost = new NhostClient({
    url: config.public.nhostUrl
  })

  return {
    provide: {
      nhost
    }
  }
})