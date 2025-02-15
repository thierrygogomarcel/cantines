import { NhostClient, type User } from '@nhost/nhost-js';
import { ref } from 'vue';

// Initialisez le client Nhost avec vos paramètres
const nhost = new NhostClient({
  backendUrl: 'https://your-nhost-backend-url', // Remplacez par l'URL de votre backend Nhost
});

export const useAuth = () => {
  // Initialiser 'user' avec un objet vide qui respecte la structure attendue
  const user = ref<Partial<User> | null>(nhost.auth.getUser() || null);
  const isAuthenticated = ref(!!user.value);

  // Fonction de connexion
  const login = async (email: string, password: string) => {
    try {
      const { session, error } = await nhost.auth.signIn({ email, password });
      if (error) {
        throw new Error(error.message);
      }
      user.value = session?.user || null;
      isAuthenticated.value = true;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  // Fonction d'inscription
  const register = async (email: string, password: string) => {
    try {
      const { error } = await nhost.auth.signUp({ email, password });
      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  // Fonction de déconnexion
  const logout = async () => {
    try {
      await nhost.auth.signOut();
      user.value = null;
      isAuthenticated.value = false;
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout,
  };
};
