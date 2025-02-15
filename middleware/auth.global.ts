import nhost from '~/utils/nhost'; // Importer le client Nhost
import { useRouter } from 'vue-router';
import { useAuth } from '~/composables/auth';

export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuthenticated, userRole } = useAuth();
  const router = useRouter();

  try {
    const { data, error } = await nhost.auth.getUser();
    if (error) {
      console.error('Erreur de récupération de l\'utilisateur:', error);
      isAuthenticated.value = false;
    } else if (data) {
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
    }
  } catch (err) {
    console.error('Erreur lors de l\'authentification:', err);
    isAuthenticated.value = false;
  }

  // Routes publiques
  const publicRoutes = ['/login', '/register', '/'];

  // Redirection en fonction de l'état d'authentification
  if (!isAuthenticated.value && !publicRoutes.includes(to.path)) {
    return navigateTo('/login');
  }

  if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/');
  }

  // Redirection vers le tableau de bord approprié
  if (to.path === '/dashboard') {
    switch (userRole.value) {
      case 'admin':
        return navigateTo('/dashboard/admin');
      case 'staff':
        return navigateTo('/dashboard/staff');
      case 'parent':
        return navigateTo('/dashboard/parent');
      default:
        return navigateTo('/dashboard/guest');
    }
  }
});
