<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
</script>
<template>
  <v-layout>
    <app-header />
    <v-main>
      <router-view />
      <v-footer class="bg-grey-lighten-4">
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4 text-primary" cols="12">
            {{ new Date().getFullYear() }} — <strong>BBB-SQUASH</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
  </v-layout>
</template>
