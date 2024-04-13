<script setup lang="ts">
import { strengthFinderItems, snsItems, historyItems } from '@/constants/constant'
import profile from '@/components/Profile.vue'
import history from '@/components/History.vue'
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1 class="text-primary font-weight-bold mb-4">About Me</h1>
        <v-divider />
      </v-col>
      <profile :strength-finder-items="strengthFinderItems" :sns-items="snsItems" />
      <history :history-items="historyItems" />
    </v-row>
  </v-container>
</template>
