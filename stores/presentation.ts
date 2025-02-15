import { defineStore } from 'pinia'

export const usePresentationStore = defineStore('presentation', {
  state: () => ({
    shown: true
  }),
  
  actions: {
    close() {
      this.shown = false
    },
    show() {
      this.shown = true
    }
  }
})