<template>
  <header class="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo et nom -->
        <div class="flex items-center">
          <img src="https://via.placeholder.com/40" alt="Logo" class="h-8 w-8 mr-2 rounded-lg" />
          <span class="text-xl font-bold text-primary">GogoSoft</span>
        </div>

        <!-- Menu utilisateur -->
        <div class="flex items-center" v-if="user">
          <div class="relative" v-click-outside="closeMenu">
            <button 
              @click="toggleMenu"
              class="flex items-center space-x-2 focus:outline-none group"
            >
              <img 
                :src="user.avatarUrl || 'https://via.placeholder.com/32'" 
                :alt="user.email"
                class="h-8 w-8 rounded-lg object-cover transition-transform group-hover:scale-105"
              />
              <span class="text-text-primary">{{ user.email }}</span>
              <svg 
                class="w-4 h-4 text-text-primary transition-transform"
                :class="{ 'rotate-180': isMenuOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Menu déroulant -->
            <div 
              v-if="isMenuOpen"
              class="absolute right-0 mt-2 w-48 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all"
            >
              <div class="py-1">
                <NuxtLink 
                  to="/profile"
                  class="block px-4 py-2 text-sm text-text-primary hover:bg-background transition-colors"
                >
                  Gérer le profil
                </NuxtLink>
                <button 
                  @click="handleLogout"
                  class="block w-full text-left px-4 py-2 text-sm text-text-primary hover:bg-background transition-colors"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Liens de connexion/inscription pour les visiteurs -->
        <div class="flex items-center space-x-4" v-else>
          <NuxtLink 
            to="/login"
            class="text-text-primary hover:text-primary transition-colors"
          >
            Connexion
          </NuxtLink>
          <NuxtLink 
            to="/register"
            class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Inscription
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/auth';
import { vClickOutside } from '@vueuse/components';

const { user, logout } = useAuth();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleLogout = async () => {
  await logout();
  navigateTo('/login');
};
</script>