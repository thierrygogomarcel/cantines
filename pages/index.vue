<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Bienvenue sur GogoSoft</h1>
    <p class="text-xl text-gray-600 mb-8">
      La plateforme innovante pour gérer vos projets efficacement
    </p>
    <div class="space-x-4">
      <NuxtLink
        to="/register"
        class="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
      >
        Commencer gratuitement
      </NuxtLink>
      <NuxtLink
        to="/login"
        class="inline-block bg-white text-primary px-6 py-3 rounded-lg border border-primary hover:bg-gray-50 transition"
      >
        Se connecter
      </NuxtLink>
    </div>
  </div>
</template>