import { useNhostClient } from '@nhost/vue'

export default defineNuxtRouteMiddleware(async (to) => {
  const nhost = useNhostClient()
  const { isAuthenticated } = useAuthenticationStatus()

  // Routes publiques
  const publicRoutes = ['/login', '/register', '/']

  if (!isAuthenticated.value && !publicRoutes.includes(to.path)) {
    return navigateTo('/login')
  }

  if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/')
  }
})