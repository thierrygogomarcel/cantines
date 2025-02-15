export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated, userRole } = useAuth();

  // Routes publiques
  const publicRoutes = ['/login', '/register', '/'];
  
  if (!isAuthenticated.value && !publicRoutes.includes(to.path)) {
    return navigateTo('/login');
  }

  if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/dashboard');
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