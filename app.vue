<template>
  <div>
    <Presentation v-if="presentationStore.shown" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { usePresentationStore } from '~/stores/presentation'

const presentationStore = usePresentationStore()
</script>