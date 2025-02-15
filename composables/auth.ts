import { useNhostClient } from '@nhost/vue';
import { toast } from 'vue3-toastify';

export const useAuth = () => {
  const nhost = useNhostClient();
  const auth = nhost.auth;

  const isAuthenticated = computed(() => auth.isAuthenticated());
  const user = computed(() => auth.getUser());

  const login = async (email: string, password: string) => {
    try {
      const { error } = await auth.signIn({ email, password });
      if (error) throw error;
      toast.success('Connexion réussie');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur de connexion');
      return false;
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const { error } = await auth.signUp({ email, password });
      if (error) throw error;
      toast.success('Inscription réussie');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur d\'inscription');
      return false;
    }
  };

  const logout = async () => {
    try {
      const { error } = await auth.signOut();
      if (error) throw error;
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur de déconnexion');
      return false;
    }
  };

  return {
    isAuthenticated,
    user,
    login,
    register,
    logout
  };
};