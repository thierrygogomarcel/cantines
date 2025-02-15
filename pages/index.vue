<!-- ~/pages/login.vue -->
<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>

    <!-- Affichage conditionnel en fonction de l'authentification -->
    <div v-if="isAuthenticated" class="space-y-4">
      <p class="text-xl text-gray-600">You are logged in!</p>
      <NuxtLink to="/dashboard" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">
        Go to Dashboard
      </NuxtLink>
    </div>
    <div v-else class="space-y-4">
      <p class="text-xl text-gray-600">Please sign in to continue</p>
      <NuxtLink to="/login" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">
        Sign In
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '@/composables/auth'; // Assurez-vous que ce composable est correctement configuré
import { useNhostSession } from '@nhost/vue'; // Pour vérifier l'état de l'authentification

// Initialisation des variables
const email = ref('');
const password = ref('');
const { login } = useAuth();  // Pour gérer la connexion avec email et mot de passe
const { isAuthenticated } = useNhostSession();  // Pour vérifier l'authentification

// Fonction de gestion de la connexion
const handleLogin = async () => {
  try {
    const { error } = await login(email.value, password.value);
    if (error) {
      alert(error.message);
    } else {
      navigateTo('/dashboard');
    }
  } catch (err) {
    console.error(err);
  }
};
</script>
