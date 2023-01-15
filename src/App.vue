<template>
  <v-app class="app-background-color">
    <v-header :contents="contents"></v-header>
    <v-main class="v-main-container">
      <v-container class="main-contents">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/modules/Header';

export default {
  name: 'App',

  components: {
    'v-header': Header
  },

  data: () => ({
    contents: [
      {name: 'Home', icon: 'mdi-home', path_name: 'top' },
      {name: 'About Me', icon: 'mdi-human-handsup', path_name: 'about' },
      {name: 'Work', icon: 'mdi-tools', path_name: 'work' },
      {name: 'Message', icon: 'mdi-pin', path_name: 'message' }
    ],
  })
};
</script>

<style>
  .app-background-color {
    background-color: #f5f5f3 !important;
  }
  .header-divider {
    width: 15%;
    margin: 0 auto;
    border: 1px solid;
    background-color: #044c64;
  }
  .v-main-container {
    padding: 25px 0px 0px !important;
  }
  .main-contents {
    background-color: white;
    padding-top: 30px;
    /* max-width: 1903px; */
    min-height: 100%;
  }
  .content-text {
    font-size: 1.125rem;
  }

  h1.text-h3 {
    color: #044c64;
  }

</style>