<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <NuxtLink to="/" class="flex items-center text-gray-900 font-semibold">
              Cantine2025
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <template v-if="isAuthenticated">
              <button @click="handleSignOut" class="text-gray-600 hover:text-gray-900">
                Sign Out
              </button>
            </template>
          </div>
        </div>
      </div>
    </nav>
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"> 
import { onMounted, ref } from 'vue';
import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
  backendUrl: 'https://your-nhost-backend-url', // Remplace par l'URL de ton backend
});

const userSession = ref(null); // Stocker la session utilisateur
const isAuthenticated = ref(false); // Variable pour vérifier l'authentification

onMounted(async () => {
  try {
    // Vérifier la session après le montage
    const session = await nhost.auth.getSession();
    
    if (session) {
      userSession.value = session.user;
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de la session :', error);
    isAuthenticated.value = false;
  }
});

</script>
