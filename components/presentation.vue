<template>
  <div v-if="isShown" class="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closePresentation"></div>
    
    <div class="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-auto">
      <button 
        @click="closePresentation" 
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="p-6">
        <div class="flex items-center mb-6">
          <img 
            src="/images/profile.png" 
            alt="Photo professionnelle" 
            class="h-20 w-20 rounded-full object-cover"
          />
          <div class="ml-4">
            <h2 class="text-2xl font-bold text-gray-900">Bienvenue sur la Cantine Scolaire</h2>
            <p class="text-sm text-gray-500">Une gestion moderne et efficace des repas scolaires</p>
          </div>
        </div>

        <div class="mb-6">
          <p class="text-gray-600 mb-4">
            Notre application permet une gestion simplifiée des repas scolaires avec :
          </p>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>Suivi des repas en temps réel</li>
            <li>Gestion des préférences alimentaires</li>
            <li>Interface ludique pour les enfants</li>
            <li>Dashboard complet pour les parents</li>
          </ul>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(feature, index) in features" :key="index" class="text-center">
            <img 
              :src="feature.image" 
              :alt="feature.title"
              class="w-full h-40 object-cover rounded-lg mb-2"
            />
            <p class="text-sm text-gray-600">{{ feature.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { usePresentationStore } from '~/stores/presentation'

const { $toast } = useNuxtApp()
const presentationStore = usePresentationStore()
const isShown = ref(true)
let autoCloseTimer: number | null = null

const features = ref([
  { 
    image: '/images/moisson.png',
    title: 'Repas équilibrés'
  },
  { 
    image: '/images/tracteur.png',
    title: 'Produits locaux'
  },
  { 
    image: '/images/profile01.png',
    title: 'Suivi personnalisé'
  }
])

const closePresentation = () => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer)
    autoCloseTimer = null
  }
  isShown.value = false
  presentationStore.close()
  $toast('👋 À bientôt sur la Cantine Scolaire!', {
    type: 'info'
  })
}

onMounted(() => {
  $toast('👋 Bienvenue sur la Cantine Scolaire!', {
    type: 'info'
  })
  
  autoCloseTimer = window.setTimeout(() => {
    closePresentation()
  }, 15000)
})

onBeforeUnmount(() => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer)
  }
})
</script>