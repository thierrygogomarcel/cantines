import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),
  
  actions: {
    setUser(user: any) {
      this.user = user
    },
    setLoading(loading: boolean) {
      this.loading = loading
    },
    setError(error: any) {
      this.error = error
    }
  }
})