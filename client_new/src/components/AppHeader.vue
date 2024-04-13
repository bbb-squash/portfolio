<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <v-app-bar flat density="compact" class="text-primary">
    <v-app-bar-title class="font-weight-bold">BBB-SQUASH</v-app-bar-title>
    <v-spacer />
    <v-btn class="font-weight-bold text-capitalize text-body-2" @click="router.push('/')">
      <v-icon class="mr-1" icon="mdi-home"></v-icon>
      Home
    </v-btn>
    <v-btn class="font-weight-bold text-capitalize text-body-2" @click="router.push('/about_me')">
      <v-icon class="mr-1" icon="mdi-account-tie" />
      About Me
    </v-btn>
    <v-btn class="font-weight-bold text-capitalize text-body-2" @click="router.push('/work')">
      <v-icon class="mr-1" icon="mdi-application-brackets" />
      Work
    </v-btn>
    <v-btn class="font-weight-bold text-capitalize text-body-2" @click="router.push('/contact')">
      <v-icon class="mr-1" icon="mdi-tooltip-text-outline" />
      Contact
    </v-btn>
  </v-app-bar>
</template>
