<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Dashboard</h1>
    <div class="bg-white shadow rounded-lg p-6">
      <div v-if="user" class="space-y-4">
        <p class="text-gray-600">Welcome, {{ user.email }}</p>
        <p class="text-gray-600">User ID: {{ user.id }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const { user } = useNhostUser()
</script>