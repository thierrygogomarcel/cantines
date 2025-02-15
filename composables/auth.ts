import { useNhostClient } from '@nhost/vue';
import { toast } from 'vue3-toastify';
import { Provider } from '@nhost/nhost-js';

export const useAuth = () => {
  const nhost = useNhostClient();
  const auth = nhost.auth;

  const isAuthenticated = computed(() => auth.isAuthenticated());
  const user = computed(() => auth.getUser());
  const userRole = computed(() => user.value?.metadata?.role || 'guest');
  const userProfile = computed(() => ({
    name: user.value?.displayName || '',
    email: user.value?.email || '',
    avatar: user.value?.avatarUrl || '',
    phone: user.value?.phoneNumber || '',
    metadata: user.value?.metadata || {}
  }));

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

  const loginWithProvider = async (provider: Provider) => {
    try {
      const { error } = await auth.signIn({
        provider,
        options: {
          scope: ['email', 'profile', 'phone', 'address']
        }
      });
      if (error) throw error;
      toast.success('Connexion réussie');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur de connexion');
      return false;
    }
  };

  const register = async (email: string, password: string, role: string) => {
    try {
      const { error } = await auth.signUp({
        email,
        password,
        options: {
          metadata: {
            role,
            location: {
              city: '',
              district: ''
            }
          }
        }
      });
      if (error) throw error;
      toast.success('Inscription réussie');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur d\'inscription');
      return false;
    }
  };

  const updateProfile = async (data: {
    displayName?: string;
    phoneNumber?: string;
    metadata?: {
      location?: {
        city?: string;
        district?: string;
      }
    }
  }) => {
    try {
      const { error } = await auth.updateUser(data);
      if (error) throw error;
      toast.success('Profil mis à jour');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur de mise à jour du profil');
      return false;
    }
  };

  const logout = async () => {
    try {
      const { error } = await auth.signOut();
      if (error) throw error;
      toast.success('Déconnexion réussie');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur de déconnexion');
      return false;
    }
  };

  return {
    isAuthenticated,
    user,
    userRole,
    userProfile,
    login,
    loginWithProvider,
    register,
    updateProfile,
    logout
  };
};