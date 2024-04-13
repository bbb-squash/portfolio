<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>
<template>
  <v-layout>
    <app-header />
    <v-main>
      <router-view />
      <v-footer class="bg-grey-lighten-4">
        <div class="w-100 my-2 text-center">
          <span>{{ new Date().getFullYear() }} — <strong>BBB-SQUASH</strong></span>
        </div>
      </v-footer>
    </v-main>
  </v-layout>
</template>
