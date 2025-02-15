import { useAuthenticationStatus } from '@nhost/vue';

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuthenticationStatus();

  // Redirection basée sur l'état d'authentification
  if (!isAuthenticated.value && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login');
  }

  if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/dashboard');
  }
});
