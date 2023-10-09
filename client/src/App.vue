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
  /* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@500&display=swap'); */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=PT+Sans:wght@700&family=Roboto:wght@500&display=swap');
  #app {
    /* font-family: 'PT Sans', 'Noto Sans JP', sans-serif; */
    font-family: "BIZ UDPGothic", "Meiryo UI", Meiryo, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 1rem;
    /* line-height: 1.8; */
    /* letter-spacing: .8px; */
  }

  .page-title {
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em;
  }
  .main-contents {
    padding-top: 30px;
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