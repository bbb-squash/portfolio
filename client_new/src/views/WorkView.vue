<script setup lang="ts">
import { skillItems, projectItems } from '@/constants/constant'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
</script>
<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1 class="text-primary font-weight-bold mb-4">Work</h1>
        <v-divider />
      </v-col>
    </v-row>
    <skills :skill-items="skillItems" />
    <projects :project-items="projectItems" />
  </v-container>
</template>
