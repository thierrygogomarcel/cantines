<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Tableau de bord Administrateur</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Statistiques globales -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Statistiques Globales</h2>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500">Utilisateurs totaux</p>
            <p class="text-2xl font-bold text-primary">1,234</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Projets actifs</p>
            <p class="text-2xl font-bold text-primary">89</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Revenus mensuels</p>
            <p class="text-2xl font-bold text-primary">15,678 €</p>
          </div>
        </div>
      </div>

      <!-- Gestion des utilisateurs -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Gestion des Utilisateurs</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">Nouveaux utilisateurs</span>
            <span class="text-sm font-medium text-primary">+12 aujourd'hui</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">Utilisateurs actifs</span>
            <span class="text-sm font-medium text-green-500">85%</span>
          </div>
          <button class="mt-2 text-primary hover:text-primary/90">
            Gérer les utilisateurs →
          </button>
        </div>
      </div>

      <!-- Actions rapides -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Actions Rapides</h2>
        <div class="space-y-3">
          <button class="w-full text-left px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-700">
            Créer un utilisateur
          </button>
          <button class="w-full text-left px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-700">
            Gérer les rôles
          </button>
          <button class="w-full text-left px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-700">
            Voir les rapports
          </button>
        </div>
      </div>

      <!-- Liste des utilisateurs récents -->
      <div class="col-span-full bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Utilisateurs Récents</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Utilisateur
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rôle
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="user in recentUsers" :key="user.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <img 
                      :src="user.avatar" 
                      :alt="user.name"
                      class="h-8 w-8 rounded-full"
                    />
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                      <div class="text-sm text-gray-500">{{ user.email }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="text-sm text-gray-900">{{ user.role }}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span 
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    :class="{
                      'bg-green-100 text-green-800': user.status === 'Actif',
                      'bg-yellow-100 text-yellow-800': user.status === 'En attente',
                      'bg-red-100 text-red-800': user.status === 'Inactif'
                    }"
                  >
                    {{ user.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button class="text-primary hover:text-primary/90 mr-2">
                    Éditer
                  </button>
                  <button class="text-red-600 hover:text-red-700">
                    Supprimer
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const recentUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/32',
    role: 'Utilisateur',
    status: 'Actif'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://via.placeholder.com/32',
    role: 'Admin',
    status: 'Actif'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    avatar: 'https://via.placeholder.com/32',
    role: 'Utilisateur',
    status: 'En attente'
  }
];
</script>