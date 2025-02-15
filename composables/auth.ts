import { toast } from 'vue3-toastify';
import { 
  useAuthenticationStatus, 
  useSignInEmailPassword, 
  useSignUpEmailPassword, 
  useSignOut, 
  useUserData 
} from '@nhost/vue';
import { useRouter } from '#app';

export const useAuth = () => { 
  const router = useRouter();
  const { signInEmailPassword } = useSignInEmailPassword();
  const { signUpEmailPassword } = useSignUpEmailPassword();
  const { signOut } = useSignOut();
  const { isAuthenticated } = useAuthenticationStatus();
  const userData = useUserData();

  // Connexion
  const login = async (email: string, password: string) => {
    try {
      const { error } = await signInEmailPassword(email, password);

      if (error) {
        toast.error(`🚫 Erreur de connexion: ${error.message}`);
        return { error };
      }

      toast.success('🎉 Connexion réussie! Bienvenue!');
      router.push('/dashboard');
      return { user: userData.value };
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`);
      return { error };
    }
  };

  // Inscription
  const register = async (email: string, password: string) => {
    try {
      const { error } = await signUpEmailPassword(email, password);

      if (error) {
        toast.error(`🚫 Erreur d'inscription: ${error.message}`);
        return { error };
      }

      // Tentative de connexion automatique après inscription
      const loginResult = await login(email, password);
      if (loginResult.error) {
        toast.info('✨ Compte créé! Veuillez vous connecter.');
        router.push('/login');
        return { error: null };
      }

      toast.success('🎉 Inscription réussie! Bienvenue!');
      return { user: loginResult.user };
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`);
      return { error };
    }
  };

  // Déconnexion
  const logout = async () => {
    try {
      const { error } = await signOut();

      if (error) {
        toast.error(`🚫 Erreur de déconnexion: ${error.message}`);
        return { error };
      }

      toast.success('👋 À bientôt!');
      router.push('/login');
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`);
      return { error };
    }
  };

  return {
    isAuthenticated,
    login,
    register,
    logout,
    user: userData
  };
};
