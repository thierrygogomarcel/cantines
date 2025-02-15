// plugins/toastify.ts
import { defineNuxtPlugin } from '#app';
import Vue3Toastify, { toast, type ToastOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  // Configuration globale de Vue3Toastify
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-right',
    closeButton: true,
    pauseOnHover: true,
    theme: 'light',
  } as ToastOptions);

  // Exemple d'utilisation de `toast` avec des options
  toast('Hello world!', {
    autoClose: 3000,
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: 'light',
    rtl: false,
  });

  // Fournir `toast` à l'application
  nuxtApp.provide('toast', toast);

  return {
    provide: {
      toast,
    },
  };
});