import { useNuxtApp } from '#app'
import { useAuthenticationStatus, useSignInEmailPassword, useSignUpEmailPassword, useSignOut, useUserData } from '@nhost/vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { toast } from 'vue3-toastify'

export const useAuth = () => {
  const router = useRouter()

  // Utilisation de $nhost dans useNuxtApp
  const { $nhost } = useNuxtApp()
  
  // Vérifie que $nhost est disponible
  if (!$nhost) {
    console.error('Le client Nhost n\'est pas disponible')
    return
  }

  const { signInEmailPassword } = useSignInEmailPassword()
  const { signUpEmailPassword } = useSignUpEmailPassword()
  const { signOut } = useSignOut()
  const { isAuthenticated } = useAuthenticationStatus()
  const userData = useUserData()

  const user = computed(() => userData.value)
  const userRole = computed(() => userData.value?.metadata?.role || 'guest')
  const userProfile = computed(() => ({
    name: userData.value?.displayName || '',
    email: userData.value?.email || '',
    avatar: userData.value?.avatarUrl || '',
    phone: userData.value?.phoneNumber || '',
    metadata: userData.value?.metadata || {}
  }))

  const login = async (email: string, password: string) => {
    try {
      const { error } = await signInEmailPassword(email, password)

      if (error) {
        toast.error(`🚫 Erreur de connexion: ${error.message}`)
        return { error }
      }

      toast.success('🎉 Connexion réussie! Bienvenue!')
      router.push('/')
      return { user: userData.value }
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`)
      return { error }
    }
  }

  const register = async (email: string, password: string) => {
    try {
      const { error } = await signUpEmailPassword(email, password)

      if (error) {
        toast.error(`🚫 Erreur d'inscription: ${error.message}`)
        return { error }
      }

      // Après l'inscription, essaie de connecter automatiquement l'utilisateur
      const loginResult = await login(email, password)
      if (loginResult.error) {
        toast.info('✨ Compte créé! Veuillez vous connecter.')
        router.push('/login')
        return { error: null }
      }

      toast.success('🎉 Inscription réussie! Bienvenue!')
      return { user: loginResult.user }
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`)
      return { error }
    }
  }

  const logout = async () => {
    try {
      const { error } = await signOut()

      if (error) {
        toast.error(`🚫 Erreur de déconnexion: ${error.message}`)
        return { error }
      }

      toast.success('👋 À bientôt!')
      router.push('/login')
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`)
      return { error }
    }
  }

  return {
    isAuthenticated,
    user,
    userRole,
    userProfile,
    login,
    register,
    logout
  }
}
