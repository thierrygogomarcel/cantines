export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth();

  // Routes publiques
  const publicRoutes = ['/login', '/register', '/'];
  
  if (!isAuthenticated.value && !publicRoutes.includes(to.path)) {
    return navigateTo('/login');
  }

  if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/dashboard');
  }
});