<template>
  <NuxtLayout>
    <NuxtPage />
    <Vue3Toastify position="top-right" />
  </NuxtLayout>
</template>

<script setup lang="ts">
 
import { useNhostClient, useAuthenticationStatus } from '@nhost/vue' 
import {toast }  from 'vue3-toastify';

// Utilisation du client Nhost
const nhost = useNhostClient()
const { isAuthenticated } = useAuthenticationStatus() 

onMounted(() => {
  if (isAuthenticated.value) {
    toast.success('🎉 Vous êtes connecté !')
  } else {
    toast.info('🔒 Veuillez vous connecter.')
  }
})

function useToast() {
  throw new Error('Function not implemented.');
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  @apply bg-gray-50 text-gray-900;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
