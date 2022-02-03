<template>
  <v-app style="background-color: #f5f5f3">
    <v-header :contents="contents"></v-header>
    <v-main style="padding: 25px 0px 0px;">
      <v-container class="main-contents">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/modules/Header';
import AboutMe from '@/components/pages/AboutMe';
import Work from '@/components/pages/Work';

export default {
  name: 'App',

  components: {
    'v-header': Header,
    'v-about-me': AboutMe,
    'v-work': Work,
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
  * {
    font-family: YuGothic, "游ゴシック Medium", 游ゴシック, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳ Ｐゴシック", sans-serif !important;
  }
  .main-contents {
    background-color: white;
    padding-top: 30px;
  }
  .content-text {
    font-size: 1.125rem;
  }

  .v-application p {
    margin-bottom: 0px;
  }

</style>