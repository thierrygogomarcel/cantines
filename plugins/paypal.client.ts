import { defineNuxtPlugin } from '#app'
import { loadScript } from "@paypal/paypal-js";

export default defineNuxtPlugin(async (nuxtApp) => {
  const paypal = await loadScript({
    "client-id": "YOUR_CLIENT_ID",
    currency: "EUR",
  });

  return {
    provide: {
      paypal
    }
  }
})