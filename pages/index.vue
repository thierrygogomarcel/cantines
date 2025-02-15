<template>
  <div class="text-center max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">
      Bienvenue sur GogoSoft Cantine
    </h1>
    <p class="text-xl text-gray-600 mb-8">
      Manger bien, gérer mieux
    </p>
    <div class="grid md:grid-cols-3 gap-8 mb-12">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <svg class="w-12 h-12 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 class="text-xl font-semibold mb-2">Gestion Simplifiée</h2>
        <p class="text-gray-600">Gérez les repas de vos enfants en quelques clics</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <svg class="w-12 h-12 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <h2 class="text-xl font-semibold mb-2">Sécurisé</h2>
        <p class="text-gray-600">Système de QR Code unique pour chaque enfant</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <svg class="w-12 h-12 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        <h2 class="text-xl font-semibold mb-2">Paiement Facile</h2>
        <p class="text-gray-600">Rechargez les tickets-repas en ligne</p>
      </div>
    </div>
    
    <div class="space-x-4">
      <NuxtLink
        to="/register"
        class="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
      >
        Commencer gratuitement
      </NuxtLink>
      <NuxtLink
        to="/login"
        class="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg border border-primary-600 hover:bg-gray-50 transition-colors"
      >
        Se connecter
      </NuxtLink>
    </div>
  </div>
</template>