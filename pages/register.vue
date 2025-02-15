<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-3xl font-bold text-center mb-8">Create Account</h2>
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
        {{ loading ? 'Creating account...' : 'Create Account' }}
      </button>
    </form>
    <p class="mt-4 text-center text-sm text-gray-600">
      Already have an account?
      <NuxtLink to="/login" class="text-blue-600 hover:text-blue-500">Sign In</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { NhostClient } from '@nhost/nhost-js'; // Importer le client Nhost
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth'; // Vérifie que le store 'auth' est correctement défini

const nhost = new NhostClient({
  backendUrl: 'https://your-nhost-backend-url', // Remplace avec l'URL de ton backend Nhost
});

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const handleSubmit = async () => {
  loading.value = true;
  error.value = '';  // Réinitialisation de l'erreur

  try {
    // Utilisation de Nhost pour l'inscription par email et mot de passe
    const { session, error: signUpError } = await nhost.auth.signUp({
      email: email.value,
      password: password.value
    });
    
    if (signUpError) {
      throw new Error(signUpError.message);  // Gestion de l'erreur de l'inscription
    }

    if (session) {
      // Stockage des informations utilisateur dans le store
      const authStore = useAuthStore();
      authStore.setUser(session.user);
      
      // Redirection vers le tableau de bord
      navigateTo('/dashboard');
    }
  } catch (e: any) {
    error.value = e.message || 'An unexpected error occurred.';  // Message d'erreur détaillé
  } finally {
    loading.value = false;
  }
};
</script>

