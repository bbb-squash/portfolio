<template>
  <v-app>
    <v-header :contents="contents"></v-header>
    <v-main>
      <v-container 
        fluid
        pa-0>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer :contents="contents"></v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/modules/Header';
import Footer from '@/components/modules/Footer';

export default {
  name: 'App',

  components: {
    'v-header': Header,
    'v-footer': Footer
  },

  data: () => ({
    contents: [
      {name: 'Home', icon: 'mdi-home', path_name: 'top' },
      {name: 'About Me', icon: 'mdi-human-handsup', path_name: 'about' },
      {name: 'Work', icon: 'mdi-tools', path_name: 'work' },
      {name: 'Contact', icon: 'mdi-pin', path_name: 'contact' }
    ],
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
    /* color: var(--v-font-accent-base); */
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

  .font-accent {
    color: var(--v-font-accent-base);
  }

  h1.text-h3 {
    color: #044c64;
  }

</style>