<template>
  <div class="text-center max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 mb-6">
      Bienvenue sur GogoSoft Cantine
    </h1>
    <p class="text-xl text-gray-600 mb-8">
      Manger bien, gérer mieux
    </p>

    <!-- Image de bannière -->
    <div class="mb-12 rounded-xl overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200" 
        alt="Cantine scolaire" 
        class="w-full h-64 object-cover"
      />
    </div>

    <div class="grid md:grid-cols-3 gap-8 mb-12">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1606787619248-f301830a5a57?w=300" 
          alt="Gestion simplifiée" 
          class="w-20 h-20 mx-auto mb-4 rounded-lg object-cover"
        />
        <h2 class="text-xl font-semibold mb-2">Gestion Simplifiée</h2>
        <p class="text-gray-600">Gérez les repas de vos enfants en quelques clics</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=300" 
          alt="Sécurité" 
          class="w-20 h-20 mx-auto mb-4 rounded-lg object-cover"
        />
        <h2 class="text-xl font-semibold mb-2">Sécurisé</h2>
        <p class="text-gray-600">Système de QR Code unique pour chaque enfant</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=300" 
          alt="Paiement" 
          class="w-20 h-20 mx-auto mb-4 rounded-lg object-cover"
        />
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

    <!-- Contact développeur -->
    <div class="mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-xl font-semibold mb-4">Support technique</h2>
      <p class="text-gray-600 mb-2">En cas de problème ou de bug, contactez :</p>
      <div class="space-y-2">
        <p class="font-medium">Thierry Gogo - Développeur Fullstack</p>
        <p>📞 07 58 96 61 56</p>
        <p>📧 2024dibo@gmail.com</p>
      </div>
    </div>
  </div>
</template>