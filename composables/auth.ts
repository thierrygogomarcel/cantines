import { ref, computed } from 'vue';
import nhost from '~/utils/nhost'; // Importer le client Nhost
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';

export const useAuth = () => {
  const router = useRouter();

  const isAuthenticated = ref(false);
  const user = ref(null);
  const userRole = computed(() => user.value?.metadata?.role || 'guest');

  // Fonction pour récupérer les informations de l'utilisateur
  const getUser = async () => {
    const { data, error } = await nhost.auth.getUser();
    if (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur :', error);
    } else if (data) {
      user.value = data;
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
    }
  };

  // Connexion
  const login = async (email: string, password: string) => {
    try {
      const { error } = await nhost.auth.signIn({
        email,
        password,
      });

      if (error) {
        toast.error(`🚫 Erreur de connexion: ${error.message}`);
        return { error };
      }

      toast.success('🎉 Connexion réussie! Bienvenue!');
      await getUser();
      router.push('/');
      return { user: user.value };
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`);
      return { error };
    }
  };

  // Inscription
  const register = async (email: string, password: string) => {
    try {
      const { error } = await nhost.auth.signUp({
        email,
        password,
      });

      if (error) {
        toast.error(`🚫 Erreur d'inscription: ${error.message}`);
        return { error };
      }

      toast.success('🎉 Inscription réussie! Bienvenue!');
      await login(email, password); // Connexion après inscription
      return { user: user.value };
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`);
      return { error };
    }
  };

  // Déconnexion
  const logout = async () => {
    try {
      const { error } = await nhost.auth.signOut();

      if (error) {
        toast.error(`🚫 Erreur de déconnexion: ${error.message}`);
        return { error };
      }

      toast.success('👋 À bientôt!');
      user.value = null;
      isAuthenticated.value = false;
      router.push('/login');
    } catch (error: any) {
      toast.error(`🚫 Une erreur est survenue: ${error.message}`);
      return { error };
    }
  };

  return {
    isAuthenticated,
    user,
    userRole,
    login,
    register,
    logout,
  };
};
