<template>
  <v-app class="app-background-color" :style="style">
    <v-header :contents="contents"></v-header>
    <v-main class="v-main-container">
      <!-- <v-container class="main-contents"> -->
      <v-container 
        fluid
        pa-0>
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
    style: {
      '--color': 'black',
      '--accent-color': '#044c64',
      '--background-color': 'white'
    }
  })
};
</script>

<style>
  #app {
    font-family: "Montserrat","Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif;
    font-size: 14px;
    line-height: 1.8;
    letter-spacing: .8px;
    /* color: #333; */
    color: var(--accent-color);
  }
  /* .header-divider {
    width: 15%;
    margin: 0 auto;
    border: 1px solid;
    background-color: #044c64;
  } */
  .v-main-container {
    padding: 25px 0px 0px !important;
    font-family: "Montserrat","Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans", Meiryo, sans-serif;
  }
  .main-contents {
    /* background-color: white; */
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