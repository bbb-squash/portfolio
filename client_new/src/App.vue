<template>
  <v-layout>
    <v-app-bar flat density="compact" class="text-primary">
      <v-app-bar-title class="font-weight-bold">BBB-SQUASH</v-app-bar-title>
      <v-spacer />
      <v-btn class="font-weight-bold">
        <v-icon color="red" icon="mdi-alert-circle" />
        <v-icon class="mr-1" icon="mdi-heart"></v-icon>
        Home
      </v-btn>
      <v-btn class="font-weight-bold">
        <v-icon color="red" icon="mdi-heart" />
        About Me
      </v-btn>
      <v-btn class="font-weight-bold">
        <v-icon color="red" icon="mdi-dots-vertical" />
        Work
      </v-btn>
      <v-btn class="font-weight-bold">
        <v-icon color="red" icon="mdi-dots-vertical" />
        Contact
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>
