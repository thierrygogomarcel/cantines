// ~/middleware/auth.ts
import { useAuth } from '~/composables/auth';
import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth();

  // Utiliser .value pour accéder à la valeur de isAuthenticated
  if (!isAuthenticated.value && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login');
  }

  // Si l'utilisateur est authentifié et tente d'accéder à la page de login ou d'enregistrement
  if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/dashboard');
  }
});
