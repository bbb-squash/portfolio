<script setup lang="ts">
import { snsItems } from '@/constants/constant'
import Message from '@/components/Message.vue'
</script>
<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1 class="text-primary font-weight-bold mb-4">Contact</h1>
        <v-divider />
      </v-col>
    </v-row>
    <message :sns-items="snsItems" />
  </v-container>
</template>
