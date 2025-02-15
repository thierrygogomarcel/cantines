<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8">Sign In</h2>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>
      <button
        type="submit"
        :disabled="loading"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {{ loading ? 'Signing in...' : 'Sign In' }}
      </button>
    </form>
    <p class="mt-4 text-center text-sm text-gray-600">
      Don't have an account?
      <NuxtLink to="/register" class="text-blue-600 hover:text-blue-500">Register</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { NhostClient } from '@nhost/nhost-js'; // Import Nhost client
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth'; // Assure-toi que tu as un store 'auth' ou adapte selon ton besoin

const nhost = new NhostClient({
  backendUrl: 'https://your-nhost-backend-url', // Remplace par l'URL de ton backend
});

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const handleSubmit = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    // Utilisation de Nhost pour la connexion par email et mot de passe
    const { session, error: signInError } = await nhost.auth.signIn({ email: email.value, password: password.value });
    
    if (signInError) {
      throw signInError;
    }

    if (session) {
      // Utilisation de ton store pour stocker les informations de l'utilisateur
      const authStore = useAuthStore();
      authStore.setUser(session.user);
      navigateTo('/dashboard'); // Redirection vers le dashboard après connexion
    }
  } catch (e: any) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};
</script>

