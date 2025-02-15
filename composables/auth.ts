import { useNhostClient, useAuthenticationStatus } from '@nhost/vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

export const useAuth = () => {
  const router = useRouter()
  const nhost = useNhostClient()
  const { isAuthenticated } = useAuthenticationStatus()

  const login = async (email: string, password: string) => {
    try {
      const { error } = await nhost.auth.signIn({
        email,
        password
      })

      if (error) {
        toast.error(`🚫 Erreur de connexion: ${error.message}`)
        return false
      }

      toast.success('🎉 Connexion réussie!')
      router.push('/dashboard')
      return true
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`)
      return false
    }
  }

  const register = async (email: string, password: string) => {
    try {
      const { error } = await nhost.auth.signUp({
        email,
        password
      })

      if (error) {
        toast.error(`🚫 Erreur d'inscription: ${error.message}`)
        return false
      }

      toast.success('🎉 Inscription réussie!')
      return await login(email, password)
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`)
      return false
    }
  }

  const logout = async () => {
    try {
      const { error } = await nhost.auth.signOut()

      if (error) {
        toast.error(`🚫 Erreur de déconnexion: ${error.message}`)
        return false
      }

      toast.success('👋 À bientôt!')
      router.push('/login')
      return true
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`)
      return false
    }
  }

  return {
    isAuthenticated,
    login,
    register,
    logout
  }
}